'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Sparkles, Wand2, Info, MessageSquare, Plus, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface PromptChatProps {
  title?: string;
  placeholder?: string;
  onSuggestion?: (suggestion: string) => void;
}

export function PromptChat({ 
  title = "AI Prompt Assistant", 
  placeholder = "Ask for prompt ideas or improvements...",
  onSuggestion 
}: PromptChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! I'm your VibeForge assistant. I can help you refine your prompts, suggest batch quantities, or give you artistic insights. What are we creating today?",
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "That's a great concept! To make it even better, try adding terms like 'volumetric lighting', 'hyper-detailed textures', and 'cinematic composition'. Would you like me to generate a refined prompt for you?",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-navy-900/30 border-l border-white/5 backdrop-blur-xl">
      <div className="p-4 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-neon-lime" />
          <h3 className="text-sm font-bold text-white">{title}</h3>
        </div>
        <button className="p-1.5 rounded-lg hover:bg-white/5 text-slate-500 hover:text-white transition-colors">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-hide">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "flex flex-col max-w-[85%]",
                msg.role === 'user' ? "ml-auto items-end" : "items-start"
              )}
            >
              <div className={cn(
                "px-4 py-3 rounded-2xl text-sm leading-relaxed",
                msg.role === 'user' 
                  ? "bg-neon-lime text-navy-950 font-medium" 
                  : "bg-white/5 text-slate-300 border border-white/10"
              )}>
                {msg.content}
              </div>
              <span className="text-[10px] text-slate-600 mt-1 px-1 font-mono">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="p-4 border-t border-white/5 bg-navy-950/50">
        <div className="flex flex-wrap gap-2 mb-4">
          <SuggestionChip icon={Wand2} label="Improve Prompt" onClick={() => setInput("Can you improve my current prompt?")} />
          <SuggestionChip icon={Sparkles} label="Batch Ideas" onClick={() => setInput("Give me 5 variations for a cyberpunk city.")} />
        </div>
        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder={placeholder}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 pr-12 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-neon-lime/50 transition-all resize-none h-24"
          />
          <button 
            onClick={handleSend}
            className="absolute bottom-3 right-3 p-2 bg-neon-lime text-navy-950 rounded-xl hover:scale-110 transition-transform disabled:opacity-50 disabled:scale-100"
            disabled={!input.trim()}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function SuggestionChip({ icon: Icon, label, onClick }: { icon: any, label: string, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 hover:bg-white/10 hover:text-white transition-all uppercase tracking-wider"
    >
      <Icon className="w-3 h-3" />
      {label}
    </button>
  );
}
