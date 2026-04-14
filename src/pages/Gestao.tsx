"use client";

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandDivider from "@/components/BrandDivider";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Users, Calendar, ClipboardCheck } from "lucide-react";

const Gestao = () => {
  const message = encodeURIComponent("Olá! Quero entender o diagnóstico estratégico.\nNome:\nClínica:\nCidade:\nBreve contexto:");
  const whatsappLink = `https://wa.me/5511983232828?text=${message}`;

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      
      <section className="pt-32 pb-20 px-4 bg-[#0B6B4F] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm mb-6 text-white/80 uppercase tracking-widest font-bold">
            Gestão de Clínica Odontológica Profissional
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6">Gestão estratégica para clínicas</h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Transforme sua <strong>clínica odontológica</strong> em uma empresa organizada, eficiente e lucrativa através de processos de gestão modernos.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#EAF7F1] p-6 rounded-2xl text-center shadow-sm">
                  <Calendar className="mx-auto mb-2 text-[#0B6B4F]" />
                  <span className="text-xs font-bold text-[#0B6B4F] uppercase">Agenda</span>
                </div>
                <div className="bg-[#0B6B4F] p-6 rounded-2xl text-center text-white shadow-md">
                  <Users className="mx-auto mb-2 text-[#2ECC71]" />
                  <span className="text-xs font-bold uppercase">Equipe</span>
                </div>
                <div className="bg-[#0B6B4F] p-6 rounded-2xl text-center text-white shadow-md">
                  <ClipboardCheck className="mx-auto mb-2 text-[#2ECC71]" />
                  <span className="text-xs font-bold uppercase">Processos</span>
                </div>
                <div className="bg-[#EAF7F1] p-6 rounded-2xl text-center shadow-sm">
                  <LayoutDashboard className="mx-auto mb-2 text-[#0B6B4F]" />
                  <span className="text-xs font-bold text-[#0B6B4F] uppercase">Dados</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B6B4F] mb-6">Organização interna é a base do lucro</h2>
              <p className="text-[#333] mb-4 leading-relaxed">
                Muitos dentistas focam apenas na técnica, mas esquecem que a <strong>clínica odontológica</strong> é uma empresa. A <strong>gestão de clínica odontológica</strong> eficiente exige controle total sobre a jornada do paciente.
              </p>
              <p className="text-[#333] mb-6 leading-relaxed">
                Uma <strong>consultoria odontológica estratégica</strong> ajuda a padronizar cada etapa para evitar perdas financeiras e garantir o <strong>aumento de faturamento odontológico</strong>.
              </p>
              <div className="flex flex-col gap-3">
                <Button 
                  onClick={() => window.open(whatsappLink, '_blank')}
                  className="bg-[#0B6B4F] text-white hover:bg-[#0F8A5F] font-bold py-6 w-full sm:w-auto shadow-lg"
                >
                  Falar com um consultor estratégico
                </Button>
                <p className="text-[10px] md:text-xs text-[#0B6B4F]/60 font-medium">
                  Inicie seu <strong>diagnóstico para clínica odontológica</strong> hoje mesmo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BrandDivider />
      <Footer />
    </div>
  );
};

export default Gestao;