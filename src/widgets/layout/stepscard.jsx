import React from 'react';

const StyledFeatureCard = ({ step, title, description, bgColor, textColor }) => {
  return (
    <div className={`p-4 sm:p-6 rounded-lg shadow-lg ${bgColor} ${textColor}`}>
      <div className={`mb-2 sm:mb-4 font-bold text-base sm:text-lg ${bgColor === 'bg-[#600170]' ? 'text-white' : 'text-customPurple'}`}>
        {step}
      </div>
      <h3 className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-4 ${textColor}`}>{title}</h3>
      <p className={`text-sm sm:text-base ${textColor}`}>{description}</p>
    </div>
  );
};

export default StyledFeatureCard;