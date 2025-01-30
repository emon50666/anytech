import { useState } from "react";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white px-6 md:px-12 py-4">
      <div className="flex justify-between items-center">
        {/* Logo on the Left */}
        <a href="#" className="text-2xl font-bold">AYTECH</a>

        {/* Centered Menu + Language Selector */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-6">
          <div className="relative group">
            <button className="hover:text-gray-300 flex items-center">
              Solutions <MdOutlineKeyboardArrowDown className="mt-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition duration-300">
              <a href="#" className="block px-4 py-2 border-b border-gray-200 hover:bg-gray-50">Solutions</a>
              <a href="#" className="block px-4 py-2 border-b border-gray-200 hover:bg-gray-50">AnyCaaS</a>
              <a href="#" className="block px-4 py-2 border-b border-gray-200 hover:bg-gray-50">AnyBaaS</a>
              <a href="#" className="block px-4 py-2 border-b border-gray-200 hover:bg-gray-50">AnyPaaS</a>
            </div>
          </div>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">About Us</a>

          {/* Language Selector */}
          <div className="flex items-center space-x-2 border px-3 py-1 rounded-full">
            <FaGlobe />
            <div className="relative group">
            <button className="hover:text-gray-300 flex items-center">
              EN <MdOutlineKeyboardArrowDown className="mt-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 capitalize text-base bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition duration-300">

              <a href="#" className="block px-4 py-2 border-b border-gray-200 hover:bg-gray-100">ENG</a>
              <a href="#" className="block px-4 py-2 border-b border-gray-200 hover:bg-gray-100">th(Thai)</a>
              <a href="#" className="block px-4 py-2 border-b border-gray-200 hover:bg-gray-100">id(Bahasa Indonesia)</a>
              <a href="#" className="block px-4 py-2 border-b border-gray-200 hover:bg-gray-100">tw
              (Traditional Chinese)</a>
            </div>
          </div>
          </div>
        </div>

        {/* Contact Us Button (Right Side) */}
        <div className="hidden md:flex">
          <a href="#" className="border flex items-center mt-1 gap-2 hover:bg-white border-white hover:text-[#015AC4] px-6 py-2 rounded-sm font-semibold">
            Contact Us <MdKeyboardArrowRight />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          <a href="#" className="hover:text-gray-300">Solutions</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">About Us</a>
          <div className="flex items-center space-x-2 border px-3 py-1 rounded-full">
            <FaGlobe />
            <select className="bg-transparent text-white outline-none w-11 text-center">
              <option value="en" className="text-black">EN</option>
              <option value="fr" className="text-black">FR</option>
              <option value="es" className="text-black">ES</option>
            </select>
          </div>
          <a href="#" className="border hover:text-[#015AC4] px-4 py-2 rounded-full font-semibold">
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
