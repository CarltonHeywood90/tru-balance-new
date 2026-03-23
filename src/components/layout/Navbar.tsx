import Link from 'next/link';
import { Menu } from 'lucide-react';
import Image from 'next/image';


export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#2c2f62] backdrop-blur-md ">
      <div className="max-w-6xl mx-auto px-6 h-40 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl tracking-tighter text-stone-900">
          {/* Import image logo here if you have one, otherwise just use text */}
          <Image
            src="/images/TruBalance-Logo-Final-03.png"
            alt="Tru Balance Logo"
            width={150}
            height={40}
          />
        </Link>

        <Image
          src="/images/TruBalance-Wordmark-01.PNG"
          alt="Tru Balance Wordmark"
          width={300}
          height={87}
          className="hidden md:block"
        />
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10 text-sm font-medium text-white">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <Link href="/services" className="hover:text-black transition-colors">Services</Link>
          <Link href="/about" className="hover:text-black transition-colors">About</Link>
          <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
          <Link href="/resources" className="hover:text-black transition-colors">Resources</Link>
          <Link 
            href={process.env.NEXT_PUBLIC_SQUARE || "/contact"} 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#4e8d58] text-white px-5 py-2.5 rounded-full hover:bg-stone-900 transition-all shadow-sm"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-[#4e8d58]">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}