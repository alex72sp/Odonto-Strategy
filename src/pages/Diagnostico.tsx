"use client";

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, AlertCircle, Target, CheckCircle2 } from "lucide-react";

const Diagnostico = () => {
  const whatsappLink = "https://wa.me/5511983232828";

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      
      <section className="pt-32 pb-20 px-4 bg-[#0B6B4F] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm mb-6 text-white/80">
            A consultoria odontológica é essencial para clínicas que querem aumentar o faturamento com organização, estratégia e processos bem definidos.
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6">Diagnóstico estratégico para clínica odontológica</h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Identificamos os gargalos invisíveis que estão travando o crescimento da sua clínica odontológica.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B6B4F] mb-6">Como funciona o diagnóstico?</h2>
              <p className="text-[#333] mb-6 leading-relaxed">
                O diagnóstico é o primeiro passo da nossa consultoria odontológica. É uma análise profunda da situação atual da sua clínica odontológica para entender por que os resultados não estão aparecendo.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Análise Operacional", desc: "Avaliamos como sua equipe trabalha e como os processos fluem.", icon: <Search className="text-[#2ECC71]" /> },
                  { title: "Identificação de Gargalos", desc: "Mapeamos onde você está perdendo pacientes e dinheiro.", icon: <AlertCircle className="text-red-500" /> },
                  { title: "Plano de Ação", desc: "Entregamos um direcionamento claro do que precisa ser feito.", icon: <Target className="text-[#0B6B4F]" /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-[#0B6B4F]">{item.title}</h4>
                      <p className="text-sm text-[#333]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#F5F5F5] p-8 rounded-3xl border border-gray-100">
              <h3 className="text-xl font-bold text-[#0B6B4F] mb-6">O que analisamos na clínica odontológica:</h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Taxa de conversão da recepção",
                  "Efetividade da apresentação de orçamentos",
                  "Custo de Aquisição de Pacientes (CAC)",
                  "Ticket médio por especialidade",
                  "Taxa de absenteísmo (faltas)",
                  "Saúde financeira e margem de lucro"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-[#333]">
                    <CheckCircle2 className="h-4 w-4 text-[#2ECC71]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button 
                onClick={() => window.open(whatsappLink, '_blank')}
                className="w-full bg-[#0B6B4F] text-white hover:bg-[#0F8A5F] font-bold py-6"
              >
                Agendar meu diagnóstico
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Diagnostico;