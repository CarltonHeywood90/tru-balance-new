import { SERVICES } from '@/constants/services';
import { Clock, Tag, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="bg-stone-50 min-h-screen pb-20">
      {/* Header */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-black">Healing <span className="text-lime-500">Services</span></h1>
          <p className="mt-4 text- text-lg">
            A holistic approach to wellness. Choose the treatment that fits your current path to recovery.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.slug} 
              className="bg-white p-8 rounded-2xl border border-blakc hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-serif text-stone-900 group-hover:text-purple-800 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-4 text-stone-600 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <div className="mt-6 flex items-center space-x-4 text-stone-500 text-sm">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1.5 text-purple-700" />
                    {service.duration}
                  </div>
                  <div className="flex items-center">
                    <Tag size={16} className="mr-1.5 text-purple-700" />
                    {service.price}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href={`/services/${service.slug}`}
                  className="inline-flex items-center font-medium text-stone-900 hover:text-purple-800"
                >
                  View Details
                  <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="max-w-4xl mx-auto px-6 mt-24 text-center">
        <div className="bg-blue-900 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-serif mb-4">Ready to start your journey?</h2>
          <p className="text-stone-400 mb-8">Appointments are available Monday through Saturday in Utah County.</p>
        <Link 
          href={process.env.NEXT_PUBLIC_SQUARE || "/contact"} 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-lime-600 text-white px-5 py-2.5 rounded-full hover:bg-stone-900 transition-all shadow-sm"
        >
          Book An Appointment
        </Link>
        </div>
      </section>
    </div>
  );
}