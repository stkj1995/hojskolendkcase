import { useState } from 'react';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Burger Icon */}
      <button onClick={toggleMenu} aria-label="Toggle menu" className="lg:hidden p-2 focus:outline-none">
        <div className="space-y-1">
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
              isOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
              isOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          ></span>
        </div>
      </button>

      {/* Menu */}
      <div
        className={`absolute top-12 right-0 bg-gray-100 p-4 rounded shadow-lg lg:static lg:bg-transparent lg:p-0 lg:shadow-none lg:flex lg:space-x-6 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="space-y-4 lg:space-y-0 lg:flex lg:items-center lg:space-x-6">
          <li>
            <a href="/" className="block text-black hover:text-gray-700">Hjem</a>
          </li>
          <li>
            <a href="/about" className="block text-black hover:text-gray-700">Om os</a>
          </li>
          <li>
            <a href="/services" className="block text-black hover:text-gray-700">Tjenester</a>
          </li>
          <li>
            <a href="/contact" className="block text-black hover:text-gray-700">Kontakt</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
