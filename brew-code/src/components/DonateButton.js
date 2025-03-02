import React from "react";

const DonateButton = () => {
  const handleClick = () => {
    window.open('https://www.buymeacoffee.com/yourusername', '_blank');
  };

  return (
    <button
      className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700"
      onClick={handleClick}
    >
      Donate
    </button>
  );
};

export default DonateButton;