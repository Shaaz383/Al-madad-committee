import React from "react";

const DonationHistory = ({ donationHistory }) => {
  return (
    <div className="bg-whiteColor rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4 text-primaryGreen">Donation History</h2>
      <div className="space-y-4">
        {donationHistory.map((donation) => (
          <div
            key={donation.id}
            className="flex justify-between items-center border-b py-2"
          >
            <div>
              <p className="text-sm font-medium text-secondary">{donation.cause}</p>
              <p className="text-xs text-primaryGreen">{donation.date}</p>
            </div>
            <p className="text-lightGreen font-semibold">₹{donation.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationHistory;
