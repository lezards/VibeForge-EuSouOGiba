'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Trash2, Image as ImageIcon, Wand2, Sparkles, Zap, RefreshCcw, Download, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface BatchCard {
  id: string;
  prompt: string;
  status: 'idle' | 'generating' | 'completed' | 'error';
  imageUrl?: string;
}

export function BatchGrid() {
  const [cards, setCards] = useState<BatchCard[]>(
    Array.from({ length: 25 }, (_, i) => ({
      id: i.toString(),
      prompt: '',
      status: 'idle',
    }))
  );

  const updateCard = (id: string, prompt: string) => {
    setCards(prev => prev.map(card => card.id === id ? { ...card, prompt } : card));
  };

  const generateAll = () => {
    setCards(prev => prev.map(card => ({ ...card, status: 'generating' })));
    
    // Simulate generation
    setTimeout(() => {
      setCards(prev => prev.map((card, i) => ({
        ...card,
        status: 'completed',
        imageUrl: `https://picsum.photos/seed/batch-${i}/400/400`
      })));
    }, 3000);
  };

  const clearAll = () => {
    setCards(prev => prev.map(card => ({ ...card, prompt: '', status: 'idle', imageUrl: undefined })));
  };

  return (
    <div className="flex flex-col h-full bg-navy-950 overflow-hidden">
      {/* Toolbar */}
      <div className="p-6 border-b border-white/5 flex items-center justify-between bg-navy-900/30 backdrop-blur-md">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-neon-lime" />
            <h1 className="text-2xl font-display font-bold text-white tracking-tighter">Batch Studio</h1>
          </div>
          <div className="h-6 w-px bg-white/10" />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-xs font-mono text-slate-500">Grid Size</span>
              <span className="text-xs font-bold text-white">5x5</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-xs font-mono text-slate-500">Total Cards</span>
              <span className="text-xs font-bold text-white">25</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={clearAll}
            className="px-4 py-2 rounded-xl text-sm font-bold text-slate-400 hover:bg-white/5 hover:text-white transition-all flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" /> Clear All
          </button>
          <button 
            onClick={generateAll}
            className="px-6 py-2.5 rounded-xl bg-neon-lime text-navy-950 font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-neon-lime/20"
          >
            <Sparkles className="w-4 h-4" /> Generate Batch
          </button>
        </div>
      </div>

      {/* Grid Area */}
      <div className="flex-grow overflow-y-auto p-8 scrollbar-hide">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.01 }}
              className={cn(
                "aspect-square rounded-2xl border transition-all relative group overflow-hidden",
                card.status === 'idle' ? "bg-white/5 border-white/10 hover:border-white/20" : 
                card.status === 'generating' ? "bg-navy-900 border-neon-lime/30 animate-pulse" :
                "bg-navy-900 border-white/10"
              )}
            >
              {card.imageUrl ? (
                <div className="absolute inset-0">
                  <img 
                    src={card.imageUrl} 
                    alt="Generated" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <Link href="/studio/editor">
                      <button className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20">
                        <Wand2 className="w-4 h-4" />
                      </button>
                    </Link>
                    <button className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20">
                      <RefreshCcw className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-4 h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-600 uppercase">Card #{idx + 1}</span>
                    {card.status === 'generating' && <Zap className="w-3 h-3 text-neon-lime animate-bounce" />}
                  </div>
                  <textarea
                    value={card.prompt}
                    onChange={(e) => updateCard(card.id, e.target.value)}
                    placeholder="Enter prompt..."
                    className="w-full bg-transparent text-xs text-white placeholder:text-slate-700 focus:outline-none resize-none h-16 scrollbar-hide"
                  />
                  <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 rounded-lg hover:bg-white/5 text-slate-500 hover:text-white">
                      <Wand2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
