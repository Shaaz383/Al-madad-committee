"use client";

import React, { useState, useEffect } from "react";
import { GiTrophyCup } from "react-icons/gi";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const TopDonors = ({ donors }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? donors.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === donors.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Automatically scrolls every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4 text-whiteColor">Top Donors</h2>
      <div className="relative w-full overflow-hidden">
        <div className="flex items-center justify-between absolute top-3/4 left-0 right-0 transform -translate-y-1/2 px-4 z-10">
          <button
            className=" text-primaryGreen p-2 rounded-full "
            onClick={handlePrev}
          >
            <MdArrowBack size={24} />
          </button>
          <button
            className=" text-primaryGreen p-2 rounded-full "
            onClick={handleNext}
          >
            <MdArrowForward size={24} />
          </button>
        </div>
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {donors.map((donor) => (
            <div
              key={donor.id}
              className="bg-whiteColor relative w-full flex-shrink-0 py-4 hover:scale-105 transition-transform shadow-lg rounded-lg flex flex-col items-center justify-center text-center"
            >
              <img
                src={donor.image}
                alt={donor.name}
                className="w-20 h-20 rounded-full mb-2"
              />
              <div>
                <p
                  className="font-medium text-secondary text-2xl"
                >
                  {donor.name}
                </p>
                <p className="text-xl font-bold text-lightGreen">
                  {donor.amount}
                </p>
              </div>
              <GiTrophyCup className="absolute left-3 top-2 text-[50px] text-primaryGreen" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopDonors;
7