import Link from 'next/link';
import { Clock, Tag, ChevronLeft, Sparkles, ShieldCheck, Zap } from 'lucide-react';

const serviceData = {
  'therapeutic-massage': {
    title: "Therapeutic Massage",
    description: "A specialized blend of Deep Tissue and Swedish techniques designed to address the root causes of physical discomfort.",
    content: "Our Therapeutic Massage isn't just about relaxation—it's about restoration. By combining the long, flowing strokes of Swedish massage with the targeted, intense pressure of Deep Tissue work, we break down adhesions (knots) in the muscle fibers. This process increases blood flow to oxygen-starved tissues and flushes out metabolic waste, providing lasting relief from chronic tension.",
    benefits: ["Relieves chronic muscle pain", "Lowered blood pressure", "Improved joint mobility"],
    duration: "30 min / 60 min / 90 min / 120 min",
    price: "$50 - $185"
  },
  'reiki-energy-work': {
    title: "Reiki Energy Work",
    description: "A Japanese technique for stress reduction and relaxation that also promotes healing.",
    content: "Reiki is based on the idea that an unseen 'life force energy' flows through us. During a session, the practitioner acts as a conduit for this energy, helping to clear blockages in the body's natural energetic field. It is a deeply peaceful, non-invasive experience that helps quiet the nervous system and fosters a state of spiritual and emotional balance.",
    benefits: ["Deep relaxation", "Stress and anxiety reduction", "Enhanced mental clarity"],
    duration: "30 min / 60 min",
    price: "$50 - $95"
  },
  'sports-massage': {
    title: "Sports Massage",
    description: "Targeted therapy for athletes and active individuals to enhance performance and recovery.",
    content: "Our Sports Massage is tailored for those who lead an active lifestyle. We focus on the specific muscles and areas that are most prone to tension and fatigue. This targeted approach helps improve flexibility, reduce the risk of injury, and support faster recovery after intense physical activity.",
    benefits: ["Improved athletic performance", "Faster recovery", "Injury prevention"],
    duration: "30 min / 60 min / 90 min",
    price: "$50 - $125"
  }
};

export default async function ServiceArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceData[slug as keyof typeof serviceData];

  if (!service) return <div className="py-20 text-center">Service not found.</div>;

  return (
    <div className="bg-white min-h-screen">
      {/* Navigation Back */}
      <div className="max-w-4xl mx-auto px-6 pt-12">
        <Link href="/services" className="flex items-center text-stone-500 hover:text-[#2c2f62] transition-colors group">
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Header Section */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4e8d58] text-white text-xs font-bold uppercase tracking-wider mb-6">
            Professional Care
          </div>
          <h1 className="text-5xl md:text-7xl font-sans text-stone-900 mb-6">{service.title}</h1>
          <p className="text-xl text-stone-600 leading-relaxed italic">{service.description}</p>
        </header>

        {/* Pricing/Time Quick Stats */}
        <div className="flex gap-6 mb-12 border-y border-stone-100 py-6">
          <div className="flex items-center gap-2 text-stone-900 font-semibold">
            <Clock className="text-[#2c2f62]" size={20} />
            {service.duration}
          </div>
          <div className="flex items-center gap-2 text-stone-900 font-semibold">
            <Tag className="text-[#2c2f62]" size={20} />
            {service.price}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-sans text-stone-900 mb-4 text-[#2c2f62]">About the Session</h2>
            <p className="text-stone-600 leading-relaxed text-lg mb-8">
              {service.content}
            </p>
          </div>

          <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 h-fit">
            <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
              <ShieldCheck className="text-[#4e8d58]" size={20} />
              Key Benefits
            </h3>
            <ul className="space-y-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="text-sm text-stone-600 flex gap-2">
                  <span className="text-[#4e8d58]">•</span> {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* The "Book Now" CTA on the page */}
        <div className="mt-16 p-12 bg-[#2c2f62] rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4e8d58]/10 blur-3xl rounded-full" />
          <h3 className="text-3xl font-sans text-white mb-6">Ready to feel the difference?</h3>
          <Link 
            href={process.env.NEXT_PUBLIC_SQUARE || "/contact"} 
            target="_blank"
            className="inline-block bg-[#4e8d58] hover:bg-white text-stone-900 font-black px-12 py-5 rounded-full transition-all shadow-lg hover:scale-105"
          >
            BOOK {service.title.toUpperCase()}
          </Link>
          <p className="text-white mt-6 text-sm">Instant confirmation via Square Booking</p>
        </div>
      </article>
    </div>
  );
}


