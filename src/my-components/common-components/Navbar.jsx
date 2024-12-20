import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ handleProfileClick }) => {
  return (
    <div className="fixed top-0 left-0  w-full shadow-lg rounded z-10">
      <div className="w-full flex items-center justify-between  pt-4 pb-2 px-2 bg-whiteColor">
        <div className="w-1/4 h-1/4">
          <Link to="/">
            <img
              src="../../../logo 2.png"
              alt="Logo"
              className="w-full h-full cursor-pointer" // Cursor indicates it's clickable
            />
          </Link>
        </div>

        <div>
          <h1 className="text-center text-[21px] text-primaryGreen">
            Hello, <span className="font-bold text-lightGreen">Username</span>{" "}
            🖐️
          </h1>
        </div>
        <div
          className="h-10 w-10 bg-black rounded-full overflow-hidden flex items-center justify-center mr-4 cursor-pointer"
          onClick={handleProfileClick}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
