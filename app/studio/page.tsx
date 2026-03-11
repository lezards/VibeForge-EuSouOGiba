'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { StudioLayout } from '@/components/studio/StudioLayout';
import { PromptChat } from '@/components/studio/PromptChat';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Sparkles, 
  Wand2, 
  Image as ImageIcon, 
  Maximize2, 
  Download, 
  Share2, 
  History,
  Settings2,
  SlidersHorizontal,
  Layout,
  Type,
  Palette,
  Eye,
  RefreshCcw,
  Trash2,
  Home
} from 'lucide-react';
import { cn } from '@/lib/utils';
import * as Slider from '@radix-ui/react-slider';
import * as Select from '@radix-ui/react-select';
import * as Switch from '@radix-ui/react-switch';

export default function StudioPage() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    // Simulate generation
    setTimeout(() => {
      setGeneratedImage(`https://picsum.photos/seed/${prompt}/1024/1024`);
      setIsGenerating(false);
    }, 2500);
  };

  return (
    <StudioLayout>
      <div className="flex h-full overflow-hidden">
        {/* Left Settings Sidebar */}
        <aside className="w-80 border-r border-white/5 bg-navy-900/30 backdrop-blur-xl overflow-y-auto p-6 space-y-8 scrollbar-hide hidden lg:block">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500">Generation Settings</h3>
            <Settings2 className="w-4 h-4 text-slate-500" />
          </div>

          <div className="space-y-6">
            <SettingGroup label="Aspect Ratio">
              <div className="grid grid-cols-3 gap-2">
                <RatioButton label="1:1" active />
                <RatioButton label="16:9" />
                <RatioButton label="9:16" />
                <RatioButton label="4:3" />
                <RatioButton label="3:4" />
                <RatioButton label="21:9" />
              </div>
            </SettingGroup>

            <SettingGroup label="Model Version">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-colors">
                <span className="text-sm font-medium text-white">VibeForge XL v2.4</span>
                <Layout className="w-4 h-4 text-neon-lime" />
              </div>
            </SettingGroup>

            <SettingGroup label="Guidance Scale (CFG)">
              <div className="space-y-4">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-500">Value</span>
                  <span className="text-neon-lime">7.5</span>
                </div>
                <Slider.Root className="relative flex items-center select-none touch-none w-full h-5" defaultValue={[7.5]} max={20} step={0.1}>
                  <Slider.Track className="bg-white/10 relative grow rounded-full h-[3px]">
                    <Slider.Range className="absolute bg-neon-lime rounded-full h-full" />
                  </Slider.Track>
                  <Slider.Thumb className="block w-4 h-4 bg-white shadow-lg rounded-full hover:scale-110 transition-transform focus:outline-none" />
                </Slider.Root>
              </div>
            </SettingGroup>

            <SettingGroup label="Steps">
              <div className="space-y-4">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-500">Value</span>
                  <span className="text-neon-lime">30</span>
                </div>
                <Slider.Root className="relative flex items-center select-none touch-none w-full h-5" defaultValue={[30]} max={100} step={1}>
                  <Slider.Track className="bg-white/10 relative grow rounded-full h-[3px]">
                    <Slider.Range className="absolute bg-neon-lime rounded-full h-full" />
                  </Slider.Track>
                  <Slider.Thumb className="block w-4 h-4 bg-white shadow-lg rounded-full hover:scale-110 transition-transform focus:outline-none" />
                </Slider.Root>
              </div>
            </SettingGroup>

            <SettingGroup label="Advanced Options">
              <div className="space-y-3">
                <ToggleOption label="High Definition" defaultChecked />
                <ToggleOption label="Upscale 2x" />
                <ToggleOption label="Face Restoration" />
                <ToggleOption label="Negative Prompt" />
              </div>
            </SettingGroup>
          </div>
        </aside>

        {/* Central Generation Area */}
        <div className="flex-grow flex flex-col overflow-hidden bg-navy-950">
          {/* Top Bar */}
          <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-navy-950/50 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <Link href="/" className="p-2 text-slate-500 hover:text-white transition-colors">
                <Home className="w-5 h-5" />
              </Link>
              <div className="w-px h-4 bg-white/10" />
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Project: Untitled_Sprite_01</span>
              <div className="w-px h-4 bg-white/10" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-[10px] font-bold text-slate-400 uppercase">Auto-save active</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 text-slate-400 hover:text-white transition-colors"><Share2 className="w-4 h-4" /></button>
              <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-1.5 rounded-lg text-xs font-bold transition-all">
                History
              </button>
            </div>
          </div>

          <div className="flex-grow p-8 flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              {isGenerating ? (
                <motion.div 
                  key="generating"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="flex flex-col items-center gap-6"
                >
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0 border-4 border-neon-lime/20 rounded-full" />
                    <div className="absolute inset-0 border-4 border-neon-lime rounded-full border-t-transparent animate-spin" />
                    <Zap className="absolute inset-0 m-auto w-10 h-10 text-neon-lime animate-pulse" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-display font-bold text-white mb-2">Forging Art...</h3>
                    <p className="text-sm text-slate-500 font-mono uppercase tracking-widest">Applying neural layers</p>
                  </div>
                </motion.div>
              ) : generatedImage ? (
                <motion.div 
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative group max-w-2xl w-full aspect-square rounded-3xl overflow-hidden glass-panel p-2"
                >
                  <img src={generatedImage} alt="Generated" className="w-full h-full object-cover rounded-2xl" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Link href="/studio/editor">
                      <ActionButton icon={Wand2} label="Edit" />
                    </Link>
                    <ActionButton icon={Download} label="Download" />
                    <ActionButton icon={Maximize2} label="Upscale" />
                    <ActionButton icon={Share2} label="Share" />
                    <ActionButton icon={Trash2} label="Discard" />
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center text-center max-w-md"
                >
                  <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                    <ImageIcon className="w-10 h-10 text-slate-600" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">Ready to Create?</h2>
                  <p className="text-slate-500 leading-relaxed">
                    Enter your prompt below and let VibeForge bring your imagination to life. Use the AI assistant for better results.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Prompt Input Area */}
          <div className="p-8 border-t border-white/5 bg-navy-900/30 backdrop-blur-xl">
            <div className="max-w-4xl mx-auto relative">
              <div className="flex items-center gap-4 mb-4">
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 hover:text-white transition-all uppercase tracking-wider">
                  <RefreshCcw className="w-3 h-3" /> Random Prompt
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 hover:text-white transition-all uppercase tracking-wider">
                  <History className="w-3 h-3" /> Recent Prompts
                </button>
              </div>
              <div className="relative group">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe your masterpiece..."
                  className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-5 pr-40 text-lg text-white placeholder:text-slate-700 focus:outline-none focus:border-neon-lime/50 transition-all resize-none h-32 scrollbar-hide"
                />
                <div className="absolute bottom-4 right-4 flex items-center gap-3">
                  <button className="p-3 rounded-2xl hover:bg-white/5 text-slate-500 hover:text-white transition-colors">
                    <Wand2 className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={handleGenerate}
                    disabled={!prompt.trim() || isGenerating}
                    className="bg-neon-lime text-navy-950 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 shadow-lg shadow-neon-lime/20"
                  >
                    Generate <Sparkles className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right AI Assistant Sidebar */}
        <div className="w-80 border-l border-white/5 bg-navy-900/30 backdrop-blur-xl hidden xl:block">
          <PromptChat />
        </div>
      </div>
    </StudioLayout>
  );
}

function SettingGroup({ label, children }: { label: string, children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500 ml-1">{label}</label>
      {children}
    </div>
  );
}

function RatioButton({ label, active }: { label: string, active?: boolean }) {
  return (
    <button className={cn(
      "px-4 py-2 rounded-xl text-xs font-bold transition-all border",
      active 
        ? "bg-neon-lime/10 border-neon-lime text-neon-lime" 
        : "bg-white/5 border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
    )}>
      {label}
    </button>
  );
}

function ToggleOption({ label, defaultChecked }: { label: string, defaultChecked?: boolean }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
      <span className="text-xs font-medium text-slate-300">{label}</span>
      <Switch.Root defaultChecked={defaultChecked} className="w-8 h-4 bg-white/10 rounded-full relative data-[state=checked]:bg-neon-lime outline-none cursor-pointer transition-colors">
        <Switch.Thumb className="block w-3 h-3 bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[18px]" />
      </Switch.Root>
    </div>
  );
}

function ActionButton({ icon: Icon, label }: { icon: any, label: string }) {
  return (
    <button className="flex flex-col items-center gap-2 group/btn">
      <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all hover:scale-110">
        <Icon className="w-6 h-6" />
      </div>
      <span className="text-[10px] font-bold text-white opacity-0 group-hover/btn:opacity-100 transition-opacity uppercase tracking-widest">{label}</span>
    </button>
  );
}
