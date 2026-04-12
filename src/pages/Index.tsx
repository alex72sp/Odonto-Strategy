"use client";

import React, { useState } from 'react';
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Target, 
  Lightbulb, 
  Calendar, 
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Zap,
  MessageCircle,
  AlertCircle,
  Quote
} from "lucide-react";

const Index = () => {
  const [footerLogoError, setFooterLogoError] = useState(false);
  const logoUrl = "dyad-media://media/nimble-capybara-snore/.dyad/media/792ef36865eb71bdf60d0fd21ddb2886.jpeg";

  const whatsappNumber = "5511983232828";
  const whatsappMessage = encodeURIComponent(
    "Olá! Quero um diagnóstico da minha clínica.\n\n" +
    "Nome:\n" +
    "Clínica:\n" +
    "Cidade:\n" +
    "Faturamento:\n" +
    "Dificuldade:"
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleCtaClick = () => {
    window.open(whatsappLink, '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Altura do header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-[#1A1A1A] scroll-smooth">
      <Header onScroll={(id) => id === 'contato' ? handleCtaClick() : scrollToSection(id)} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0B6B4F] text-white py-32 md:py-48 px-4">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#2ECC71] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <Badge className="bg-[#2ECC71] text-[#0B6B4F] hover:bg-[#2ECC71] border-none mb-6 px-4 py-1 text-sm font-bold tracking-wider uppercase">
            Consultoria Odontológica Estratégica
          </Badge>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight">
            Sua clínica poderia faturar mais, <br className="hidden md:block" /> 
            <span className="text-[#F4C542]">mas algo está travando.</span>
          </h1>
          <p className="text-lg md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            Nós identificamos exatamente onde estão os gargalos da sua operação e mostramos o que precisa ser ajustado para melhorar faturamento, organization e previsibilidade.
          </p>
          <div className="flex justify-center">
            <Button 
              onClick={handleCtaClick}
              size="lg" 
              className="bg-[#F4C542] text-[#0B6B4F] hover:bg-[#E0B837] px-8 md:px-12 py-6 md:py-8 text-lg md:text-xl font-bold rounded-xl shadow-2xl transition-all hover:scale-105 active:scale-95 w-full max-w-[320px] md:w-auto"
            >
              Solicitar diagnóstico
              <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Frase de Autoridade */}
      <section className="py-12 bg-[#EAF7F1] border-y border-[#0B6B4F]/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Quote className="text-[#2ECC71] h-8 w-8 opacity-50" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B6B4F] italic leading-tight">
            “A maioria das clínicas não cresce por falta de pacientes, mas por falta de processo.”
          </h2>
        </div>
      </section>

      {/* Seção de Autoridade */}
      <section id="sobre" className="py-24 px-4 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#EAF7F1] rounded-2xl -z-10"></div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0B6B4F] mb-8 leading-tight">
                Gestão estratégica para clínicas de alta performance
              </h2>
              <p className="text-lg text-[#333333] mb-8 leading-relaxed">
                A Odonto Strategy oferece o direcionamento necessário para dentistas que buscam sair do operacional e assumir o comando estratégico do negócio. Identificamos falhas invisíveis que impedem sua clínica de crescer.
              </p>
              <ul className="space-y-4">
                {[
                  "Análise baseada em indicadores reais",
                  "Foco em saúde financeira e lucro",
                  "Direcionamento prático e imediato",
                  "Diagnóstico personalizado por especialistas"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#0B6B4F] font-semibold">
                    <ShieldCheck className="h-6 w-6 text-[#2ECC71] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#EAF7F1] p-8 rounded-3xl text-center shadow-sm">
                <div className="text-4xl font-bold text-[#0B6B4F] mb-2">Dados</div>
                <div className="text-xs text-[#0F8A5F] font-bold uppercase tracking-wider">Análise Real</div>
              </div>
              <div className="bg-[#0B6B4F] p-8 rounded-3xl text-center shadow-xl mt-8">
                <div className="text-4xl font-bold text-white mb-2">Foco</div>
                <div className="text-xs text-white/80 font-bold uppercase tracking-wider">Estratégia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section id="metodologia" className="py-24 px-4 bg-[#F5F5F5] scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B6B4F] mb-6">O Caminho para a Organização</h2>
            <p className="text-xl text-[#333333] max-w-2xl mx-auto">Nossa metodologia é focada em identificar e corrigir o que impede seu lucro.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Análise detalhada da operação", desc: "Coleta e análise profunda de dados operacionais.", icon: <BarChart3 /> },
              { step: "02", title: "Identificação dos pontos críticos", desc: "Identificação de pontos de perda financeira.", icon: <AlertCircle /> },
              { step: "03", title: "Direcionamento estratégico claro", desc: "Definição de metas e plano de ação claro.", icon: <Target /> },
              { step: "04", title: "Execução e Resultados", desc: "Roadmap para execução e crescimento real.", icon: <TrendingUp /> }
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl overflow-hidden bg-white">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-[#EAF7F1] text-[#0B6B4F] rounded-xl flex items-center justify-center">
                      {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                    </div>
                    <span className="text-4xl font-black text-[#EAF7F1]">{item.step}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-[#0B6B4F]">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#333333] leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problemas que Identificamos */}
      <section className="py-24 px-4 bg-[#0B6B4F] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">O que está travando sua clínica?</h2>
            <p className="text-xl text-white/80">Identificamos os pontos críticos que impedem o seu próximo nível.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Baixa Conversão", desc: "Pacientes não fecham orçamentos por falhas no processo comercial.", color: "border-red-400" },
              { title: "Agenda Ociosa", desc: "Horários vagos que geram perda constante de faturamento.", color: "border-orange-400" },
              { title: "Falta de Processos", desc: "Desorganização interna que gera sobrecarga no gestor.", color: "border-yellow-400" },
              { title: "Marketing sem Retorno", desc: "Investimento em anúncios sem resultado mensurável.", color: "border-purple-400" },
              { title: "Gestão sem Dados", desc: "Tomada de decisão baseada em intuição e não em números.", color: "border-blue-400" },
              { title: "Ticket Médio Baixo", desc: "Foco em procedimentos de baixa margem e pouco lucro.", color: "border-green-400" }
            ].map((item, i) => (
              <div key={i} className={`bg-white/5 backdrop-blur-sm p-8 rounded-2xl border-l-4 ${item.color} hover:bg-white/10 transition-colors`}>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-[#2ECC71]" />
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem é essa consultoria */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B6B4F] mb-6">Para quem é essa consultoria</h2>
            <p className="text-xl text-[#333333]">Identifique se este é o momento ideal para o seu negócio.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Clínicas em Crescimento", desc: "Clínicas que já atendem pacientes, mas querem escalar o faturamento com segurança." },
              { title: "Gestores Sobrecarregados", desc: "Profissionais que sentem desorganização na operação e excesso de trabalho operacional." },
              { title: "Busca por Eficiência", desc: "Quem sabe que pode faturar mais, mas não sabe exatamente o que ajustar na gestão." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[#F5F5F5] border border-[#0B6B4F]/5 hover:border-[#2ECC71]/30 transition-all">
                <div className="w-12 h-12 bg-[#0B6B4F] text-white rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#0B6B4F] mb-4">{item.title}</h3>
                <p className="text-[#333333] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section id="contato" className="py-32 px-4 bg-[#0B6B4F] relative overflow-hidden scroll-mt-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight">
            Sua clínica está pronta para o próximo nível?
          </h2>
          <p className="text-xl mb-12 text-white/80 leading-relaxed">
            Se você sente que sua clínica pode mais, mas não sabe exatamente onde ajustar, o próximo passo é entender o que está travando.
          </p>
          <div className="flex flex-col items-center gap-6">
            <Button 
              onClick={handleCtaClick}
              size="lg" 
              className="bg-[#F4C542] text-[#0B6B4F] hover:bg-[#E0B837] px-10 py-8 text-xl font-bold rounded-2xl shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-3 w-full max-w-[320px] md:w-auto"
            >
              <MessageCircle className="h-6 w-6 shrink-0" />
              Falar no WhatsApp
            </Button>
            <p className="text-white/60 text-sm font-medium uppercase tracking-widest">
              Atendimento imediato e qualificado
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B6B4F] text-white py-16 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              {footerLogoError ? (
                <div className="mb-4">
                  <span className="text-2xl font-black text-white tracking-tighter">
                    ODONTO <span className="text-[#2ECC71]">STRATEGY</span>
                  </span>
                </div>
              ) : (
                <img 
                  src={logoUrl} 
                  alt="Odonto Strategy Logo" 
                  className="h-16 w-auto object-contain mx-auto md:mx-0 mb-4 bg-white p-2 rounded-lg"
                  onError={() => setFooterLogoError(true)}
                />
              )}
              <p className="text-white/60 max-w-xs">Consultoria estratégica para gestão de clínicas odontológicas.</p>
            </div>
            <div className="flex gap-6">
              <Button 
                variant="ghost" 
                className="text-white hover:text-[#2ECC71] hover:bg-white/5" 
                onClick={handleCtaClick}
              >
                WhatsApp
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:text-[#2ECC71] hover:bg-white/5"
                onClick={() => scrollToSection('sobre')}
              >
                Sobre
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:text-[#2ECC71] hover:bg-white/5"
                onClick={() => scrollToSection('metodologia')}
              >
                Metodologia
              </Button>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 text-center text-white/40 text-sm">
            <p>© {new Date().getFullYear()} Odonto Strategy. Todos os direitos reservados.</p>
            <div className="mt-4">
              <MadeWithDyad />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;