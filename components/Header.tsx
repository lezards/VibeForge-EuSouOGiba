'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ShoppingCart, Menu, X, User, Zap, LayoutGrid, Trophy, Store, Terminal, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { AuthModal } from '@/components/auth/AuthModal';

const navItems = [
  { name: 'Studio', href: '/studio', icon: Zap },
  { name: 'Batch', href: '/batch', icon: LayoutGrid },
  { name: 'Arena', href: '/arena', icon: Trophy },
  { name: 'Market', href: '/market', icon: Store },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-navy-950/80 backdrop-blur-lg border-b border-white/5 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-neon-lime rounded-lg flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform shadow-lg shadow-neon-lime/20">
            <Zap className="text-navy-950 w-6 h-6 fill-current" />
          </div>
          <span className="font-display text-2xl font-bold tracking-tighter text-white">VIBEFORGE</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-neon-lime flex items-center gap-2",
                pathname === item.href ? "text-neon-lime" : "text-slate-400"
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center bg-navy-900 border border-white/10 rounded-full px-4 py-1.5 gap-2 focus-within:border-neon-lime transition-colors">
            <Search className="w-4 h-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search art..." 
              className="bg-transparent border-none outline-none text-sm w-40 placeholder:text-slate-600"
            />
          </div>
          
          <button 
            onClick={() => setIsAuthOpen(true)}
            className="hidden sm:flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-5 py-2.5 text-sm font-bold transition-all text-white"
          >
            <User className="w-4 h-4" />
            Sign In
          </button>

          <Link 
            href="/studio" 
            className="hidden sm:flex items-center gap-2 bg-neon-lime text-navy-950 px-5 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-lg shadow-neon-lime/20"
          >
            <Sparkles className="w-4 h-4" />
            Create
          </Link>

          <button 
            className="md:hidden p-2 text-slate-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-navy-900 border-b border-white/10 p-6 md:hidden glass-panel"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-lg font-medium text-slate-300 hover:text-neon-lime"
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              ))}
              <hr className="border-white/5" />
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsAuthOpen(true);
                }}
                className="flex items-center gap-3 text-lg font-medium text-slate-300"
              >
                <User className="w-5 h-5" />
                Sign In
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
