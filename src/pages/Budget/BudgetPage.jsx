"use client";

import React, { useState } from "react";
import Navbar from "@/my-components/Navbar";
import SummarySection from "@/pages/Budget/components/SummarySection";
import ChartSection from "@/pages/Budget/components/ChartSection";
import TransactionHistory from "@/pages/Budget/components/TransactionHistory";
import ProfileDialog from "@/my-components/ProfileDialog";

const transactions = [
  { category: "Rent", amount: 5000, date: "2024-11-20" },
  { category: "Food", amount: 2000, date: "2024-11-18" },
  { category: "Utilities", amount: 1000, date: "2024-11-15" },
  { category: "Entertainment", amount: 500, date: "2024-11-10" },
];

const BudgetPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
    <div className="min-h-screen text-[#246EB9] bg-bgGreenGradient">
      <Navbar handleProfileClick={handleProfileClick} />
      <div className="mt-20 px-4 py-8">
        <h1 className="text-3xl font-semibold text-center text-white mb-6">
          Budget Overview
        </h1>
        <SummarySection />
        <ChartSection />
        <TransactionHistory transactions={transactions} />
      </div>
      <ProfileDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        handleLogout={handleLogout}
        handleGoToProfile={handleGoToProfile}
      />
    </div>
  );
};

export default BudgetPage;
