import React from "react";

const LabelAtom = ({ htmlFor, label }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-semibold text-gray-600"
    >
      {label}
    </label>
  );
};

export default LabelAtom;
