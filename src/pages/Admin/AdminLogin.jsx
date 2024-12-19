import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    // Perform admin authentication here
    const isAdminAuthenticated = true; // Replace with actual admin authentication logic
    if (isAdminAuthenticated) {
      navigate("/admin-dashboard"); // Redirect to admin dashboard after successful login
    } else {
      alert("Invalid admin credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-bgGreenGradient flex flex-col justify-center items-center p-4">
      {/* <img src="../../../logo 2.png" alt="Logo" className="w-2/4 h-2/4 mb-6" /> */}

      <div className="w-full max-w-md bg-whiteColor p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-lightGreen">
          Admin Login
        </h1>
        <form onSubmit={handleAdminLogin}>
          <div className="mb-4">
            <Label
              htmlFor="admin-email"
              className="block mb-2 text-sm font-medium text-primaryGreen"
            >
              Admin Email
            </Label>
            <Input
              id="admin-email"
              type="email"
              placeholder="Enter admin email"
              className="w-full"
              required
            />
          </div>
          <div className="mb-4">
            <Label
              htmlFor="admin-password"
              className="block mb-2 text-sm font-medium text-primaryGreen"
            >
              Admin Password
            </Label>
            <Input
              id="admin-password"
              type="password"
              placeholder="Enter admin password"
              className="w-full"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-lightGreen text-white">
            Login as Admin
          </Button>
        </form>
        <div className="text-center mt-2">
          <Button
            type="button"
            className="w-full bg-gray-700 text-white mt-2"
            onClick={() => navigate("/")}
          >
            Back to User Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
