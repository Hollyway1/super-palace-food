import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
<div className="container mx-auto px-6 flex flex-col gap-6 md:flex-row items-center justify-between">
        {/* Footer Info */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-lg font-semibold">Super Palace Food</h2>
          <p className="text-sm text-gray-300">Delicious Nigerian dishes delivered to you</p>
          <p className="text-sm text-gray-400 mt-1">© 2025 All rights reserved</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-red-600">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-red-600">
            <FaWhatsapp />
          </a>
          <a href="#" className="hover:text-red-600">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
