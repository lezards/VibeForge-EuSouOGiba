'use client';

import React from 'react';
import { StudioLayout } from '@/components/studio/StudioLayout';
import { motion } from 'motion/react';
import { 
  Zap, 
  Sparkles, 
  Trophy, 
  ShoppingBag, 
  History, 
  Settings, 
  CreditCard, 
  Users, 
  ArrowUpRight,
  TrendingUp,
  Clock,
  Star,
  Shield,
  Search,
  Filter,
  Package,
  Plus,
  X,
  Check,
  Eye,
  Download,
  Share2,
  Trash2,
  Wand2,
  Image as ImageIcon,
  Maximize2,
  Layout,
  LayoutGrid,
  Palette,
  Home,
  Layers,
  Ghost,
  Gamepad2,
  Sword,
  Map as MapIcon,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  MoreVertical,
  ChevronRight,
  Mail,
  Github,
  Twitter,
  Instagram,
  Chrome,
  Disc as Discord,
  Wallet,
  ArrowRight,
  ArrowLeft,
  RefreshCcw,
  Store,
  Tag,
  Database
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ElementsPage() {
  return (
    <StudioLayout>
      <div className="flex flex-col h-full bg-navy-950 overflow-y-auto p-10 scrollbar-hide">
        <div className="max-w-7xl mx-auto w-full space-y-20">
          {/* Header */}
          <div className="border-b border-white/5 pb-10">
            <h1 className="text-5xl font-display font-bold text-white tracking-tighter mb-4">Design Elements</h1>
            <p className="text-slate-500 font-mono uppercase tracking-widest text-sm">VibeForge Visual Identity & Component Library</p>
          </div>

          {/* Color Palette */}
          <section className="space-y-8">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neon-lime">01. Color Palette</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <ColorCard color="bg-neon-lime" label="Neon Lime" hex="#BEF264" usage="Primary Actions, Success" />
              <ColorCard color="bg-neon-cyan" label="Neon Cyan" hex="#22D3EE" usage="Secondary Actions, Info" />
              <ColorCard color="bg-neon-gold" label="Neon Gold" hex="#FBBF24" usage="Marketplace, Premium, Currency" />
              <ColorCard color="bg-red-500" label="Neon Red" hex="#EF4444" usage="Admin, Errors, Alerts" />
              <ColorCard color="bg-navy-950" label="Navy 950" hex="#050505" usage="Main Background" border />
            </div>
          </section>

          {/* Typography */}
          <section className="space-y-8">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neon-cyan">02. Typography</h2>
            <div className="space-y-12 bg-white/5 border border-white/10 rounded-3xl p-10">
              <div className="space-y-2">
                <p className="text-[10px] font-mono text-slate-500 uppercase">Display Bold / Tracking Tighter</p>
                <p className="text-6xl font-display font-bold text-white tracking-tighter">VibeForge Neural Studio</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-mono text-slate-500 uppercase">Sans Medium / Body</p>
                <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                  The world&apos;s premier ecosystem for digital art creators. Generate, sell, and compete in the ultimate digital playground.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-mono text-slate-500 uppercase">Mono / Technical Labels</p>
                <p className="text-sm font-mono text-neon-lime uppercase tracking-widest">System Status: Optimal / 1,240 VC</p>
              </div>
            </div>
          </section>

          {/* Icon Library */}
          <section className="space-y-8">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neon-gold">03. Icon Library (Lucide)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <IconCategory title="Core Actions">
                <IconItem icon={Zap} label="Studio / Primary" />
                <IconItem icon={Sparkles} label="AI / Magic" />
                <IconItem icon={Wand2} label="Refine / Enhance" />
                <IconItem icon={RefreshCcw} label="Randomize" />
              </IconCategory>
              <IconCategory title="Marketplace">
                <IconItem icon={ShoppingBag} label="Purchase" />
                <IconItem icon={Store} label="Market" />
                <IconItem icon={Tag} label="Price / Tag" />
                <IconItem icon={Package} label="Asset Pack" />
              </IconCategory>
              <IconCategory title="Arena & Social">
                <IconItem icon={Trophy} label="Arena / Rank" />
                <IconItem icon={Star} label="Rating / Rep" />
                <IconItem icon={Users} label="Community" />
                <IconItem icon={Share2} label="Social Share" />
              </IconCategory>
              <IconCategory title="System & Admin">
                <IconItem icon={Shield} label="Admin / Security" />
                <IconItem icon={Database} label="System Data" />
                <IconItem icon={AlertTriangle} label="Warning" />
                <IconItem icon={Settings} label="Settings" />
              </IconCategory>
              <IconCategory title="Asset Types">
                <IconItem icon={Ghost} label="Characters" />
                <IconItem icon={MapIcon} label="Environments" />
                <IconItem icon={Sword} label="Items" />
                <IconItem icon={Layers} label="UI Elements" />
              </IconCategory>
              <IconCategory title="Navigation">
                <IconItem icon={Home} label="Home" />
                <IconItem icon={Layout} label="Dashboard" />
                <IconItem icon={History} label="History" />
                <IconItem icon={ArrowUpRight} label="External Link" />
              </IconCategory>
            </div>
          </section>

          {/* UI Components */}
          <section className="space-y-8">
            <h2 className="text-xs font-mono uppercase tracking-widest text-red-500">04. UI Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h3 className="text-sm font-bold text-white">Buttons</h3>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-neon-lime text-navy-950 px-6 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-all">Primary Action</button>
                  <button className="bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 px-6 py-3 rounded-xl font-bold text-sm hover:bg-neon-cyan/20 transition-all">Secondary Action</button>
                  <button className="bg-white/5 border border-white/10 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-white/10 transition-all">Outline Action</button>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-sm font-bold text-white">Inputs</h3>
                <div className="space-y-4">
                  <input type="text" placeholder="Standard Input" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-lime/50 transition-all" />
                  <div className="relative">
                    <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-500" />
                    <input type="text" placeholder="Search Input" className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-neon-lime/50 transition-all" />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-sm font-bold text-white">Status Tags</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-widest border border-green-500/20">Optimal</span>
                  <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-[10px] font-bold uppercase tracking-widest border border-yellow-500/20">Warning</span>
                  <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-[10px] font-bold uppercase tracking-widest border border-red-500/20">Critical</span>
                  <span className="px-3 py-1 rounded-full bg-neon-gold/10 text-neon-gold text-[10px] font-bold uppercase tracking-widest border border-neon-gold/20">Premium</span>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-sm font-bold text-white">Glass Panels</h3>
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                  <p className="text-sm text-slate-400">Standard glass panel with backdrop blur and subtle border.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </StudioLayout>
  );
}

function ColorCard({ color, label, hex, usage, border }: { color: string, label: string, hex: string, usage: string, border?: boolean }) {
  return (
    <div className="space-y-3">
      <div className={cn("aspect-square rounded-3xl shadow-lg", color, border && "border border-white/10")} />
      <div>
        <p className="text-sm font-bold text-white">{label}</p>
        <p className="text-[10px] font-mono text-slate-500">{hex}</p>
        <p className="text-[10px] text-slate-600 mt-1 leading-tight">{usage}</p>
      </div>
    </div>
  );
}

function IconCategory({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 border-b border-white/5 pb-2">{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        {children}
      </div>
    </div>
  );
}

function IconItem({ icon: Icon, label }: { icon: any, label: string }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all group">
      <div className="p-2 rounded-lg bg-white/5 text-slate-400 group-hover:text-white transition-colors">
        <Icon className="w-4 h-4" />
      </div>
      <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-300 transition-colors">{label}</span>
    </div>
  );
}
