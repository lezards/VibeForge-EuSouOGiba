'use client';

import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Github, Chrome, Disc as Discord, Wallet, ArrowRight, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type AuthView = 'login' | 'register';

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [view, setView] = useState<AuthView>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin' && password === 'admin') {
      router.push('/admin');
      onClose();
    } else if (email === 'user' && password === 'user') {
      router.push('/dashboard');
      onClose();
    } else {
      // Default behavior for demo
      router.push('/dashboard');
      onClose();
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-navy-950 border-l border-white/10 z-[101] shadow-2xl flex flex-col"
              >
                <div className="p-8 flex items-center justify-between border-b border-white/5">
                  <div>
                    <Dialog.Title className="text-2xl font-display font-bold text-white">
                      {view === 'login' ? 'Welcome Back' : 'Join VibeForge'}
                    </Dialog.Title>
                    <Dialog.Description className="text-sm text-slate-400 mt-1">
                      {view === 'login' ? 'Sign in to your VibeForge account' : 'Start your creative journey today'}
                    </Dialog.Description>
                  </div>
                  <Dialog.Close asChild>
                    <button className="p-2 rounded-full hover:bg-white/5 text-slate-400 hover:text-white transition-colors">
                      <X className="w-6 h-6" />
                    </button>
                  </Dialog.Close>
                </div>

                <div className="flex-grow overflow-y-auto p-8 space-y-8 scrollbar-hide">
                  {view === 'register' && (
                    <button 
                      onClick={() => setView('login')}
                      className="flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-neon-lime transition-colors uppercase tracking-widest"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back to Login
                    </button>
                  )}

                  {/* Social Logins */}
                  <div className="space-y-3">
                    <AuthButton icon={Chrome} label={view === 'login' ? "Continue with Google" : "Sign up with Google"} color="hover:bg-white/5" />
                    <AuthButton icon={Discord} label={view === 'login' ? "Continue with Discord" : "Sign up with Discord"} color="hover:bg-[#5865F2]/10 hover:text-[#5865F2]" />
                    <AuthButton icon={Wallet} label="Connect Metamask" color="hover:bg-[#F6851B]/10 hover:text-[#F6851B]" />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/5"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-navy-950 px-2 text-slate-500 font-mono tracking-widest">Or continue with email</span>
                    </div>
                  </div>

                  {/* Form */}
                  <form className="space-y-4" onSubmit={handleLogin}>
                    {view === 'register' && (
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                        <input 
                          type="text" 
                          placeholder="John Doe"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-neon-lime/50 transition-colors"
                        />
                      </div>
                    )}
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                      <input 
                        type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com (or 'user'/'admin')"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-neon-lime/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-slate-500 ml-1">Password</label>
                      <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-neon-lime/50 transition-colors"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-neon-lime text-navy-950 font-bold py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4"
                    >
                      {view === 'login' ? 'Sign In' : 'Create Account'} <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>

                  <p className="text-center text-sm text-slate-500">
                    {view === 'login' ? (
                      <>
                        Don&apos;t have an account?{' '}
                        <button onClick={() => setView('register')} className="text-neon-lime font-bold hover:underline">Create one</button>
                      </>
                    ) : (
                      <>
                        Already have an account?{' '}
                        <button onClick={() => setView('login')} className="text-neon-lime font-bold hover:underline">Sign in</button>
                      </>
                    )}
                  </p>
                </div>

                <div className="p-8 border-t border-white/5 bg-white/[0.02]">
                  <p className="text-[10px] text-slate-600 text-center leading-relaxed font-mono uppercase tracking-tighter">
                    By continuing, you agree to VibeForge&apos;s Terms of Service and Privacy Policy.
                  </p>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}

function AuthButton({ icon: Icon, label, color }: { icon: any, label: string, color: string }) {
  return (
    <button className={cn(
      "w-full flex items-center gap-4 px-6 py-4 rounded-xl border border-white/10 text-white font-medium transition-all group",
      color
    )}>
      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
      <span>{label}</span>
    </button>
  );
}
