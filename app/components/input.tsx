import React from "react";

interface InputProps {
  type: string;
  placeholder: string;
  label?: string; // Optional label prop
  icon?: string; // Optional icon prop
}

const Input: React.FC<InputProps> = ({ type, placeholder, label, icon }) => {
  return (
    <div className="mb-4 flex items-center">
      {/* Render the icon if it is provided */}
      <img className="w-5 h-5 mr-2" src={icon} alt="icon" />
      {/* Conditionally render the label if it is provided */}
      {label && (
        <label className="mr-2" htmlFor={placeholder}>
          {label}
        </label>
      )}
      <input
        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={placeholder}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;


