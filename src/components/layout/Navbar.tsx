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
      {/* This uses Tailwind transition classes to slide/fade the menu in */}
      <div className={`
        fixed inset-0 top-32 bg-[#2c2f62] z-40 md:hidden transition-all duration-300 ease-in-out
        ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-5'}
      `}>
        <div className="flex flex-col items-center pt-12 space-y-8 text-xl font-bold uppercase tracking-[0.2em] text-white">
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/services" onClick={closeMenu}>Services</Link>
          <Link href="/about" onClick={closeMenu}>About</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
          <Link href="/resources" onClick={closeMenu}>Resources</Link>
          <Link 
            href={process.env.NEXT_PUBLIC_SQUARE || "/contact"} 
            onClick={closeMenu}
            className="bg-[#4e8d58] px-10 py-4 rounded-full"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}