import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white py-4 px-6 fixed w-full z-20 shadow-lg">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Super Palace Food</h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden mt-4 space-y-4 text-lg">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/menu" onClick={() => setOpen(false)}>Menu</Link>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
