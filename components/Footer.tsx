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
          <div className='flex  -ml-24 space-y-3 flex-col'>
          <div className="flex space-x-3 -mt-1 items-start">
             <img src="./images/logo.png" alt="" />
            <h2 className="text-4xl font-bold mb-2">Radha Rani</h2>

          
          </div>
         <h1>
         Address : shop address near palm mall korba chhattishgarh, PIN india
         </h1>
         <h1>
         radharani@gmail.com
         </h1>
         <h1>
         +91 9977121212
         </h1>
          </div>
          

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-3">Navigation</h3>
            <ul>
              <li>
                <Link href="/about" className="hover:text-[#9C7A4D] text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#9C7A4D] text-sm">
                  Shop (categories)
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#9C7A4D] text-sm">
                  About us 
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#9C7A4D] text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#9C7A4D] text-sm">
                  Returns and  Exchanges
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#9C7A4D] text-sm">
                  shipping information
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-3">Legal Information</h3>
            <ul>
              <li className="text-sm">Terms and condition</li>
              <li className="text-sm">FAQ</li>
            
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
