"use client";

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandDivider from "@/components/BrandDivider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  TrendingUp, 
  Target, 
  BarChart3, 
  MessageCircle,
  XCircle,
  CheckCircle2,
  Building2
} from "lucide-react";

const Index = () => {
  const message = encodeURIComponent("Olá! Quero entender o diagnóstico estratégico.\nNome:\nClínica:\nCidade:\nBreve contexto:");
  const whatsappLink = `https://wa.me/5511983232828?text=${message}`;

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-[#1A1A1A]">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0B6B4F] text-white pt-32 pb-20 md:pt-48 md:pb-40 px-4">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="text-sm md:text-base mb-6 text-white/80 max-w-2xl mx-auto uppercase tracking-widest font-bold">
            Consultoria Odontológica Estratégica Especializada
          </p>
          <Badge className="bg-[#2ECC71] text-[#0B6B4F] hover:bg-[#2ECC71] border-none mb-6 px-4 py-1 text-sm font-bold tracking-wider uppercase">
            Estratégia para clínica odontológica
          </Badge>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight">
            Sua clínica odontológica poderia faturar mais, <br className="hidden md:block" /> 
            <span className="text-[#F4C542]">mas algo está travando o crescimento.</span>
          </h1>
          <p className="text-lg md:text-2xl font-medium mb-8 text-[#2ECC71] max-w-3xl mx-auto leading-relaxed">
            Identificamos os pontos que limitam o crescimento da sua <strong>clínica odontológica</strong> e mostramos o caminho para <strong>aumentar o faturamento odontológico</strong>.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <div className="w-full flex flex-col items-center gap-3">
              <Button 
                onClick={() => window.open(whatsappLink, '_blank')}
                size="lg" 
                className="bg-[#F4C542] text-[#0B6B4F] hover:bg-[#E0B837] px-8 py-6 text-lg font-bold rounded-xl shadow-2xl transition-all hover:scale-105 w-full md:w-auto max-w-[350px]"
              >
                Quero um diagnóstico estratégico
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-[10px] md:text-xs text-white/80 font-bold">
                O primeiro passo para uma <strong>gestão de clínica odontológica</strong> profissional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco de Impacto */}
      <section className="py-16 px-4 bg-[#EAF7F1]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#0B6B4F] mb-6 leading-tight">
            Se sua clínica não cresce, o problema dificilmente é falta de paciente
          </h2>
          <div className="space-y-4 text-lg md:text-xl text-[#333] leading-relaxed">
            <p>
              Na maioria dos casos, o crescimento não acontece por falhas internas na <strong>gestão de clínica odontológica</strong> que passam despercebidas no dia a dia.
            </p>
            <p>
              Pode estar na conversão, na organização da agenda ou na falta de uma <strong>consultoria odontológica estratégica</strong> clara.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Franqueados */}
      <section className="py-16 md:py-24 px-4 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-[#F5F5F5] p-8 rounded-3xl border border-[#0B6B4F]/10 relative overflow-hidden">
                <Building2 className="absolute -right-8 -bottom-8 h-48 w-48 text-[#0B6B4F]/5" />
                <h2 className="text-2xl md:text-3xl font-bold text-[#0B6B4F] mb-6 leading-tight relative z-10">
                  Gestão de clínicas franqueadas odontológicas
                </h2>
                <div className="space-y-4 text-[#333] leading-relaxed relative z-10">
                  <p>
                    Mesmo dentro de redes estruturadas, muitas clínicas franqueadas enfrentam desafios para crescer de forma consistente devido a processos engessados.
                  </p>
                  <p className="font-bold text-[#0B6B4F]">
                    O <strong>diagnóstico para clínica odontológica</strong> identifica esses pontos e mostra caminhos possíveis dentro da sua realidade.
                  </p>
                </div>
                <Button 
                  onClick={() => window.open(whatsappLink, '_blank')}
                  className="mt-8 w-full bg-[#0B6B4F] text-white hover:bg-[#0F8A5F] font-bold py-6 rounded-xl shadow-lg relative z-10"
                >
                  Solicitar diagnóstico estratégico
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                  alt="Clínica odontológica franqueada moderna" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco de Identificação */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B6B4F] mb-8 text-center">
            Sinais de que sua clínica precisa de ajuste
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              "Faturamento estagnado mesmo com muitos atendimentos",
              "Baixa conversão de orçamentos de alto ticket",
              "Agenda com muitos buracos e faltas constantes",
              "Falta de clareza sobre os números reais do negócio"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-[#F5F5F5] rounded-xl border-l-4 border-[#2ECC71] shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-[#2ECC71] shrink-0" />
                <span className="font-semibold text-[#333] text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco de Autoridade */}
      <section className="py-16 md:py-20 px-4 bg-[#F5F5F5]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B6B4F] mb-4">
              O que analisamos no diagnóstico estratégico
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Uma análise profunda para melhorar resultados através de uma <strong>gestão de clínica odontológica</strong> baseada em dados.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {[
                "Saúde financeira e margem de lucro",
                "Taxa de conversão comercial",
                "Eficiência operacional da equipe",
                "Processos de recepção e atendimento",
                "Gargalos invisíveis de faturamento"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <CheckCircle2 className="h-6 w-6 text-[#2ECC71] shrink-0" />
                  <span className="font-bold text-[#0B6B4F]">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#0B6B4F] p-8 rounded-3xl text-white shadow-xl">
              <p className="text-xl leading-relaxed mb-6">
                O objetivo é entregar clareza total sobre o que impede o seu <strong>aumento de faturamento odontológico</strong>.
              </p>
              <Button 
                onClick={() => window.open(whatsappLink, '_blank')}
                className="w-full bg-[#F4C542] text-[#0B6B4F] hover:bg-[#E0B837] font-bold py-6 rounded-xl shadow-lg"
              >
                Quero meu diagnóstico estratégico
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B6B4F] mb-6 leading-tight">
              Consultoria Odontológica Estratégica
            </h2>
            <p className="text-base md:text-xl text-[#333333] max-w-3xl mx-auto leading-relaxed">
              Diferente de agências, nós atuamos na estrutura do seu negócio. Analisamos a clínica, identificamos falhas e entregamos um plano claro para <strong>aumentar faturamento dentista</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch mb-12">
            <div className="bg-[#0B6B4F] p-8 rounded-3xl text-white shadow-xl flex flex-col justify-center">
              <p className="font-bold text-xl mb-4">Foco em Direcionamento Estratégico.</p>
              <p className="text-[#2ECC71] font-black text-2xl uppercase tracking-wider">Gestão de Clínica Odontológica Profissional.</p>
              <p className="mt-6 text-white/80">Organizamos sua operação antes de você investir em captação, garantindo que cada lead seja aproveitado.</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Consultoria Estratégica", path: "/consultoria-odontologica", icon: <Target /> },
                { title: "Gestão Profissional", path: "/gestao-clinica-odontologica", icon: <BarChart3 /> },
                { title: "Aumento de Faturamento", path: "/aumentar-faturamento-clinica-odontologica", icon: <TrendingUp /> }
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

          <div className="flex flex-col items-center gap-8 mt-12">
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              size="lg" 
              className="bg-[#0B6B4F] text-white hover:bg-[#0F8A5F] px-10 py-7 text-lg font-bold rounded-xl shadow-xl transition-all hover:scale-105 w-full md:w-auto max-w-[350px]"
            >
              Solicitar diagnóstico estratégico
            </Button>
            <Link to="/blog" className="text-[#2ECC71] font-bold flex items-center gap-2 hover:underline text-lg text-center">
              Dicas de gestão de clínica odontológica no nosso blog <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <BrandDivider />
      <Footer />
    </div>
  );
};

export default Index;