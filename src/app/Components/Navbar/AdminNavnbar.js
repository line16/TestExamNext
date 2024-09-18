"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-end">
          <div className="flex space-x-4">
            {/* Logo */}
            <div>
              <Link href="/" className="flex items-center py-5 px-2">
                <Image src="/logo.png" width={65} height={65} alt="logo"></Image>
              </Link>
            </div>
          </div>

          {/* Primary Navbar items */}
          <div className="hidden md:flex items-end space-x-1  font-semibold">
            <Link href="/ADMIN" className="py-5 px-3 text-gray-700 hover:text-rose-300">
              AdminHOME
            </Link>
            <Link href="/About" className="py-5 px-3 text-gray-700 hover:text-rose-300">
              AdminABOUT
            </Link>
            <Link href="/Feature" className="py-5 px-3 text-gray-700 hover:text-rose-300">
              AdminFEATURE
            </Link>
            <Link href="/Service" className="py-5 px-3 text-gray-700 hover:text-rose-300">
              AdminSERVICE
            </Link>
            <Link href="/Contact" className="py-5 px-3 text-gray-700 hover:text-rose-300">
              AdminCONTACT
            </Link>
            <Link href="/" className="py-5 px-3 text-gray-700 hover:text-rose-300">BACK TO PUBLIC</Link>
          
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-end">
            <button
              className="mobile-menu-button"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <Link
            href="/"
            className="block py-2 px-4 text-sm hover:bg-gray-200 text-gray-700"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block py-2 px-4 text-sm hover:bg-gray-200 text-gray-700"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/services"
            className="block py-2 px-4 text-sm hover:bg-gray-200 text-gray-700"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block py-2 px-4 text-sm hover:bg-gray-200 text-gray-700"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default AdminNavbar;
