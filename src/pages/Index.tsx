"use client";

import React from 'react';
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  Zap
} from "lucide-react";

const Index = () => {
  const whatsappNumber = "5511983232828";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar um diagnóstico estratégico para minha clínica odontológica.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleCtaClick = () => {
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-[#1A1A1A]">
      {/* Hero Section - Impacto de Grande Rede */}
      <section className="relative overflow-hidden bg-[#0B6B4F] text-white py-28 md:py-40 px-4">
        {/* Elementos decorativos de fundo para profundidade */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#2ECC71] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <Badge className="bg-[#2ECC71] text-[#0B6B4F] hover:bg-[#2ECC71] border-none mb-6 px-4 py-1 text-sm font-bold tracking-wider uppercase">
            Consultoria de Elite para Dentistas
          </Badge>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight">
            Transforme sua clínica em um <br className="hidden md:block" /> 
            <span className="text-[#F4C542]">negócio de alto lucro</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            Diagnóstico estratégico completo para identificar gargalos e implementar um plano de crescimento acelerado e sustentável.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={handleCtaClick}
              size="lg" 
              className="bg-[#F4C542] text-[#0B6B4F] hover:bg-[#E0B837] px-12 py-8 text-xl font-bold rounded-xl shadow-2xl transition-all hover:scale-105 active:scale-95"
            >
              Solicitar Diagnóstico Gratuito
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Seção de Autoridade - Prova de Valor */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#EAF7F1] rounded-2xl -z-10"></div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0B6B4F] mb-8 leading-tight">
                Por que a RCS Consultoria é a escolha de clínicas consolidadas?
              </h2>
              <p className="text-lg text-[#333333] mb-8 leading-relaxed">
                Não entregamos apenas planilhas. Entregamos <strong>visão de negócio</strong>. Roberto Carlos Santana traz a experiência prática necessária para tirar o dentista do operacional e colocá-lo no comando estratégico da sua clínica.
              </p>
              <ul className="space-y-4">
                {[
                  "Metodologia testada em grandes redes",
                  "Foco total em ROI e faturamento líquido",
                  "Implementação prática e acompanhada",
                  "Diagnóstico baseado em dados reais"
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
                <div className="text-4xl font-bold text-[#0B6B4F] mb-2">+30%</div>
                <div className="text-sm text-[#0F8A5F] font-medium uppercase tracking-wider">Aumento Médio de Faturamento</div>
              </div>
              <div className="bg-[#0B6B4F] p-8 rounded-3xl text-center shadow-xl mt-8">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-sm text-white/80 font-medium uppercase tracking-wider">Foco em Resultados</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona - Cards com Profundidade */}
      <section className="py-24 px-4 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B6B4F] mb-6">O Caminho para a Escala</h2>
            <p className="text-xl text-[#333333] max-w-2xl mx-auto">Nosso processo é estruturado para garantir que nenhuma oportunidade seja perdida.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Levantamento", desc: "Coleta rigorosa de dados e indicadores da clínica.", icon: <BarChart3 /> },
              { step: "02", title: "Diagnóstico", desc: "Análise profunda para encontrar vazios de faturamento.", icon: <Target /> },
              { step: "03", title: "Gargalos", desc: "Identificação de processos que travam o crescimento.", icon: <Zap /> },
              { step: "04", title: "Plano", desc: "Roadmap estratégico para execução imediata.", icon: <TrendingUp /> }
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

      {/* Problemas que Resolvemos - Contraste Forte */}
      <section className="py-24 px-4 bg-[#0B6B4F] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">O que está travando sua clínica?</h2>
            <p className="text-xl text-white/80">Resolvemos as dores que impedem o seu próximo nível.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Baixa Conversão", desc: "Orçamentos que não fecham por falta de técnica comercial.", color: "border-red-400" },
              { title: "Agenda Ociosa", desc: "Custo fixo alto com horários vagos e falta de fluxo.", color: "border-orange-400" },
              { title: "Falta de Processos", desc: "Dependência total do dono para qualquer decisão.", color: "border-yellow-400" },
              { title: "Marketing sem ROI", desc: "Investimento em anúncios que não trazem pacientes qualificados.", color: "border-purple-400" },
              { title: "Gestão Amadora", desc: "Falta de indicadores claros para tomada de decisão.", color: "border-blue-400" },
              { title: "Baixo Ticket Médio", desc: "Foco em procedimentos simples com baixa margem.", color: "border-green-400" }
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

      {/* Oportunidades de Crescimento - Visual Moderno */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B6B4F] mb-6">Resultados Tangíveis</h2>
            <p className="text-xl text-[#333333]">O que acontece após a nossa consultoria estratégica.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "Aumento de Faturamento", icon: <TrendingUp />, desc: "Estratégias para escalar a receita mensal." },
              { title: "Otimização de Agenda", icon: <Calendar />, desc: "Máxima ocupação com pacientes de alto valor." },
              { title: "Ticket Médio Elevado", icon: <Users />, desc: "Upselling ético e tratamentos complexos." },
              { title: "Marketing de Elite", icon: <Target />, desc: "Atração constante de leads qualificados." },
              { title: "Previsibilidade", icon: <BarChart3 />, desc: "Saiba exatamente quanto vai faturar no próximo mês." },
              { title: "Liberdade de Gestão", icon: <Lightbulb />, desc: "Processos que funcionam sem a sua presença constante." }
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

      {/* Call to Action Final - Conversão Máxima */}
      <section className="py-24 px-4 bg-[#0B6B4F] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight">
            Sua clínica está pronta para o próximo nível?
          </h2>
          <p className="text-xl mb-12 text-white/80 leading-relaxed">
            Não deixe o crescimento da sua clínica ao acaso. Agende agora uma conversa estratégica e descubra o potencial oculto do seu negócio.
          </p>
          <Button 
            onClick={handleCtaClick}
            size="lg" 
            className="bg-[#F4C542] text-[#0B6B4F] hover:bg-[#E0B837] px-16 py-8 text-2xl font-bold rounded-2xl shadow-2xl transition-all hover:scale-105"
          >
            Falar com Consultor no WhatsApp
          </Button>
        </div>
      </section>

      {/* Contato - Limpo e Profissional */}
      <section className="py-24 px-4 bg-[#F5F5F5]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B6B4F] mb-4">Solicite um Contato</h2>
            <p className="text-lg text-[#333333]">Preencha os dados e retornaremos em até 24h.</p>
          </div>
          
          <Card className="bg-white shadow-2xl border-none rounded-3xl overflow-hidden">
            <CardContent className="p-10">
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleCtaClick(); }}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#0B6B4F] font-semibold">Nome Completo</Label>
                    <Input id="name" className="bg-[#F5F5F5] border-none h-12 rounded-xl focus:ring-2 focus:ring-[#0B6B4F]" placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="clinic" className="text-[#0B6B4F] font-semibold">Nome da Clínica</Label>
                    <Input id="clinic" className="bg-[#F5F5F5] border-none h-12 rounded-xl focus:ring-2 focus:ring-[#0B6B4F]" placeholder="Sua clínica" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#0B6B4F] font-semibold">WhatsApp</Label>
                    <Input id="phone" className="bg-[#F5F5F5] border-none h-12 rounded-xl focus:ring-2 focus:ring-[#0B6B4F]" placeholder="(11) 99999-9999" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-[#0B6B4F] font-semibold">Cidade</Label>
                    <Input id="city" className="bg-[#F5F5F5] border-none h-12 rounded-xl focus:ring-2 focus:ring-[#0B6B4F]" placeholder="Sua cidade" />
                  </div>
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-[#0B6B4F] text-white hover:bg-[#0F8A5F] h-14 text-lg font-bold rounded-xl shadow-lg">
                  Enviar e Iniciar Conversa
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer - Sólido */}
      <footer className="bg-[#0B6B4F] text-white py-16 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-black mb-2 tracking-tighter">RCS <span className="text-[#2ECC71]">CONSULTORIA</span></h3>
              <p className="text-white/60 max-w-xs">Roberto Carlos Santana - Consultoria Estratégica para o Mercado Odontológico.</p>
            </div>
            <div className="flex gap-6">
              <Button variant="ghost" className="text-white hover:text-[#2ECC71] hover:bg-white/5" onClick={handleCtaClick}>WhatsApp</Button>
              <Button variant="ghost" className="text-white hover:text-[#2ECC71] hover:bg-white/5">Sobre</Button>
              <Button variant="ghost" className="text-white hover:text-[#2ECC71] hover:bg-white/5">Serviços</Button>
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