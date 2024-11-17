// components/Navbar.jsx
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" bg-[#C8AD84]    text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">
              <Image src="/logo.png" alt='logo' width={20} height={10}/>
          </Link>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`absolute top-16 left-0 w-full bg-white text-black rounded-[28px] p-2 font-bold md:static md:flex md:items-center md:justify-center md:space-x-8 md:w-auto ${
            menuOpen ? 'block' : 'hidden'
          }`}
        >
          <Link className="block pr-4 py-2 hover:bg-[#9C7A4D] hover:text-white "href="/">
             Home
          </Link>
          <Link className="block pr-4 py-2 hover:bg-[#9C7A4D] hover:text-white "href="/">
             shop
          </Link>
          <Link className="block pr-4 py-2 hover:bg-[#9C7A4D] hover:text-white "href="/">
             offer
          </Link>
          <Link className="block pr-4 py-2 hover:bg-[#9C7A4D] hover:text-white "href="/">
             Blog
          </Link>
        </div>

        {/* Shopping Cart and Login */}
        <div className="flex items-center justify-end  space-x-4">
          <button className="relative">
            <FaShoppingCart className="text-2xl text-black " />
            
          </button>
          <Link className="bg-white rounded-2xl p-2 px-6  font-bold text-black   hidden md:inline-block" href="/login">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;