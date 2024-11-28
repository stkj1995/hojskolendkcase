import React, { useState } from 'react';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu} aria-label="Toggle menu" className="p-2 bg-white">
        <div className="space-y-1">
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
          ></span>
        </div>
      </button>

      <div
        className={`absolute top-12 right-0 bg-gray-100 p-4 rounded shadow-lg ${isOpen ? 'block' : 'hidden'}`}
      >
        <ul>
          <li><a href="/" className="text-black">Home</a></li>
          <li><a href="/about" className="text-black">About</a></li>
          <li><a href="/services" className="text-black">Services</a></li>
          <li><a href="/contact" className="text-black">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
