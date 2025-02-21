// brew-code/src/components/CoffeeButton.js
import React from "react";

const CoffeeButton = ({ label, onClick }) => {
  return (
    <button
      className="px-4 py-2 bg-brown-600 text-white rounded-lg shadow-md hover:bg-brown-700"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CoffeeButton;

// brew-code/src/components/index.js
export { default as CoffeeButton } from "./CoffeeButton";
