"use client"; // Required for interactivity

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Added X icon for closing
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Helper to close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#2c2f62] backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-32 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" onClick={closeMenu} className="shrink-0">
          <Image
            src="/images/TruBalance-Logo-Final-03.png"
            alt="Tru Balance Logo"
            width={120}
            height={40}
            style={{ height: 'auto' }}
            priority
          />
        </Link>

        {/* Desktop Wordmark (Hidden on small screens) */}
        <div className="hidden lg:block">
          <Image
            src="/images/TruBalance-Wordmark-01.PNG"
            alt="Tru Balance Wordmark"
            width={240}
            height={70}
            style={{ width: 'auto' }}
            priority
          />
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-widest text-white">
          <Link href="/" className="hover:text-brand-400 transition-colors">Home</Link>
          <Link href="/services" className="hover:text-brand-400 transition-colors">Services</Link>
          <Link href="/about" className="hover:text-brand-400 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-brand-400 transition-colors">Contact</Link>
          <Link href="/resources" className="hover:text-brand-400 transition-colors">Resources</Link>
          <Link 
            href={process.env.NEXT_PUBLIC_SQUARE || "/contact"} 
            target="_blank"
            className="bg-[#4e8d58] text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#2c2f62] transition-all shadow-md"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed top-0 left-0 w-full h-screen z-[100] md:hidden transition-all duration-300 ease-in-out
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
      `}>
        {/* 1. THE SOLID BACKDROP: This must be separate and absolute to cover the whole screen */}
        <div className="absolute inset-0 bg-[#2c2f62] z-0" />

        {/* 2. THE CLOSE BUTTON: Positioned at the top right so the user can always exit */}
        <button 
          onClick={closeMenu}
          className="absolute top-10 right-8 text-white z-[110] p-2 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close Menu"
        >
          <X size={32} />
        </button>

        {/* 3. THE LINKS: Wrapped in a relative div to sit ABOVE the backdrop */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-10 text-xl font-bold uppercase tracking-[0.2em] text-white">
          <Link href="/" onClick={closeMenu} className="hover:text-[#4e8d58] transition-colors">Home</Link>
          <Link href="/services" onClick={closeMenu} className="hover:text-[#4e8d58] transition-colors">Services</Link>
          <Link href="/about" onClick={closeMenu} className="hover:text-[#4e8d58] transition-colors">About</Link>
          <Link href="/contact" onClick={closeMenu} className="hover:text-[#4e8d58] transition-colors">Contact</Link>
          <Link href="/resources" onClick={closeMenu} className="hover:text-[#4e8d58] transition-colors">Resources</Link>
          
          <Link 
            href={process.env.NEXT_PUBLIC_SQUARE || "/contact"} 
            onClick={closeMenu}
            className="mt-4 bg-[#4e8d58] text-white px-12 py-5 rounded-full shadow-2xl active:scale-95 transition-all border border-white/10"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}