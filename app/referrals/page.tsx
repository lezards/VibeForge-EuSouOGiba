'use client';

import React, { useState } from 'react';
import { StudioLayout } from '@/components/studio/StudioLayout';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Link as LinkIcon, 
  Copy, 
  TrendingUp, 
  Wallet, 
  ArrowUpRight, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  DollarSign,
  Gift,
  ChevronRight,
  Share2,
  QrCode,
  ShoppingBag
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ReferralsPage() {
  const [referralCode] = useState('VIBE-ART-2026-PRO');
  const [copied, setCopied] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://vibeforge.studio/join?ref=${referralCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <StudioLayout>
      <div className="flex flex-col h-full bg-navy-950 overflow-y-auto p-8 scrollbar-hide">
        <div className="max-w-6xl mx-auto w-full space-y-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl font-display font-bold text-white tracking-tighter mb-2">Referral & Wallet</h1>
              <p className="text-slate-500 font-mono uppercase tracking-widest text-xs">Invite friends, earn credits, cash out real money</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4">
                <div className="p-3 bg-neon-gold/10 rounded-xl">
                  <DollarSign className="w-6 h-6 text-neon-gold" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase">Available for Withdrawal</p>
                  <p className="text-2xl font-display font-bold text-white">$420.69</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Col: Referral System */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Referral Link Card */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Gift className="w-32 h-32 text-neon-lime" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Users className="w-5 h-5 text-neon-lime" /> Your Referral Link
                </h3>
                
                <div className="space-y-4">
                  <p className="text-sm text-slate-400 max-w-md">
                    Share your unique link with other artists. You get <span className="text-neon-lime font-bold">15% of their marketplace sales</span> and <span className="text-neon-lime font-bold">500 VC</span> for every signup.
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex-grow bg-navy-950 border border-white/10 rounded-xl px-4 py-3 font-mono text-sm text-slate-300 truncate">
                      https://vibeforge.studio/join?ref={referralCode}
                    </div>
                    <button 
                      onClick={handleCopy}
                      className={cn(
                        "p-3 rounded-xl transition-all flex items-center gap-2 font-bold text-xs",
                        copied ? "bg-green-500 text-white" : "bg-neon-lime text-navy-950 hover:scale-105"
                      )}
                    >
                      {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/5">
                  <StatMini label="Total Referrals" value="24" icon={Users} />
                  <StatMini label="Active Artists" value="18" icon={TrendingUp} />
                  <StatMini label="Conversion Rate" value="75%" icon={TrendingUp} color="text-neon-cyan" />
                </div>
              </div>

              {/* Referral List */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 ml-1">Recent Signups</h3>
                <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/5 bg-white/[0.02]">
                        <th className="px-6 py-4 text-[10px] font-mono text-slate-500 uppercase">Artist</th>
                        <th className="px-6 py-4 text-[10px] font-mono text-slate-500 uppercase">Date</th>
                        <th className="px-6 py-4 text-[10px] font-mono text-slate-500 uppercase">Status</th>
                        <th className="px-6 py-4 text-[10px] font-mono text-slate-500 uppercase text-right">Earnings</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {[
                        { name: 'PixelWiz', date: 'Mar 10, 2026', status: 'Active', earnings: '120 VC' },
                        { name: 'CyberSamurai', date: 'Mar 08, 2026', status: 'Active', earnings: '450 VC' },
                        { name: 'NeonGhost', date: 'Mar 05, 2026', status: 'Pending', earnings: '0 VC' },
                        { name: 'RetroVibe', date: 'Feb 28, 2026', status: 'Active', earnings: '890 VC' },
                      ].map((ref, i) => (
                        <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neon-lime to-neon-cyan p-[1px]">
                                <div className="w-full h-full rounded-full bg-navy-950 flex items-center justify-center text-[10px] font-bold text-white">
                                  {ref.name[0]}
                                </div>
                              </div>
                              <span className="text-sm font-medium text-white">{ref.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-xs text-slate-500 font-mono">{ref.date}</td>
                          <td className="px-6 py-4">
                            <span className={cn(
                              "px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                              ref.status === 'Active' ? "bg-green-500/10 text-green-500" : "bg-yellow-500/10 text-yellow-500"
                            )}>
                              {ref.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right text-sm font-bold text-neon-gold">{ref.earnings}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Col: Wallet & Withdrawal */}
            <div className="space-y-8">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-neon-gold" /> Wallet Actions
                </h3>
                
                <div className="p-4 rounded-2xl bg-navy-950 border border-white/5 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500">VibeCredits (VC)</span>
                    <span className="text-sm font-bold text-white">12,450 VC</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500">Conversion Rate</span>
                    <span className="text-xs font-mono text-neon-lime">1,000 VC = $10.00</span>
                  </div>
                  <div className="h-px bg-white/5" />
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-white">Total Value</span>
                    <span className="text-lg font-display font-bold text-neon-gold">$124.50</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500 ml-1">Withdraw Amount ($)</label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-3.5 w-4 h-4 text-slate-500" />
                    <input 
                      type="number" 
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      placeholder="0.00" 
                      className="w-full bg-navy-950 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-neon-gold transition-all" 
                    />
                  </div>
                  <button className="w-full bg-neon-gold text-navy-950 py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-neon-gold/20">
                    Request Withdrawal <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-center text-slate-600 leading-relaxed">
                    Withdrawals are processed within 24-48 hours after admin authorization. Funds will be sent to your connected wallet.
                  </p>
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 ml-1">Recent Activity</h3>
                <div className="space-y-3">
                  {[
                    { type: 'Withdrawal', amount: '-$50.00', status: 'Pending', icon: Clock },
                    { type: 'Referral Bonus', amount: '+500 VC', status: 'Completed', icon: Gift },
                    { icon: ShoppingBag, type: 'Market Sale', amount: '+1,200 VC', status: 'Completed' },
                  ].map((tx, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between group hover:border-white/20 transition-all">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/5 text-slate-400 group-hover:text-white transition-colors">
                          <tx.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">{tx.type}</p>
                          <p className="text-[10px] text-slate-500">{tx.status}</p>
                        </div>
                      </div>
                      <span className={cn(
                        "text-xs font-bold",
                        tx.amount.startsWith('+') ? "text-neon-lime" : "text-red-400"
                      )}>
                        {tx.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </StudioLayout>
  );
}

function StatMini({ label, value, icon: Icon, color = "text-neon-lime" }: { label: string, value: string, icon: any, color?: string }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <Icon className={cn("w-3 h-3", color)} />
        <span className="text-[10px] font-mono text-slate-500 uppercase">{label}</span>
      </div>
      <p className="text-xl font-display font-bold text-white">{value}</p>
    </div>
  );
}
