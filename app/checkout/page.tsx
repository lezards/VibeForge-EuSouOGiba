'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'motion/react';
import { 
  CreditCard, 
  ShieldCheck, 
  Lock, 
  ChevronRight, 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus,
  CheckCircle2,
  ArrowLeft
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CheckoutPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen flex flex-col bg-navy-950">
      <Header />
      
      <main className="flex-grow pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Checkout Header */}
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-display font-bold text-white mb-2">Checkout</h1>
              <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest">
                <span className={step >= 1 ? "text-neon-lime" : "text-slate-600"}>01. Cart</span>
                <ChevronRight className="w-3 h-3 text-slate-700" />
                <span className={step >= 2 ? "text-neon-lime" : "text-slate-600"}>02. Payment</span>
                <ChevronRight className="w-3 h-3 text-slate-700" />
                <span className={step >= 3 ? "text-neon-lime" : "text-slate-600"}>03. Confirm</span>
              </div>
            </div>
            <Link href="/market" className="text-sm font-bold text-slate-400 hover:text-white flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Continue Shopping
            </Link>
          </div>

          <div className="grid lg:grid-cols-[1fr_400px] gap-16">
            {/* Left Column - Cart Items / Forms */}
            <div className="space-y-8">
              {step === 1 && (
                <div className="space-y-6">
                  {[1, 2].map((i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="glass-panel rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-8 group"
                    >
                      <div className="w-32 h-24 relative rounded-2xl overflow-hidden shrink-0">
                        <Image 
                          src={`https://picsum.photos/seed/cart-${i}/400/300`} 
                          alt="Cart Item" 
                          fill 
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-grow text-center sm:text-left">
                        <h3 className="text-lg font-display font-bold text-white mb-1">Cyberpunk City Kit</h3>
                        <p className="text-xs text-slate-500 font-mono">Standard License • by @PixelArchitect</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="flex items-center bg-navy-900 border border-white/10 rounded-xl p-1">
                          <button className="p-2 text-slate-500 hover:text-white"><Minus className="w-4 h-4" /></button>
                          <span className="w-8 text-center text-sm font-bold text-white">1</span>
                          <button className="p-2 text-slate-500 hover:text-white"><Plus className="w-4 h-4" /></button>
                        </div>
                        <div className="text-xl font-display font-bold text-white">$45.00</div>
                        <button className="p-2 text-slate-700 hover:text-red-500 transition-colors"><Trash2 className="w-5 h-5" /></button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {step === 2 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div className="glass-panel rounded-3xl p-8">
                    <h3 className="text-xl font-display font-bold text-white mb-8">Payment Method</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      <button className="p-6 bg-white/5 border-2 border-neon-lime rounded-2xl flex flex-col items-center gap-4">
                        <CreditCard className="w-8 h-8 text-neon-lime" />
                        <span className="text-sm font-bold text-white">Credit Card</span>
                      </button>
                      <button className="p-6 bg-navy-900 border-2 border-transparent hover:border-white/10 rounded-2xl flex flex-col items-center gap-4 transition-all">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs">PP</div>
                        <span className="text-sm font-bold text-slate-400">PayPal</span>
                      </button>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-slate-500 uppercase">Card Number</label>
                        <input type="text" placeholder="**** **** **** 1234" className="w-full bg-navy-900 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-neon-lime" />
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono text-slate-500 uppercase">Expiry Date</label>
                          <input type="text" placeholder="MM / YY" className="w-full bg-navy-900 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-neon-lime" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono text-slate-500 uppercase">CVC</label>
                          <input type="text" placeholder="***" className="w-full bg-navy-900 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-neon-lime" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-panel rounded-[3rem] p-12 text-center"
                >
                  <div className="w-20 h-20 bg-neon-lime/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-10 h-10 text-neon-lime" />
                  </div>
                  <h2 className="text-4xl font-display font-bold text-white mb-4">Order Confirmed!</h2>
                  <p className="text-slate-400 mb-10 max-w-md mx-auto">
                    Your assets are ready for download. We&apos;ve sent a receipt and download links to your email.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/hub" className="bg-neon-lime text-navy-950 px-8 py-4 rounded-2xl font-bold hover:opacity-90 transition-all">
                      Go to Dashboard
                    </Link>
                    <Link href="/market" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all">
                      Back to Market
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Column - Order Summary */}
            {step < 3 && (
              <aside className="space-y-8">
                <div className="glass-panel rounded-[2.5rem] p-8 sticky top-32">
                  <h3 className="text-xl font-display font-bold text-white mb-8">Order Summary</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Subtotal</span>
                      <span className="text-white font-mono">$90.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Platform Fee</span>
                      <span className="text-white font-mono">$4.50</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Discount</span>
                      <span className="text-neon-lime font-mono">-$10.00</span>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/5 mb-8">
                    <div className="flex justify-between items-end">
                      <span className="text-lg font-display font-bold text-white">Total</span>
                      <span className="text-3xl font-display font-bold text-neon-cyan">$84.50</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Promo Code" 
                        className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neon-gold"
                      />
                      <button className="absolute right-2 top-1/2 -translate-y-1/2 text-neon-gold text-xs font-bold hover:underline">APPLY</button>
                    </div>
                  </div>

                  <button 
                    onClick={() => setStep(step + 1)}
                    className="w-full bg-white text-navy-950 py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-3"
                  >
                    {step === 1 ? 'Continue to Payment' : 'Complete Purchase'} <ChevronRight className="w-5 h-5" />
                  </button>

                  <div className="mt-8 flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-[10px] text-slate-500 uppercase font-mono">
                      <ShieldCheck className="w-4 h-4 text-neon-lime" /> Secure Checkout
                    </div>
                    <div className="flex items-center gap-3 text-[10px] text-slate-500 uppercase font-mono">
                      <Lock className="w-4 h-4 text-neon-cyan" /> SSL Encrypted
                    </div>
                  </div>
                </div>

                <div className="glass-panel rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-neon-gold/10 flex items-center justify-center text-neon-gold">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white">Buyer Protection</h4>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Not satisfied with your purchase? Get a full refund within 24 hours if the assets don&apos;t match the description.
                  </p>
                </div>
              </aside>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
