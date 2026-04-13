"use client";

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  TrendingUp, 
  Target, 
  BarChart3, 
  MessageCircle,
  XCircle
} from "lucide-react";

const Index = () => {
  const whatsappLink = "https://wa.me/5511983232828";

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-[#1A1A1A]">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0B6B4F] text-white pt-32 pb-24 md:pt-48 md:pb-40 px-4">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="text-sm md:text-base mb-6 text-white/80 max-w-2xl mx-auto">
            A consultoria odontológica é essencial para clínicas que querem aumentar o faturamento com organização, estratégia e processos bem definidos.
          </p>
          <Badge className="bg-[#2ECC71] text-[#0B6B4F] hover:bg-[#2ECC71] border-none mb-6 px-4 py-1 text-sm font-bold tracking-wider uppercase">
            Estratégia para clínica odontológica
          </Badge>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight">
            Sua clínica odontológica poderia faturar mais, <br className="hidden md:block" /> 
            <span className="text-[#F4C542]">mas algo está travando.</span>
          </h1>
          <p className="text-xl md:text-3xl font-bold mb-8 text-[#2ECC71]">
            O problema pode não ser falta de pacientes.
          </p>
          <p className="text-base md:text-xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            Antes de investir mais em marketing, é essencial entender o que está impedindo o crescimento da sua clínica odontológica. Identificamos os gargalos e mostramos o que precisa ser ajustado.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              size="lg" 
              className="bg-[#F4C542] text-[#0B6B4F] hover:bg-[#E0B837] px-8 py-6 text-lg font-bold rounded-xl shadow-2xl transition-all hover:scale-105"
            >
              Solicitar diagnóstico
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Bloco de Impacto */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-[#0B6B4F] mb-8 text-center">
            Você pode estar perdendo dinheiro todos os dias sem perceber
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              "Pacientes não fecham orçamento",
              "Agenda ociosa na clínica odontológica",
              "Processos desorganizados",
              "Marketing sem retorno claro"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-[#F5F5F5] rounded-xl border-l-4 border-red-500">
                <XCircle className="h-5 w-5 text-red-500 shrink-0" />
                <span className="font-semibold text-[#333]">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-xl text-center font-bold text-[#0B6B4F]">
            O problema não está na falta de pacientes, está na estrutura da clínica odontológica.
          </p>
        </div>
      </section>

      {/* Diferencial */}
      <section className="py-20 px-4 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-[#0B6B4F] mb-6 leading-tight">
                Gestão de clínica odontológica focada em resultados
              </h2>
              <p className="text-base md:text-lg text-[#333333] mb-6 leading-relaxed">
                O mercado foca em execução, como tráfego e redes sociais. Nós atuamos antes disso. Analisamos a clínica, identificamos falhas e entregamos um plano claro para aumentar faturamento da clínica odontológica.
              </p>
              <div className="bg-[#0B6B4F] p-6 rounded-2xl text-white mb-8 shadow-xl">
                <p className="font-bold text-lg mb-2">Não executamos. Não operamos marketing. Não gerenciamos equipe.</p>
                <p className="text-[#2ECC71] font-black text-xl uppercase tracking-wider">Entregamos direção estratégica.</p>
              </div>
              <p className="text-[#0B6B4F] font-bold mb-4">Consultoria odontológica estratégica para clínicas que querem organizar antes de investir.</p>
              <Link to="/consultoria-odontologica-completa" className="text-[#2ECC71] font-bold flex items-center gap-2 hover:underline">
                Conheça nossa consultoria odontológica completa <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Consultoria Odontológica", path: "/consultoria-odontologica", icon: <Target /> },
                { title: "Gestão de Clínica", path: "/gestao-clinica-odontologica", icon: <BarChart3 /> },
                { title: "Aumentar Faturamento", path: "/aumentar-faturamento-clinica-odontologica", icon: <TrendingUp /> }
              ].map((item, i) => (
                <Link 
                  key={i} 
                  to={item.path}
                  className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-[#0B6B4F] group-hover:text-[#2ECC71] transition-colors">
                      {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                    </div>
                    <span className="font-bold text-[#0B6B4F]">{item.title}</span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-[#2ECC71] transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-24 px-4 bg-[#0B6B4F] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white leading-tight">
            Sua clínica odontológica está pronta para o próximo nível?
          </h2>
          <p className="text-lg mb-10 text-white/80 leading-relaxed">
            Se sua clínica já atende pacientes, mas o faturamento não cresce como deveria, o problema não está apenas na captação. Está na estrutura. O primeiro passo não é investir mais. É entender o que está travando.
          </p>
          <Button 
            onClick={() => window.open(whatsappLink, '_blank')}
            size="lg" 
            className="bg-[#F4C542] text-[#0B6B4F] hover:bg-[#E0B837] px-10 py-7 text-lg font-bold rounded-xl shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-3 w-full max-w-[280px] md:w-auto"
          >
            <MessageCircle className="h-5 w-5 shrink-0" />
            Falar no WhatsApp
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;