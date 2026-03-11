'use client';

import React, { useState } from 'react';
import { StudioLayout } from '@/components/studio/StudioLayout';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  Heart, 
  MessageSquare, 
  Share2, 
  Eye, 
  ChevronRight, 
  Sparkles, 
  Timer, 
  Flame,
  User,
  Send,
  X,
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function ArenaPage() {
  const [activeTab, setActiveTab] = useState('trending');

  return (
    <StudioLayout>
      <div className="flex flex-col h-full bg-navy-950 overflow-y-auto p-8 scrollbar-hide">
        <div className="max-w-[1600px] mx-auto w-full space-y-12">
          
          {/* Arena Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-neon-cyan/10 rounded-lg">
                  <Trophy className="w-5 h-5 text-neon-cyan" />
                </div>
                <h1 className="text-3xl font-display font-bold text-white tracking-tighter">Vibe Arena</h1>
              </div>
              <p className="text-sm text-slate-500 font-mono uppercase tracking-widest">Season 04: Cyber Genesis • 12 Days Left</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex bg-white/5 border border-white/10 rounded-xl p-1">
                {['Trending', 'Newest', 'Top Rated'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className={cn(
                      "px-6 py-2 rounded-lg text-xs font-bold transition-all",
                      activeTab === tab.toLowerCase() ? "bg-white/10 text-white" : "text-slate-500 hover:text-slate-300"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <button className="bg-neon-cyan text-navy-950 px-6 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-all shadow-lg shadow-neon-cyan/20">
                Submit Artwork
              </button>
            </div>
          </div>

          {/* Top 3 Highlights */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HighlightCard rank={2} name="Neon Samurai" artist="CyberGhost" likes={1240} />
            <HighlightCard rank={1} name="Digital Eden" artist="PixelMaster" likes={2850} featured />
            <HighlightCard rank={3} name="Void Runner" artist="RetroWave" likes={980} />
          </section>

          {/* 5x5 Grid Entries */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 ml-1">Arena Entries</h3>
              <span className="text-xs font-mono text-neon-cyan">Showing 25 of 1,420 entries</span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {Array.from({ length: 25 }).map((_, i) => (
                <ArenaCard key={i} index={i + 4} />
              ))}
            </div>
          </section>

          {/* Pagination */}
          <div className="flex justify-center pt-8">
            <button className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-sm font-bold text-white hover:bg-white/10 transition-all">
              Load More Entries <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </StudioLayout>
  );
}

function HighlightCard({ rank, name, artist, likes, featured }: { rank: number, name: string, artist: string, likes: number, featured?: boolean }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={cn(
        "relative rounded-[2.5rem] overflow-hidden border transition-all",
        featured 
          ? "aspect-[4/5] md:aspect-auto md:h-[500px] border-neon-cyan/50 shadow-2xl shadow-neon-cyan/10" 
          : "aspect-square border-white/10"
      )}
    >
      <img src={`https://picsum.photos/seed/arena-${rank}/800/1200`} alt={name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
      
      <div className="absolute top-6 left-6">
        <div className={cn(
          "w-12 h-12 rounded-2xl flex items-center justify-center font-display font-bold text-xl shadow-lg",
          rank === 1 ? "bg-neon-gold text-navy-950" : rank === 2 ? "bg-slate-300 text-navy-950" : "bg-amber-700 text-white"
        )}>
          #{rank}
        </div>
      </div>

      <div className="absolute bottom-8 left-8 right-8 space-y-4">
        <div>
          <h3 className={cn("font-display font-bold text-white tracking-tight", featured ? "text-4xl" : "text-2xl")}>{name}</h3>
          <p className="text-sm text-slate-400 font-mono uppercase tracking-widest">By {artist}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-neon-lime">
              <Heart className="w-4 h-4 fill-current" />
              <span className="text-sm font-bold">{likes}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <MessageSquare className="w-4 h-4" />
              <span className="text-sm font-bold">42</span>
            </div>
          </div>
          <Link href={`/arena/post/${rank}`}>
            <button className="p-3 rounded-xl bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function ArenaCard({ index }: { index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(100 + (index * 17) % 400);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked(!liked);
    setLikesCount(prev => liked ? prev - 1 : prev + 1);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    alert('Link copied to clipboard!');
  };

  return (
    <div className="relative aspect-[3/4] group perspective-1000">
      <motion.div 
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        className="w-full h-full relative preserve-3d"
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden border border-white/10 bg-white/5">
          <img src={`https://picsum.photos/seed/entry-${index}/400/600`} alt="Entry" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
            <div className="flex items-center gap-2">
              <button 
                onClick={handleLike}
                className={cn(
                  "p-2 rounded-lg backdrop-blur-md transition-all",
                  liked ? "bg-neon-lime text-navy-950" : "bg-black/40 text-white hover:bg-black/60"
                )}
              >
                <Heart className={cn("w-4 h-4", liked && "fill-current")} />
              </button>
              <button 
                onClick={() => setIsFlipped(true)}
                className="p-2 rounded-lg bg-black/40 backdrop-blur-md text-white hover:bg-black/60 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
            <Link href={`/arena/post/${index}`}>
              <button className="p-2 rounded-lg bg-black/40 backdrop-blur-md text-white hover:bg-black/60 transition-all">
                <Eye className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="absolute top-4 right-4">
            <div className="bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-bold text-white flex items-center gap-1">
              <Heart className="w-3 h-3 text-neon-lime fill-current" /> {likesCount}
            </div>
          </div>
        </div>

        {/* Back Side (Message/Artist Info) */}
        <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden border border-white/10 bg-navy-900 p-6 flex flex-col rotate-y-180">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 overflow-hidden">
                <img src={`https://picsum.photos/seed/artist-${index}/100/100`} alt="Artist" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Artist Name</p>
                <p className="text-[10px] text-slate-500 font-mono uppercase">@artist_handle</p>
              </div>
            </div>
            <button 
              onClick={() => setIsFlipped(false)}
              className="p-2 rounded-lg hover:bg-white/5 text-slate-500 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-grow space-y-4">
            <div className="aspect-video rounded-xl overflow-hidden border border-white/5">
              <img src={`https://picsum.photos/seed/entry-${index}/400/600`} alt="Entry Small" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-bold text-white">Send a message</p>
              <textarea 
                placeholder="Tell the artist what you think..." 
                className="w-full bg-navy-950 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-neon-cyan transition-all resize-none h-24"
              />
            </div>
          </div>

          <div className="pt-4 flex items-center gap-2">
            <button className="flex-grow bg-neon-cyan text-navy-950 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all">
              Send <Send className="w-3 h-3" />
            </button>
            <button 
              onClick={handleShare}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-all"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
