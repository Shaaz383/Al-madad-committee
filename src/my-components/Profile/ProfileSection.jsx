import React from "react";
import { FaPen } from "react-icons/fa";

const ProfileSection = ({
  name,
  email,
  mobileNumber,
  totalDonated,
  onEdit,
}) => {
  return (
    <div className="bg-whiteColor rounded-lg shadow-md p-6 mb-6 flex items-center space-x-4">
      <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
        {/* <span className="text-white text-lg font-semibold">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </span> */}
        <img src="https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/662c092880a6d18c31995e13_66236537d4f46682e079b6ce_Casual%2520Portrait.webp"/>
      </div>
      <div>
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-semibold text-primaryGreen">{name}</h2>
          <FaPen
            className="w-5 h-5 text-lightGreen cursor-pointer"
            onClick={onEdit}
          />
        </div>
        <p className="text-sm text-secondary">{email}</p>
        <p className="text-sm text-secondary">{mobileNumber}</p>
        <div className="text-sm text-primaryGreen mt-2">
          Total Donations:{" "}
          <span className="text-green-600 font-semibold">₹{totalDonated}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
