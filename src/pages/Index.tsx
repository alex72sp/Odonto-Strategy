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
      <section className="relative overflow-hidden bg-[#0B6B4F] text-white py-24 md:py-48 px-4">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#2ECC71] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <Badge className="bg-[#2ECC71] text-[#0B6B4F] hover:bg-[#2ECC71] border-none mb-6 px-4 py-1 text-sm font-bold tracking-wider uppercase">
            Consultoria odontológica estratégica
          </Badge>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            Sua clínica poderia faturar mais, <br className="hidden md:block" /> 
            <span className="text-[#F4C542]">mas algo está travando.</span>
          </h1>
          <p className="text-base md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            Antes de investir mais em marketing ou estrutura, é essencial entender o que está impedindo o crescimento da sua clínica. Nós identificamos os gargalos e mostramos com clareza o que precisa ser ajustado.
          </p>
          <div className="flex justify-center">
            <Button 
              onClick={handleCtaClick}
              size="lg" 
              className="bg-[#F4C542] text-[#0B6B4F] hover:bg-[#E0B837] px-8 py-6 text-lg font-bold rounded-xl shadow-2xl transition-all hover:scale-105 active:scale-95 w-full max-w-[280px] md:w-auto"
            >
              Solicitar diagnóstico
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Frase de Autoridade */}
      <section className="py-16 bg-[#EAF7F1] border-y border-[#0B6B4F]/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Quote className="text-[#2ECC71] h-8 w-8 opacity-50" />
          </div>
          <h2 className="text-xl md:text-3xl font-bold text-[#0B6B4F] italic leading-snug mb-4">
            “A maioria das clínicas não cresce por falta de pacientes, mas por falta de processo, organização e direção estratégica.”
          </h2>
          <p className="text-[#0F8A5F] font-semibold">
            Nosso trabalho começa antes da execução. Identificamos o que realmente precisa ser corrigido.
          </p>
        </div>
      </section>

      {/* Diferencial Estratégico */}
      <section id="sobre" className="py-20 px-4 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-[#0B6B4F] mb-6 leading-tight">
                Atuamos antes da execução para garantir seu crescimento
              </h2>
              <p className="text-base md:text-lg text-[#333333] mb-4 leading-relaxed">
                A maioria das soluções do mercado foca em executar, como tráfego, campanhas e redes sociais. Nós atuamos antes disso.
              </p>
              <p className="text-base md:text-lg text-[#333333] mb-6 leading-relaxed">
                Analisamos a estrutura da clínica, identificamos falhas e entregamos um direcionamento claro para melhorar resultados.
              </p>
              <div className="bg-[#EAF7F1] p-6 rounded-2xl border-l-4 border-[#2ECC71] mb-8">
                <p className="text-[#0B6B4F] font-bold text-lg">
                  Não executamos. Não operamos campanhas. Não gerenciamos equipe. Entregamos o caminho.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "Estratégia para clínica odontológica",
                  "Gestão de clínica odontológica focada em dados",
                  "Aumentar faturamento odontológico com estrutura",
                  "Diagnóstico personalizado por especialistas"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#0B6B4F] font-semibold">
                    <ShieldCheck className="h-5 w-5 text-[#2ECC71] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#EAF7F1] p-6 rounded-3xl text-center shadow-sm">
                <div className="text-3xl font-bold text-[#0B6B4F] mb-1">Análise</div>
                <div className="text-[10px] text-[#0F8A5F] font-bold uppercase tracking-wider">Estrutural</div>
              </div>
              <div className="bg-[#0B6B4F] p-6 rounded-3xl text-center shadow-xl mt-6">
                <div className="text-3xl font-bold text-white mb-1">Direção</div>
                <div className="text-[10px] text-white/80 font-bold uppercase tracking-wider">Estratégica</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problemas */}
      <section className="py-20 px-4 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-[#0B6B4F] mb-4">O que está travando sua clínica?</h2>
            <p className="text-lg text-[#333333]">Identificamos os pontos críticos que impedem o seu próximo nível.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Pacientes não fecham orçamento", desc: "Falhas no processo comercial e na percepção de valor.", color: "border-red-400" },
              { title: "Agenda ociosa", desc: "Horários vagos que geram perda constante de faturamento.", color: "border-orange-400" },
              { title: "Falta de organização interna", desc: "Desorganização que gera sobrecarga e perda de controle.", color: "border-yellow-400" },
              { title: "Marketing sem retorno claro", desc: "Investimento em anúncios sem resultado mensurável.", color: "border-purple-400" },
              { title: "Dificuldade em aumentar faturamento", desc: "Estagnação por falta de visão estratégica do negócio.", color: "border-blue-400" },
              { title: "Gestão sem dados", desc: "Tomada de decisão baseada em intuição e não em números.", color: "border-green-400" }
            ].map((item, i) => (
              <div key={i} className={`bg-white p-6 rounded-2xl border-l-4 ${item.color} shadow-sm hover:shadow-md transition-all`}>
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-[#0B6B4F]">
                  <Zap className="h-4 w-4 text-[#2ECC71]" />
                  {item.title}
                </h3>
                <p className="text-[#333333] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section id="metodologia" className="py-20 px-4 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-[#0B6B4F] mb-4">Nosso Processo</h2>
            <p className="text-lg text-[#333333]">Três etapas fundamentais para organizar e crescer.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Análise da operação", desc: "Coleta e análise profunda de dados operacionais e financeiros.", icon: <BarChart3 /> },
              { step: "02", title: "Identificação de pontos críticos", desc: "Mapeamento exato de onde a clínica está perdendo dinheiro.", icon: <AlertCircle /> },
              { step: "03", title: "Direcionamento estratégico", desc: "Plano de ação claro com foco em organização e lucro.", icon: <Target /> }
            ].map((item, i) => (
              <div key={i} className="relative p-8 rounded-3xl bg-[#F5F5F5] border border-[#0B6B4F]/5">
                <div className="text-5xl font-black text-[#0B6B4F]/5 absolute top-4 right-6">{item.step}</div>
                <div className="w-12 h-12 bg-[#0B6B4F] text-white rounded-xl flex items-center justify-center mb-6">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                </div>
                <h3 className="text-xl font-bold text-[#0B6B4F] mb-3">{item.title}</h3>
                <p className="text-[#333333] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-4 bg-[#0B6B4F] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Crescimento Estruturado</h2>
            <p className="text-lg text-white/80">O que você ganha ao profissionalizar sua gestão.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Mais controle do faturamento", icon: <TrendingUp /> },
              { title: "Redução de perdas financeiras", icon: <ShieldCheck /> },
              { title: "Melhor uso da agenda", icon: <Calendar /> },
              { title: "Decisões com base em dados", icon: <BarChart3 /> },
              { title: "Crescimento estruturado", icon: <Target /> },
              { title: "Menos sobrecarga operacional", icon: <Users /> }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl">
                <div className="text-[#2ECC71]">{React.cloneElement(item.icon as React.ReactElement, { size: 28 })}</div>
                <span className="font-bold text-lg">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-[#0B6B4F] mb-4">Para quem é essa consultoria</h2>
            <p className="text-lg text-[#333333]">Identifique se este é o momento ideal para o seu negócio.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Clínicas que querem crescer", desc: "Para quem já tem movimento, mas quer escalar com segurança." },
              { title: "Profissionais com desorganização", desc: "Para quem sente que a operação está fora de controle." },
              { title: "Quem já investiu sem retorno", desc: "Para quem cansou de soluções genéricas que não trazem lucro." },
              { title: "Quem sabe que pode faturar mais", desc: "Para quem busca clareza sobre o potencial real da clínica." }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#F5F5F5] border border-[#0B6B4F]/5 hover:border-[#2ECC71]/30 transition-all">
                <CheckCircle className="h-6 w-6 text-[#2ECC71] mb-4" />
                <h3 className="font-bold text-[#0B6B4F] mb-2">{item.title}</h3>
                <p className="text-[#333333] text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section id="contato" className="py-24 px-4 bg-[#0B6B4F] relative overflow-hidden scroll-mt-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white leading-tight">
            Sua clínica está pronta para o próximo nível?
          </h2>
          <p className="text-lg mb-10 text-white/80 leading-relaxed">
            Se sua clínica já tem movimento, mas o crescimento não acontece como deveria, o problema não está apenas na captação, está na estrutura. O primeiro passo é entender o que está travando.
          </p>
          <div className="flex flex-col items-center gap-6">
            <Button 
              onClick={handleCtaClick}
              size="lg" 
              className="bg-[#F4C542] text-[#0B6B4F] hover:bg-[#E0B837] px-10 py-7 text-lg font-bold rounded-xl shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-3 w-full max-w-[280px] md:w-auto"
            >
              <MessageCircle className="h-5 w-5 shrink-0" />
              Falar no WhatsApp
            </Button>
            <p className="text-white/60 text-[10px] font-medium uppercase tracking-widest">
              Atendimento imediato e qualificado
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B6B4F] text-white py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              {footerLogoError ? (
                <div className="mb-4">
                  <span className="text-xl font-black text-white tracking-tighter">
                    ODONTO <span className="text-[#2ECC71]">STRATEGY</span>
                  </span>
                </div>
              ) : (
                <img 
                  src={logoUrl} 
                  alt="Odonto Strategy Logo" 
                  className="h-12 w-auto object-contain mx-auto md:mx-0 mb-4 bg-white p-2 rounded-lg"
                  onError={() => setFooterLogoError(true)}
                />
              )}
              <p className="text-white/60 text-sm max-w-xs">Consultoria estratégica para gestão de clínicas odontológicas.</p>
            </div>
            <div className="flex gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-white hover:text-[#2ECC71] hover:bg-white/5 text-xs" 
                onClick={handleCtaClick}
              >
                WhatsApp
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-white hover:text-[#2ECC71] hover:bg-white/5 text-xs"
                onClick={() => scrollToSection('sobre')}
              >
                Sobre
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-white hover:text-[#2ECC71] hover:bg-white/5 text-xs"
                onClick={() => scrollToSection('metodologia')}
              >
                Metodologia
              </Button>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-white/5 text-center text-white/40 text-[10px]">
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