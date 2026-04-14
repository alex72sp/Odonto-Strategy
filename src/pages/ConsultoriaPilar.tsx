"use client";

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const ConsultoriaPilar = () => {
  const message = encodeURIComponent("Olá, gostaria de entender melhor como funciona o diagnóstico estratégico.\n\nNome:\nClínica:\nCidade:");
  const whatsappLink = `https://wa.me/5511983232828?text=${message}`;

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      
      <section className="pt-32 pb-20 px-4 bg-[#0B6B4F] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm mb-6 text-white/80">
            A consultoria odontológica é essencial para clínicas que querem aumentar o faturamento com organização, estratégia e processos bem definidos.
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6">Consultoria odontológica completa para clínicas que querem aumentar o faturamento</h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Entenda como a gestão de clínica odontológica e a estratégia correta podem transformar seus resultados financeiros.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-green prose-lg text-[#333]">
          <h2 className="text-[#0B6B4F] font-bold">O que é consultoria odontológica?</h2>
          <p>
            A consultoria odontológica é um serviço especializado que visa diagnosticar e corrigir falhas na operação de uma clínica odontológica. Diferente do marketing, que foca em trazer pessoas, a consultoria foca em garantir que a clínica saiba o que fazer com essas pessoas para gerar lucro.
          </p>

          <h2 className="text-[#0B6B4F] font-bold">Por que clínicas odontológicas não crescem?</h2>
          <p>
            Muitas vezes, o dentista foca apenas na parte técnica e esquece que a clínica é uma empresa. Os principais erros incluem:
          </p>
          <ul>
            <li>Falta de processos definidos na recepção</li>
            <li>Agenda mal organizada com muitos buracos</li>
            <li>Baixa taxa de conversão de orçamentos</li>
            <li>Desconhecimento dos números reais do negócio</li>
          </ul>

          <h2 className="text-[#0B6B4F] font-bold">Como aumentar faturamento da clínica odontológica</h2>
          <p>
            Para aumentar o faturamento, é preciso olhar para a eficiência. Não adianta trazer 100 novos pacientes se a clínica só consegue atender 20 com qualidade ou se a recepção perde 80 contatos por demora no atendimento.
          </p>
          <p>
            A estratégia para clínica odontológica envolve otimizar o ticket médio, melhorar a recorrência e garantir que cada hora de cadeira seja produtiva.
          </p>

          <div className="bg-[#EAF7F1] p-8 rounded-3xl my-12 not-prose">
            <h3 className="text-xl font-bold text-[#0B6B4F] mb-4">Benefícios da nossa consultoria</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Visão clara dos gargalos financeiros",
                "Processos de venda padronizados",
                "Melhor aproveitamento da agenda",
                "Decisões baseadas em dados reais",
                "Crescimento sustentável e organizado",
                "Aumento real da margem de lucro"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-medium text-[#0B6B4F]">
                  <CheckCircle2 className="h-5 w-5 text-[#2ECC71]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-[#0B6B4F] font-bold">A importância da gestão de clínica odontológica</h2>
          <p>
            Uma gestão eficiente permite que o dentista tenha liberdade. Quando os processos funcionam, a clínica não depende 100% da presença do dono para tudo. Isso só é possível com uma consultoria odontológica que entenda as particularidades do setor.
          </p>

          <div className="text-center mt-12 not-prose flex flex-col items-center gap-4">
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              className="bg-[#0B6B4F] text-white hover:bg-[#0F8A5F] font-bold px-8 py-6 rounded-xl text-lg w-full sm:w-auto"
            >
              Solicitar diagnóstico
            </Button>
            <p className="text-[10px] md:text-xs text-[#0B6B4F]/60 font-medium">
              Indicado para clínicas odontológicas que já estão em operação e buscam melhorar resultados.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultoriaPilar;