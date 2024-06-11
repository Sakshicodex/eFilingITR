import React, { useRef } from "react";
import FreeDemoForm from '../widgets/layout/form';

import Cards from '../widgets/layout/cards';
import StyledFeatureCard from '../widgets/layout/stepscard';

import { Carousel } from "flowbite-react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard } from "@/widgets/cards";
import { featuresData, contactData } from "@/data";

const cardData = [
  {
    image: '/img/notes.png', // Replace with the actual image paths
    title: 'Fill Your Basic KYC Information',
    description: 'Fill Your Basic Details Like Name, DOB, PAN No, Aadhar No etc.',
  },
  {
    image: '/img/upload.png',
    title: 'Upload Required Documents for ITR Filing',
    description: 'Aadhar Card, Pan Card, Form-16, Salary Slips, Bank Statement, etc.',
  },
  {
    image: '/img/service.png',
    title: 'Get Service Request Number',
    description: 'SRN Number is generated after Submit Your Income Tax Return.',
  },
  {
    image: '/img/expert.png',
    title: 'Our Expert will Contact You',
    description: 'After Confirm Your Order Our Expert Team Contact to You.',
  },
  {
    image: '/img/subm.png',
    title: 'ITR-V Submission',
    description: 'Our Experts Filing Your Income Tax Return On e-filing Website & Send You Acknowledgement.',
  },
  {
    image: '/img/verify.png',
    title: 'E-Verify Return',
    description: 'After Successfully Filed Your ITR Our Representative Help to You For E-Verify Your Income Tax Return.',
  },
];


const stepsData = [
  {
    step: 'Step 01',
    title: 'Fill Up Application Form',
    description: 'Fill Up Application Form provided by eFilingITR.com',
    bgColor: 'bg-white',
    textColor: 'text-black',
  },
  {
    step: 'Step 02',
    title: 'Executive will Process Application',
    description: 'The executive will process the application promptly and efficiently.',
    bgColor: 'bg-[#600170]',
    textColor: 'text-white',
  },
  {
    step: 'Step 03',
    title: 'Pay Online Payment',
    description: 'Online payment is an easy and convenient way to pay for services.',
    bgColor: 'bg-white',
    textColor: 'text-black',
  },
  {
    step: 'Step 04',
    title: 'Get Confirmation on Mail',
    description: 'Confirmation e-mail to verify your application has been processed.',
    bgColor: 'bg-[#600170]',
    textColor: 'text-white',
  },
];

const documents = [
  "Aadhar Number",
  "PAN Card Number",
  "Bank Account details",
  "Form 16",
  "Income Tax e-filing Profile Details",
  "Fixed deposit statements",
  "Rent receipts for claiming HRA",
  "Bank Statement",
  "Capital Gain Statements",
  "Proof of investment",
  "Proof of home loan interest, if any",
  "Property Sale/Purchase Details, if any",
  "GST Registration Number Details, if any",
];

const splitDocuments = (docs, columns) => {
  const perColumn = Math.ceil(docs.length / columns);
  return new Array(columns).fill().map((_, colIndex) =>
    docs.slice(colIndex * perColumn, (colIndex + 1) * perColumn)
  );
};


export function Home() {
  const formRef = useRef(null);
  const columns = splitDocuments(documents, 3);
  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="relative flex flex-col min-h-screen content-center items-center justify-center pt-16 pb-32 overflow-y-auto">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-[#600170]/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
            <div className="w-full lg:w-6/12 text-center lg:text-left mb-10 lg:mb-0">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black whitespace-pre-wrap break-words text-4xl sm:text-5xl lg:text-6xl"
              >
                Easily File Your Tax Return with EfilingITR -
                <span className="ml-2 text-hoverBackground">Your Expert ITR Filing Partner</span>
              </Typography>
            </div>
            <div className="w-full lg:w-6/12 mt-10 lg:mt-0" ref={formRef}>
              <FreeDemoForm />
            </div>
          </div>
        </div>
      </div>

      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ image, title, description }) => (
              <FeatureCard
                key={title}
                image={image}
                title={title}
                description={description}
              />
            ))}
          </div>
          <div className="text-center mt-8 md:mt-12 lg:mt-16">
          <Typography variant="h5" className="font-extrabold text-blue-gray-900">
  Prices Starting From: <span style={{ color: '#600170', fontWeight: 'bold', fontSize: '2rem' }}>₹ 499/-</span>(plus applicable GST) Per Return*
</Typography>

          </div>
        </div>
      </section>

      <section className="bg-customBackground py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold">
              <span className="text-[#600170]">e-File ITR</span> - Online with your Expert
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cardData.map(({ image, title, description }) => (
              <Cards
                key={title}
                image={image}
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="mt-12 md:mt-32 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-7/12 lg:w-5/12 mx-auto px-4 mb-12 md:mb-0">
              <Typography variant="h3" className="mb-3 font-bold text-2xl sm:text-3xl" color="blue-gray">
                <span className="text-[#600170]">Income Tax Return - Concept</span>
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500 text-base sm:text-lg">
              Income tax is a levy imposed and collected by the Central Government on an individual's annual earnings. This tax is computed at designated rates based on a person's total yearly income and is remitted to the Central Government. The regulations concerning income tax are outlined in the Income-tax Act of 1961.
                <br />
                <br />
                An Income Tax (IT) return is a form or document used to report income and calculate the tax owed to the Income Tax Department of India. Typically formatted as a worksheet, the return includes sections to detail income figures and compute the tax liability.
                <br />
                <br />
                According to the law, individuals or businesses that receive income from various sources such as wages, profits, interest, capital gains, or other means must file these forms annually.
              </Typography>
              <Typography variant="h5" color="blue-gray" className="mb-2 font-bold text-xl sm:text-2xl">
                Advantages of  Tax Filing
              </Typography>
              <ul className="list-inside list-disc text-blue-gray-500 text-base sm:text-lg">
    <li>Improves your chances of getting a home loan.</li>
    <li>Credit card companies usually need proof of tax returns before giving you a card.</li>
    <li>Keeping income records with the tax department makes future transactions simpler and less stressful.</li>
    <li>Filing tax returns shows you are a responsible and aware citizen of India.</li>
    <li>Speeds up visa processing.</li>
    <li>Allows you to claim a refund for excess tax payments.</li>
</ul>
            </div>
            <div className="w-full md:w-5/12 lg:w-4/12 mx-auto px-4 mt-12 md:mt-0 animate-slide-in-right" style={{ animation: "slide-in-right 1s ease-out" }}>
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56 sm:h-64">
                  <img alt="Card Image" src="/img/fill.png" className="h-full w-full" />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" className="text-[#600170] mb-3 mt-2 font-bold text-xl sm:text-2xl">
                    Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500 text-base sm:text-lg">
                    Experience seamless and accurate income tax filing with eFilingITR.com. Our expert team is dedicated to providing reliable and efficient services tailored to your needs.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-customBackground py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-left mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-customPurple">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stepsData.map(({ step, title, description, bgColor, textColor }) => (
              <StyledFeatureCard
                key={step}
                step={step}
                title={title}
                description={description}
                bgColor={bgColor}
                textColor={textColor}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="text-left mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            <span className="text-[#600170]">Documents Required</span> for Income Tax eFiling
          </h2>
          <p className="text-gray-700 mt-4 text-base sm:text-lg">
            Do you want to file your income tax returns but don't know what documents you need? Filing income tax returns can be a daunting task, but it doesn't have to be.
            Knowing what documents you need to file your income tax returns can help make the process much smoother. We will discuss the documents required for income tax eFiling and how to make sure you have everything you need.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {documents.map((doc, index) => (
            <ul key={index} className="list-disc list-inside space-y-2 sm:space-y-3">
              <li className="text-sm sm:text-base">{doc}</li>
            </ul>
          ))}
        </div>
      </div>
    </section>

      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-customBackground">
  <div className="container mx-auto">
    <PageTitle heading="Income Tax e-Filing Services">
      Simplify your tax season with our expert income tax filing services. Maximize your returns effortlessly with our secure, user-friendly platform. Trust <span style={{ color: '#600170' }}>efilingITR.com</span> for accurate and hassle-free tax solutions.
    </PageTitle>
    <div className="mx-auto mt-12 sm:mt-16 md:mt-20 mb-24 sm:mb-32 md:mb-40 lg:mb-48 grid max-w-5xl grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
      {contactData.map((item, index) => (
        <Card
          key={item.title}
          color="transparent"
          shadow={false}
          className={`text-center text-blue-gray-900 ${
            item.title === 'ITR-7'
              ? 'md:col-span-2 lg:col-span-1 lg:row-start-3 lg:col-start-2'
              : 'md:col-span-1 lg:col-span-1'
          }`}
        >
          <div className="mx-auto mb-4 sm:mb-6 grid h-20 w-20 sm:h-24 sm:w-24 place-items-center bg-blue-gray-900 shadow-lg shadow-gray-500/20 rounded-full overflow-hidden border-4 border-[#600170]">
            <img src={item.image} alt={item.title} className="w-full h-full hover:scale-110 object-cover" />
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {item.title}
          </Typography>
          <Typography className="font-normal text-blue-gray-500 text-sm sm:text-base">
            {item.description}
          </Typography>
        </Card>
      ))}
    </div>
  </div>
</section>

      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl sm:text-4xl font-bold text-black">
              File income tax returns with eFilingITR
            </h1>
            <p className="mt-4 text-blue-gray-900 text-base sm:text-lg">
              You only need to submit the document (as mentioned above) and one of our experts will get in touch with you for filing ITR. We provide the simplest way to file your ITR in a cost-effective manner across the internet.
            </p>
            <button onClick={scrollToForm} className="group mt-6 sm:mt-8 bg-[#600170] hover:bg-[#E6BFEB] text-white hover:text-black font-bold py-2 px-4 rounded shadow-lg transition duration-300">
              Register Now
            </button>
          </div>
          <div className="md:w-1/2">
            <img src="/img/income.jpg" alt="Support" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
        </div>
      </section>

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
