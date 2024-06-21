import React, { useState } from 'react';
import axios from 'axios';

const FreeDemoForm = () => {
  const initialFormData = {
    name: '',
    phone: '',
    financialYear: '',
    email: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://plankton-app-2-vc732.ondigitalocean.app/submit', formData);
      setShowPopup(true);
      setFormData(initialFormData); // Reset form fields
    } catch (error) {
      console.error('Error saving data to Google Sheets', error);
      alert('Error saving data to Google Sheets');
    }
  };

  return (
    <div className="bg-hoverBackground rounded-lg p-4 sm:p-4 shadow-md mx-auto w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Register for efilingITR</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name*"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#600170] bg-white text-black"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            name="phone"
            placeholder="Your Mobile Number*"
            pattern="\d{10}"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#600170] bg-white text-black"
            value={formData.phone}
            onChange={handleChange}
            required
            title="Please enter a valid 10-digit phone number"
          />
        </div>
        <div className="mb-4">
          <select
            name="financialYear"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#600170] bg-white text-gray-800"
            value={formData.financialYear}
            onChange={handleChange}
            required
          >
            <option value="" disabled className="text-black">
              Select Financial Year*
            </option>
            <option value="2024-2025" className="text-black">AY. 2024 - 2025 (FY. 1ST APRIL 2023 TO 31ST MARCH 2024)</option>
            <option value="2023-2024" className="text-black">AY. 2023 - 2024 (FY. 1ST APRIL 2022 TO 31ST MARCH 2023)</option>
          </select>
        </div>
        <div className="mb-4">
        <input
            type="email"
            name="email"
            placeholder="Your Email*"
            pattern="[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,}$"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#600170] bg-white text-black"
            value={formData.email}
            onChange={handleChange}
            required
            title="Please enter a valid email address"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full sm:w-auto px-4 py-2 bg-[#600170] hover:bg-[#E6BFEB] text-white hover:text-black font-bold rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-[#600170]"
          >
            Submit
          </button>
        </div>
      </form>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg mx-auto w-11/12 sm:w-auto md:max-w-md lg:max-w-lg">
            <h3 className="text-lg sm:text-xl font-bold mb-4">Success!</h3>
            <p>Your application is submitted successfully</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-4 py-2 bg-[#600170] text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FreeDemoForm;
