import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Amar Karande</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <li>
            <a href="#home" className="hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-600">
              Skills
            </a>
          </li>

          <li>
            <a href="#project" className="hover:text-blue-600">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div
          className="md:hidden text-2xl text-gray-800 cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-gray-50 border-t border-gray-200">
          <a href="#home" className="block text-gray-800 hover:text-blue-600">
            Home
          </a>
          <a href="#about" className="block text-gray-800 hover:text-blue-600">
            About
          </a>
          <a href="#skills" className="block text-gray-800 hover:text-blue-600">
            Skills
          </a>

          <a
            href="#projects"
            className="block text-gray-800 hover:text-blue-600"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block text-gray-800 hover:text-blue-600"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
