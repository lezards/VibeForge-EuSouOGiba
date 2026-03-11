'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Shield, 
  Database, 
  TrendingUp, 
  AlertTriangle, 
  Search, 
  Filter, 
  MoreVertical, 
  CheckCircle2, 
  XCircle,
  Zap,
  ShoppingBag,
  Trophy,
  BarChart3,
  Settings,
  LogOut,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex h-screen bg-[#050505] text-slate-300 overflow-hidden font-sans">
      {/* Admin Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-[#0a0a0a] flex flex-col shrink-0">
        <div className="p-8 flex items-center gap-3">
          <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center shadow-lg shadow-red-500/20">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl text-white tracking-tighter">VibeAdmin</span>
        </div>

        <nav className="flex-grow px-4 py-4 space-y-1">
          <AdminNavItem icon={BarChart3} label="Overview" active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} />
          <AdminNavItem icon={Users} label="User Management" active={activeTab === 'users'} onClick={() => setActiveTab('users')} />
          <AdminNavItem icon={Database} label="System Assets" active={activeTab === 'assets'} onClick={() => setActiveTab('assets')} />
          <AdminNavItem icon={ShoppingBag} label="Marketplace" active={activeTab === 'market'} onClick={() => setActiveTab('market')} />
          <AdminNavItem icon={Trophy} label="Arena Control" active={activeTab === 'arena'} onClick={() => setActiveTab('arena')} />
          <AdminNavItem icon={AlertTriangle} label="Moderation" active={activeTab === 'mod'} onClick={() => setActiveTab('mod')} />
        </nav>

        <div className="p-4 mt-auto border-t border-white/5">
          <Link href="/">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-white/5 hover:text-white transition-all">
              <LogOut className="w-5 h-5" />
              <span className="text-sm font-medium">Exit Admin</span>
            </button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 border-b border-white/5 bg-[#0a0a0a]/50 backdrop-blur-md flex items-center justify-between px-10">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-bold text-white capitalize">{activeTab} Dashboard</h2>
            <div className="h-4 w-px bg-white/10" />
            <span className="text-xs font-mono text-slate-500">System Status: <span className="text-green-500">Optimal</span></span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-2 gap-3">
              <Search className="w-4 h-4 text-slate-500" />
              <input type="text" placeholder="Search system..." className="bg-transparent border-none outline-none text-sm w-48" />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-[10px] font-bold text-white rounded-full flex items-center justify-center">3</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-red-500 to-orange-500 p-[1px]">
                <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-grow overflow-y-auto p-10 scrollbar-hide">
          <div className="max-w-7xl mx-auto space-y-10">
            {/* Real-time Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <AdminStatCard label="Active Users" value="12,402" trend="+8.2%" up />
              <AdminStatCard label="Daily Revenue" value="$4,250" trend="+12.5%" up />
              <AdminStatCard label="GPU Load" value="64%" trend="-2.4%" />
              <AdminStatCard label="Arena Entries" value="842" trend="+42" up />
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Withdrawal Requests (Frozen) */}
              <div className="lg:col-span-2 bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden">
                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold text-white">Withdrawal Requests (Frozen)</h3>
                    <span className="px-2 py-0.5 rounded-full bg-red-500/10 text-red-500 text-[10px] font-bold uppercase tracking-widest">Pending Auth</span>
                  </div>
                  <div className="text-xs font-mono text-neon-gold">$12,450.00 Total</div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-[10px] font-mono uppercase tracking-widest text-slate-500 border-b border-white/5">
                        <th className="px-6 py-4">User</th>
                        <th className="px-6 py-4">Amount</th>
                        <th className="px-6 py-4">Wallet Address</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {[
                        { user: 'PixelMaster', amount: '$420.00', wallet: '0x71C...3E4', date: '2h ago' },
                        { user: 'CyberGhost', amount: '$1,200.00', wallet: '0x12A...9B2', date: '5h ago' },
                        { user: 'NeonVibe', amount: '$85.50', wallet: '0x99F...1A0', date: '1d ago' },
                      ].map((req, i) => (
                        <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white">
                                {req.user[0]}
                              </div>
                              <span className="text-sm font-medium text-white">{req.user}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm font-bold text-neon-gold">{req.amount}</td>
                          <td className="px-6 py-4 text-xs text-slate-500 font-mono">{req.wallet}</td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button className="px-3 py-1.5 rounded-lg bg-green-500 text-navy-950 text-[10px] font-bold uppercase tracking-wider hover:scale-105 transition-all">
                                Authorize
                              </button>
                              <button className="px-3 py-1.5 rounded-lg bg-red-500/10 text-red-500 text-[10px] font-bold uppercase tracking-wider hover:bg-red-500/20 transition-all">
                                Reject
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Recent Users Table (Moved down or replaced) */}
              <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-6 space-y-6">
                <h3 className="font-bold text-white">System Alerts</h3>
                <div className="space-y-4">
                  <AlertItem 
                    type="warning" 
                    title="High Latency detected" 
                    desc="Region: US-East-1 is experiencing 200ms+ delay."
                  />
                  <AlertItem 
                    type="error" 
                    title="Payment Gateway Timeout" 
                    desc="Stripe API returned 504 for 3 transactions."
                  />
                  <AlertItem 
                    type="success" 
                    title="Arena Season 04 Ready" 
                    desc="All assets pre-cached and ready for launch."
                  />
                </div>
                <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold hover:bg-white/10 transition-all">
                  Run System Diagnostics
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function AdminNavItem({ icon: Icon, label, active, onClick }: { icon: any, label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all group relative",
        active ? "bg-red-500/10 text-red-500" : "text-slate-500 hover:bg-white/5 hover:text-white"
      )}
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm font-medium">{label}</span>
      {active && <div className="absolute left-0 w-1 h-6 bg-red-500 rounded-r-full" />}
    </button>
  );
}

function AdminStatCard({ label, value, trend, up }: { label: string, value: string, trend: string, up?: boolean }) {
  return (
    <div className="p-6 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-all">
      <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">{label}</p>
      <div className="flex items-end justify-between">
        <p className="text-3xl font-bold text-white tracking-tighter">{value}</p>
        <div className={cn("flex items-center gap-1 text-xs font-bold mb-1", up ? "text-green-500" : "text-red-500")}>
          {up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          {trend}
        </div>
      </div>
    </div>
  );
}

function AlertItem({ type, title, desc }: { type: 'warning' | 'error' | 'success', title: string, desc: string }) {
  const colors = {
    warning: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20',
    error: 'text-red-500 bg-red-500/10 border-red-500/20',
    success: 'text-green-500 bg-green-500/10 border-green-500/20',
  };

  return (
    <div className={cn("p-4 rounded-2xl border flex gap-3", colors[type])}>
      <div className="mt-0.5">
        {type === 'error' ? <XCircle className="w-4 h-4" /> : type === 'warning' ? <AlertTriangle className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
      </div>
      <div>
        <p className="text-xs font-bold mb-1">{title}</p>
        <p className="text-[10px] opacity-70 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
