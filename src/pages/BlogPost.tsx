"use client";

import React from 'react';
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const whatsappLink = "https://wa.me/5511983232828";

  const getPostContent = (slug: string | undefined) => {
    const posts: Record<string, any> = {
      "por-que-sua-clinica-odontologica-nao-cresce": {
        title: "Por que sua clínica odontológica não cresce",
        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
        alt: "consultoria odontológica em clínica",
        content: `
          <p>A consultoria odontológica é essencial para clínicas que querem aumentar o faturamento com organização, estratégia e processos bem definidos.</p>
          <p>Muitos dentistas acreditam que o segredo para o crescimento é apenas atrair mais pacientes. No entanto, a realidade de uma clínica odontológica de sucesso envolve uma gestão de clínica odontológica eficiente.</p>
          <h3>1. Falta de Processos de Venda</h3>
          <p>Se sua recepção não sabe como lidar com um lead que chega pelo WhatsApp, você está jogando dinheiro fora. O processo de venda começa no primeiro contato.</p>
          <h3>2. Gestão de Agenda Ineficiente</h3>
          <p>Janelas vazias são o maior ralo de dinheiro em uma clínica odontológica. Sem uma gestão ativa de confirmações, sua produtividade cai drasticamente.</p>
          <h3>3. Ausência de Indicadores</h3>
          <p>Quem não mede, não gerencia. Você sabe qual é o seu ticket médio? Sem esses dados, você está voando às cegas.</p>
          <p>Uma consultoria odontológica ajuda a identificar esses gargalos e traçar uma estratégia para clínica odontológica vencedora.</p>
        `
      },
      "aumentar-faturamento-clinica-odontologica": {
        title: "Como aumentar o faturamento da sua clínica odontológica",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200",
        alt: "dentista analisando resultados da clínica para aumentar faturamento",
        content: `
          <p>A consultoria odontológica é essencial para clínicas que querem aumentar o faturamento com organização, estratégia e processos bem definidos.</p>
          <p>Aumentar faturamento da clínica odontológica não é apenas sobre ter mais pacientes, mas sobre ser mais eficiente com os que você já tem.</p>
          <h3>Onde as clínicas perdem dinheiro?</h3>
          <p>A perda acontece principalmente na recepção e na hora de fechar o orçamento. Se o paciente sente que o valor é apenas preço, ele vai procurar o mais barato.</p>
          <h3>Estratégias Práticas</h3>
          <p>Melhore a experiência do paciente desde o agendamento. Treine sua equipe para vender benefícios e não apenas procedimentos. Use a gestão de clínica odontológica para controlar custos e margens.</p>
          <p>O diagnóstico estratégico é o primeiro passo para entender onde sua clínica odontológica está falhando.</p>
        `
      },
      "erros-gestao-clinica-odontologica": {
        title: "Principais erros na gestão de clínicas odontológicas",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
        alt: "gestão de clínica odontológica profissional",
        content: `
          <p>A consultoria odontológica é essencial para clínicas que querem aumentar o faturamento com organização, estratégia e processos bem definidos.</p>
          <p>Erros na gestão de clínica odontológica podem custar caro. Identificar essas falhas é o papel de uma consultoria odontológica séria.</p>
          <h3>Lista de Erros Comuns</h3>
          <ul>
            <li><strong>Falta de processo:</strong> Cada um faz de um jeito, gerando confusão.</li>
            <li><strong>Agenda mal organizada:</strong> Muitos buracos e falta de confirmação eficiente.</li>
            <li><strong>Baixa conversão:</strong> Orçamentos que não viram tratamentos.</li>
            <li><strong>Marketing sem estratégia:</strong> Gastar dinheiro sem saber o retorno real.</li>
          </ul>
          <p>Esses erros impactam diretamente no faturamento. Corrigi-los exige método e acompanhamento constante.</p>
        `
      }
    };

    return posts[slug || ""] || {
      title: "Artigo em breve",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
      alt: "clínica odontológica moderna",
      content: "<p>Estamos preparando um conteúdo incrível para você. Volte em breve!</p>"
    };
  };

  const post = getPostContent(slug);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <article className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-sm font-bold text-[#0B6B4F] mb-8 hover:gap-2 transition-all">
            <ArrowLeft className="h-4 w-4 mr-2" /> Voltar para o Blog
          </Link>
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0B6B4F] mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="mb-10 rounded-3xl overflow-hidden shadow-xl">
            <img 
              src={post.image} 
              alt={post.alt} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div 
            className="prose prose-green max-w-none text-[#333] leading-relaxed mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="bg-[#F5F5F5] p-8 rounded-3xl border border-gray-100 text-center">
            <h3 className="text-xl font-bold text-[#0B6B4F] mb-4">Gostou do conteúdo?</h3>
            <p className="text-sm text-[#333] mb-6">Podemos ajudar sua clínica odontológica a superar esses desafios com nossa consultoria estratégica.</p>
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              className="bg-[#0B6B4F] text-white hover:bg-[#0F8A5F] font-bold px-8 py-6 rounded-xl flex items-center gap-2 mx-auto"
            >
              <MessageCircle className="h-5 w-5" /> Falar com um especialista
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;