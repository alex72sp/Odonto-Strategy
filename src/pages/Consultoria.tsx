"use client";

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandDivider from "@/components/BrandDivider";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Consultoria = () => {
  const message = encodeURIComponent("Olá! Quero entender o diagnóstico estratégico.\nNome:\nClínica:\nCidade:\nBreve contexto:");
  const whatsappLink = `https://wa.me/5511983232828?text=${message}`;

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      
      <section className="pt-32 pb-20 px-4 bg-[#0B6B4F] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm mb-6 text-white/80 uppercase tracking-widest font-bold">
            Consultoria Odontológica Estratégica
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6">Consultoria para dentistas e clínicas</h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            O direcionamento que sua <strong>clínica odontológica</strong> precisa para sair da estagnação e <strong>aumentar o faturamento odontológico</strong> com processos sólidos.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B6B4F] mb-6">O que é consultoria odontológica estratégica?</h2>
              <p className="text-[#333] mb-4 leading-relaxed">
                Diferente de uma agência de marketing, a nossa consultoria mergulha na operação do seu negócio. Nós garantimos que sua <strong>clínica odontológica</strong> esteja pronta para converter pacientes e lucrar com eles através de uma <strong>gestão de clínica odontológica</strong> eficiente.
              </p>
              <p className="text-[#333] mb-6 leading-relaxed">
                Analisamos números, processos de venda e eficiência da equipe para identificar onde o dinheiro está sendo perdido.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                  <Button 
                    onClick={() => window.open(whatsappLink, '_blank')}
                    className="bg-[#0B6B4F] text-white hover:bg-[#0F8A5F] font-bold px-8 py-6 w-full sm:w-auto shadow-lg"
                  >
                    Solicitar diagnóstico estratégico
                  </Button>
                  <Link to="/blog" className="flex items-center gap-2 text-[#0B6B4F] font-bold hover:underline py-2">
                    Dicas no blog <ArrowRight size={18} />
                  </Link>
                </div>
                <p className="text-[10px] md:text-xs text-[#0B6B4F]/60 font-medium text-center sm:text-left">
                  O primeiro passo para um <strong>diagnóstico para clínica odontológica</strong> preciso.
                </p>
              </div>
            </div>
            <div className="bg-[#EAF7F1] p-8 rounded-3xl border border-[#0B6B4F]/10">
              <h3 className="text-xl font-bold text-[#0B6B4F] mb-6">Quando contratar?</h3>
              <ul className="space-y-4">
                {[
                  "Faturamento estagnado na clínica odontológica",
                  "Sensação de trabalhar muito e não ver lucro real",
                  "Dificuldade em converter orçamentos de alto valor",
                  "Desorganização total nos processos internos",
                  "Necessidade de uma gestão de clínica odontológica profissional"
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

      <BrandDivider />
      <Footer />
    </div>
  );
};

export default Consultoria;