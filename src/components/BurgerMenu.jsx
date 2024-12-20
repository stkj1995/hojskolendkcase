import React, { useState } from "react";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu state when button is clicked
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button for toggling the menu */}
      <button onClick={toggleMenu} aria-label="Toggle menu" className="p-2">
        <div className="space-y-1">
          {/* Top bar */}
          <span className={`block w-6 h-1 bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
          {/* Middle bar (hidden when open) */}
          <span className={`block w-6 h-1 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
          {/* Bottom bar */}
          <span className={`block w-6 h-1 bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </div>
      </button>

      {/* Burger menu overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen flex items-center justify-center ${isOpen ? "block" : "hidden"} text-white uppercase hover:underline-offset-4 transition-all duration-300`}
        style={{
          backgroundColor: "#7794B0",
          zIndex: 9999, // Ensures the menu is on top of other elements
          position: "fixed", // Keeps it fixed in place over the page
          top: 0, // Ensures it's at the top of the page
          left: 0, // Aligns to the left
          right: 0, // Fills the whole width
          bottom: 0, // Fills the whole height
        }}
      >
        {/* Logo */}
        <div className="absolute top-8 left-8 z-20">
          <a href="/" className="block group">
            <img src="/logo.svg" alt="Logo" className="h-16 w-auto md:h-24" />
          </a>
        </div>

        <ul className="text-center">
          <li>
            <a href="/card" className="text-white uppercase font-black text-3xl hover:text-white hover:underline hover:underline-offset-4">
              Ophold og priser
            </a>
            <br /> <br />
            <a href="/card" className="text-white uppercase font-black text-3xl hover:text-white hover:underline hover:underline-offset-4">
              Tilmeld dig ophold
            </a>
          </li>
        </ul>

        {/* Tilmeld Button */}
        <div className="absolute top-12 right-20 z-20">
          <a href="/card" className="block text-center bg-[#FF6E00] text-white hover:text-white hover:underline text-sm font-bold py-3 px-6 rounded-xl uppercase transition-all duration-300 hover:bg-orange-600 hover:scale-105">
            Tilmeld
          </a>
        </div>

        {/* Close button (X) in the top-right corner */}
        <button onClick={toggleMenu} aria-label="Close menu" className="absolute top-9 right-7 text-white text-5xl">
          &times;
        </button>
      </div>
    </div>
  );
};

export default BurgerMenu;
