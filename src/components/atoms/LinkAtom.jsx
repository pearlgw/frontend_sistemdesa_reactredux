/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const LinkAtom = ({ icon: Icon, text, to, classname }) => {
  return (
    <Link
      to={to}
      className={`flex items-center p-2 text-gray-200 rounded-lg hover:bg-gray-700 group ${classname}`}
    >
      {Icon && (
        <Icon className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-200" />
      )}
      <span className="ms-3">{text}</span>
    </Link>
  );
};

export default LinkAtom;
