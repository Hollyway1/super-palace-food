import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const whatsappNumber = "2347034917189";
  const message = "Hello, I want to place an order";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <nav className="bg-black/95 backdrop-blur-lg text-white py-5 px-8 fixed w-full z-20 shadow-xl border-b border-white/10 transition-all duration-300">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide hover:text-green-500 transition duration-300">
          Super Palace Food
        </h1>

        {/* Mobile Nav Button */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-lg">

          {/* Animated underline hover */}
          <Link to="/" className="relative group">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link to="/menu" className="relative group">
            Menu
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <a href="#about" className="relative group">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#contact" className="relative group">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 px-5 py-2 rounded-xl font-semibold hover:bg-green-500 transition-all duration-300 shadow-lg hover:scale-105"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-5 space-y-5 text-lg bg-black/95 p-5 rounded-lg shadow-xl animate-slideDown">

          <Link to="/" onClick={() => setOpen(false)} className="block hover:text-green-500 transition">Home</Link>
          <Link to="/menu" onClick={() => setOpen(false)} className="block hover:text-green-500 transition">Menu</Link>
          <a href="#about" onClick={() => setOpen(false)} className="block hover:text-green-500 transition">About</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block hover:text-green-500 transition">Contact</a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-600 px-4 py-2 rounded-xl font-semibold hover:bg-green-500 transition shadow-xl hover:scale-105"
          >
            Order on WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
