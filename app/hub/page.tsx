'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'motion/react';
import { 
  LayoutGrid, 
  Store, 
  Trophy, 
  Zap, 
  Settings, 
  Bell, 
  CreditCard, 
  Users, 
  TrendingUp, 
  Clock, 
  Download, 
  ExternalLink,
  ChevronRight,
  Heart,
  Award
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HubPage() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-950">
      <Header />
      
      <main className="flex-grow pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-neon-lime to-neon-cyan p-1">
                  <div className="w-full h-full rounded-[14px] overflow-hidden relative">
                    <Image 
                      src="https://picsum.photos/seed/user-avatar/200/200" 
                      alt="User Avatar" 
                      fill 
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-neon-gold rounded-full border-4 border-navy-950 flex items-center justify-center">
                  <Zap className="w-3 h-3 text-navy-950 fill-current" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-display font-bold text-white">Welcome back, PixelLord</h1>
                <p className="text-slate-400 flex items-center gap-2 text-sm mt-1">
                  <span className="text-neon-lime font-mono">PRO MEMBER</span>
                  <span className="text-slate-700">•</span>
                  <span>Joined March 2024</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-3 bg-navy-900 border border-white/10 rounded-xl text-slate-400 hover:text-white transition-all relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-navy-900" />
              </button>
              <button className="p-3 bg-navy-900 border border-white/10 rounded-xl text-slate-400 hover:text-white transition-all">
                <Settings className="w-5 h-5" />
              </button>
              <Link href="/studio" className="bg-neon-lime text-navy-950 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-all">
                <Zap className="w-4 h-4 fill-current" /> New Project
              </Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Stats & Quick Actions */}
            <div className="lg:col-span-2 space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: 'Total Earnings', value: '$1,240', icon: TrendingUp, color: 'text-neon-lime' },
                  { label: 'Forge Credits', value: '4,500', icon: Zap, color: 'text-neon-gold' },
                  { label: 'Arena Rank', value: '#42', icon: Trophy, color: 'text-neon-cyan' },
                  { label: 'Assets Sold', value: '128', icon: Store, color: 'text-white' },
                ].map((stat, i) => (
                  <div key={i} className="glass-panel rounded-2xl p-5">
                    <stat.icon className={`w-5 h-5 ${stat.color} mb-4`} />
                    <div className="text-2xl font-display font-bold text-white">{stat.value}</div>
                    <div className="text-[10px] text-slate-500 uppercase font-mono mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="glass-panel rounded-3xl p-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-display font-bold text-white">Recent Activity</h3>
                  <button className="text-xs font-bold text-neon-cyan hover:underline">View All</button>
                </div>
                <div className="space-y-6">
                  {[
                    { type: 'Sale', title: 'Cyberpunk City Kit sold to @GamerX', time: '2h ago', amount: '+$45.00', icon: Store },
                    { type: 'Award', title: 'Earned "Pixel Pioneer" Badge', time: '5h ago', amount: '+50 XP', icon: Award },
                    { type: 'Arena', title: 'Your entry "Neon Ghost" reached Top 10', time: '1d ago', amount: '+200 Votes', icon: Trophy },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-neon-lime transition-colors">
                          <activity.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white group-hover:text-neon-lime transition-colors">{activity.title}</div>
                          <div className="text-xs text-slate-500 font-mono mt-1">{activity.time}</div>
                        </div>
                      </div>
                      <div className="text-sm font-mono font-bold text-white">{activity.amount}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* My Collections */}
              <div className="glass-panel rounded-3xl p-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-display font-bold text-white">My Collections</h3>
                  <div className="flex gap-2">
                    <button className="p-2 bg-navy-900 border border-white/10 rounded-lg text-slate-400 hover:text-white transition-all"><LayoutGrid className="w-4 h-4" /></button>
                    <button className="p-2 bg-navy-900 border border-white/10 rounded-lg text-slate-400 hover:text-white transition-all"><Clock className="w-4 h-4" /></button>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[1, 2].map((i) => (
                    <div key={i} className="bg-navy-900/50 border border-white/5 rounded-2xl p-4 flex gap-4 group hover:border-white/20 transition-all">
                      <div className="w-24 h-24 relative rounded-xl overflow-hidden shrink-0">
                        <Image 
                          src={`https://picsum.photos/seed/collection-${i}/300/300`} 
                          alt="Collection" 
                          fill 
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex flex-col justify-between py-1">
                        <div>
                          <h4 className="text-sm font-bold text-white mb-1">Fantasy RPG Assets</h4>
                          <p className="text-[10px] text-slate-500 font-mono">12 Assets • Created 2w ago</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="text-[10px] font-bold text-neon-cyan hover:underline">Edit</button>
                          <button className="text-[10px] font-bold text-slate-500 hover:text-white">Share</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar Info */}
            <div className="space-y-8">
              {/* Pro Status Card */}
              <div className="bg-gradient-to-br from-neon-lime to-neon-cyan rounded-3xl p-8 text-navy-950 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <Zap className="w-6 h-6 fill-current" />
                    <span className="font-mono text-xs font-bold uppercase tracking-widest">Forge Pro Status</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">You&apos;re a Legend, PixelLord!</h3>
                  <p className="text-sm font-medium mb-8 opacity-80">
                    Your subscription renews on April 12. You have 12,000 AI generations left this month.
                  </p>
                  <button className="w-full bg-navy-950 text-white py-3 rounded-xl font-bold text-sm hover:bg-navy-900 transition-all">
                    Manage Subscription
                  </button>
                </div>
              </div>

              {/* Quick Links */}
              <div className="glass-panel rounded-3xl p-8">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Quick Links</h3>
                <div className="space-y-2">
                  {[
                    { name: 'Seller Analytics', href: '/analytics', icon: TrendingUp },
                    { name: 'Referral Program', href: '/referrals', icon: Users },
                    { name: 'Billing & Payments', href: '#', icon: CreditCard },
                    { name: 'Saved Assets', href: '#', icon: Heart },
                    { name: 'Download History', href: '#', icon: Download },
                  ].map((link, i) => (
                    <Link 
                      key={i} 
                      href={link.href}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <link.icon className="w-4 h-4 text-slate-500 group-hover:text-neon-lime transition-colors" />
                        <span className="text-sm text-slate-400 group-hover:text-white transition-colors">{link.name}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-700 group-hover:text-white transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Community Challenge */}
              <div className="glass-panel rounded-3xl p-8 border-l-4 border-neon-gold">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Active Challenge</h3>
                <div className="aspect-video relative rounded-xl overflow-hidden mb-4">
                  <Image 
                    src="https://picsum.photos/seed/challenge-hub/400/225" 
                    alt="Challenge" 
                    fill 
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">Neon Dystopia Clash</h4>
                <p className="text-xs text-slate-500 mb-6">Current Rank: #124 • 450 Votes</p>
                <Link href="/arena" className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-white/10 border border-white/10 py-3 rounded-xl text-xs font-bold transition-all">
                  View Entry <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
