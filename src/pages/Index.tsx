"use client";

import React from 'react';
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
  MessageCircle
} from "lucide-react";

const Index = () => {
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
            Consultoria Estratégica para Dentistas
          </Badge>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight">
            Estruture sua clínica para um <br className="hidden md:block" /> 
            <span className="text-[#F4C542]">crescimento sustentável</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            Diagnóstico estratégico completo para identificar gargalos e estruturar um plano de direcionamento focado em organização e potencial de lucro.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={handleCtaClick}
              size="lg" 
              className="bg-[#F4C542] text-[#0B6B4F] hover:bg-[#E0B837] px-12 py-8 text-xl font-bold rounded-xl shadow-2xl transition-all hover:scale-105 active:scale-95"
            >
              Solicitar Diagnóstico Estratégico
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Seção de Autoridade */}
      <section id="sobre" className="py-24 px-4 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#EAF7F1] rounded-2xl -z-10"></div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0B6B4F] mb-8 leading-tight">
                Por que a RCS Consultoria é a escolha de clínicas consolidadas?
              </h2>
              <p className="text-lg text-[#333333] mb-8 leading-relaxed">
                Não entregamos apenas planilhas. Entregamos <strong>visão de negócio</strong>. A RCS Consultoria traz a experiência necessária para auxiliar o dentista a sair do operacional e assumir o comando estratégico da sua clínica.
              </p>
              <ul className="space-y-4">
                {[
                  "Metodologia baseada em indicadores reais",
                  "Foco em estruturação e saúde financeira",
                  "Direcionamento estratégico para aplicação prática",
                  "Diagnóstico baseado em dados da sua clínica"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#0B6B4F] font-semibold">
                    <ShieldCheck className="h-6 w-6 text-[#2ECC71]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#EAF7F1] p-8 rounded-3xl text-center shadow-sm">
                <div className="text-4xl font-bold text-[#0B6B4F] mb-2">Dados</div>
                <div className="text-sm text-[#0F8A5F] font-medium uppercase tracking-wider">Análise de Indicadores Reais</div>
              </div>
              <div className="bg-[#0B6B4F] p-8 rounded-3xl text-center shadow-xl mt-8">
                <div className="text-4xl font-bold text-white mb-2">Foco</div>
                <div className="text-sm text-white/80 font-medium uppercase tracking-wider">Estratégia e Organização</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="servicos" className="py-24 px-4 bg-[#F5F5F5] scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B6B4F] mb-6">O Caminho para a Organização</h2>
            <p className="text-xl text-[#333333] max-w-2xl mx-auto">Nosso processo é estruturado para identificar onde sua clínica pode melhorar.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Levantamento", desc: "Coleta rigorosa de dados e indicadores da clínica.", icon: <BarChart3 /> },
              { step: "02", title: "Diagnóstico", desc: "Análise profunda para encontrar oportunidades de faturamento.", icon: <Target /> },
              { step: "03", title: "Gargalos", desc: "Identificação de processos que podem ser otimizados.", icon: <Zap /> },
              { step: "04", title: "Plano", desc: "Roadmap estratégico com direcionamento para aplicação.", icon: <TrendingUp /> }
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(11,107,79,0.1)] transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden bg-white">
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">O que pode estar travando sua clínica?</h2>
            <p className="text-xl text-white/80">Identificamos os pontos críticos que impedem o seu próximo nível.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Conversão de Orçamentos", desc: "Identificação de falhas no processo comercial e fechamento.", color: "border-red-400" },
              { title: "Otimização de Agenda", desc: "Análise de horários ociosos e fluxo de pacientes.", color: "border-orange-400" },
              { title: "Estruturação de Processos", desc: "Mapeamento de dependências que sobrecarregam o gestor.", color: "border-yellow-400" },
              { title: "Análise de Marketing", desc: "Avaliação do retorno sobre investimento em aquisição de pacientes.", color: "border-purple-400" },
              { title: "Gestão por Indicadores", desc: "Estruturação de dados claros para tomada de decisão assertiva.", color: "border-blue-400" },
              { title: "Análise de Ticket Médio", desc: "Identificação de oportunidades em procedimentos de maior margem.", color: "border-green-400" }
            ].map((item, i) => (
              <div key={i} className={`bg-white/5 backdrop-blur-sm p-8 rounded-2xl border-l-4 ${item.color} hover:bg-white/10 transition-colors`}>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#2ECC71]" />
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados do Direcionamento */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B6B4F] mb-6">Direcionamento Estratégico</h2>
            <p className="text-xl text-[#333333]">O que buscamos estruturar através da nossa consultoria.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "Potencial de Faturamento", icon: <TrendingUp />, desc: "Identificação de caminhos para escalar a receita." },
              { title: "Melhoria na Agenda", icon: <Calendar />, desc: "Estratégias para ocupação com pacientes qualificados." },
              { title: "Análise de Ticket Médio", icon: <Users />, desc: "Direcionamento para tratamentos de maior valor agregado." },
              { title: "Marketing Estratégico", icon: <Target />, desc: "Avaliação de canais para atração constante de leads." },
              { title: "Clareza de Indicadores", icon: <BarChart3 />, desc: "Melhor previsibilidade com base em dados reais." },
              { title: "Organização de Gestão", icon: <Lightbulb />, desc: "Processos estruturados para uma gestão mais profissional." }
            ].map((item, i) => (
              <div key={i} className="group text-center">
                <div className="w-20 h-20 bg-[#EAF7F1] text-[#0B6B4F] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-[#0B6B4F] group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="text-2xl font-bold text-[#0B6B4F] mb-3">{item.title}</h3>
                <p className="text-[#333333] text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Final - Substituindo o Formulário */}
      <section id="contato" className="py-32 px-4 bg-[#0B6B4F] relative overflow-hidden scroll-mt-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight">
            Sua clínica está pronta para uma gestão profissional?
          </h2>
          <p className="text-xl mb-12 text-white/80 leading-relaxed">
            Não deixe o crescimento da sua clínica ao acaso. Agende agora uma conversa estratégica e tenha mais clareza sobre o potencial do seu negócio.
          </p>
          <div className="flex flex-col items-center gap-6">
            <Button 
              onClick={handleCtaClick}
              size="lg" 
              className="bg-[#F4C542] text-[#0B6B4F] hover:bg-[#E0B837] w-full max-w-xs md:max-w-none md:w-auto px-6 md:px-16 py-6 md:py-10 text-xl md:text-2xl font-bold rounded-2xl shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-3 md:gap-4 h-auto whitespace-normal text-center"
            >
              <MessageCircle className="h-6 w-6 md:h-8 md:w-8 shrink-0" />
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
              <h3 className="text-3xl font-black mb-2 tracking-tighter">RCS <span className="text-[#2ECC71]">CONSULTORIA</span></h3>
              <p className="text-white/60 max-w-xs">Consultoria Estratégica para o Mercado Odontológico.</p>
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
                onClick={() => scrollToSection('servicos')}
              >
                Serviços
              </Button>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 text-center text-white/40 text-sm">
            <p>© {new Date().getFullYear()} RCS Consultoria. Todos os direitos reservados.</p>
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