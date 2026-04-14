"use client";

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandDivider from "@/components/BrandDivider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  TrendingUp, 
  Target, 
  BarChart3, 
  MessageCircle,
  XCircle,
  CheckCircle2
} from "lucide-react";

const Index = () => {
  const message = encodeURIComponent("Olá, gostaria de entender melhor como funciona o diagnóstico estratégico.\n\nNome:\nClínica:\nCidade:");
  const whatsappLink = `https://wa.me/5511983232828?text=${message}`;

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-[#1A1A1A]">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0B6B4F] text-white pt-32 pb-24 md:pt-48 md:pb-40 px-4">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="text-sm md:text-base mb-6 text-white/80 max-w-2xl mx-auto">
            A consultoria para dentistas é o caminho para clínicas que buscam aumentar faturamento dentista com organização e processos validados.
          </p>
          <Badge className="bg-[#2ECC71] text-[#0B6B4F] hover:bg-[#2ECC71] border-none mb-6 px-4 py-1 text-sm font-bold tracking-wider uppercase">
            Estratégia para clínica odontológica
          </Badge>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight">
            Sua clínica odontológica poderia faturar mais, <br className="hidden md:block" /> 
            <span className="text-[#F4C542]">mas algo está travando o crescimento.</span>
          </h1>
          <p className="text-lg md:text-2xl font-medium mb-8 text-[#2ECC71] max-w-3xl mx-auto leading-relaxed">
            Identificamos os pontos que estão limitando o crescimento da sua clínica e mostramos o caminho mais claro para melhorar resultados com mais consistência.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm md:text-base text-white/90 font-medium italic">
              Sem clareza do problema, qualquer tentativa de crescimento vira tentativa e erro.
            </p>
            <div className="w-full flex flex-col items-center gap-3">
              <Button 
                onClick={() => window.open(whatsappLink, '_blank')}
                size="lg" 
                className="bg-[#F4C542] text-[#0B6B4F] hover:bg-[#E0B837] px-8 py-6 text-lg font-bold rounded-xl shadow-2xl transition-all hover:scale-105 w-full md:w-auto max-w-[350px]"
              >
                Quero um diagnóstico estratégico
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-[10px] md:text-xs text-white/60 font-medium">
                Indicado para clínicas odontológicas que já estão em operação e buscam melhorar resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco de Impacto */}
      <section className="py-16 px-4 bg-[#EAF7F1]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#0B6B4F] mb-6 leading-tight">
            Se sua clínica não cresce, o problema dificilmente é falta de paciente
          </h2>
          <div className="space-y-4 text-lg md:text-xl text-[#333] leading-relaxed">
            <p>
              Na maioria dos casos, o crescimento não acontece por falhas internas que passam despercebidas no dia a dia.
            </p>
            <p>
              Pode estar na conversão de pacientes, na forma como a agenda é organizada, nos processos internos ou na falta de uma estratégia clara.
            </p>
            <p className="font-bold text-[#0B6B4F]">
              Sem identificar esses pontos, a clínica continua trabalhando muito, mas sem evoluir de forma consistente.
            </p>
          </div>
        </div>
      </section>

      {/* NOVO: Bloco de Identificação */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B6B4F] mb-8 text-center">
            Se você sente que sua clínica está assim
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              "atende bem, mas o faturamento não cresce como deveria",
              "perde pacientes na hora de fechar orçamento",
              "a agenda oscila ao longo do mês",
              "não tem clareza dos números da clínica"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-[#F5F5F5] rounded-xl border-l-4 border-[#2ECC71] shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-[#2ECC71] shrink-0" />
                <span className="font-semibold text-[#333] text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-base md:text-lg text-center text-[#333] leading-relaxed max-w-3xl mx-auto">
            Se você se identificou com esses pontos, é bem provável que existam gargalos na operação que não estão visíveis no dia a dia.
          </p>
        </div>
      </section>

      {/* Bloco de Autoridade: O que é analisado */}
      <section className="py-20 px-4 bg-[#F5F5F5]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B6B4F] mb-4">
              O que é analisado no diagnóstico estratégico
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Uma análise profunda para melhorar resultados clínica odontológica através de dados reais.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {[
                "Faturamento atual da clínica",
                "Conversão de pacientes em tratamentos",
                "Organização da agenda",
                "Processos internos",
                "Pontos de perda de receita"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                  <CheckCircle2 className="h-6 w-6 text-[#2ECC71] shrink-0" />
                  <span className="font-bold text-[#0B6B4F]">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#0B6B4F] p-8 rounded-3xl text-white shadow-xl">
              <p className="text-xl leading-relaxed mb-6">
                O objetivo é identificar com clareza o que está travando o crescimento e quais ajustes fazem sentido para a realidade da clínica.
              </p>
              <Button 
                onClick={() => window.open(whatsappLink, '_blank')}
                className="w-full bg-[#F4C542] text-[#0B6B4F] hover:bg-[#E0B837] font-bold py-6 rounded-xl"
              >
                Quero meu diagnóstico
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco de Impacto Original Ajustado */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-[#0B6B4F] mb-8 text-center">
            Você pode estar perdendo dinheiro todos os dias sem perceber
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              "Pacientes não fecham orçamento",
              "Agenda ociosa na clínica odontológica",
              "Processos desorganizados",
              "Marketing sem retorno claro"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-[#F5F5F5] rounded-xl border-l-4 border-red-500 shadow-sm">
                <XCircle className="h-5 w-5 text-red-500 shrink-0" />
                <span className="font-semibold text-[#333]">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-xl text-center font-bold text-[#0B6B4F]">
            A gestão para clínicas odontológicas correta resolve gargalos estruturais antes de investir em captação.
          </p>
        </div>
      </section>

      {/* Diferencial */}
      <section className="py-20 px-4 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B6B4F] mb-6 leading-tight">
              Gestão de clínica odontológica focada em resultados
            </h2>
            <p className="text-base md:text-xl text-[#333333] max-w-3xl mx-auto leading-relaxed">
              O mercado foca em execução, como tráfego e redes sociais. Nós atuamos antes disso. Analisamos a clínica, identificamos falhas e entregamos um plano claro para aumentar faturamento dentista.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
            <div className="bg-[#0B6B4F] p-8 rounded-3xl text-white shadow-xl h-full flex flex-col justify-center">
              <p className="font-bold text-xl mb-4">Não executamos. Não operamos marketing. Não gerenciamos equipe.</p>
              <p className="text-[#2ECC71] font-black text-2xl uppercase tracking-wider">Entregamos direção estratégica.</p>
              <p className="mt-6 text-white/80">Consultoria para dentistas estratégica para clínicas que querem organizar antes de investir.</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Consultoria Odontológica", path: "/consultoria-odontologica", icon: <Target /> },
                { title: "Gestão de Clínica", path: "/gestao-clinica-odontologica", icon: <BarChart3 /> },
                { title: "Aumentar Faturamento", path: "/aumentar-faturamento-clinica-odontologica", icon: <TrendingUp /> }
              ].map((item, i) => (
                <Link 
                  key={i} 
                  to={item.path}
                  className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-[#0B6B4F] group-hover:text-[#2ECC71] transition-colors">
                      {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                    </div>
                    <span className="font-bold text-[#0B6B4F]">{item.title}</span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-[#2ECC71] transition-all" />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="w-full flex flex-col items-center gap-3">
              <Button 
                onClick={() => window.open(whatsappLink, '_blank')}
                size="lg" 
                className="bg-[#0B6B4F] text-white hover:bg-[#0F8A5F] px-10 py-7 text-lg font-bold rounded-xl shadow-xl transition-all hover:scale-105 w-full md:w-auto max-w-[350px]"
              >
                Quero um diagnóstico estratégico
              </Button>
              <p className="text-[10px] md:text-xs text-[#0B6B4F]/60 font-medium">
                Indicado para clínicas odontológicas que já estão em operação e buscam melhorar resultados.
              </p>
            </div>
            <Link to="/blog" className="text-[#2ECC71] font-bold flex items-center gap-2 hover:underline text-lg text-center">
              Acesse nosso blog com dicas de gestão para clínicas odontológicas <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-24 px-4 bg-[#0B6B4F] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white leading-tight">
            Sua clínica odontológica está pronta para o próximo nível?
          </h2>
          <p className="text-lg mb-10 text-white/80 leading-relaxed">
            Se sua clínica já atende pacientes, mas o faturamento não cresce como deveria, o problema não está apenas na captação. Está na estrutura. O primeiro passo não é investir mais. É entender o que está travando através de uma estratégia para clínica odontológica sólida.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              size="lg" 
              className="bg-[#F4C542] text-[#0B6B4F] hover:bg-[#E0B837] px-10 py-7 text-lg font-bold rounded-xl shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-3 w-full max-w-[350px] md:w-auto"
            >
              <MessageCircle className="h-5 w-5 shrink-0" />
              Falar com um consultor
            </Button>
            <p className="text-[10px] md:text-xs text-white/60 font-medium">
              Indicado para clínicas odontológicas que já estão em operação e buscam melhorar resultados.
            </p>
          </div>
        </div>
      </section>

      <BrandDivider />
      <Footer />
    </div>
  );
};

export default Index;