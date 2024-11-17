// components/Footer.tsx
'use client'

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#9C7A4D] text-white py-20 font-medium">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Column 1: Logo and Description */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold mb-2">Radha Rani</h2>
            <p className="text-sm">
              Your brand description goes here. Short and concise about what you do.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul>
              <li>
                <Link href="/about" className="hover:text-[#9C7A4D] text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#9C7A4D] text-sm">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#9C7A4D] text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-3">Contact Info</h3>
            <ul>
              <li className="text-sm">Phone: +1 (123) 456-7890</li>
              <li className="text-sm">Email: support@yourbrand.com</li>
              <li className="text-sm">Address: 123 Street, City, Country</li>
            </ul>
          </div>

          {/* Column 4: Social Media Links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" className="text-xl hover:text-[#9C7A4D]">
                <FaFacebook />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="text-xl hover:text-[#9C7A4D]">
                <FaTwitter />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="text-xl hover:text-[#9C7A4D]">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
      
      </div>
      
       
    </footer>
  );
};

export default Footer;
