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

  // Mock content based on slug
  const getPostContent = (slug: string | undefined) => {
    if (slug === "por-que-sua-clinica-odontologica-nao-cresce") {
      return {
        title: "Por que sua clínica odontológica não cresce",
        content: `
          <p>Muitos dentistas acreditam que o segredo para o crescimento é apenas atrair mais pacientes. No entanto, a realidade de uma clínica odontológica de sucesso é muito mais complexa.</p>
          <h3>1. Falta de Processos de Venda</h3>
          <p>Se sua recepção não sabe como lidar com um lead que chega pelo WhatsApp, você está jogando dinheiro fora. O processo de venda começa no primeiro "olá".</p>
          <h3>2. Gestão de Agenda Ineficiente</h3>
          <p>Janelas vazias são o maior ralo de dinheiro em uma clínica. Sem uma gestão ativa de confirmações e encaixes, sua produtividade cai drasticamente.</p>
          <h3>3. Ausência de Indicadores</h3>
          <p>Quem não mede, não gerencia. Você sabe qual é o seu ticket médio? Qual sua taxa de conversão de orçamentos? Sem esses dados, você está voando às cegas.</p>
        `
      };
    }
    return {
      title: "Artigo em breve",
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
          
          <div 
            className="prose prose-green max-w-none text-[#333] leading-relaxed mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="bg-[#F5F5F5] p-8 rounded-3xl border border-gray-100 text-center">
            <h3 className="text-xl font-bold text-[#0B6B4F] mb-4">Gostou do conteúdo?</h3>
            <p className="text-sm text-[#333] mb-6">Podemos ajudar sua clínica a superar esses desafios com nossa consultoria estratégica.</p>
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