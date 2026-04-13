"use client";

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const posts = [
    {
      slug: "por-que-sua-clinica-odontologica-nao-cresce",
      title: "Por que sua clínica odontológica não cresce",
      excerpt: "Descubra os erros mais comuns que impedem o crescimento de clínicas odontológicas e como a consultoria odontológica pode ajudar.",
      category: "Gestão",
      date: "15 Mai, 2024",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    },
    {
      slug: "aumentar-faturamento-clinica-odontologica",
      title: "Como aumentar o faturamento da sua clínica odontológica",
      excerpt: "Estratégias práticas para elevar o ticket médio e a conversão de orçamentos através de uma gestão de clínica odontológica eficiente.",
      category: "Faturamento",
      date: "10 Mai, 2024",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
    },
    {
      slug: "erros-gestao-clinica-odontologica",
      title: "Principais erros na gestão de clínicas odontológicas",
      excerpt: "Aprenda a identificar falhas operacionais que estão drenando o lucro da sua clínica odontológica todos os meses.",
      category: "Estratégia",
      date: "05 Mai, 2024",
      image: "https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=800"
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
          <div className="grid md:grid-cols-3 gap-8">
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
                      <Badge variant="secondary" className="bg-[#EAF7F1] text-[#0B6B4F] hover:bg-[#EAF7F1]">{post.category}</Badge>
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;