"use client";

import React from "react";

const SummarySection = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
    <div className="bg-lightGreen text-whiteColor p-4 rounded-lg shadow-md">
      <h2 className="text-center text-sm font-medium">Total Income</h2>
      <p className="text-center text-xl font-bold text-whiteColor">₹10,000</p>
    </div>
    <div className="bg-tomato text-whiteColor p-4 rounded-lg shadow-md">
      <h2 className="text-center text-sm font-medium">Total Expenses</h2>
      <p className="text-center text-xl font-bold text-whiteColor">₹7,000</p>
    </div>
    <div className="bg-secondary text-whiteColor p-4 rounded-lg shadow-md">
      <h2 className="text-center text-sm font-medium">Remaining</h2>
      <p className="text-center text-xl font-bold text-whiteColor">₹3,000</p>
    </div>
  </div>
);

export default SummarySection;
