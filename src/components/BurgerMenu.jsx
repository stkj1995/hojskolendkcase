import React, { useState } from "react";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu} aria-label="Toggle menu" className="p-2 ">
        <div className="space-y-1">
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </div>
      </button>

      <div className={`absolute top-12 right-0 rounded shadow-lg ${isOpen ? "block" : "hidden"} text-white uppercase hover:underline hover:underline-offset-4 transition-all duration-300`} style={{ backgroundColor: "#7794B0" }}>
        <ul>
          <li>
            <a href="/card" className="text-white uppercase justify-center">
              Ophold og priser
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
