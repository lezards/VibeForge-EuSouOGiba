'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'motion/react';
import { TrendingUp, DollarSign, ShoppingBag, Eye, ArrowUpRight, ArrowDownRight, Calendar, Download, Filter, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';

const salesData = [
  { name: 'Jan', sales: 400 },
  { name: 'Feb', sales: 300 },
  { name: 'Mar', sales: 600 },
  { name: 'Apr', sales: 800 },
  { name: 'May', sales: 500 },
  { name: 'Jun', sales: 900 },
];

const topProducts = [
  { id: 1, name: 'Cyberpunk City Kit', sales: 450, revenue: '$20,250', trend: '+12%' },
  { id: 2, name: 'Retro RPG Heroes', sales: 320, revenue: '$9,280', trend: '+8%' },
  { id: 3, name: 'Magic FX Pack', sales: 280, revenue: '$5,320', trend: '-2%' },
];

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-950">
      <Header />
      
      <main className="flex-grow pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Analytics Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <h1 className="text-4xl font-display font-bold text-white mb-2">Seller Analytics</h1>
              <p className="text-slate-400">Track your performance, sales, and audience growth.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-navy-900 border border-white/10 rounded-xl px-4 py-2 text-sm text-slate-300 hover:text-white transition-all">
                <Calendar className="w-4 h-4" /> Last 30 Days
              </button>
              <button className="flex items-center gap-2 bg-neon-lime text-navy-950 px-6 py-2 rounded-xl font-bold text-sm hover:opacity-90 transition-all">
                <Download className="w-4 h-4" /> Export Data
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Total Revenue', value: '$34,850', change: '+15.4%', trend: 'up', icon: DollarSign },
              { label: 'Total Sales', value: '1,240', change: '+8.2%', trend: 'up', icon: ShoppingBag },
              { label: 'Store Views', value: '45.2K', change: '-2.1%', trend: 'down', icon: Eye },
              { label: 'Conversion Rate', value: '3.4%', change: '+0.8%', trend: 'up', icon: TrendingUp },
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
            {/* Sales Chart */}
            <div className="lg:col-span-2 glass-panel rounded-3xl p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-display font-bold text-white">Sales Performance</h3>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-white/10 rounded-lg text-xs font-bold text-white">Sales</button>
                  <button className="px-3 py-1 bg-transparent rounded-lg text-xs font-bold text-slate-500 hover:text-white">Revenue</button>
                </div>
              </div>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                      cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                      contentStyle={{ backgroundColor: '#0a0f18', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                    />
                    <Bar dataKey="sales" radius={[4, 4, 0, 0]}>
                      {salesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === salesData.length - 1 ? '#bef264' : '#1e293b'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Top Products */}
            <div className="glass-panel rounded-3xl p-8">
              <h3 className="text-xl font-display font-bold text-white mb-8">Top Products</h3>
              <div className="space-y-6">
                {topProducts.map((product) => (
                  <div key={product.id} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-navy-900 border border-white/5 overflow-hidden relative">
                        <Image 
                          src={`https://picsum.photos/seed/top-${product.id}/200/200`} 
                          alt={product.name} 
                          fill 
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-neon-lime transition-colors">{product.name}</div>
                        <div className="text-xs text-slate-500 font-mono mt-1">{product.sales} sales</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-white">{product.revenue}</div>
                      <div className={`text-[10px] font-bold ${product.trend.startsWith('+') ? 'text-neon-lime' : 'text-red-500'}`}>{product.trend}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-10 py-3 border border-white/5 rounded-xl text-xs font-bold text-slate-500 hover:text-white hover:bg-white/5 transition-all">
                View All Products
              </button>
            </div>
          </div>

          {/* Recent Sales Table */}
          <div className="glass-panel rounded-3xl overflow-hidden">
            <div className="p-8 border-b border-white/5 flex justify-between items-center">
              <h3 className="text-xl font-display font-bold text-white">Recent Sales</h3>
              <button className="p-2 bg-navy-900 border border-white/10 rounded-xl"><Filter className="w-4 h-4 text-slate-400" /></button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-navy-900/50 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    <th className="px-8 py-4">Customer</th>
                    <th className="px-8 py-4">Product</th>
                    <th className="px-8 py-4">Amount</th>
                    <th className="px-8 py-4">Date</th>
                    <th className="px-8 py-4">Status</th>
                    <th className="px-8 py-4 text-right"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors group">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neon-lime to-neon-cyan" />
                          <span className="text-sm font-bold text-white">User_{i*42}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-sm text-slate-300">Cyberpunk City Kit</td>
                      <td className="px-8 py-6 text-sm font-mono text-white">$45.00</td>
                      <td className="px-8 py-6 text-sm text-slate-500">2h ago</td>
                      <td className="px-8 py-6">
                        <span className="px-2 py-1 rounded-md bg-green-500/10 text-green-500 text-[10px] font-bold uppercase">Completed</span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <button className="p-2 text-slate-500 hover:text-white transition-colors"><MoreHorizontal className="w-4 h-4" /></button>
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
