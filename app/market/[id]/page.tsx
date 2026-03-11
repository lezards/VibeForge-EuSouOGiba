'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, 
  Download, 
  ShieldCheck, 
  Layers, 
  Maximize2, 
  Share2, 
  Heart, 
  ShoppingCart, 
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  MessageSquare,
  Clock
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [selectedTab, setSelectedTab] = useState('Overview');
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-navy-950">
      <Header />
      
      <main className="flex-grow pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-widest mb-12">
            <Link href="/market" className="hover:text-white transition-colors">Market</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-300">Environment</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-neon-lime">Cyberpunk City Kit</span>
          </div>

          <div className="grid lg:grid-cols-[1fr_400px] gap-16">
            {/* Left Column - Gallery & Description */}
            <div className="space-y-12">
              {/* Main Image */}
              <div className="glass-panel rounded-[2rem] p-4 aspect-[16/10] relative overflow-hidden group">
                <Image 
                  src="https://picsum.photos/seed/detail-main/1200/750" 
                  alt="Product Main" 
                  fill 
                  className="object-cover rounded-[1.5rem]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-8 right-8 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-3 bg-black/50 backdrop-blur-md rounded-xl text-white hover:bg-neon-lime hover:text-navy-950 transition-all">
                    <Maximize2 className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-black/50 backdrop-blur-md rounded-xl text-white hover:bg-neon-lime hover:text-navy-950 transition-all">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square relative rounded-2xl overflow-hidden border-2 border-transparent hover:border-neon-lime cursor-pointer transition-all">
                    <Image 
                      src={`https://picsum.photos/seed/thumb-${i}/300/300`} 
                      alt="Thumbnail" 
                      fill 
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>

              {/* Tabs */}
              <div className="space-y-8">
                <div className="flex items-center gap-8 border-b border-white/5">
                  {['Overview', 'Assets', 'Reviews', 'License'].map((tab) => (
                    <button 
                      key={tab}
                      onClick={() => setSelectedTab(tab)}
                      className={`pb-4 text-sm font-bold transition-all relative ${selectedTab === tab ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                      {tab}
                      {selectedTab === tab && (
                        <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-lime" />
                      )}
                    </button>
                  ))}
                </div>

                <div className="prose prose-invert max-w-none">
                  {selectedTab === 'Overview' && (
                    <div className="space-y-6 text-slate-400 leading-relaxed">
                      <p>
                        Transform your game world with the Cyberpunk City Kit. This premium collection features over 120 meticulously crafted pixel art assets, including modular buildings, neon signage, street props, and animated backgrounds.
                      </p>
                      <h4 className="text-white font-display text-xl font-bold mt-8">Key Features:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                        {[
                          '120+ Unique Modular Assets',
                          'Animated Neon Signs (GIF/PNG)',
                          'Parallax Background Layers',
                          'Commercial License Included',
                          'Optimized for Unity & Godot',
                          'Original Aseprite Source Files'
                        ].map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 m-0">
                            <CheckCircle2 className="w-4 h-4 text-neon-lime" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {selectedTab === 'Reviews' && (
                    <div className="space-y-8">
                      {[1, 2].map((i) => (
                        <div key={i} className="glass-panel rounded-2xl p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-neon-lime to-neon-cyan" />
                              <div>
                                <div className="text-sm font-bold text-white">GamerDev_{i}</div>
                                <div className="flex items-center gap-1 mt-1">
                                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3 h-3 text-neon-gold fill-current" />)}
                                </div>
                              </div>
                            </div>
                            <span className="text-xs text-slate-500 font-mono">2 days ago</span>
                          </div>
                          <p className="text-sm text-slate-400 leading-relaxed">
                            Absolutely stunning quality. The modularity of the buildings makes it so easy to create unique cityscapes. Highly recommended for any cyberpunk project!
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Purchase Card */}
            <aside className="space-y-8">
              <div className="glass-panel rounded-[2.5rem] p-8 sticky top-32">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h1 className="text-3xl font-display font-bold text-white mb-2">Cyberpunk City Kit</h1>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-neon-gold fill-current" />
                        <span className="text-sm font-bold text-white">4.9</span>
                      </div>
                      <span className="text-slate-700">•</span>
                      <span className="text-xs text-slate-500 font-mono">1,240 Sales</span>
                    </div>
                  </div>
                  <div className="text-3xl font-display font-bold text-white">$45</div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-neon-lime/20">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-neon-lime" />
                      <div>
                        <div className="text-sm font-bold text-white">Standard License</div>
                        <div className="text-[10px] text-slate-500 uppercase font-mono">Commercial Use</div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-neon-lime" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 cursor-pointer transition-all">
                    <div className="flex items-center gap-3">
                      <Layers className="w-5 h-5 text-slate-400" />
                      <div>
                        <div className="text-sm font-bold text-slate-300">Extended License</div>
                        <div className="text-[10px] text-slate-500 uppercase font-mono">Unlimited Projects</div>
                      </div>
                    </div>
                    <div className="text-sm font-bold text-white">+$54</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <button className="w-full bg-neon-lime text-navy-950 py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 neon-glow-lime">
                    <ShoppingCart className="w-5 h-5" /> Add to Cart
                  </button>
                  <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3">
                    Buy Now
                  </button>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Creator</span>
                    <Link href="#" className="text-neon-cyan font-bold hover:underline">@PixelArchitect</Link>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">File Size</span>
                    <span className="text-white font-mono">124 MB</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Format</span>
                    <span className="text-white font-mono">PNG, GIF, ASE</span>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-center gap-6">
                  <button 
                    onClick={() => setIsLiked(!isLiked)}
                    className={`flex items-center gap-2 text-sm font-bold transition-colors ${isLiked ? 'text-red-500' : 'text-slate-500 hover:text-white'}`}
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                    {isLiked ? 'Saved' : 'Save'}
                  </button>
                  <button className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-white transition-colors">
                    <Share2 className="w-5 h-5" />
                    Share
                  </button>
                </div>
              </div>

              {/* Related Products */}
              <div className="space-y-6">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">More from Creator</h3>
                {[1, 2].map((i) => (
                  <div key={i} className="glass-panel rounded-2xl p-4 flex gap-4 group cursor-pointer hover:border-white/20 transition-all">
                    <div className="w-20 h-20 relative rounded-xl overflow-hidden shrink-0">
                      <Image 
                        src={`https://picsum.photos/seed/related-${i}/200/200`} 
                        alt="Related" 
                        fill 
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-sm font-bold text-white mb-1 group-hover:text-neon-lime transition-colors">Cyberpunk Props</h4>
                      <p className="text-xs text-slate-500 font-mono">$12.00</p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
