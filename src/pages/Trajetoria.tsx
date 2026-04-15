"use client";

import React, { useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandDivider from "@/components/BrandDivider";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const Trajetoria = () => {
  const message = encodeURIComponent("Olá! Quero entender o diagnóstico estratégico.\nNome:\nClínica:\nCidade:\nBreve contexto:");
  const whatsappLink = `https://wa.me/5511983232828?text=${message}`;

  useEffect(() => {
    // Configuração de SEO
    document.title = "Consultoria para Clínicas Odontológicas | Gestão, Conversão e Faturamento";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Conheça a Odonto Strategy e descubra como melhorar a gestão da sua clínica odontológica, aumentar a conversão de pacientes e organizar processos para crescer com estratégia.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-[#0B6B4F] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Toda estratégia nasce de experiência real em clínicas odontológicas
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-3xl mx-auto">
            A Odonto Strategy nasceu da vivência prática em gestão de clínicas odontológicas, processos internos e desenvolvimento de negócios ao longo de mais de 30 anos.
          </p>
          <div className="flex flex-col items-center gap-3">
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              size="lg"
              className="bg-[#F4C542] text-[#0B6B4F] hover:bg-[#E0B837] px-10 py-7 text-lg font-bold rounded-xl shadow-xl transition-all hover:scale-105 w-full sm:w-auto"
            >
              Solicitar diagnóstico estratégico
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-green max-w-none text-[#333] leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B6B4F] mb-6">Sobre a Odonto Strategy</h2>
            <p className="mb-6">
              A Odonto Strategy nasce da união entre experiência prática em clínicas odontológicas e uma base sólida em estratégia, processos e desenvolvimento de negócios.
            </p>
            <p className="mb-6">
              De um lado, mais de 30 anos de experiência nas áreas de administração, vendas e treinamento de equipes, com atuação em instituições financeiras e grandes empresas. Nos últimos anos, essa trajetória foi direcionada à gestão de clínicas odontológicas dentro de uma das maiores redes de franquias do país, com atuação como consultor, treinador, analista de franquias e auditor de campo.
            </p>
            <p className="mb-6">
              Com presença ativa em clínicas odontológicas em todo o território nacional, essa vivência proporcionou uma compreensão aprofundada sobre o funcionamento real da operação, incluindo gestão de equipes, padronização de processos, desempenho comercial e correção de falhas que impactam diretamente o faturamento e os resultados das clínicas odontológicas.
            </p>
            <p className="mb-6">
              De outro lado, mais de 30 anos de experiência na área comercial, com atuação em vendas consultivas, desenvolvimento de negócios e gestão de clientes em nível nacional. Ao longo da trajetória, foram conduzidos projetos técnicos e comerciais em diferentes segmentos, com forte atuação em estruturação de processos, análise de indicadores e melhoria de desempenho.
            </p>
            <p className="mb-6">
              Essa experiência inclui a implantação de padrões de qualidade, desenvolvimento de estratégias comerciais e criação de métodos práticos voltados à melhoria da experiência do paciente, aumento de conversão de pacientes e crescimento sustentável da clínica odontológica.
            </p>
            <p className="mb-6">
              A união dessas competências permite uma atuação complementar: de um lado, a vivência prática da operação e dos desafios reais das clínicas odontológicas; do outro, uma visão estratégica voltada à organização, aumento de faturamento e melhoria de desempenho.
            </p>
            <p className="mb-12">
              Essa combinação permite identificar com clareza os principais gargalos que impactam a gestão de clínicas odontológicas e direcionar ações práticas para otimização de processos, aumento da conversão e crescimento estruturado.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0B6B4F] mb-6">Origem da Odonto Strategy</h2>
            <p className="mb-6">
              A Odonto Strategy surgiu a partir da combinação de duas trajetórias complementares: de um lado, a vivência direta dentro de clínicas odontológicas, acompanhando de perto os desafios reais da operação; do outro, uma forte experiência em estratégia, processos e desenvolvimento de negócios.
            </p>
            <p className="mb-6">
              Ao longo dessa jornada, ficou evidente que muitas clínicas odontológicas enfrentam dificuldades não por falta de pacientes, mas por falhas internas, baixa conversão de atendimentos e ausência de gestão estruturada.
            </p>
            <p className="mb-6">
              Muitas clínicas investem em marketing para atrair pacientes, mas perdem oportunidades por não terem processos bem definidos, equipes treinadas ou uma estratégia clara de crescimento.
            </p>
            <p className="mb-12">
              A partir dessa percepção, nasceu a proposta de atuar de forma prática e objetiva, identificando os pontos que realmente impactam o faturamento da clínica odontológica e direcionando melhorias consistentes.
            </p>

            <div className="bg-[#EAF7F1] p-8 md:p-12 rounded-3xl mb-12 border border-[#0B6B4F]/10">
              <h2 className="text-2xl font-bold text-[#0B6B4F] mb-8 mt-0">O que essa experiência permite</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Identificar falhas operacionais em clínicas odontológicas",
                  "Melhorar a conversão de pacientes em tratamentos",
                  "Organizar processos internos e padronizar a operação",
                  "Aumentar o faturamento da clínica odontológica com a estrutura atual",
                  "Melhorar a experiência do paciente e retenção",
                  "Corrigir gargalos que impedem o crescimento da clínica"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-[#0B6B4F] font-medium text-sm md:text-base">
                    <CheckCircle2 className="h-5 w-5 text-[#2ECC71] shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0B6B4F] mb-6">Consultoria estratégica para clínicas odontológicas</h2>
            <p className="mb-12">
              A Odonto Strategy atua com foco em diagnóstico estratégico para clínicas odontológicas, analisando operação, gestão, processos e desempenho comercial. O objetivo é identificar de forma clara o que está impedindo o crescimento da clínica e direcionar ações práticas para melhoria de resultados, aumento de conversão e organização do negócio.
            </p>
          </div>

          {/* CTA Final */}
          <div className="bg-[#0B6B4F] p-8 md:p-16 rounded-3xl text-white text-center shadow-2xl">
            <h3 className="text-2xl md:text-4xl font-bold mb-6">
              Descubra o que está travando o crescimento da sua clínica odontológica
            </h3>
            <div className="flex flex-col items-center gap-4">
              <Button 
                onClick={() => window.open(whatsappLink, '_blank')}
                size="lg"
                className="bg-[#F4C542] text-[#0B6B4F] hover:bg-[#E0B837] px-10 py-7 text-lg font-bold rounded-xl shadow-lg transition-all hover:scale-105 w-full sm:w-auto"
              >
                Solicitar diagnóstico estratégico
              </Button>
              <p className="text-xs text-white/60 font-medium">
                Indicado para clínicas odontológicas que já estão em operação e buscam melhorar resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BrandDivider />
      <Footer />
    </div>
  );
};

export default Trajetoria;