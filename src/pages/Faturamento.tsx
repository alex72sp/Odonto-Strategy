"use client";

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Zap, ArrowRight, MessageCircle } from "lucide-react";

const Faturamento = () => {
  const whatsappLink = "https://wa.me/5511983232828";

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      
      <section className="pt-32 pb-20 px-4 bg-[#0B6B4F] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6">Como aumentar o faturamento da sua clínica odontológica</h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Estratégias práticas para converter mais orçamentos e maximizar o lucro de cada paciente atendido.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-green max-w-none text-[#333]">
            <h2 className="text-[#0B6B4F] font-bold text-2xl mb-6">O segredo não é apenas atrair novos pacientes</h2>
            <p className="mb-4">
              Muitas clínicas focam 100% em marketing digital para atrair novos leads, mas perdem 70% desses contatos por falhas na recepção ou na hora de apresentar o orçamento.
            </p>
            <p className="mb-8">
              Para aumentar o faturamento odontológico, é preciso olhar para três pilares fundamentais:
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#EAF7F1] rounded-full flex items-center justify-center shrink-0 text-[#0B6B4F] font-bold">1</div>
                <div>
                  <h3 className="font-bold text-[#0B6B4F] text-lg mb-2">Taxa de Conversão de Orçamentos</h3>
                  <p className="text-sm">Melhorar a forma como o tratamento é apresentado, focando em benefícios e não apenas em preço.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#EAF7F1] rounded-full flex items-center justify-center shrink-0 text-[#0B6B4F] font-bold">2</div>
                <div>
                  <h3 className="font-bold text-[#0B6B4F] text-lg mb-2">Recorrência e LTV</h3>
                  <p className="text-sm">Fazer com que o paciente atual retorne para novos procedimentos e manutenções preventivas.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#EAF7F1] rounded-full flex items-center justify-center shrink-0 text-[#0B6B4F] font-bold">3</div>
                <div>
                  <h3 className="font-bold text-[#0B6B4F] text-lg mb-2">Eficiência Operacional</h3>
                  <p className="text-sm">Reduzir faltas e otimizar o tempo de cadeira para que cada hora trabalhada renda mais.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0B6B4F] p-8 rounded-3xl text-white text-center">
              <h3 className="text-xl font-bold mb-4">Quer saber onde sua clínica está perdendo dinheiro?</h3>
              <p className="mb-6 text-white/80">Nosso diagnóstico identifica os gargalos que impedem seu faturamento de crescer.</p>
              <Button 
                onClick={() => window.open(whatsappLink, '_blank')}
                className="bg-[#F4C542] text-[#0B6B4F] hover:bg-[#E0B837] font-bold px-8 py-6 rounded-xl"
              >
                Solicitar diagnóstico gratuito
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Faturamento;