import { Mail, Phone, MapPin, Clock, ExternalLink, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen text-stone-900">
      {/* Header */}
      <section className="py-20 border-b border-stone-100 bg-stone-50/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c2f62] border border-[#2c2f62] text-white text-sm mb-6">
            <Sparkles size={14} />
            <span>Get In Touch</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-sans mb-6 text-stone-900">Clinic Information</h1>
          <p className="text-xl text-stone-600">
          We're conveniently located on center street with easy access to parking and public transportation.
          </p>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* TOP LEFT: Location & Hours */}
          <div className="space-y-10 p-4">
            <h2 className="text-3xl font-sans text-[#4e8d58]">Visit Our Clinic</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#2c2f62] rounded-2xl flex items-center justify-center mr-4 shrink-0 text-white shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg">Location</h4>
                  <p className="text-stone-600">388 W Center St, Orem, UT 84057</p>
                  <p className="text-stone-500 italic text-sm">Inside Etherios Therapy — By Appointment Only</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#2c2f62] rounded-2xl flex items-center justify-center mr-4 shrink-0 text-white shadow-sm">
                  <Clock size={24} />
                </div>
                <div className="w-full max-w-sm">
                  <h4 className="font-bold text-stone-900 text-lg mb-2">Availability</h4>
                  <div className="grid grid-cols-2 gap-y-1 text-sm text-stone-600">
                    <span>Monday</span><span className="text-right font-medium">10:30 AM – 5:00 PM</span>
                    <span className="opacity-40">Tuesday</span><span className="text-right opacity-40">Closed</span>
                    <span>Wednesday</span><span className="text-right font-medium">1:00 PM – 7:00 PM</span>
                    <span>Thursday</span><span className="text-right font-medium">11:30 AM – 6:00 PM</span>
                    <span className="opacity-40">Friday</span><span className="text-right opacity-40">Closed</span>
                    <span>Saturday</span><span className="text-right font-medium">8:00 AM – 2:30 PM</span>
                    <span>Sunday</span><span className="text-right font-medium">9:00 AM – 3:30 PM</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#2c2f62] rounded-2xl flex items-center justify-center mr-4 shrink-0 text-white shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg">Email</h4>
                  <p className="text-stone-600">brenden.heywood.lmt@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* TOP RIGHT: Google Maps Embed */}
          <div className="bg-stone-50 rounded-3xl border border-stone-200 shadow-sm overflow-hidden h-full min-h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.570125637254!2d-111.70187832344073!3d40.29641777142013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d90ce364379e7%3A0xc3f982741548e65e!2s388%20W%20Center%20St%2C%20Orem%2C%20UT%2084057!5e0!3m2!1sen!2sus!4v1710500000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="TruBalance Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* BOTTOM LEFT: Booking Portal */}
          <div className="bg-[#2c2f62] p-8 md:p-10 rounded-3xl border border-[#2c2f62] flex flex-col justify-between shadow-lg">
            <div>
              <h3 className="text-2xl font-sans text-white mb-4">Ready to book?</h3>
              <p className="text-white mb-8 leading-relaxed">
                The fastest way to secure your session is through our online booking portal. View all available times and services in one place.
              </p>
            </div>
       <Link 
          href={process.env.NEXT_PUBLIC_SQUARE || "/contact"} 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#4e8d58] text-white px-5 py-2.5 rounded-full hover:bg-stone-900 transition-all shadow-sm text-center"
        >
          Book An Appointment Now!
        </Link>
          </div>

          {/* BOTTOM RIGHT: Important Info */}
          <div className="bg-[#d6ac4f] rounded-3xl border border-stone-800 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#2c2f62] rounded-xl flex items-center justify-center text-white">!</div>
              <h3 className="text-2xl font-sans text-[#4e8d58]">Important Info</h3>
            </div>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm text-white">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4e8d58] mt-1.5 shrink-0" />
                  <span>Arrive <strong className="text-white font-semibold">5–10 minutes early</strong> for your session.</span>
                </li>
                <li className="flex gap-3 text-sm text-white">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4e8d58] mt-1.5 shrink-0" />
                  <span><strong className="text-white font-semibold">Hydrate</strong> after your massage to aid recovery.</span>
                </li>
                <li className="flex gap-3 text-sm text-white">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4e8d58] mt-1.5 shrink-0" />
                  <span>Share any <strong className="text-white font-semibold">health concerns</strong> beforehand.</span>
                </li>
                <li className="flex gap-3 text-sm text-white">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4e8d58] mt-1.5 shrink-0" />
                  <span>Review our <strong className="text-white underline underline-offset-4 decoration-[#4e8d58]/50">cancellation policy</strong>.</span>
                </li>
              </ul>
          </div>

        </div>
      </section>

      {/* Parking & Transit Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        
        {/* Parking Information Card */}
        <div className="p-8 bg-stone-50 rounded-3xl border border-stone-200 shadow-sm transition-all hover:border-[#2c2f62] py-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#2c2f62] rounded-xl flex items-center justify-center text-white">
              <MapPin size={20} />
            </div>
            <h3 className="text-2xl font-sans text-[#2c2f62]">Parking Information</h3>
          </div>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4e8d58] shrink-0" />
              <p className="text-[#2c2f62] font-medium">Free parking available</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4e8d58] shrink-0" />
              <p className="text-stone-600">
                Park near <span className="text-[#2c2f62] font-semibold">Etherios Therapy entrance</span> (north west)
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4e8d58] shrink-0" />
              <p className="text-stone-600 text-sm">Accessible parking spaces available near all entrances</p>
            </li>
          </ul>
        </div>

        {/* Public Transportation Card */}
        <div className="p-8 bg-stone-50 rounded-3xl border border-stone-200 shadow-sm transition-all hover:border-[#2c2f62] py-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#2c2f62] rounded-xl flex items-center justify-center text-white">
              <Clock size={20} />
            </div>
            <h3 className="text-2xl font-sans text-[#2c2f62]">Public Transportation</h3>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#2c2f62] mb-2">Frontrunner</h4>
              <p className="text-stone-700 text-sm leading-relaxed">
                Provo Central Station (Bay B) — <span className="font-semibold text-stone-900">1 min walk</span>
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#2c2f62] mb-2">Bus Route 850</h4>
              <p className="text-stone-700 text-sm leading-relaxed">
                Lehi Station, 31 stops to State St / Center St (NB) — <span className="font-semibold text-stone-900">13 min walk</span>
              </p>
            </div>

            <div className="pt-4 border-t border-stone-200">
              <p className="text-xs italic text-stone-500">
                * Use entrance on the north west side of the building
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}


