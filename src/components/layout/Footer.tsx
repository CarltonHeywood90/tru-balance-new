import Link from 'next/link'; // Added this line

export default function Footer() {
    const year = new Date().getFullYear();
    
    return (
      <footer className="bg-[#2c2f62] text-stone-400 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">TruBalance</h3>
            <p className="text-sm leading-relaxed">
            Creating sacred spaces for healing and transformation through compassionate, trauma-informed bodywork and energy healing.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-teal-400">About Brenden</Link></li>
              <li><Link href="/services" className="hover:text-teal-400">Our Services</Link></li>
              <li><Link href="contact" className="hover:text-teal-400">Find Us</Link></li>
              <li><Link href={process.env.NEXT_PUBLIC_SQUARE || "/contact"}  className="hover:text-teal-400">Appointment Request</Link></li>
            </ul>
          </div>
  
          <div>
            <h4 className="text-white font-medium mb-4">Connect</h4>
            <p className="text-sm">Based in Utah County</p>
            <p className="text-sm mt-2 font-mono text-[#4e8d58]">trubalance.life</p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-stone-800 text-xs flex justify-between">
          <p>&copy; {year} TruBalance. All rights reserved.</p>
          <p>Built with Next.js & Vercel</p>
        </div>
      </footer>
    );
  }
