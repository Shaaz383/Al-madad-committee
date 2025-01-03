import React, { useState } from "react";
import ProfileSection from "@/pages/Profile/components/ProfileSection";
import DonationHistory from "@/pages/Profile/components/DonationHistory";
import EditProfileModal from "@/pages/Profile/components/EditProfileModal";
import LogoutButton from "@/pages/Profile/components/LogoutButton";
import Navbar from "@/components/ui/common-components/Navbar";
import ProfileDialog from "@/components/ui/common-components/ProfileDialog";

const ProfilePage = () => {
  // State for profile data
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [mobileNumber, setMobileNumber] = useState("+1234567890");

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleProfileClick = () => setIsDialogOpen(true);

  // Modal visibility
  const [showModal, setShowModal] = useState(false);

  const handleGoToProfile = () => {
    navigate("/profile");
    setIsDialogOpen(false);
  };

  // Donation history data
  const donationHistory = [
    { id: 1, cause: "Helping the Homeless", amount: 100, date: "2024-11-26" },
    {
      id: 2,
      cause: "Support Education for All",
      amount: 150,
      date: "2024-11-25",
    },
    { id: 3, cause: "Clean Water for All", amount: 200, date: "2024-11-24" },
  ];

  // Total donations
  const totalDonated = donationHistory.reduce(
    (total, donation) => total + donation.amount,
    0
  );

  // Handle save changes
  const handleSaveChanges = (
    updatedName,
    updatedEmail,
    updatedMobileNumber
  ) => {
    setName(updatedName);
    setEmail(updatedEmail);
    setMobileNumber(updatedMobileNumber);
    setShowModal(false);
  };

  // Handle logout
  const handleLogout = () => {
    alert("Logged out!");
    // Add your logout logic here
  };

  return (
    <div className="min-h-screen bg-bgGreenGradient p-4">
      <Navbar handleProfileClick={handleProfileClick} />

      <h1 className="text-3xl font-bold text-center mt-20 py-8 text-whiteColor">
        Profile
      </h1>

      {/* Profile Section */}
      <ProfileSection
        name={name}
        email={email}
        mobileNumber={mobileNumber}
        totalDonated={totalDonated}
        onEdit={() => setShowModal(true)}
      />

      {/* Donation History */}
      <DonationHistory donationHistory={donationHistory} />

      {/* Logout Button */}
      <LogoutButton onLogout={handleLogout} />

      {/* Edit Profile Modal */}
      {showModal && (
        <EditProfileModal
          name={name}
          email={email}
          mobileNumber={mobileNumber}
          onSave={handleSaveChanges}
          onClose={() => setShowModal(false)}
        />
      )}

      <ProfileDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        handleLogout={handleLogout}
        handleGoToProfile={handleGoToProfile}
      />
    </div>
  );
};

export default ProfilePage;
