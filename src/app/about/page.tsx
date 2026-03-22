import { CheckCircle2, Heart, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero / Intro Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-stone-900 mb-6">The Heart Behind <br/><span className="text-lime-500 italic">Tru Balance</span></h1>
          <p className="text-lg text-stone-600 leading-relaxed">
            Founded on the belief that true wellness comes from a balanced alignment of the physical body and the energetic spirit.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="bg-stone-200 aspect-square rounded-3xl overflow-hidden relative">
          <Image 
            src="/images/Brenden-headshot.jpg"
            alt="Tru Balance"
            width={600}
            height={450}
          />
          <div className="absolute inset-0 flex items-center justify-center text-stone-400 italic">
            
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-serif text-stone-900 mb-6">A Personalized Approach</h2>
          <p className="text-stone-600 mb-6 leading-relaxed">
            Every body carries a unique story. Whether you are recovering from a specific injury, dealing with chronic tension, or simply seeking a moment of peace, our sessions are never "one-size-fits-all."
          </p>
          <p className="text-stone-600 mb-8 leading-relaxed">
            By combining traditional therapeutic massage with intentional Reiki energy work, we address the root causes of discomfort rather than just the symptoms.
          </p>
          
          <ul className="space-y-4">
            {[
              "Licensed & Certified Practitioner",
              "Focused on Structural Alignment",
              "Integrative Energy Healing Techniques",
              "Quiet, Professional Utah County Studio"
            ].map((item, i) => (
              <li key={i} className="flex items-center text-stone-800 font-medium">
                <CheckCircle2 className="text-purple-700 mr-3" size={20} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Values / Icons Section */}
      <section className="bg-blue-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <Heart className="text-purple-400 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Intentional Care</h3>
            <p className="text-stone-400 text-sm">Every session is guided by presence and a genuine desire for your well-being.</p>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="text-purple-400 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Safe Environment</h3>
            <p className="text-stone-400 text-sm">A professional, high-standard space where you can fully let go and heal.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border-2 border-purple-400 rounded-full flex items-center justify-center mb-4 text-purple-400 font-bold">1</div>
            <h3 className="text-xl font-bold mb-2">Holistic Balance</h3>
            <p className="text-stone-400 text-sm">Restoring the vital connection between your physical form and mental clarity.</p>
          </div>
        </div>
      </section>

    {/* Final CTA */}
    <section className="relative w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          
          {/* Optional: Add a small sub-heading to ensure the section has "heft" */}
          <h3 className="text-2xl font-serif text-stone-900">Ready to start your journey?</h3>
          
          <div className="flex w-full items-center justify-center">
            <Link 
              href={process.env.NEXT_PUBLIC_SQUARE || "/contact"} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-lime-600 text-white px-12 py-5 rounded-full hover:bg-stone-900 transition-all shadow-2xl text-center font-black uppercase tracking-widest active:scale-95 z-10"
            >
              Book Your Session
            </Link>
          </div>
          
        </div>
      </div>
    </section>
    </div>
  );
}