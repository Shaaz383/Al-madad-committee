import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Signup = () => {
  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here
    alert("Signup functionality is not yet implemented");
  };

  return (
    <div className="min-h-screen bg-bgGreenGradient flex flex-col justify-center items-center p-4">
      {/* <img src="../../../logo 2.png" alt="Logo" className="w-2/4 h-2/4" /> */}

      <div className="w-full max-w-sm bg-whiteColor p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-primaryGreen">
          Sign Up
        </h1>

        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <Label htmlFor="name" className="block mb-2 text-sm font-medium text-primaryGreen">
              Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full"
              required
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="email" className="block mb-2 text-sm font-medium text-primaryGreen">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full"
              required
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="mobile" className="block mb-2 text-sm font-medium text-primaryGreen">
              Mobile Number
            </Label>
            <Input
              id="mobile"
              type="tel"
              placeholder="Enter your mobile number"
              className="w-full"
              required
            />
          </div>

          <div className="mb-4">
            <Label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-primaryGreen"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Create a password"
              className="w-full"
              required
            />
          </div>

          <Button type="submit" className="w-full bg-primaryGreen text-whiteColor">
            Sign Up
          </Button>
        </form>

        <p className="text-sm text-center text-secondary mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-secondary font-semibold hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
