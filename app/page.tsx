'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'motion/react';
import { Zap, Trophy, Store, ArrowRight, Star, Users, ShieldCheck, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 pixel-grid opacity-20" />
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-lime/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neon-cyan/10 blur-[120px] rounded-full" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
                  <span className="w-2 h-2 bg-neon-lime rounded-full animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-300">Season 04 Now Live</span>
                </div>
                <h1 className="font-display text-6xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
                  THE FUTURE OF <span className="text-neon-lime">VIBE</span> CRAFT.
                </h1>
                <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
                  VibeForge is the ultimate ecosystem for digital artists. AI-powered creation, a global marketplace, and seasonal arenas with massive rewards.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/studio" className="bg-neon-lime text-navy-950 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform neon-glow-lime">
                    Start Creating <Zap className="w-5 h-5 fill-current" />
                  </Link>
                  <Link href="/market" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
                    Explore Market <Store className="w-5 h-5" />
                  </Link>
                </div>
                
                <div className="mt-16 grid grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-display font-bold text-white">120K+</div>
                    <div className="text-xs uppercase tracking-widest text-slate-500 font-mono">Creators</div>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-white">$2.4M</div>
                    <div className="text-xs uppercase tracking-widest text-slate-500 font-mono">Volume</div>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-white">450K+</div>
                    <div className="text-xs uppercase tracking-widest text-slate-500 font-mono">Assets</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative"
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden glass-panel p-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-lime/20 to-transparent opacity-50" />
                  <Image 
                    src="https://picsum.photos/seed/pixel-hero/800/800" 
                    alt="Featured Pixel Art" 
                    fill 
                    className="object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-8 left-8 right-8 glass-panel p-6 rounded-2xl flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400 mb-1 font-mono">Featured Creation</div>
                      <div className="text-xl font-display font-bold text-white">Cyber Samurai #042</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-400 mb-1 font-mono">Current Bid</div>
                      <div className="text-xl font-display font-bold text-neon-cyan">0.85 ETH</div>
                    </div>
                  </div>
                </div>
                {/* Floating UI Elements */}
                <div className="absolute -top-10 -right-10 glass-panel p-4 rounded-2xl animate-bounce duration-[3000ms]">
                  <Trophy className="text-neon-gold w-8 h-8" />
                </div>
                <div className="absolute -bottom-6 -left-10 glass-panel px-4 py-3 rounded-2xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center">
                    <Star className="text-neon-cyan w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold text-white">Top Rated</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Seasonal Challenge Section */}
        <section className="px-6 py-24 bg-navy-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="glass-panel rounded-3xl p-12 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-gold/10 to-transparent" />
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-2 text-neon-gold mb-6">
                    <Trophy className="w-6 h-6" />
                    <span className="font-mono uppercase tracking-[0.2em] font-bold">Forge Arena Challenge</span>
                  </div>
                  <h2 className="text-5xl font-display font-bold text-white mb-6 leading-tight">
                    NEON DYSTOPIA <br /> SEASONAL CLASH
                  </h2>
                  <p className="text-slate-400 mb-8 text-lg">
                    Submit your best cyberpunk-themed pixel art. The community votes, the legends judge. Over $1,000 in prizes and exclusive badges.
                  </p>
                  <div className="flex items-center gap-8 mb-10">
                    <div>
                      <div className="text-4xl font-display font-bold text-white">$1,000</div>
                      <div className="text-xs text-slate-500 uppercase font-mono">Prize Pool</div>
                    </div>
                    <div className="w-px h-12 bg-white/10" />
                    <div>
                      <div className="text-4xl font-display font-bold text-white">12D 04H</div>
                      <div className="text-xs text-slate-500 uppercase font-mono">Time Left</div>
                    </div>
                  </div>
                  <Link href="/arena" className="inline-flex items-center gap-2 bg-neon-gold text-navy-950 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform">
                    Join Challenge <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square rounded-2xl overflow-hidden relative group">
                      <Image 
                        src={`https://picsum.photos/seed/arena-${i}/400/400`} 
                        alt="Arena Entry" 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-xs font-bold text-white">Entry #{i*124}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trending from Arena */}
        <section className="px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-4xl font-display font-bold text-white mb-4">FORGE ARENA</h2>
                <p className="text-slate-400">Trending creations from the public social wall.</p>
              </div>
              <Link href="/arena" className="text-neon-cyan font-bold flex items-center gap-2 hover:underline">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="glass-panel rounded-2xl overflow-hidden group"
                >
                  <div className="aspect-square relative">
                    <Image 
                      src={`https://picsum.photos/seed/trending-${i}/500/500`} 
                      alt="Trending Art" 
                      fill 
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-1">
                      <Star className="w-3 h-3 text-neon-gold fill-current" />
                      <span className="text-[10px] font-bold text-white">4.9</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neon-lime to-neon-cyan" />
                      <div>
                        <div className="text-sm font-bold text-white">PixelMaster_{i}</div>
                        <div className="text-[10px] text-slate-500 font-mono uppercase">Pro Creator</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button className="text-slate-400 hover:text-neon-lime transition-colors">
                          <Trophy className="w-4 h-4" />
                        </button>
                        <span className="text-xs font-bold text-slate-300">{120 + i * 45} Votes</span>
                      </div>
                      <button className="text-xs font-bold text-neon-cyan hover:underline">Vote</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Forge Market Section */}
        <section className="px-6 py-24 bg-navy-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-4xl font-display font-bold text-white mb-4">FORGE MARKET</h2>
                <p className="text-slate-400">Premium asset packs for your next game project.</p>
              </div>
              <Link href="/market" className="text-neon-lime font-bold flex items-center gap-2 hover:underline">
                Browse Market <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Fantasy RPG Kit', price: '$24', items: '120 Assets', color: 'neon-lime' },
                { title: 'Sci-Fi UI Pack', price: '$19', items: '85 Assets', color: 'neon-cyan' },
                { title: 'Retro Platformer', price: '$29', items: '200 Assets', color: 'neon-gold' },
              ].map((pack, i) => (
                <div key={i} className="glass-panel rounded-3xl p-6 group cursor-pointer hover:border-white/20 transition-all">
                  <div className="aspect-[4/3] relative rounded-2xl overflow-hidden mb-6">
                    <Image 
                      src={`https://picsum.photos/seed/pack-${i}/600/450`} 
                      alt={pack.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-display font-bold text-white mb-1">{pack.title}</h3>
                      <p className="text-sm text-slate-500 font-mono">{pack.items}</p>
                    </div>
                    <div className="text-2xl font-display font-bold text-white">{pack.price}</div>
                  </div>
                  <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 py-3 rounded-xl text-sm font-bold transition-all">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Forge Studio Promo */}
        <section className="px-6 py-24 overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-neon-lime/5 blur-[120px] -rotate-12" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative glass-panel rounded-3xl p-8 aspect-video">
                  <div className="absolute inset-0 pixel-grid opacity-10" />
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Forge Studio v2.4</div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-white/5 rounded w-3/4" />
                    <div className="h-4 bg-white/5 rounded w-1/2" />
                    <div className="h-32 bg-white/5 rounded-xl border border-dashed border-white/10 flex items-center justify-center">
                      <Zap className="w-12 h-12 text-neon-lime animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-5xl font-display font-bold text-white mb-8 leading-tight">
                  AI-POWERED <br /> <span className="text-neon-lime">PIXEL</span> PRECISION.
                </h2>
                <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                  Our proprietary AI engine understands pixel logic. Generate high-fidelity assets, spritesheets, and backgrounds in seconds. No more manual grid-filling.
                </p>
                <ul className="space-y-6 mb-12">
                  {[
                    { icon: Zap, text: 'Instant Sprite Generation' },
                    { icon: Globe, text: 'Multi-style Training Models' },
                    { icon: ShieldCheck, text: 'Commercial Rights Included' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white font-medium">
                      <div className="w-10 h-10 rounded-xl bg-neon-lime/10 flex items-center justify-center text-neon-lime">
                        <item.icon className="w-5 h-5" />
                      </div>
                      {item.text}
                    </li>
                  ))}
                </ul>
                <Link href="/studio" className="inline-flex items-center gap-2 bg-white text-navy-950 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform">
                  Try Forge Studio <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Referral Section */}
        <section className="px-6 py-24">
          <div className="max-w-4xl mx-auto glass-panel rounded-[2.5rem] p-12 text-center relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-neon-cyan/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-neon-lime/10 blur-3xl rounded-full" />
            
            <div className="relative z-10">
              <Users className="w-16 h-16 text-neon-cyan mx-auto mb-8" />
              <h2 className="text-4xl font-display font-bold text-white mb-6">INVITE THE SQUAD</h2>
              <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                Share your unique referral link. When your friends join and create, you both earn <span className="text-neon-gold font-bold">Forge Credits</span> and exclusive cosmetics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-navy-900 border border-white/10 rounded-xl px-6 py-4 font-mono text-slate-300 flex items-center justify-between gap-4">
                  FORGE.GG/REF/PIXEL_LORD
                  <button className="text-neon-cyan text-xs font-bold hover:underline">COPY</button>
                </div>
                <Link href="/referrals" className="bg-neon-cyan text-navy-950 px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity">
                  View Rewards
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-32 text-center">
          <h2 className="text-6xl lg:text-8xl font-display font-bold text-white mb-12 tracking-tighter">
            READY TO <span className="text-neon-lime">FORGE</span>?
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/studio" className="bg-neon-lime text-navy-950 px-12 py-6 rounded-2xl font-bold text-xl hover:scale-105 transition-transform neon-glow-lime">
              Get Started Free
            </Link>
            <Link href="/market" className="bg-white/5 border border-white/10 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all">
              Browse Assets
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
