import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, Heart, Leaf, Sparkles } from 'lucide-react';

export default function ResourcesPage() {
  return (
    <>
      <main className="min-h-screen bg-white text-black">
        {/* Hero Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c2f62] border border-[#2c2f62] text-white text-sm mb-6">
            <Sparkles size={14} />
              <span>Resources & Articles</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-sans mb-6 tracking-tight">
              Health & <span className="italic text-[#4e8d58]">Wellness</span> Resources
            </h1>
            <p className="text-xl text-black max-w-2xl mx-auto leading-relaxed">
              Expert insights, tips, and guides to help you achieve optimal health and find your daily balance.
            </p>
          </div>
        </section>

        {/* Resource Grid */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Article Card 1 */}
            <Link href="/resources/what-is-gua-sha" className="group">
              <div className="bg-[#d6ac4f] rounded-3xl overflow-hidden border border-blue-800 transition-all shadow-2xl">
                <div className="aspect-video bg-white relative flex items-center justify-center">
                  {/* Icon in Green */}
                  <div className="w-16 h-16 bg-[#4e8d58] rounded-2xl flex items-center justify-center shadow-lg">
                    <Leaf size={32} className="text-[#96bb9b]" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#2c2f62] mb-3">Therapy</div>
                  <h3 className="text-2xl font-sans mb-3 group-hover:text-[#2c2f62] transition-colors">
                    What Is Gua Sha?
                  </h3>
                  <p className="text-black line-clamp-2 text-sm leading-relaxed">
                    An ancient Chinese technique that uses a smooth tool to scrape the skin, promoting circulation and lymphatic drainage.
                  </p>
                  <div className="mt-8 flex items-center text-[#2c2f62] font-bold gap-2 text-sm uppercase tracking-tighter">
                    Read Article <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </Link>

            {/* Article Card 2 */}
            <Link href="/resources/soft-tissue-vs-deep-tissue" className="group">
              <div className="bg-[#d6ac4f] rounded-3xl overflow-hidden border border-blue-800 transition-all shadow-2xl">
                <div className="aspect-video bg-white relative flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#4e8d58] rounded-2xl flex items-center justify-center shadow-lg">
                    <Heart size={32} className="text-[#96bb9b]" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#2c2f62] mb-3">Energy Work</div>
                  <h3 className="text-2xl font-sans mb-3 group-hover:text-[#2c2f62] transition-colors">
                    The Benefits of Soft Tissue Work Over Deep Tissue
                  </h3>
                  <p className="text-black line-clamp-2 text-sm leading-relaxed">
                    Why gentle, intentional touch can often be more effective for long-term healing than aggressive deep tissue techniques.
                  </p>
                  <div className="mt-8 flex items-center text-[#2c2f62] font-bold gap-2 text-sm uppercase tracking-tighter">
                    Read Article <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </Link>

            {/* Article Card 3 */}
            <Link href="/resources/what-is-reiki" className="group">
              <div className="bg-[#d6ac4f] rounded-3xl overflow-hidden border border-blue-800 transition-all shadow-2xl">
                <div className="aspect-video bg-white relative flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#4e8d58] rounded-2xl flex items-center justify-center shadow-lg">
                    <BookOpen size={32} className="text-[#96bb9b]" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#2c2f62] mb-3">Lifestyle</div>
                  <h3 className="text-2xl font-sans mb-3 group-hover:text-[#2c2f62] transition-colors">
                    What is Reiki?
                  </h3>
                  <p className="text-black line-clamp-2 text-sm leading-relaxed">
                    A gentle, non-invasive practice that promotes relaxation and stress reduction through the channeling of universal life force energy.
                  </p>
                  <div className="mt-8 flex items-center text-[#2c2f62] font-bold gap-2 text-sm uppercase tracking-tighter">
                    Read Article <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </Link>

            {/* Article Card 4*/}
            <Link href="/resources/emotions-in-fascia" className="group">
              <div className="bg-[#d6ac4f] rounded-3xl overflow-hidden border border-blue-800 transition-all shadow-2xl">
                <div className="aspect-video bg-white relative flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#4e8d58] rounded-2xl flex items-center justify-center shadow-lg">
                    <BookOpen size={32} className="text-[#96bb9b]" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#2c2f62] mb-3">Therapy</div>
                  <h3 className="text-2xl font-sans mb-3 group-hover:text-[#2c2f62] transition-colors">
                    How Emotions Are Stored In The Fascial Tissue And How Massage Can Release Them
                  </h3>
                  <p className="text-black line-clamp-2 text-sm leading-relaxed">
                    The connection between our emotional state and physical tension, and how bodywork can help release trapped emotions for holistic healing.
                  </p>
                  <div className="mt-8 flex items-center text-[#2c2f62] font-bold gap-2 text-sm uppercase tracking-tighter">
                    Read Article <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </Link>

          </div>
        </section>
      </main>
    </>
  );
}

