"use client";

import ContactForm from "@/pages/Contact/components/ContactForm";
import ContactInfo from "@/pages/Contact/components/ContactInfo";
import Navbar from "@/components/ui/common-components/Navbar";
import ProfileDialog from "@/components/ui/common-components/ProfileDialog";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentInfo from "./components/PaymentInfo";

const ContactPage = () => {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Manage dialog state

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
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-geen-700 to-cyan-700">
      {/* Navbar */}
      <Navbar handleProfileClick={handleProfileClick} />

      {/* Main Content */}
      <div className="py-8 px-4 mt-20">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">
          Contact Us
        </h1>
        <PaymentInfo/>
        <ContactInfo />
        <ContactForm />
      </div>

      {/* Profile Options Dialog */}
      <ProfileDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        handleLogout={handleLogout}
        handleGoToProfile={handleGoToProfile}
      />
    </div>
  );
};

export default ContactPage;
