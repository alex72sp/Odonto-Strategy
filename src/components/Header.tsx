"use client";

import React from 'react';
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onScroll: (id: string) => void;
}

const Header = ({ onScroll }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-1 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="text-xl md:text-2xl font-black text-[#0B6B4F] tracking-tighter">
            RCS <span className="text-[#2ECC71]">CONSULTORIA</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => onScroll('sobre')} 
            className="text-xs font-bold text-[#0B6B4F] hover:text-[#2ECC71] transition-colors tracking-widest uppercase"
          >
            Sobre
          </button>
          <button 
            onClick={() => onScroll('servicos')} 
            className="text-xs font-bold text-[#0B6B4F] hover:text-[#2ECC71] transition-colors tracking-widest uppercase"
          >
            Serviços
          </button>
          <button 
            onClick={() => onScroll('contato')} 
            className="text-xs font-bold text-[#0B6B4F] hover:text-[#2ECC71] transition-colors tracking-widest uppercase"
          >
            Contato
          </button>
          <Button 
            onClick={() => onScroll('contato')}
            className="bg-[#0B6B4F] text-white hover:bg-[#0F8A5F] font-bold rounded-lg px-6"
          >
            SOLICITAR DIAGNÓSTICO
          </Button>
        </nav>
        
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onScroll('contato')}
            className="text-[#0B6B4F] font-bold"
          >
            CONTATO
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;