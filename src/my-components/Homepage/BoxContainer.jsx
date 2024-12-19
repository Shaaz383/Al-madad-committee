import React from "react";
import Box from "./Box";

const BoxesContainer = ({ activeBox, handleBoxClick }) => {
  const boxes = [
    { id: "budget", label: "Budget", path: "/budget" },
    { id: "heroes", label: "Our Heroes", path: "/all-users" },
    { id: "donate", label: "Donate Now", path: "/donation" },
    { id: "contact", label: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 px-4">
      {boxes.map((box) => (
        <Box
          key={box.id}
          id={box.id}
          label={box.label}
          path={box.path}
          activeBox={activeBox}
          handleClick={handleBoxClick}
        />
      ))}
    </div>
  );
};

export default BoxesContainer;
