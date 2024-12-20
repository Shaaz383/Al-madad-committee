import BoxesContainer from "@/pages/Homepage/components/BoxContainer";
import Navbar from "@/my-components/Navbar";
import ProfileDialog from "@/my-components/ProfileDialog";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeBox, setActiveBox] = useState(null);
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
  const handleBoxClick = (boxId, path) => {
    setActiveBox(boxId);
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-bgGreenGradient">
      <Navbar handleProfileClick={handleProfileClick} />

      <div className="mt-20 py-8">
        <h1 className="text-center text-3xl text-whiteColor font-bold drop-shadow-lg">
          Welcome to Al-Madad Committee
        </h1>
      </div>

      <BoxesContainer activeBox={activeBox} handleBoxClick={handleBoxClick} />

      <ProfileDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        handleLogout={handleLogout}
        handleGoToProfile={handleGoToProfile}
      />
    </div>
  );
};

export default Homepage;
