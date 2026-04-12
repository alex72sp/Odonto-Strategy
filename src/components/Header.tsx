"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onScroll: (id: string) => void;
}

const Header = ({ onScroll }: HeaderProps) => {
  const [imageError, setImageError] = useState(false);
  const logoUrl = "dyad-media://media/nimble-capybara-snore/.dyad/media/792ef36865eb71bdf60d0fd21ddb2886.jpeg";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <div 
          className="flex items-center cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {imageError ? (
            <span className="text-xl md:text-2xl font-black text-[#0B6B4F] tracking-tighter">
              ODONTO <span className="text-[#2ECC71]">STRATEGY</span>
            </span>
          ) : (
            <img 
              src={logoUrl} 
              alt="Odonto Strategy Logo" 
              className="h-12 md:h-16 w-auto object-contain"
              onError={() => setImageError(true)}
            />
          )}
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