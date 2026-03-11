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
  Star
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <StudioLayout>
      <div className="flex flex-col h-full bg-navy-950 overflow-y-auto p-8 scrollbar-hide">
        <div className="max-w-7xl mx-auto w-full space-y-12">
          {/* Welcome Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-display font-bold text-white tracking-tighter mb-2">Welcome back, Artist</h1>
              <p className="text-slate-500 font-mono uppercase tracking-widest text-xs">Your creative empire is thriving</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Current Balance</p>
                <p className="text-2xl font-bold text-neon-gold">1,240 VC</p>
              </div>
              <button className="p-4 bg-neon-gold/10 rounded-2xl text-neon-gold border border-neon-gold/20 hover:bg-neon-gold/20 transition-all">
                <CreditCard className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard icon={Zap} label="Total Generations" value="1,420" trend="+12%" />
            <StatCard icon={Trophy} label="Arena Rank" value="#42" trend="Top 1%" color="text-neon-cyan" />
            <StatCard icon={ShoppingBag} label="Marketplace Sales" value="84" trend="+5" color="text-neon-lime" />
            <StatCard icon={Star} label="Reputation" value="4.9" trend="Expert" color="text-neon-gold" />
          </div>

          {/* Tools Grid */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 ml-1">Quick Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ToolCard 
                icon={Sparkles} 
                title="AI Studio" 
                desc="Generate high-fidelity pixel art and digital assets."
                href="/studio"
                color="bg-neon-lime"
              />
              <ToolCard 
                icon={TrendingUp} 
                title="Batch Forge" 
                desc="Mass produce variations and asset packs in seconds."
                href="/batch"
                color="bg-neon-cyan"
              />
              <ToolCard 
                icon={Trophy} 
                title="Arena" 
                desc="Compete in seasonal challenges for massive rewards."
                href="/arena"
                color="bg-neon-gold"
              />
            </div>
          </div>

          {/* Recent Activity & Marketplace */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 ml-1">Recent Creations</h3>
                <Link href="/history" className="text-xs font-bold text-neon-lime hover:underline">View All</Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all relative group cursor-pointer">
                    <img src={`https://picsum.photos/seed/dash-${i}/300/300`} alt="Recent" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ArrowUpRight className="w-6 h-6 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 ml-1">Active Sales</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-navy-900 overflow-hidden shrink-0">
                      <img src={`https://picsum.photos/seed/sale-${i}/100/100`} alt="Sale" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm font-bold text-white">Cyberpunk Pack #{i}</p>
                      <p className="text-[10px] text-slate-500 font-mono uppercase">12 Sales • 450 VC</p>
                    </div>
                    <TrendingUp className="w-4 h-4 text-neon-lime" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </StudioLayout>
  );
}

function StatCard({ icon: Icon, label, value, trend, color = "text-white" }: { icon: any, label: string, value: string, trend: string, color?: string }) {
  return (
    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
      <div className="flex items-center justify-between mb-4">
        <div className={cn("p-2 rounded-xl bg-white/5", color.replace('text-', 'bg-').replace('neon-', 'neon-').concat('/10'))}>
          <Icon className={cn("w-5 h-5", color)} />
        </div>
        <span className="text-[10px] font-mono text-neon-lime">{trend}</span>
      </div>
      <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">{label}</p>
      <p className={cn("text-2xl font-bold", color)}>{value}</p>
    </div>
  );
}

function ToolCard({ icon: Icon, title, desc, href, color }: { icon: any, title: string, desc: string, href: string, color: string }) {
  return (
    <Link href={href}>
      <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all h-full flex flex-col">
        <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-transform group-hover:scale-110", color)}>
          <Icon className="w-6 h-6 text-navy-950" />
        </div>
        <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
        <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">{desc}</p>
        <div className="flex items-center gap-2 text-xs font-bold text-white group-hover:text-neon-lime transition-colors">
          Launch Tool <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
