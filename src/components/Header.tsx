"use client";

import React from 'react';
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onScroll: (id: string) => void;
}

const Header = ({ onScroll }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* Espaço para o Logo - Altura otimizada para desktop e mobile */}
          <div className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-[#1A3C34] tracking-tight flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#0B6B4F] rounded-lg flex items-center justify-center text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 md:w-6 md:h-6">
                  <path d="M7 12l3 3 7-7" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                </svg>
              </div>
              <span className="font-black">ODONTO</span>
              <span className="text-[#0B6B4F] font-light">STRATEGY</span>
            </span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => onScroll('sobre')} 
            className="text-xs font-bold text-[#1A3C34] hover:text-[#0B6B4F] transition-colors tracking-widest uppercase"
          >
            Sobre
          </button>
          <button 
            onClick={() => onScroll('servicos')} 
            className="text-xs font-bold text-[#1A3C34] hover:text-[#0B6B4F] transition-colors tracking-widest uppercase"
          >
            Serviços
          </button>
          <Button 
            onClick={() => onScroll('contato')}
            className="bg-[#0B6B4F] text-white hover:bg-[#0F8A5F] font-bold rounded-lg px-6 shadow-md hover:shadow-lg transition-all"
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