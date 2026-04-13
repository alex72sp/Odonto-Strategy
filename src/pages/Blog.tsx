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
      excerpt: "Descubra os 5 erros mais comuns que impedem o crescimento de clínicas odontológicas e como evitá-los.",
      category: "Gestão",
      date: "15 Mai, 2024"
    },
    {
      slug: "como-aumentar-o-faturamento-de-uma-clinica-odontologica",
      title: "Como aumentar o faturamento de uma clínica odontológica",
      excerpt: "Estratégias práticas para elevar o ticket médio e a conversão de orçamentos sem gastar mais com marketing.",
      category: "Faturamento",
      date: "10 Mai, 2024"
    },
    {
      slug: "erros-na-gestao-de-clinicas-odontologicas",
      title: "Erros na gestão de clínicas odontológicas",
      excerpt: "Aprenda a identificar falhas operacionais que estão drenando o lucro do seu consultório todos os meses.",
      category: "Estratégia",
      date: "05 Mai, 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      
      <section className="pt-32 pb-20 px-4 bg-[#0B6B4F] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6">Blog Odonto Strategy</h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Conteúdo estratégico sobre gestão, faturamento e marketing para dentistas.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <Link key={i} to={`/blog/${post.slug}`}>
                <Card className="h-full border-none shadow-sm hover:shadow-md transition-all overflow-hidden group">
                  <div className="h-48 bg-[#EAF7F1] flex items-center justify-center group-hover:bg-[#D5EFE2] transition-colors">
                    <span className="text-[#0B6B4F] font-black text-4xl opacity-20">OS</span>
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