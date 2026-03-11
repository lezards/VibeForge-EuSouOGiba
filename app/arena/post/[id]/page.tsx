'use client';

import React, { useState } from 'react';
import { StudioLayout } from '@/components/studio/StudioLayout';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  MessageSquare, 
  Share2, 
  ChevronLeft, 
  Send, 
  MoreVertical, 
  User, 
  Star, 
  Trophy,
  Calendar,
  Eye,
  ArrowUpRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function PostDetailsPage() {
  const [comment, setComment] = useState('');
  const [liked, setLiked] = useState(false);

  return (
    <StudioLayout>
      <div className="flex flex-col h-full bg-navy-950 overflow-y-auto p-8 scrollbar-hide">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left: Artwork Display */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/arena">
              <button className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-4">
                <ChevronLeft className="w-4 h-4" /> Back to Arena
              </button>
            </Link>
            
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-navy-900 shadow-2xl shadow-black/50">
              <img src="https://picsum.photos/seed/details-vibe/1200/1200" alt="Artwork" className="w-full h-auto" />
              <div className="absolute top-6 right-6 flex gap-3">
                <button className="p-4 rounded-2xl bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition-all">
                  <Share2 className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => setLiked(!liked)}
                  className={cn(
                    "p-4 rounded-2xl backdrop-blur-md transition-all",
                    liked ? "bg-neon-lime text-navy-950" : "bg-black/60 text-white hover:bg-black/80"
                  )}
                >
                  <Heart className={cn("w-6 h-6", liked && "fill-current")} />
                </button>
              </div>
            </div>

            {/* Artwork Info */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-display font-bold text-white tracking-tighter">Cyberpunk Serenity</h1>
                  <p className="text-sm text-slate-500 font-mono uppercase tracking-widest mt-1">Generated with VibeForge Pro v2.4</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-xl font-display font-bold text-white">2.8k</p>
                    <p className="text-[10px] text-slate-500 uppercase font-mono">Likes</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-display font-bold text-white">420</p>
                    <p className="text-[10px] text-slate-500 uppercase font-mono">Views</p>
                  </div>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                An exploration of digital tranquility within a chaotic neon landscape. This piece was created using advanced neural layering and custom pixel-perfect refinement tools.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Cyberpunk', 'PixelArt', 'Neon', 'Futuristic', 'Season04'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Artist & Comments */}
          <div className="space-y-8">
            
            {/* Artist Card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-neon-lime to-neon-cyan p-[1px]">
                  <div className="w-full h-full rounded-2xl bg-navy-950 flex items-center justify-center overflow-hidden">
                    <img src="https://picsum.photos/seed/artist-pro/200/200" alt="Artist" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">PixelMaster</h3>
                  <p className="text-xs text-slate-500 font-mono uppercase tracking-widest">@pixel_master_art</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-navy-950 border border-white/5">
                  <p className="text-[10px] text-slate-500 uppercase font-mono mb-1">Rank</p>
                  <p className="text-lg font-bold text-neon-gold flex items-center gap-2">
                    <Trophy className="w-4 h-4" /> #04
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-navy-950 border border-white/5">
                  <p className="text-[10px] text-slate-500 uppercase font-mono mb-1">Sales</p>
                  <p className="text-lg font-bold text-white">1.2k</p>
                </div>
              </div>

              <button className="w-full bg-white/5 border border-white/10 py-4 rounded-2xl font-bold text-sm text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                View Artist Profile <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Comments Section */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col h-[600px]">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-neon-cyan" /> Comments (12)
              </h3>
              
              <div className="flex-grow overflow-y-auto space-y-6 pr-2 scrollbar-hide">
                {[
                  { user: 'NeonGhost', text: 'The color palette is absolutely stunning! How did you achieve that glow effect?', date: '2h ago', reply: 'Thanks! I used the custom VibeForge glow layers.' },
                  { user: 'CyberSamurai', text: 'Incredible detail on the background buildings.', date: '5h ago' },
                  { user: 'RetroWave', text: 'This is definitely winning the season.', date: '1d ago' },
                ].map((c, i) => (
                  <div key={i} className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 shrink-0" />
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white">{c.user}</span>
                          <span className="text-[10px] text-slate-600 font-mono">{c.date}</span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">{c.text}</p>
                      </div>
                    </div>
                    {c.reply && (
                      <div className="ml-11 flex gap-3 border-l border-white/5 pl-4">
                        <div className="w-6 h-6 rounded-full bg-neon-lime/20 flex items-center justify-center shrink-0">
                          <User className="w-3 h-3 text-neon-lime" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold text-neon-lime uppercase">Artist Reply</span>
                          </div>
                          <p className="text-[10px] text-slate-500 leading-relaxed italic">{c.reply}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/5 space-y-4">
                <div className="relative">
                  <textarea 
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write a comment..." 
                    className="w-full bg-navy-950 border border-white/10 rounded-2xl p-4 text-xs text-white focus:outline-none focus:border-neon-cyan transition-all resize-none h-24"
                  />
                  <button className="absolute bottom-4 right-4 p-2 rounded-lg bg-neon-cyan text-navy-950 hover:scale-105 transition-all">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </StudioLayout>
  );
}
