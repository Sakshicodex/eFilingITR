import express from 'express';
import { google } from 'googleapis';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import axios from 'axios';
import FormData from 'form-data';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// Resolve the __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const transporter = nodemailer.createTransport({
  host: 'smtpout.secureserver.net', // Corrected SMTP server for GoDaddy
  port: 465, // Use port 465 for SSL
  secure: true, // true for port 465
  auth: {
    user: process.env.GMAIL_USER, // replace with your GoDaddy email
    pass: process.env.GMAIL_PASS, // replace with your GoDaddy email password (use environment variables for better security)
  },
});

app.post('/submit', async (req, res) => {
  const { name, phone, financialYear, email } = req.body;

  try {
    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });
    const spreadsheetId = process.env.SPREADSHEET_ID; // Your Google Sheets ID
    const range = 'Sheet1!A1:D1'; // Update the range to match your sheet

    const request = {
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [[name, phone, financialYear, email]],
      },
    };

    await sheets.spreadsheets.values.append(request);

    const mailOptions = {
      from: process.env.GMAIL_USER, // sender address (should match the authenticated user)
      to: email, // receiver email
      subject: 'Welcome to eFilingITR.com - Your Registration is Successful!',
      text: `Dear ${name},\n\nThank you for registering with eFilingITR.com!.\n\nWe are thrilled to have you on board and look forward to assisting you with all your tax filing and financial needs. Your registration has been successfully completed.\n\nHere are the next steps:\n1. Verification: Our team will review your details and verify the information provided.\n2. Get Started: You will receive further instructions on how to get started with our services.\n3. Support: If you have any questions or need immediate assistance, please do not hesitate to contact our support team.\n\nWe are committed to providing you with the best service possible and ensuring a smooth and efficient experience with your tax filing.\n\nThank you for choosing eFilingITR.com. We look forward to serving you.\n\nBest regards,\neFilingITR`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error sending email');
        return;
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    // Send data to CRM
    const crmData = new FormData();
    crmData.append('email', email);
    crmData.append('mobile', phone);
    crmData.append('contact_person', name);
    crmData.append('company_name', ''); // Add appropriate company name if available
    crmData.append('country', 'India'); // Adjust if the country is dynamic
    crmData.append('product_service', ''); // Add appropriate product/service if available
    crmData.append('describe_requirement', 'Testing'); // Adjust as needed
    crmData.append('source', 'efilingitr.com');

    const crmConfig = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://lmsbaba.com/capture/website/88b94a718fd1a72c19332f93adcb7669', 
      headers: { 
        'Cookie': 'ci_session=gdqken562kt883umvqd64f15mcare82t', 
        ...crmData.getHeaders()
      },
      data: crmData,
    };

    const crmResponse = await axios.request(crmConfig);
    console.log('CRM Response:', crmResponse.data);

    if (crmResponse.data && crmResponse.data.status === 'success') {
      res.status(200).send('Data saved to Google Sheets and CRM, and email sent');
    } else {
      console.error('CRM Error:', crmResponse.data);
      res.status(500).send('Error saving data to CRM');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving data to Google Sheets and CRM');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
