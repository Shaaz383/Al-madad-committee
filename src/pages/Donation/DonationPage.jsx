"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/my-components/Navbar";
import ProfileDialog from "@/my-components/ProfileDialog";
import CauseCard from "@/pages/Donation/components/CauseCard";

const causes = [
  {
    id: 1,
    image:
      "https://borgenproject.org/wp-content/uploads/188138516_da49d74160_o-e1620997360746.jpg",
    name: "Helping the Homeless",
    description:
      "We are collecting donations to support homeless shelters in our community. Every contribution helps provide food, shelter, and essential items.",
    targetAmount: 5000,
    raisedAmount: 2200,
    donationHistory: [
      { id: 1, name: "John Doe", amount: "₹100", date: "2024-11-26" },
      { id: 2, name: "Jane Smith", amount: "₹150", date: "2024-11-25" },
      { id: 3, name: "Emily Johnson", amount: "₹200", date: "2024-11-24" },
    ],
  },
  // Add other causes here...
];

const DonationPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => setIsDialogOpen(true);

  const handleLogout = () => {
    console.log("User Logged Out");
    setIsDialogOpen(false);
    // Implement logout logic here
  };

  const handleGoToProfile = () => {
    navigate("/profile");
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-bgGreenGradient">
      {/* Navbar */}
      <Navbar handleProfileClick={handleProfileClick} />

      {/* Main Content */}
      <div className="mt-20 px-4 py-8">
        <h1 className="text-3xl font-semibold text-center  mb-6 text-whiteColor">
          Donation Causes
        </h1>

        {/* Render Cause Cards */}
        {causes.map((cause) => (
          <CauseCard key={cause.id} cause={cause} />
        ))}
      </div>

      {/* Profile Dialog */}
      <ProfileDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        handleLogout={handleLogout}
        handleGoToProfile={handleGoToProfile}
      />
    </div>
  );
};

export default DonationPage;
