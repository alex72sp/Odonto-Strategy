"use client";

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Target, 
  BarChart3, 
  AlertCircle, 
  Zap,
  MessageCircle,
  XCircle,
  Quote
} from "lucide-react";

const Index = () => {
  const whatsappLink = "https://wa.me/5511983232828";

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-[#1A1A1A]">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0B6B4F] text-white pt-32 pb-24 md:pt-48 md:pb-40 px-4">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#2ECC71] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <Badge className="bg-[#2ECC71] text-[#0B6B4F] hover:bg-[#2ECC71] border-none mb-6 px-4 py-1 text-sm font-bold tracking-wider uppercase">
            Consultoria odontológica estratégica
          </Badge>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight">
            Sua clínica poderia faturar mais, <br className="hidden md:block" /> 
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
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-[#0B6B4F] mb-4">
              Você pode estar perdendo dinheiro todos os dias sem perceber
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              "Pacientes não fecham orçamento",
              "Agenda tem espaços vazios",
              "Processos desorganizados",
              "Marketing sem retorno claro"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-[#F5F5F5] rounded-xl border-l-4 border-red-500">
                <XCircle className="h-5 w-5 text-red-500 shrink-0" />
                <span className="font-semibold text-[#333]">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold text-[#0B6B4F]">
              O problema não está na falta de pacientes, está na estrutura da clínica odontológica.
            </p>
          </div>
        </div>
      </section>

      {/* Diferencial */}
      <section className="py-20 px-4 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-[#0B6B4F] mb-6 leading-tight">
                O que fazemos de diferente
              </h2>
              <p className="text-base md:text-lg text-[#333333] mb-6 leading-relaxed">
                O mercado foca em execução, como tráfego e redes sociais. Nós atuamos antes disso. Analisamos a clínica, identificamos falhas e entregamos um plano claro.
              </p>
              <div className="bg-[#0B6B4F] p-6 rounded-2xl text-white mb-8 shadow-xl">
                <p className="font-bold text-lg mb-2">Não executamos. Não operamos marketing. Não gerenciamos equipe.</p>
                <p className="text-[#2ECC71] font-black text-xl uppercase tracking-wider">Entregamos direção estratégica.</p>
              </div>
              <div className="space-y-4">
                <p className="text-[#0B6B4F] font-bold">Consultoria estratégica para clínicas que querem organizar antes de investir.</p>
                <p className="text-[#0B6B4F] font-bold">Gestão de clínica odontológica focada em resultados reais.</p>
              </div>
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
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white leading-tight">
            Sua clínica está pronta para o próximo nível?
          </h2>
          <p className="text-lg mb-10 text-white/80 leading-relaxed">
            Se sua clínica já atende pacientes, mas o faturamento não cresce como deveria, o problema não está apenas na captação. Está na estrutura. O primeiro passo não é investir mais. É entender o que está travando.
          </p>
          <div className="flex flex-col items-center gap-6">
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              size="lg" 
              className="bg-[#F4C542] text-[#0B6B4F] hover:bg-[#E0B837] px-10 py-7 text-lg font-bold rounded-xl shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-3 w-full max-w-[280px] md:w-auto"
            >
              <MessageCircle className="h-5 w-5 shrink-0" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;