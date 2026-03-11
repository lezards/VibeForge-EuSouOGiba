'use client';

import React, { useState } from 'react';
import { StudioLayout } from '@/components/studio/StudioLayout';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Store, 
  Search, 
  Filter, 
  ShoppingBag, 
  Zap, 
  Sparkles, 
  ChevronRight, 
  Star, 
  Clock, 
  Tag,
  ArrowUpRight,
  Plus,
  Package,
  Layers,
  Ghost,
  Gamepad2,
  Sword,
  Map as MapIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const categories = [
  { id: 'all', label: 'All Assets', icon: Package },
  { id: 'characters', label: 'Characters', icon: Ghost },
  { id: 'environments', label: 'Environments', icon: MapIcon },
  { id: 'ui', label: 'UI Elements', icon: Layers },
  { id: 'vfx', label: 'VFX & Spells', icon: Zap },
  { id: 'items', label: 'Items & Loot', icon: Sword },
  { id: 'tilesets', label: 'Tilesets', icon: Gamepad2 },
];

export default function MarketPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <StudioLayout>
      <div className="flex flex-col h-full bg-navy-950 overflow-hidden">
        {/* Market Header */}
        <div className="p-8 border-b border-white/5 bg-navy-900/30 backdrop-blur-md">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-neon-gold/10 rounded-2xl">
                <Store className="w-6 h-6 text-neon-gold" />
              </div>
              <div>
                <h1 className="text-3xl font-display font-bold text-white tracking-tighter">Asset Marketplace</h1>
                <p className="text-sm text-slate-500 font-mono uppercase tracking-widest">Premium pixel art for your next project</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/history">
                <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-white hover:bg-white/10 transition-all">
                  <Plus className="w-4 h-4" /> Start Selling
                </button>
              </Link>
              <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 gap-3 focus-within:border-neon-gold transition-all">
                <Search className="w-4 h-4 text-slate-500" />
                <input type="text" placeholder="Search assets..." className="bg-transparent border-none outline-none text-sm text-white w-64" />
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap border",
                  activeCategory === cat.id 
                    ? "bg-neon-gold/10 border-neon-gold text-neon-gold" 
                    : "bg-white/5 border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
                )}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Market Content */}
        <div className="flex-grow overflow-y-auto p-8 scrollbar-hide">
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Featured Section */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 ml-1">Featured Packs</h3>
                <div className="flex items-center gap-2 text-xs font-bold text-neon-gold">
                  View All <ChevronRight className="w-4 h-4" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <MarketCard key={i} index={i} featured />
                ))}
              </div>
            </section>

            {/* Recent Assets */}
            <section className="space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 ml-1">Recent Assets</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                  <MarketCard key={i} index={i + 10} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </StudioLayout>
  );
}

function MarketCard({ featured, index }: { featured?: boolean, index: number }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={cn(
        "group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all cursor-pointer",
        featured ? "flex flex-col" : "aspect-[4/5]"
      )}
    >
      <div className={cn("relative overflow-hidden", featured ? "aspect-video" : "aspect-square")}>
        <img 
          src={`https://picsum.photos/seed/market-${index}/800/800`} 
          alt="Asset" 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold text-white flex items-center gap-1.5">
            <Star className="w-3 h-3 text-neon-gold fill-current" /> 4.9
          </div>
        </div>
        {featured && (
          <div className="absolute bottom-4 left-4">
            <div className="bg-neon-gold text-navy-950 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">
              Featured Pack
            </div>
          </div>
        )}
      </div>

      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-bold text-white truncate text-sm sm:text-base">Cyberpunk UI Kit v2</h4>
          <span className="text-neon-lime font-bold text-xs sm:text-sm whitespace-nowrap">450 VC</span>
        </div>
        <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          <span className="truncate max-w-[100px]">By PixelMaster</span>
          <span className="whitespace-nowrap">124 Sales</span>
        </div>
        {featured && (
          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed min-h-[2.5rem]">
            A comprehensive collection of 150+ animated UI elements for futuristic game interfaces.
          </p>
        )}
        <div className="pt-2 flex items-center gap-2">
          <button className="flex-grow bg-white/5 hover:bg-white/10 border border-white/10 py-2 rounded-xl text-[10px] sm:text-xs font-bold text-white transition-all flex items-center justify-center gap-2">
            <ShoppingBag className="w-3 h-3 sm:w-4 h-4" /> Add to Cart
          </button>
          <button className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white">
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
