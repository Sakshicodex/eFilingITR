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
      alert('Data saved to Google Sheets');
      setFormData(initialFormData); // Reset form fields
    } catch (error) {
      console.error('Error saving data to Google Sheets', error);
      alert('Error saving data to Google Sheets');
    }
  };

  return (
    <div className="bg-hoverBackground rounded-lg p-6 shadow-md max-w-md mx-auto w-full sm:w-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Register for efilingITR</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#600170] bg-white"
            style={{ color: '#000000' }}
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="phone"
            placeholder="Your Mobile Number"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#600170] bg-white"
            style={{ color: '#000000' }}
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <select
            name="financialYear"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#600170] bg-white"
            style={{ color: '#808080' }}
            value={formData.financialYear}
            onChange={handleChange}
          >
            <option value="" disabled style={{ color: '#000000' }}>
              Select Financial Year
            </option>
            <option value="2024-2025" style={{ color: '#000000' }}>AY. 2024 - 2025 (FY. 1ST APRIL 2023 TO 31ST MARCH 2024)</option>
            <option value="2023-2024" style={{ color: '#000000' }}>AY. 2023 - 2024 (FY. 1ST APRIL 2022 TO 31ST MARCH 2023)</option>
          </select>
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#600170] bg-white"
            style={{ color: '#000000' }}
            value={formData.email}
            onChange={handleChange}
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
    </div>
  );
};

export default FreeDemoForm;
