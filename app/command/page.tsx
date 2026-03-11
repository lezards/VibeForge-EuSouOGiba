'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'motion/react';
import { 
  Users, 
  Shield, 
  Database, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  Search, 
  Filter, 
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  UserPlus,
  DollarSign,
  MessageSquare
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const data = [
  { name: 'Mon', users: 4000, revenue: 2400 },
  { name: 'Tue', users: 3000, revenue: 1398 },
  { name: 'Wed', users: 2000, revenue: 9800 },
  { name: 'Thu', users: 2780, revenue: 3908 },
  { name: 'Fri', users: 1890, revenue: 4800 },
  { name: 'Sat', users: 2390, revenue: 3800 },
  { name: 'Sun', users: 3490, revenue: 4300 },
];

export default function CommandPage() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-950">
      <Header />
      
      <main className="flex-grow pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Admin Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 text-red-500 mb-2">
                <Shield className="w-5 h-5" />
                <span className="font-mono text-xs uppercase tracking-[0.3em] font-bold">Forge Command Center</span>
              </div>
              <h1 className="text-4xl font-display font-bold text-white">System Overview</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-navy-900 border border-white/10 rounded-xl px-4 py-2 text-sm text-slate-400">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                System Status: Operational
              </div>
              <button className="bg-white text-navy-950 px-6 py-2 rounded-xl font-bold text-sm hover:opacity-90 transition-all">
                Generate Report
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Total Users', value: '124,502', change: '+12%', trend: 'up', icon: Users },
              { label: 'Daily Revenue', value: '$42,850', change: '+8%', trend: 'up', icon: DollarSign },
              { label: 'Active Sessions', value: '1,240', change: '-3%', trend: 'down', icon: Activity },
              { label: 'New Creators', value: '452', change: '+24%', trend: 'up', icon: UserPlus },
            ].map((stat, i) => (
              <div key={i} className="glass-panel rounded-2xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-white/5 rounded-xl text-slate-400">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div className={`flex items-center gap-1 text-xs font-bold ${stat.trend === 'up' ? 'text-neon-lime' : 'text-red-500'}`}>
                    {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {stat.change}
                  </div>
                </div>
                <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-slate-500 uppercase font-mono tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main Chart */}
            <div className="lg:col-span-2 glass-panel rounded-3xl p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-display font-bold text-white">Platform Growth</h3>
                <select className="bg-navy-900 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-slate-400 focus:outline-none">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last Year</option>
                </select>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#bef264" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#bef264" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0a0f18', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                      itemStyle={{ color: '#bef264' }}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="#bef264" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* System Logs */}
            <div className="glass-panel rounded-3xl p-8">
              <h3 className="text-xl font-display font-bold text-white mb-8">System Logs</h3>
              <div className="space-y-6">
                {[
                  { msg: 'New marketplace payout processed', time: '2m ago', type: 'success' },
                  { msg: 'High load detected on Studio API', time: '15m ago', type: 'warning' },
                  { msg: 'New seasonal arena started', time: '1h ago', type: 'info' },
                  { msg: 'Database backup completed', time: '3h ago', type: 'success' },
                  { msg: 'User @PixelArt reported for spam', time: '5h ago', type: 'error' },
                ].map((log, i) => (
                  <div key={i} className="flex gap-4">
                    <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${
                      log.type === 'success' ? 'bg-green-500' : 
                      log.type === 'warning' ? 'bg-yellow-500' : 
                      log.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
                    }`} />
                    <div>
                      <div className="text-sm text-slate-300 leading-tight">{log.msg}</div>
                      <div className="text-[10px] text-slate-500 font-mono mt-1">{log.time}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 py-3 border border-white/5 rounded-xl text-xs font-bold text-slate-500 hover:text-white hover:bg-white/5 transition-all">
                View Full Console
              </button>
            </div>
          </div>

          {/* User Management Table */}
          <div className="glass-panel rounded-3xl overflow-hidden">
            <div className="p-8 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <h3 className="text-xl font-display font-bold text-white">Creator Management</h3>
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="flex items-center bg-navy-900 border border-white/10 rounded-xl px-4 py-2 gap-3 flex-grow md:w-64">
                  <Search className="w-4 h-4 text-slate-500" />
                  <input type="text" placeholder="Search creators..." className="bg-transparent border-none outline-none text-sm w-full" />
                </div>
                <button className="p-2 bg-navy-900 border border-white/10 rounded-xl"><Filter className="w-4 h-4 text-slate-400" /></button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-navy-900/50 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    <th className="px-8 py-4">Creator</th>
                    <th className="px-8 py-4">Status</th>
                    <th className="px-8 py-4">Total Sales</th>
                    <th className="px-8 py-4">Commission</th>
                    <th className="px-8 py-4">Joined</th>
                    <th className="px-8 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { name: 'PixelRonin', email: 'ronin@forge.gg', status: 'Active', sales: '$12,450', joined: 'Mar 12, 2024' },
                    { name: 'GridWalker', email: 'walker@forge.gg', status: 'Active', sales: '$8,200', joined: 'Feb 28, 2024' },
                    { name: 'IronPixel', email: 'iron@forge.gg', status: 'Pending', sales: '$0', joined: 'Apr 01, 2024' },
                    { name: 'VaporWave', email: 'vapor@forge.gg', status: 'Banned', sales: '$4,500', joined: 'Jan 15, 2024' },
                  ].map((user, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors group">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-neon-lime to-neon-cyan" />
                          <div>
                            <div className="text-sm font-bold text-white">{user.name}</div>
                            <div className="text-xs text-slate-500">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                          user.status === 'Active' ? 'bg-green-500/10 text-green-500' : 
                          user.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-500' : 
                          'bg-red-500/10 text-red-500'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-sm font-mono text-white">{user.sales}</td>
                      <td className="px-8 py-6 text-sm font-mono text-slate-400">15%</td>
                      <td className="px-8 py-6 text-sm text-slate-400">{user.joined}</td>
                      <td className="px-8 py-6 text-right">
                        <button className="p-2 text-slate-500 hover:text-white transition-colors"><MoreVertical className="w-4 h-4" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
