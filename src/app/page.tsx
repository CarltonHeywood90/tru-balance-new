import React from 'react';
import { ArrowRight, Sparkles, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-white">
      {/* Hero Section */}
      <main className="bg-[#2c2f62] flex-grow flex flex-col items-center justify-center px-6 py-6 text-center">      
        <h1 className="text-4xl md:text-6xl font-sans max-w-3xl leading-tight font-bold">
          Your Wellness Journey <br /> 
          <span className="italic text-[#4e8d58]">Starts Now</span>
        </h1>
        
        <p className="mt-6 text-lg text-white max-w-xl leading-relaxed">
          Experience transformative healing through compassionate, trauma-informed bodywork and energy healing
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link 
          href={process.env.NEXT_PUBLIC_SQUARE || "/contact"} 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#4e8d58] text-white px-5 py-2.5 rounded-full hover:bg-stone-900 transition-all shadow-sm"
        >
          Book Now
        </Link>
        </div>
      </main>

    <div className="bg-white px-6 py-16 text-center">
      <h2 className="text-4xl font-sans text-stone-800 mt-6 sm:mt-0">
        Healing <span className="text-[#4e8d58]">Modalities</span>
      </h2>

      <p className="mt-4 text-xl text-stone-600 max-w-2xl leading-relaxed text-center mx-auto">
        Each service is designed to support your unique healing journey
        </p>
    </div>  

      <section className="py-20 bg-[#d6ac4f]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1: Therapeutic Massage */}
            <div className="bg-stone-50 p-8 rounded-2xl border border-black flex flex-col">
              <h3 className="text-2xl font-sans mb-4 text-black">Therapeutic Massage</h3>
              <p className="text-stone-600 mb-8 flex-grow">
                Classic relaxation massage using flowing strokes to effectively reduce stress and promote circulation.
              </p>
              <div className="mb-6">
                <p className="text-sm font-medium text-stone-500 uppercase tracking-wider">Duration & Investment</p>
                <p className="text-lg font-semibold text-stone-900">30 - 120 min</p>
                <p className="text-xl font-bold text-[#4e8d58]">$50 - $185</p>
              </div>
            <Link 
              href={process.env.NEXT_PUBLIC_SQUARE || "/contact"} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4e8d58] text-white px-5 py-2.5 rounded-full hover:bg-stone-900 transition-all shadow-sm text-center"
            >
              Book Your Session
            </Link>
            </div>

            {/* Card 2: Reiki Energy Healing */}
            <div className="bg-stone-50 p-8 rounded-2xl border border-black flex flex-col">
              <h3 className="text-2xl font-sans mb-4 text-black">Reiki Energy Healing</h3>
              <p className="text-stone-600 mb-8 flex-grow">
                Gentle energy work fosters balance and relaxation, promoting natural healing for mind, body, and spirit.
              </p>
              <div className="mb-6">
                <p className="text-sm font-medium text-stone-500 uppercase tracking-wider">Duration & Investment</p>
                <p className="text-lg font-semibold text-stone-900">30 - 60 min</p>
                <p className="text-xl font-bold text-[#4e8d58]">$50 - $95</p>
              </div>
            <Link 
              href={process.env.NEXT_PUBLIC_SQUARE || "/contact"} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4e8d58] text-white px-5 py-2.5 rounded-full hover:bg-stone-900 transition-all shadow-sm text-center"
            >
              Book Your Session
            </Link>
            </div>

            {/* Card 3: Sports Massage */}
            <div className="bg-stone-50 p-8 rounded-2xl border border-black flex flex-col">
              <h3 className="text-2xl font-sans mb-4 text-black">Sports Massage</h3>
              <p className="text-stone-600 mb-8 flex-grow">
                Targeted therapy for athletes and active individuals, focusing on muscle tension and recovery.
              </p>
              <div className="mb-6">
                <p className="text-sm font-medium text-stone-500 uppercase tracking-wider">Duration & Investment</p>
                <p className="text-lg font-semibold text-stone-900">60 min</p>
                <p className="text-xl font-bold text-[#4e8d58]">$50 - $140</p>
              </div>
            <Link 
              href={process.env.NEXT_PUBLIC_SQUARE || "/contact"} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4e8d58] text-white px-5 py-2.5 rounded-full hover:bg-stone-900 transition-all shadow-sm text-center"
            >
              Book Your Session
            </Link>
            </div>

          </div>{/* ← closed grid div */}
        </div>
      </section>{/* ← closed cards section */}

      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Column 1: Text Content */}
          <div className="text-left">
            <h2 className="text-4xl font-sans text-stone-800">
              Where Wellness Meets Luxury
            </h2>
            
            <p className="mt-6 text-lg text-stone-600 leading-relaxed">
              At TruBalance Bodywork, we pride ourselves on offering exceptional quality and personalized care in every session. Each massage is tailored to your individual needs, utilizing techniques such as cupping, aromatherapy, and advanced bodywork—ensuring no hidden fees or unexpected costs.
            </p>

            <p className="mt-4 text-lg text-stone-600 leading-relaxed">
              Gratuity is already included, so the price you see is the total price you pay—providing you with complete transparency. This allows you to fully relax and focus on your healing journey without any concerns.
            </p>
          </div>

          {/* Column 2: Photo */}
          <div className="relative h-[500px] w-full bg-stone-200 rounded-2xl overflow-hidden shadow-sm">
            {/* Replace with your actual <img> tag */}
            <Image
              src="/images/TruBalance-Logo-Final.png"
              alt="Tru Balance Treatment Room"
              width={600}
              height={600}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#d6ac4f]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Grid Container: 1 column on mobile, 2 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            
            {/* Item 1: Natural & Organic */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-6 bg-[#4e8d58] rounded-full" /> {/* Accent Bar */}
                <h3 className="text-xl font-bold text-stone-900">Natural & Organic</h3>
              </div>
              <p className="text-stone-600 leading-relaxed">
                We use only the finest organic products and natural ingredients in all our treatments.
              </p>
            </div>

            {/* Item 2: Holistic Wellness */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-6 bg-[#4e8d58] rounded-full" />
                <h3 className="text-xl font-bold text-stone-900">Holistic Wellness</h3>
              </div>
              <p className="text-stone-600 leading-relaxed">
                Our approach focuses on healing the whole person - body, mind, and spirit.
              </p>
            </div>

            {/* Item 3: Transparent Pricing */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-6 bg-[#4e8d58] rounded-full" />
                <h3 className="text-xl font-bold text-stone-900">Transparent Pricing</h3>
              </div>
              <p className="text-stone-600 leading-relaxed">
                No hidden fees or unexpected costs, ensuring you can relax without worries.
              </p>
            </div>

            {/* Item 4: Personalized Care */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-6 bg-[#4e8d58] rounded-full" />
                <h3 className="text-xl font-bold text-stone-900">Personalized Care</h3>
              </div>
              <p className="text-stone-600 leading-relaxed">
                Every treatment is customized to meet your unique needs and preferences.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 text-center mb-16">
          <h1 className="text-4xl font-sans text-stone-800 mt-6 sm:mt-0 text-center">
            Our <span className="text-[#4e8d58]">Values</span>
          </h1>

          <p className="mt-4 text-lg text-stone-600 max-w-2xl leading-relaxed text-center mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Patient-Centered Care */}
          <div className="bg-white p-10 rounded-3xl border border-stone-200 hover:border-[#4e8d58] transition-all duration-300 shadow-sm hover:shadow-md group">
            <div className="w-14 h-14 bg-[#4e8d58] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#4e8d58] transition-colors">
              <span className="text-white group-hover:text-[#2c2f62] text-xl font-bold">01</span>
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-4">Patient-Centered Care</h3>
            <p className="text-stone-600 leading-relaxed">
              Every treatment plan is tailored to your unique needs and goals. We listen first, then act.
            </p>
          </div>

          {/* Card 2: Evidence-Based Treatment */}
          <div className="bg-white p-10 rounded-3xl border border-stone-200 hover:border-[#4e8d58] transition-all duration-300 shadow-sm hover:shadow-md group">
            <div className="w-14 h-14 bg-[#4e8d58] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#4e8d58] transition-colors">
              <span className="text-white group-hover:text-[#2c2f62] text-xl font-bold">02</span>
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-4">Evidence-Based Treatment</h3>
            <p className="text-stone-600 leading-relaxed">
              We use proven techniques backed by the latest research to ensure your recovery is safe and effective.
            </p>
          </div>

          {/* Card 3: Holistic Approach */}
          <div className="bg-white p-10 rounded-3xl border border-stone-200 hover:border-[#4e8d58] transition-all duration-300 shadow-sm hover:shadow-md group">
            <div className="w-14 h-14 bg-[#4e8d58] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#4e8d58] transition-colors">
              <span className="text-white group-hover:text-[#2c2f62] text-xl font-bold">03</span>
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-4">Holistic Approach</h3>
            <p className="text-stone-600 leading-relaxed">
              We treat the whole person, not just the symptoms. By aligning the body and mind, we foster lasting health.
            </p>
          </div>

        </div>
      </section>

      <section className="py-24 bg-[#d6ac4f]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Column 1: Clinic Location & Hours */}
          <div className="bg-stone-50 p-10 rounded-3xl border border-stone-100">
            <h2 className="text-3xl font-sans text-stone-900 mb-8">Visit Our Clinic</h2>
            
            <div className="space-y-8">
              {/* Address */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#4e8d58] mb-2">Location</h3>
                <p className="text-lg text-stone-800 leading-tight">
                  388 W Center St<br />
                  Orem, UT 84057<br />
                  <span className="text-stone-500 text-sm font-normal italic">(Inside Etherios Therapy)</span>
                </p>
              </div>

              {/* Hours */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#4e8d58] mb-4">Hours</h3>
                <ul className="space-y-2 text-stone-700">
                  <li className="flex justify-between border-b border-stone-200 pb-1"><span>Monday</span> <span className="font-medium">10:30 AM - 5:00 PM</span></li>
                  <li className="flex justify-between border-b border-stone-200 pb-1 text-stone-400"><span>Tuesday</span> <span>Closed</span></li>
                  <li className="flex justify-between border-b border-stone-200 pb-1"><span>Wednesday</span> <span className="font-medium">1:00 PM - 7:00 PM</span></li>
                  <li className="flex justify-between border-b border-stone-200 pb-1"><span>Thursday</span> <span className="font-medium">11:30 AM - 6:00 PM</span></li>
                  <li className="flex justify-between border-b border-stone-200 pb-1 text-stone-400"><span>Friday</span> <span>Closed</span></li>
                  <li className="flex justify-between border-b border-stone-200 pb-1"><span>Saturday</span> <span className="font-medium">8:00 AM - 2:30 PM</span></li>
                  <li className="flex justify-between"><span>Sunday</span> <span className="font-medium">9:00 AM - 3:30 PM</span></li>
                </ul>
              </div>

              {/* Action Button */}
              <a 
                href="https://www.google.com/maps/search/?api=1&query=388+W+Center+St+Orem+UT+84057"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-[#4e8d58] text-white py-4 rounded-xl font-bold hover:bg-[#4e8d58] transition-all shadow-md shadow-[#4e8d58]"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Column 2: What to Expect */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-sans text-stone-900 mb-8">What to Expect</h2>
            
            <div className="space-y-10">
              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 bg-[#4e8d58] text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="text-xl font-bold text-stone-900 mb-2">Your First Visit</h4>
                  <p className="text-stone-600 leading-relaxed">
                    We'll conduct a comprehensive evaluation including your health history, physical examination, and discuss your treatment goals.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 bg-[#4e8d58] text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="text-xl font-bold text-stone-900 mb-2">Treatment Plans</h4>
                  <p className="text-stone-600 leading-relaxed">
                    Each treatment plan is customized to your specific needs and may include adjustments, exercises, and lifestyle recommendations.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 bg-[#4e8d58] text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="text-xl font-bold text-stone-900 mb-2">Follow-up Care</h4>
                  <p className="text-stone-600 leading-relaxed">
                    We'll monitor your progress and adjust your treatment plan as needed to ensure the best possible outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <h2 className="bg-white font-sans text-4xl text-stone-800 text-center py-4">
        Ready to Begin Your <span className="text-[#4e8d58]">Healing Journey?</span>
      </h2>

      <p className="bg-white text-lg text-stone-600 text-center px-4 py-4">
        Take the first step towards wellness and transformation.
      </p>

      <p className="bg-white text-lg text-stone-600 text-center py-4">
        Book your personalized session today.
      </p>

      <div className="bg-white mt-10 flex flex-col sm:flex-row gap-4 justify-center py-4">
          <Link 
            href={process.env.NEXT_PUBLIC_SQUARE || "/contact"} 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#4e8d58] text-white px-5 py-2.5 rounded-full hover:bg-stone-900 transition-all shadow-sm text-center"
          >
            Book Now
          </Link>
      </div>

    </div>
  );
}



