"use client";

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Users, Calendar, ClipboardCheck, ArrowRight } from "lucide-react";

const Gestao = () => {
  const whatsappLink = "https://wa.me/5511983232828";

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      
      <section className="pt-32 pb-20 px-4 bg-[#0B6B4F] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6">Gestão de clínica odontológica</h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Transforme sua clínica em uma empresa organizada, eficiente e lucrativa através de processos de gestão modernos.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#EAF7F1] p-6 rounded-2xl text-center">
                  <Calendar className="mx-auto mb-2 text-[#0B6B4F]" />
                  <span className="text-xs font-bold text-[#0B6B4F] uppercase">Agenda</span>
                </div>
                <div className="bg-[#0B6B4F] p-6 rounded-2xl text-center text-white">
                  <Users className="mx-auto mb-2 text-[#2ECC71]" />
                  <span className="text-xs font-bold uppercase">Equipe</span>
                </div>
                <div className="bg-[#0B6B4F] p-6 rounded-2xl text-center text-white">
                  <ClipboardCheck className="mx-auto mb-2 text-[#2ECC71]" />
                  <span className="text-xs font-bold uppercase">Processos</span>
                </div>
                <div className="bg-[#EAF7F1] p-6 rounded-2xl text-center">
                  <LayoutDashboard className="mx-auto mb-2 text-[#0B6B4F]" />
                  <span className="text-xs font-bold text-[#0B6B4F] uppercase">Dados</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B6B4F] mb-6">Organização interna é a base do lucro</h2>
              <p className="text-[#333] mb-4 leading-relaxed">
                Muitos dentistas focam apenas na técnica, mas esquecem que a clínica é uma empresa. A gestão de clínica odontológica eficiente exige controle total sobre a jornada do paciente.
              </p>
              <p className="text-[#333] mb-6 leading-relaxed">
                Desde o primeiro contato no WhatsApp até o pós-tratamento, cada etapa precisa de um processo claro para evitar perdas financeiras.
              </p>
              <Button 
                onClick={() => window.open(whatsappLink, '_blank')}
                className="bg-[#0B6B4F] text-white hover:bg-[#0F8A5F] font-bold"
              >
                Falar no WhatsApp
              </Button>
            </div>
          </div>

          <div className="bg-[#F5F5F5] p-8 md:p-12 rounded-3xl">
            <h3 className="text-2xl font-bold text-[#0B6B4F] mb-8 text-center">Pilares da nossa Gestão</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-[#0B6B4F] mb-2">Gestão de Agenda</h4>
                <p className="text-sm text-[#333]">Otimização de horários para reduzir janelas vazias e aumentar a produtividade da equipe clínica.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-[#0B6B4F] mb-2">Treinamento de Equipe</h4>
                <p className="text-sm text-[#333]">Alinhamento da recepção e auxiliares com foco em encantamento e conversão de pacientes.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-[#0B6B4F] mb-2">Controle de Processos</h4>
                <p className="text-sm text-[#333]">Criação de POPs (Procedimentos Operacionais Padrão) para que a clínica funcione sem depender 100% do dono.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-[#0B6B4F] mb-2">Análise de Indicadores</h4>
                <p className="text-sm text-[#333]">Acompanhamento de KPIs como CAC, LTV e taxa de conversão para decisões baseadas em dados.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gestao;