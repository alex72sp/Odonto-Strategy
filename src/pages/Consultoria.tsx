"use client";

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Target, BarChart3, Users, ArrowRight } from "lucide-react";

const Consultoria = () => {
  const whatsappLink = "https://wa.me/5511983232828";

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      
      <section className="pt-32 pb-20 px-4 bg-[#0B6B4F] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6">Consultoria odontológica estratégica para clínicas</h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            O direcionamento que sua clínica precisa para sair da estagnação e crescer com processos sólidos.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B6B4F] mb-6">O que é consultoria odontológica?</h2>
              <p className="text-[#333] mb-4 leading-relaxed">
                Diferente de uma agência de marketing, a consultoria odontológica mergulha na operação do seu negócio. Nós não apenas trazemos pacientes, nós garantimos que sua clínica esteja pronta para convertê-los e lucrar com eles.
              </p>
              <p className="text-[#333] mb-6 leading-relaxed">
                Analisamos números, processos de venda, gestão de agenda e eficiência da equipe para identificar onde o dinheiro está sendo perdido.
              </p>
              <Button 
                onClick={() => window.open(whatsappLink, '_blank')}
                className="bg-[#0B6B4F] text-white hover:bg-[#0F8A5F] font-bold"
              >
                Solicitar diagnóstico
              </Button>
            </div>
            <div className="bg-[#EAF7F1] p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-[#0B6B4F] mb-6">Quando contratar?</h3>
              <ul className="space-y-4">
                {[
                  "Faturamento estagnado há meses",
                  "Sensação de trabalhar muito e não ver lucro",
                  "Alta rotatividade de pacientes e equipe",
                  "Dificuldade em converter orçamentos altos",
                  "Desorganização total nos processos internos"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#0B6B4F] font-medium text-sm">
                    <ShieldCheck className="h-5 w-5 text-[#2ECC71] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B6B4F]">Benefícios da Consultoria</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Visão Estratégica", desc: "Saia do operacional e comece a gerir sua clínica como um negócio de verdade.", icon: <Target /> },
              { title: "Processos Claros", desc: "Padronização do atendimento e das vendas para garantir previsibilidade.", icon: <BarChart3 /> },
              { title: "Aumento de Lucro", desc: "Identificação de desperdícios e otimização da margem de cada procedimento.", icon: <TrendingUp /> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="text-[#0B6B4F] mb-4">{React.cloneElement(item.icon as React.ReactElement, { size: 32 })}</div>
                <h3 className="text-xl font-bold text-[#0B6B4F] mb-3">{item.title}</h3>
                <p className="text-[#333] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

import { TrendingUp } from 'lucide-react';
export default Consultoria;