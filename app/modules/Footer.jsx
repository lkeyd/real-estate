import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-2">
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-x-1">
          {/* Your logo or brand */}
          <img
            src="/images/iconwhite.svg"
            alt="Logo"
            className="h-16 w-auto"
          />
          <p className="text-2xl pr-0 md:pr-4">Prime Property</p>
          <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-sm hover:text-gray-300">About</a>
          <a href="#" className="text-sm hover:text-gray-300">Services</a>
          <a href="#" className="text-sm hover:text-gray-300">Contact</a>
        </div>
      </div>
    </footer>
  );
};

