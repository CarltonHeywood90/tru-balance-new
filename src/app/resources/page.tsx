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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-sm mb-6">
            <Sparkles size={14} />
              <span>Resources & Articles</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-tight">
              Health & <span className="italic text-lime-500">Wellness</span> Resources
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
            <Link href="/resources/massage-benefits" className="group">
              <div className="bg-blue-900 rounded-3xl overflow-hidden border border-blue-800 transition-all hover:border-lime-500/50 hover:bg-blue-800/50 shadow-2xl">
                <div className="aspect-video bg-white relative flex items-center justify-center">
                  {/* Icon in Purple-900 */}
                  <div className="w-16 h-16 bg-purple-900 rounded-2xl flex items-center justify-center shadow-lg">
                    <Leaf size={32} className="text-purple-300" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-xs font-bold uppercase tracking-widest text-lime-500 mb-3">Therapy</div>
                  <h3 className="text-2xl font-serif mb-3 group-hover:text-lime-400 transition-colors">
                    The Science of Therapeutic Massage
                  </h3>
                  <p className="text-blue-100/60 line-clamp-2 text-sm leading-relaxed">
                    Discover how regular bodywork impacts your nervous system and promotes long-term recovery.
                  </p>
                  <div className="mt-8 flex items-center text-lime-500 font-bold gap-2 text-sm uppercase tracking-tighter">
                    Read Article <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </Link>

            {/* Article Card 2 */}
            <Link href="/resources/reiki-guide" className="group">
              <div className="bg-blue-900 rounded-3xl overflow-hidden border border-blue-800 transition-all hover:border-lime-500/50 hover:bg-blue-800/50 shadow-2xl">
                <div className="aspect-video bg-white relative flex items-center justify-center">
                  <div className="w-16 h-16 bg-purple-900 rounded-2xl flex items-center justify-center shadow-lg">
                    <Heart size={32} className="text-purple-300" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-xs font-bold uppercase tracking-widest text-lime-500 mb-3">Energy Work</div>
                  <h3 className="text-2xl font-serif mb-3 group-hover:text-lime-400 transition-colors">
                    Understanding Reiki Energy
                  </h3>
                  <p className="text-blue-100/60 line-clamp-2 text-sm leading-relaxed">
                    A beginner&apos;s guide to how energy alignment can reduce stress and improve mental clarity.
                  </p>
                  <div className="mt-8 flex items-center text-lime-500 font-bold gap-2 text-sm uppercase tracking-tighter">
                    Read Article <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </Link>

            {/* Article Card 3 */}
            <Link href="/resources/self-care-tips" className="group">
              <div className="bg-blue-900 rounded-3xl overflow-hidden border border-blue-800 transition-all hover:border-lime-500/50 hover:bg-blue-800/50 shadow-2xl">
                <div className="aspect-video bg-white relative flex items-center justify-center">
                  <div className="w-16 h-16 bg-purple-900 rounded-2xl flex items-center justify-center shadow-lg">
                    <BookOpen size={32} className="text-purple-300" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-xs font-bold uppercase tracking-widest text-lime-500 mb-3">Lifestyle</div>
                  <h3 className="text-2xl font-serif mb-3 group-hover:text-lime-400 transition-colors">
                    Daily Rituals for Balance
                  </h3>
                  <p className="text-blue-100/60 line-clamp-2 text-sm leading-relaxed">
                    Simple stretching and mindfulness habits you can do at home to stay aligned between sessions.
                  </p>
                  <div className="mt-8 flex items-center text-lime-500 font-bold gap-2 text-sm uppercase tracking-tighter">
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