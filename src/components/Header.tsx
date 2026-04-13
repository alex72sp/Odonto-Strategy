"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const whatsappNumber = "5511983232828";
  const message = encodeURIComponent("Olá, quero solicitar um diagnóstico estratégico.\nNome:\nClínica:\nCidade:\nFaturamento médio:\nPrincipal dificuldade:");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  const handleCtaClick = () => {
    window.open(whatsappLink, '_blank');
  };

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Consultoria', path: '/consultoria-odontologica' },
    { name: 'Gestão', path: '/gestao-clinica-odontologica' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-xl md:text-2xl font-black tracking-tighter uppercase">
            <span className="text-[#0B6B4F]">ODONTO</span>{" "}
            <span className="text-[#2ECC71]">STRATEGY</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`text-xs font-bold tracking-widest uppercase transition-colors ${
                location.pathname === link.path ? 'text-[#0B6B4F]' : 'text-[#1A3C34] hover:text-[#0B6B4F]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            onClick={handleCtaClick}
            className="bg-[#0B6B4F] text-white hover:bg-[#0F8A5F] font-bold rounded-lg px-6 shadow-md transition-all"
          >
            Solicitar diagnóstico
          </Button>
        </nav>
        
        <div className="md:hidden flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#0B6B4F]"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-bold text-[#1A3C34] py-2 border-b border-gray-50"
            >
              {link.name}
            </Link>
          ))}
          <Button 
            onClick={() => {
              handleCtaClick();
              setIsMenuOpen(false);
            }}
            className="bg-[#0B6B4F] text-white w-full font-bold"
          >
            Solicitar diagnóstico
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;