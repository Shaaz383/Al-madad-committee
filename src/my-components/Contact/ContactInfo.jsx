import React from "react";

const ContactInfo = () => {
  return (
    <div className="bg-whiteColor rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4 text-primaryGreen">
        Community Contact Information
      </h2>

      {/* Email */}
      <div className="mb-4">
        <p className="text-sm text-primaryGreen font-medium">Email</p>
        <p className="text-sm text-blue-500">community@example.com</p>
      </div>

      {/* Phone */}
      <div className="mb-4">
        <p className="text-sm text-primaryGreen font-medium">Phone</p>
        <p className="text-sm text-blue-500">+123 456 7890</p>
      </div>

      {/* Address */}
      <div className="mb-4">
        <p className="text-sm text-primaryGreen font-medium">Address</p>
        <p className="text-sm text-primaryGreen">
          1234 Community St, City, Country
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
