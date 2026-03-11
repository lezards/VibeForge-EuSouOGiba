import React from 'react';
import Link from 'next/link';
import { Zap, Github, Twitter, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-neon-lime rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-navy-950 fill-current" />
              </div>
              <span className="text-xl font-display font-bold text-white tracking-tighter">VIBEFORGE</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              The world&apos;s premier ecosystem for digital art creators. Generate, sell, and compete in the ultimate digital playground.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-slate-400 hover:bg-neon-lime hover:text-navy-950 transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-slate-400 hover:bg-neon-lime hover:text-navy-950 transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-slate-400 hover:bg-neon-lime hover:text-navy-950 transition-all"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/arena" className="hover:text-neon-lime transition-colors">Vibe Arena</Link></li>
              <li><Link href="/market" className="hover:text-neon-lime transition-colors">Vibe Market</Link></li>
              <li><Link href="/studio" className="hover:text-neon-lime transition-colors">Vibe Studio</Link></li>
              <li><Link href="/dashboard" className="hover:text-neon-lime transition-colors">Vibe Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="#" className="hover:text-neon-lime transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-neon-lime transition-colors">API Reference</Link></li>
              <li><Link href="/referrals" className="hover:text-neon-lime transition-colors">Referral Program</Link></li>
              <li><Link href="#" className="hover:text-neon-lime transition-colors">Community</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-6">Get the latest pixel art drops and seasonal updates.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-neon-lime flex-grow"
              />
              <button className="bg-neon-lime text-navy-950 p-2 rounded-lg hover:opacity-90 transition-all">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">© 2026 VibeForge Studio. All rights reserved.</p>
          <div className="flex gap-8 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
