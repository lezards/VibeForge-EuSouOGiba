'use client';

import React, { useState, useRef, useEffect } from 'react';
import { StudioLayout } from '@/components/studio/StudioLayout';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wand2, 
  Type, 
  Palette, 
  Maximize2, 
  Download, 
  Share2, 
  Undo2, 
  Redo2, 
  Layers, 
  PenTool, 
  Eraser, 
  MousePointer2,
  Sparkles,
  Save,
  ChevronLeft,
  SlidersHorizontal,
  Contrast,
  Sun,
  Droplets,
  Stamp,
  Check
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function ImageEditorPage() {
  const [activeTool, setActiveTool] = useState('select');
  const [signature, setSignature] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [showSignature, setShowSignature] = useState(true);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 2000);
  };

  return (
    <StudioLayout>
      <div className="flex h-full bg-navy-950 overflow-hidden">
        
        {/* Left Toolbar */}
        <aside className="w-20 border-r border-white/5 bg-navy-900/50 backdrop-blur-xl flex flex-col items-center py-8 gap-6">
          <Link href="/studio">
            <button className="p-3 rounded-2xl bg-white/5 text-slate-400 hover:text-white transition-all mb-4">
              <ChevronLeft className="w-5 h-5" />
            </button>
          </Link>
          
          <ToolButton icon={MousePointer2} active={activeTool === 'select'} onClick={() => setActiveTool('select')} label="Select" />
          <ToolButton icon={PenTool} active={activeTool === 'draw'} onClick={() => setActiveTool('draw')} label="Draw" />
          <ToolButton icon={Eraser} active={activeTool === 'erase'} onClick={() => setActiveTool('erase')} label="Erase" />
          <ToolButton icon={Type} active={activeTool === 'text'} onClick={() => setActiveTool('text')} label="Text" />
          <ToolButton icon={Stamp} active={activeTool === 'signature'} onClick={() => setActiveTool('signature')} label="Signature" />
          <ToolButton icon={Palette} active={activeTool === 'color'} onClick={() => setActiveTool('color')} label="Color" />
          
          <div className="mt-auto flex flex-col gap-4">
            <button className="p-3 rounded-2xl bg-white/5 text-slate-400 hover:text-white transition-all">
              <Undo2 className="w-5 h-5" />
            </button>
            <button className="p-3 rounded-2xl bg-white/5 text-slate-400 hover:text-white transition-all">
              <Redo2 className="w-5 h-5" />
            </button>
          </div>
        </aside>

        {/* Main Canvas Area */}
        <main className="flex-grow relative flex items-center justify-center p-12 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px]">
          <div className="relative group max-w-4xl w-full aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-black/50 bg-navy-900 border border-white/10">
            <img 
              src="https://picsum.photos/seed/editor-vibe/1024/1024" 
              alt="Editor Canvas" 
              className="w-full h-full object-cover transition-all duration-300"
              style={{ 
                filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)` 
              }}
            />
            
            {/* Signature Overlay */}
            {showSignature && signature && (
              <motion.div 
                drag
                dragConstraints={{ left: -400, right: 400, top: -400, bottom: 400 }}
                className="absolute bottom-12 right-12 cursor-move select-none"
              >
                <span className="text-2xl font-display italic text-white/80 drop-shadow-lg font-bold tracking-widest" style={{ fontFamily: 'cursive' }}>
                  {signature}
                </span>
              </motion.div>
            )}

            {/* Canvas Overlays (Simulated) */}
            <div className="absolute inset-0 pointer-events-none border-4 border-neon-lime/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Floating Controls */}
          <div className="absolute top-8 right-8 flex items-center gap-3">
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-white hover:bg-white/10 transition-all backdrop-blur-md">
              <Share2 className="w-4 h-4" /> Share
            </button>
            <button 
              onClick={handleSave}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-neon-lime text-navy-950 text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-neon-lime/20"
            >
              {isSaving ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
              {isSaving ? 'Saved' : 'Save Changes'}
            </button>
          </div>
        </main>

        {/* Right Properties Sidebar */}
        <aside className="w-80 border-l border-white/5 bg-navy-900/50 backdrop-blur-xl p-8 space-y-10 overflow-y-auto scrollbar-hide">
          
          <div className="space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 flex items-center gap-2">
              <SlidersHorizontal className="w-3 h-3" /> Image Adjustments
            </h3>
            
            <AdjustmentSlider label="Brightness" value={brightness} onChange={setBrightness} icon={Sun} />
            <AdjustmentSlider label="Contrast" value={contrast} onChange={setContrast} icon={Contrast} />
            <AdjustmentSlider label="Saturation" value={saturation} onChange={setSaturation} icon={Droplets} />
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 flex items-center gap-2">
              <Stamp className="w-3 h-3" /> Artist Signature
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">Show Signature</span>
                <button 
                  onClick={() => setShowSignature(!showSignature)}
                  className={cn(
                    "w-10 h-5 rounded-full transition-all relative",
                    showSignature ? "bg-neon-lime" : "bg-white/10"
                  )}
                >
                  <div className={cn(
                    "absolute top-1 w-3 h-3 rounded-full bg-white transition-all",
                    showSignature ? "right-1" : "left-1"
                  )} />
                </button>
              </div>
              <input 
                type="text" 
                value={signature}
                onChange={(e) => setSignature(e.target.value)}
                placeholder="Your Signature..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-lime transition-all"
              />
              <p className="text-[10px] text-slate-600 leading-relaxed">
                Add your personal touch. Drag the signature on the canvas to reposition it.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 flex items-center gap-2">
              <Sparkles className="w-3 h-3" /> AI Refinement
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <RefineButton label="Upscale 4x" icon={Maximize2} />
              <RefineButton label="Pixel Perfect" icon={Wand2} />
              <RefineButton label="Color Grade" icon={Palette} />
              <RefineButton label="Denoise" icon={Droplets} />
            </div>
          </div>

          <div className="pt-10">
            <button className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-white/5 border border-white/10 text-sm font-bold text-white hover:bg-white/10 transition-all">
              <Download className="w-4 h-4" /> Download Asset
            </button>
          </div>
        </aside>

      </div>
    </StudioLayout>
  );
}

function ToolButton({ icon: Icon, active, onClick, label }: { icon: any, active?: boolean, onClick: () => void, label: string }) {
  return (
    <div className="relative group">
      <button 
        onClick={onClick}
        className={cn(
          "p-3 rounded-2xl transition-all",
          active ? "bg-neon-lime text-navy-950 shadow-lg shadow-neon-lime/20" : "text-slate-500 hover:text-white hover:bg-white/5"
        )}
      >
        <Icon className="w-5 h-5" />
      </button>
      <div className="absolute left-full ml-4 px-2 py-1 bg-white text-navy-950 text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
        {label}
      </div>
    </div>
  );
}

function AdjustmentSlider({ label, value, onChange, icon: Icon }: { label: string, value: number, onChange: (v: number) => void, icon: any }) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Icon className="w-3 h-3" /> {label}
        </div>
        <span className="text-[10px] font-mono text-neon-lime">{value}%</span>
      </div>
      <input 
        type="range" 
        min="0" 
        max="200" 
        value={value} 
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-neon-lime" 
      />
    </div>
  );
}

function RefineButton({ label, icon: Icon }: { label: string, icon: any }) {
  return (
    <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all group">
      <Icon className="w-4 h-4 text-slate-500 group-hover:text-neon-cyan transition-colors" />
      <span className="text-[10px] font-bold text-slate-400 group-hover:text-white transition-colors">{label}</span>
    </button>
  );
}
