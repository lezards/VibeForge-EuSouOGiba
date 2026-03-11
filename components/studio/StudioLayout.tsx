'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { 
  Zap, 
  Layers, 
  LayoutGrid, 
  Trophy, 
  Settings, 
  User, 
  Users,
  LogOut, 
  ChevronRight,
  Sparkles,
  History,
  Palette,
  Home,
  Layout,
  Wand2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { AuthModal } from '@/components/auth/AuthModal';

interface StudioLayoutProps {
  children: React.ReactNode;
}

export function StudioLayout({ children }: StudioLayoutProps) {
  const pathname = usePathname();
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Zap, label: 'Studio', href: '/studio' },
    { icon: Wand2, label: 'Editor', href: '/studio/editor' },
    { icon: LayoutGrid, label: 'Batch Generation', href: '/batch' },
    { icon: History, label: 'History', href: '/history' },
    { icon: Trophy, label: 'Arena', href: '/arena' },
    { icon: Palette, label: 'Assets', href: '/market' },
    { icon: Users, label: 'Referrals', href: '/referrals' },
    { icon: Layout, label: 'Dashboard', href: '/dashboard' },
    { icon: Layers, label: 'Elements', href: '/elements' },
  ];

  return (
    <div className="flex h-screen bg-navy-950 overflow-hidden">
      {/* Sidebar */}
      <aside className={cn(
        "relative flex flex-col border-r border-white/5 bg-navy-900/50 backdrop-blur-xl transition-all duration-300 z-40",
        isSidebarCollapsed ? "w-20" : "w-64"
      )}>
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-neon-lime rounded-lg flex items-center justify-center shadow-lg shadow-neon-lime/20">
            <Zap className="w-5 h-5 text-navy-950 fill-current" />
          </div>
          {!isSidebarCollapsed && (
            <span className="font-display font-bold text-xl text-white tracking-tighter">VibeForge</span>
          )}
        </div>

        <nav className="flex-grow px-4 py-8 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <div className={cn(
                  "flex items-center gap-4 px-4 py-3 rounded-xl transition-all group relative",
                  isActive ? "bg-neon-lime/10 text-neon-lime" : "text-slate-400 hover:bg-white/5 hover:text-white"
                )}>
                  <item.icon className={cn("w-5 h-5", isActive ? "fill-current" : "")} />
                  {!isSidebarCollapsed && (
                    <span className="font-medium text-sm">{item.label}</span>
                  )}
                  {isActive && (
                    <motion.div 
                      layoutId="activeNav"
                      className="absolute left-0 w-1 h-6 bg-neon-lime rounded-r-full"
                    />
                  )}
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 space-y-2 border-t border-white/5">
          <button 
            onClick={() => setIsAuthOpen(true)}
            className={cn(
              "w-full flex items-center gap-4 px-4 py-3 rounded-xl text-slate-400 hover:bg-white/5 hover:text-white transition-all",
              isSidebarCollapsed && "justify-center"
            )}
          >
            <User className="w-5 h-5" />
            {!isSidebarCollapsed && <span className="text-sm font-medium">Sign In</span>}
          </button>
          <button 
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className={cn(
              "w-full flex items-center gap-4 px-4 py-3 rounded-xl text-slate-500 hover:text-white transition-all",
              isSidebarCollapsed && "justify-center"
            )}
          >
            <ChevronRight className={cn("w-5 h-5 transition-transform", !isSidebarCollapsed && "rotate-180")} />
            {!isSidebarCollapsed && <span className="text-sm font-medium">Collapse</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-white/5 bg-navy-950/50 backdrop-blur-md flex items-center justify-between px-8 z-30">
          <div className="flex items-center gap-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-slate-500">
              {navItems.find(item => item.href === pathname)?.label || 'Studio'}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white/5 rounded-full px-3 py-1 border border-white/10">
              <Sparkles className="w-3 h-3 text-neon-gold" />
              <span className="text-xs font-bold text-white">1,240 Credits</span>
            </div>
            <button className="p-2 rounded-full hover:bg-white/5 text-slate-400">
              <Settings className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neon-lime to-neon-cyan p-[1px]">
              <div className="w-full h-full rounded-full bg-navy-950 flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-grow overflow-hidden relative">
          {children}
        </div>
      </main>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
}
