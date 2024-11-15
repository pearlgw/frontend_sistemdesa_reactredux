import React from "react";

const InputAtom = ({ type, id, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      id={id}
      className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputAtom;
