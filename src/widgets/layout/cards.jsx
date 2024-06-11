import React from 'react';

const Cards = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 text-center">
      <div className="mb-4">
        <img src={image} alt={title} className="mx-auto h-16 w-16 sm:h-20 sm:w-20" />
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
};

export default Cards;