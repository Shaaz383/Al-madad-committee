import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-whiteColor rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4 text-primaryGreen">Contact us</h2>

      <form className="space-y-4">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="text-sm text-primaryGreen font-medium">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryGreen"
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="text-sm text-primaryGreen font-medium">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryGreen"
          />
        </div>

        {/* Message Input */}
        <div>
          <label
            htmlFor="message"
            className="text-sm text-gray-700 font-medium"
          >
            Your Message
          </label>
          <textarea
            id="message"
            placeholder="Enter your message"
            rows="4"
            className="w-full px-4 py-2 mt-2 border border-primaryGreen rounded-md focus:outline-none focus:ring-2 focus:ring-primaryGreen"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-primaryGreen text-white rounded-md hover:bg-green-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
