import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed text-white top-0 left-0 w-full px-6 sm:px-12 py-4 flex justify-between items-center bg-white/10 backdrop-blur-lg  z-50">
        {/* Logo */}
        <div className="text-2xl font-bold">Animated</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li className="hover:text-pink-400 cursor-pointer">Home</li>
          <li className="hover:text-pink-400 cursor-pointer">About</li>
          <li className="hover:text-pink-400 cursor-pointer">Features</li>
          <li className="hover:text-pink-400 cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-14 left-0 w-full bg-white/10 backdrop-blur-lg border-b border-white/20 py-4 flex flex-col items-center space-y-4 md:hidden">
            <a href="#" className="text-lg hover:text-pink-400">Home</a>
            <a href="#" className="text-lg hover:text-pink-400">About</a>
            <a href="#" className="text-lg hover:text-pink-400">Features</a>
            <a href="#" className="text-lg hover:text-pink-400">Contact</a>
          </div>
        )}
      </nav>
  );
};

export default Navbar;
