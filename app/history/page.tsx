'use client';

import React, { useState } from 'react';
import { StudioLayout } from '@/components/studio/StudioLayout';
import { motion, AnimatePresence } from 'motion/react';
import { 
  History as HistoryIcon, 
  Search, 
  Filter, 
  Grid, 
  List, 
  Download, 
  Share2, 
  Trophy, 
  Package, 
  Tag, 
  Plus, 
  X,
  Check,
  ShoppingBag,
  Eye,
  MoreVertical,
  Trash2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import * as Dialog from '@radix-ui/react-dialog';

interface Creation {
  id: string;
  url: string;
  prompt: string;
  date: string;
  selected?: boolean;
}

export default function HistoryPage() {
  const [creations, setCreations] = useState<Creation[]>(
    Array.from({ length: 24 }, (_, i) => ({
      id: i.toString(),
      url: `https://picsum.photos/seed/history-${i}/400/400`,
      prompt: "A futuristic cyberpunk cat with neon goggles",
      date: "2026-03-11",
    }))
  );

  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isPackModalOpen, setIsPackModalOpen] = useState(false);
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);

  const toggleSelect = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    if (selectedIds.length === creations.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(creations.map(c => c.id));
    }
  };

  return (
    <StudioLayout>
      <div className="flex flex-col h-full bg-navy-950 overflow-hidden">
        {/* Header */}
        <div className="p-8 border-b border-white/5 bg-navy-900/30 backdrop-blur-md">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-neon-lime/10 rounded-2xl">
                <HistoryIcon className="w-6 h-6 text-neon-lime" />
              </div>
              <div>
                <h1 className="text-3xl font-display font-bold text-white tracking-tighter">Creation History</h1>
                <p className="text-sm text-slate-500 font-mono uppercase tracking-widest">Manage your neural masterpieces</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-2 gap-3 focus-within:border-neon-lime transition-all">
                <Search className="w-4 h-4 text-slate-500" />
                <input type="text" placeholder="Search prompts..." className="bg-transparent border-none outline-none text-sm text-white w-64" />
              </div>
              <button className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-all">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={selectAll}
                className="text-xs font-bold text-slate-400 hover:text-white transition-colors"
              >
                {selectedIds.length === creations.length ? 'Deselect All' : 'Select All'}
              </button>
              <span className="text-xs font-mono text-slate-600 uppercase tracking-widest">
                {selectedIds.length} items selected
              </span>
            </div>
            <div className="flex items-center gap-3">
              <AnimatePresence>
                {selectedIds.length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex items-center gap-3"
                  >
                    <button 
                      onClick={() => setIsPublishModalOpen(true)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 text-xs font-bold hover:bg-neon-cyan/20 transition-all"
                    >
                      <Trophy className="w-4 h-4" /> Publish to Arena
                    </button>
                    <button 
                      onClick={() => setIsPackModalOpen(true)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neon-lime text-navy-950 text-xs font-bold hover:scale-105 transition-all"
                    >
                      <Package className="w-4 h-4" /> Create Asset Pack
                    </button>
                    <button className="p-2 rounded-xl bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20 transition-all">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="h-6 w-px bg-white/10 mx-2" />
              <div className="flex bg-white/5 rounded-xl p-1 border border-white/10">
                <button className="p-1.5 rounded-lg bg-white/10 text-white"><Grid className="w-4 h-4" /></button>
                <button className="p-1.5 rounded-lg text-slate-500 hover:text-white"><List className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Area */}
        <div className="flex-grow overflow-y-auto p-8 scrollbar-hide">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {creations.map((creation) => (
              <CreationCard 
                key={creation.id} 
                creation={creation} 
                selected={selectedIds.includes(creation.id)}
                onToggle={() => toggleSelect(creation.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Asset Pack Modal */}
      <AssetPackModal 
        isOpen={isPackModalOpen} 
        onClose={() => setIsPackModalOpen(false)} 
        selectedCount={selectedIds.length}
      />

      {/* Publish Modal */}
      <PublishModal 
        isOpen={isPublishModalOpen} 
        onClose={() => setIsPublishModalOpen(false)} 
        selectedCount={selectedIds.length}
      />
    </StudioLayout>
  );
}

function CreationCard({ creation, selected, onToggle }: { creation: Creation, selected: boolean, onToggle: () => void }) {
  return (
    <motion.div 
      layout
      className={cn(
        "group relative aspect-square rounded-2xl overflow-hidden border transition-all cursor-pointer",
        selected ? "border-neon-lime ring-2 ring-neon-lime/20" : "border-white/5 hover:border-white/20"
      )}
      onClick={onToggle}
    >
      <img src={creation.url} alt="Creation" className="w-full h-full object-cover" />
      
      {/* Selection Overlay */}
      <div className={cn(
        "absolute top-3 right-3 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
        selected ? "bg-neon-lime border-neon-lime" : "bg-black/40 border-white/40 opacity-0 group-hover:opacity-100"
      )}>
        {selected && <Check className="w-4 h-4 text-navy-950" />}
      </div>

      {/* Hover Actions */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
        <p className="text-[10px] text-white font-medium line-clamp-2 mb-3">{creation.prompt}</p>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono text-slate-400">{creation.date}</span>
          <div className="flex items-center gap-2">
            <button className="p-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20"><Eye className="w-3 h-3" /></button>
            <button className="p-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20"><Download className="w-3 h-3" /></button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AssetPackModal({ isOpen, onClose, selectedCount }: { isOpen: boolean, onClose: () => void, selectedCount: number }) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-navy-950 border border-white/10 rounded-3xl p-8 z-[101] shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-neon-lime/10 rounded-xl">
                <Package className="w-5 h-5 text-neon-lime" />
              </div>
              <Dialog.Title className="text-xl font-bold text-white">Create Asset Pack</Dialog.Title>
            </div>
            <Dialog.Close className="p-2 rounded-full hover:bg-white/5 text-slate-400">
              <X className="w-5 h-5" />
            </Dialog.Close>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-slate-500">Pack Title</label>
                <input type="text" placeholder="Cyberpunk UI Essentials" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-lime/50" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-slate-500">Description</label>
                <textarea placeholder="A collection of 100+ high-quality pixel art assets..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-lime/50 h-32 resize-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-slate-500">Price (VibeCredits)</label>
                <div className="relative">
                  <input type="number" placeholder="500" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-lime/50" />
                  <ShoppingBag className="absolute right-4 top-3.5 w-4 h-4 text-slate-500" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-slate-500">Cover Image</label>
                <div className="aspect-video rounded-2xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center gap-3 hover:border-neon-lime/50 transition-colors cursor-pointer group">
                  <Plus className="w-8 h-8 text-slate-600 group-hover:text-neon-lime transition-colors" />
                  <span className="text-xs text-slate-500">Upload Cover</span>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-slate-500 uppercase">Selected Assets</span>
                  <span className="text-xs font-bold text-neon-lime">{selectedCount}</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="aspect-square rounded-lg bg-white/5 border border-white/10" />
                  ))}
                </div>
              </div>
              <button className="w-full bg-neon-lime text-navy-950 font-bold py-4 rounded-xl hover:scale-[1.02] transition-all shadow-lg shadow-neon-lime/20">
                Publish to Marketplace
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function PublishModal({ isOpen, onClose, selectedCount }: { isOpen: boolean, onClose: () => void, selectedCount: number }) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-navy-950 border border-white/10 rounded-3xl p-8 z-[101] shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-neon-cyan/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-8 h-8 text-neon-cyan" />
            </div>
            <Dialog.Title className="text-2xl font-bold text-white mb-2">Publish to Arena</Dialog.Title>
            <Dialog.Description className="text-slate-500">
              Submit your best work to the Season 04 Arena and compete for a prize pool of 50,000 VibeCredits.
            </Dialog.Description>
          </div>

          <div className="space-y-6">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-500 uppercase">Selected Items</span>
                <span className="text-xs font-bold text-neon-cyan">{selectedCount}</span>
              </div>
              <p className="text-[10px] text-slate-600 leading-relaxed uppercase tracking-wider">
                Each submission costs 10 credits. Total cost: {selectedCount * 10} credits.
              </p>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-widest text-slate-500 ml-1">Select Category</label>
              <select className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-cyan">
                <option>Cyberpunk Characters</option>
                <option>Fantasy Landscapes</option>
                <option>Sci-Fi UI Elements</option>
                <option>Retro Game Assets</option>
              </select>
            </div>

            <button className="w-full bg-neon-cyan text-navy-950 font-bold py-4 rounded-xl hover:scale-[1.02] transition-all shadow-lg shadow-neon-cyan/20">
              Confirm Submission
            </button>
            <button onClick={onClose} className="w-full text-slate-500 font-bold py-2 hover:text-white transition-colors">
              Cancel
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
