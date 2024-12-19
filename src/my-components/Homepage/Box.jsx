import React from "react";

const Box = ({ id, label, path, activeBox, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(id, path)}
      className={`w-[90%] max-w-xs h-24 flex items-center justify-center text-lg font-semibold rounded-xl shadow-md transition-transform transform cursor-pointer hover:scale-105 hover:shadow-lg 
        ${
          activeBox === id
            ? "bg-gradient-to-r from-green-500 to-green-700 text-white"
            : "bg-whiteColor text-gray-800"
        }`}
    >
      <h1>{label}</h1>
    </div>
  );
};

export default Box;
