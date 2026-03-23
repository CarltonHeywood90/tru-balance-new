import { BLOG_POSTS } from '@/constants/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown'; // New Import
import { ChevronLeft, Calendar, Share2 } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function ResourceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <article className="min-h-screen bg-white pb-24">
      <div className="max-w-3xl mx-auto px-6 pt-12">
        {/* Navigation */}
        <Link 
          href="/resources" 
          className="flex items-center text-stone-400 hover:text-brand-500 mb-12 transition-all group font-medium text-sm"
        >
          <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Resources
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-brand-50 text-brand-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-brand-100">
              {post.category}
            </span>
            <span className="text-stone-300">•</span>
            <div className="flex items-center gap-1 text-stone-400 text-xs font-bold uppercase tracking-tighter">
              <Calendar size={12} />
              {post.date}
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-sans text-stone-900 leading-[1.1] mb-6 tracking-tight">
            {post.title}
          </h1>
          
          {post.subtitle && (
            <p className="text-xl md:text-2xl text-stone-500 font-light leading-relaxed italic">
              {post.subtitle}
            </p>
          )}
        </header>

        {/* Main Content Area */}
        {/* The 'prose' class handles all the spacing for H3s, Ps, and Lists automatically */}
        <div className="prose prose-stone prose-lg max-w-none">
          <ReactMarkdown
            components={{
              h3: ({ children }) => (
                <h3 className="text-2xl font-sans text-stone-900 mt-12 mb-4 font-bold">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-stone-700 leading-loose mb-6">
                  {children}
                </p>
              ),
              strong: ({ children }) => (
                <strong className="text-[#4e8d58] font-semibold">
                  {children}
                </strong>
              ),
            }}
          >
            {post.content.trim()}
          </ReactMarkdown>
        </div>

        {/* Footer / CTA Section */}
        <footer className="mt-20 pt-10 border-t border-stone-100">
          <div className="bg-[#2c2f62] rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 blur-[80px] rounded-full" />
            <h3 className="text-3xl font-sans text-white mb-4 relative z-10">Curious about this technique?</h3>
            <p className="text-stone-400 mb-10 max-w-md mx-auto relative z-10">
              I often integrate these practices into my custom bodywork sessions. Let's find what works for you.
            </p>
            <Link 
              href={process.env.NEXT_PUBLIC_SQUARE || "/contact"}
              className="inline-block bg-[#4e8d58] text-white px-12 py-5 rounded-full font-black hover:bg-white hover:text-stone-900 transition-all shadow-xl active:scale-95 uppercase tracking-widest text-sm"
            >
              Book Your Session
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}