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
        <p className="text-sm text-blue-500">almadadcommittee@gmail.com</p>
      </div>

      {/* Phone */}
      <div className="mb-4">
        <p className="text-sm text-primaryGreen font-medium">Phone</p>
        <p className="text-sm text-blue-500">+91 9504913668</p>
      </div>

      {/* Address */}
      <div className="mb-4">
        <p className="text-sm text-primaryGreen font-medium">Address</p>
        <p className="text-sm text-primaryGreen">
          Joda Masjid Manpur , Gaya
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
