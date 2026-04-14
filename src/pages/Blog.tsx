"use client";

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandDivider from "@/components/BrandDivider";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  const message = encodeURIComponent("Olá! Quero entender o diagnóstico estratégico.\nNome:\nClínica:\nCidade:\nBreve contexto:");
  const whatsappLink = `https://wa.me/5511983232828?text=${message}`;
  
  const posts = [
    // 3 ARTIGOS FRANQUEADOS
    {
      slug: "por-que-clinicas-franqueadas-tem-dificuldade-para-crescer",
      title: "Por que clínicas odontológicas franqueadas têm dificuldade para crescer mesmo com estrutura",
      excerpt: "Entenda as limitações de franquia e como a padronização excessiva pode estar travando o crescimento da sua clínica odontológica franqueada.",
      category: "Franqueados",
      date: "25 Mai, 2024",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    },
    {
      slug: "erros-gestao-comuns-clinicas-franqueadas",
      title: "Erros de gestão mais comuns em clínicas odontológicas franqueadas",
      excerpt: "Identifique os erros de gestão de franquia odontológica que impedem decisões estratégicas e como sair do modelo engessado.",
      category: "Franqueados",
      date: "24 Mai, 2024",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
    },
    {
      slug: "como-melhoran-desempenho-clinica-franqueada",
      title: "Como melhorar o desempenho de uma clínica odontológica franqueada sem sair da rede",
      excerpt: "Estratégias de gestão local eficiente para aumentar a performance e o crescimento de clínica franqueada dentro das regras da rede.",
      category: "Franqueados",
      date: "23 Mai, 2024",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800"
    },
    // 6 ARTIGOS GERAIS
    {
      slug: "pacientes-nao-fecham-orcamento-clinica-odontologica",
      title: "Por que pacientes não fecham orçamento na sua clínica odontológica",
      excerpt: "Entenda os motivos reais por que pacientes não fecham orçamento dentista e como reverter essa situação com processos comerciais.",
      category: "Conversão",
      date: "20 Mai, 2024",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
    },
    {
      slug: "como-conseguir-pacientes-clinica-odontologica",
      title: "Como conseguir mais pacientes para sua clínica odontológica",
      excerpt: "Descubra estratégias práticas sobre como conseguir mais pacientes odontologia e construir um posicionamento sólido no mercado.",
      category: "Marketing",
      date: "18 Mai, 2024",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
    },
    {
      slug: "como-encher-agenda-clinica-odontologica",
      title: "Como encher a agenda da sua clínica odontológica com estratégia",
      excerpt: "Aprenda como ter uma agenda cheia clínica odontológica através de uma gestão clínica odontológica eficiente e previsível.",
      category: "Gestão",
      date: "16 Mai, 2024",
      image: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?auto=format&fit=crop&q=80&w=800"
    },
    {
      slug: "aumentar-faturamento-clinica-odontologica",
      title: "Como aumentar o faturamento da sua clínica odontológica com organização e estratégia",
      excerpt: "Estratégias práticas para sair do operacional e transformar sua clínica em um negócio altamente lucrativo.",
      category: "Faturamento",
      date: "14 Mai, 2024",
      image: "https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?auto=format&fit=crop&q=80&w=800"
    },
    {
      slug: "erros-gestao-clinica-odontologica",
      title: "Erros na gestão de clínicas odontológicas que travam o crescimento",
      excerpt: "Identifique os problemas silenciosos que impedem o sucesso e a profissionalização do seu consultório.",
      category: "Gestão",
      date: "12 Mai, 2024",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800"
    },
    {
      slug: "melhorar-atendimento-clinica-odontologica",
      title: "Como melhorar o atendimento na clínica odontológica e aumentar a conversão",
      excerpt: "A excelência na experiência do paciente como fator decisivo para o fechamento de grandes tratamentos.",
      category: "Atendimento",
      date: "10 Mai, 2024",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      
      <section className="pt-32 pb-20 px-4 bg-[#0B6B4F] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm mb-6 text-white/80">
            A consultoria odontológica é essencial para clínicas que querem aumentar o faturamento com organização, estratégia e processos bem definidos.
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6">Blog Odonto Strategy</h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Conteúdo estratégico sobre gestão de clínica odontológica e faturamento.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {posts.map((post, i) => (
              <Link key={i} to={`/blog/${post.slug}`}>
                <Card className="h-full border-none shadow-sm hover:shadow-md transition-all overflow-hidden group">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center mb-2">
                      <Badge variant="secondary" className={`${post.category === 'Franqueados' ? 'bg-[#0B6B4F] text-white' : 'bg-[#EAF7F1] text-[#0B6B4F]'} hover:opacity-90`}>
                        {post.category}
                      </Badge>
                      <span className="text-[10px] text-gray-400 uppercase font-bold">{post.date}</span>
                    </div>
                    <CardTitle className="text-xl font-bold text-[#0B6B4F] group-hover:text-[#2ECC71] transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[#333] leading-relaxed">{post.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-4">
            <h3 className="text-2xl font-bold text-[#0B6B4F] mb-2">Quer aplicar essas estratégias na sua clínica?</h3>
            <p className="text-gray-600 mb-4">
              Nossa consultoria ajuda você a transformar conhecimento em resultados práticos e faturamento real.
            </p>
            <div className="w-full flex flex-col items-center gap-3">
              <Button 
                onClick={() => window.open(whatsappLink, '_blank')}
                size="lg"
                className="bg-[#0B6B4F] text-white hover:bg-[#0F8A5F] px-10 py-7 text-lg font-bold rounded-xl shadow-xl transition-all hover:scale-105 flex items-center gap-2 w-full sm:w-auto"
              >
                Solicitar diagnóstico
                <ArrowRight className="h-5 w-5" />
              </Button>
              <p className="text-[10px] md:text-xs text-[#0B6B4F]/60 font-medium">
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

export default Blog;