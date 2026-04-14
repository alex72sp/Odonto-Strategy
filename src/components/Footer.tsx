"use client";

import React from 'react';
import { Link } from "react-router-dom";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Footer = () => {
  const message = encodeURIComponent("Olá, gostaria de entender melhor como funciona o diagnóstico estratégico.\n\nNome:\nClínica:\nCidade:\n\nPode me dar um breve contexto da sua clínica?");
  const whatsappLink = `https://wa.me/5511983232828?text=${message}`;

  return (
    <footer className="bg-[#0B6B4F] text-white py-16 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-black tracking-tighter uppercase">
                <span className="text-white">ODONTO</span>{" "}
                <span className="text-[#2ECC71]">STRATEGY</span>
              </span>
            </div>
            <p className="text-white/60 text-sm max-w-sm leading-relaxed">
              Consultoria estratégica especializada em gestão de clínicas odontológicas. Focamos em identificar gargalos e estruturar processos para crescimento sustentável.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-[#2ECC71] uppercase tracking-widest text-xs">Links Rápidos</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/consultoria-odontologica" className="hover:text-white transition-colors">Consultoria</Link></li>
              <li><Link to="/gestao-clinica-odontologica" className="hover:text-white transition-colors">Gestão</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-[#2ECC71] uppercase tracking-widest text-xs">Serviços</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link to="/diagnostico-clinica-odontologica" className="hover:text-white transition-colors">Diagnóstico</Link></li>
              <li><Link to="/aumentar-faturamento-clinica-odontologica" className="hover:text-white transition-colors">Faturamento</Link></li>
              <li><a href={whatsappLink} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center text-white/40 text-[10px]">
          <p>© {new Date().getFullYear()} Odonto Strategy. Todos os direitos reservados.</p>
          <div className="mt-4">
            <MadeWithDyad />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;