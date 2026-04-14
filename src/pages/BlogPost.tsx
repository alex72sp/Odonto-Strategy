"use client";

import React from 'react';
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, ArrowRight } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const message = encodeURIComponent("Olá! Quero entender o diagnóstico estratégico.\nNome:\nClínica:\nCidade:\nBreve contexto:");
  const whatsappLink = `https://wa.me/5511983232828?text=${message}`;

  const getPostContent = (slug: string | undefined) => {
    const posts: Record<string, any> = {
      "por-que-clinicas-franqueadas-tem-dificuldade-para-crescer": {
        title: "Por que clínicas odontológicas franqueadas têm dificuldade para crescer mesmo com estrutura",
        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
        alt: "clínica odontológica franqueada moderna",
        content: `
          <p>Muitos empreendedores acreditam que ao investir em uma <strong>clínica odontológica franqueada</strong>, o sucesso é garantido pela estrutura da rede. No entanto, a realidade mostra que muitas unidades enfrentam dificuldades sérias para crescer de forma consistente.</p>
          <h2>As limitações de franquia e o crescimento travado</h2>
          <p>O primeiro grande desafio é a padronização excessiva. Embora a padronização seja um pilar das franquias, ela pode se tornar uma barreira quando impede a adaptação à realidade local do mercado. A <strong>gestão de clínicas franqueadas odontológicas</strong> exige um olhar que vai além do manual da franqueadora.</p>
          <p>Um <a href='/diagnostico-clinica-odontologica' class='text-[#0B6B4F] font-bold hover:underline'>diagnóstico estratégico</a> focado em unidades franqueadas pode revelar gargalos que a franqueadora muitas vezes não enxerga, permitindo um <strong>aumento de faturamento odontológico</strong> real.</p>
          <p>Além disso, é comum encontrar <a href='/blog/erros-gestao-comuns-clinicas-franqueadas' class='text-[#0B6B4F] font-bold hover:underline'>erros de gestão comuns em franquias</a> que limitam a lucratividade do franqueado.</p>
        `
      },
      "erros-gestao-comuns-clinicas-franqueadas": {
        title: "Erros de gestão mais comuns em clínicas odontológicas franqueadas",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200",
        alt: "gestão de franquia odontológica",
        content: `
          <p>A <strong>gestão de franquia odontológica</strong> possui particularidades que, se ignoradas, podem levar ao fracasso da unidade. O erro mais comum é acreditar que a franqueadora fará toda a gestão por você.</p>
          <h2>Gestão engessada e decisões centralizadas</h2>
          <p>Muitos franqueados cometem o erro de esperar passivamente pelas diretrizes da rede. Essa dependência excessiva impede que a clínica aproveite oportunidades locais de <strong>gestão de clínica odontológica</strong> eficiente.</p>
          <p>Para reverter esse quadro, é fundamental entender <a href='/blog/como-melhoran-desempenho-clinica-franqueada' class='text-[#0B6B4F] font-bold hover:underline'>como melhorar o desempenho da sua franquia</a> sem ferir as regras da rede, focando sempre em um <a href='/diagnostico-clinica-odontologica' class='text-[#0B6B4F] font-bold hover:underline'>diagnóstico para clínica odontológica</a> preciso.</p>
        `
      },
      "como-melhoran-desempenho-clinica-franqueada": {
        title: "Como melhorar o desempenho de uma clínica odontológica franqueada sem sair da rede",
        image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1200",
        alt: "dentista trabalhando em clínica franqueada",
        content: `
          <p>É perfeitamente possível alcançar um alto <strong>crescimento de clínica franqueada</strong> respeitando as diretrizes da franqueadora. A chave está na otimização interna e na <strong>consultoria odontológica estratégica</strong> local.</p>
          <h2>Otimização interna: Onde o lucro se esconde</h2>
          <p>Muitas vezes, o aumento de performance não vem de mais pacientes, mas de uma melhor conversão interna. Entender os <a href='/blog/por-que-clinicas-franqueadas-tem-dificuldade-para-crescer' class='text-[#0B6B4F] font-bold hover:underline'>motivos da dificuldade de crescimento</a> ajuda a traçar planos mais assertivos.</p>
          <p>O primeiro passo para qualquer mudança é realizar um <a href='/diagnostico-clinica-odontologica' class='text-[#0B6B4F] font-bold hover:underline'>diagnóstico estratégico completo</a> da sua operação atual.</p>
        `
      },
      "pacientes-nao-fecham-orcamento-clinica-odontologica": {
        title: "Por que pacientes não fecham orçamento na sua clínica odontológica",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200",
        alt: "dentista atendendo paciente em clínica odontológica",
        content: `
          <p>Muitos dentistas enfrentam a frustração de realizar diversas avaliações e perceber que os pacientes não fecham orçamento dentista no final do dia. Isso impacta diretamente no <strong>aumento de faturamento odontológico</strong>.</p>
          <h2>Principais motivos para a baixa conversão</h2>
          <p>A falta de clareza no valor percebido é um dos maiores vilões. Se o paciente enxerga apenas o preço e não o benefício, ele tende a buscar a opção mais barata. Uma <strong>gestão de clínica odontológica</strong> focada em vendas resolve esse problema.</p>
          <p>Aprenda também <a href='/blog/como-conseguir-pacientes-clinica-odontologica' class='text-[#0B6B4F] font-bold hover:underline'>como conseguir mais pacientes qualificados</a> para sua clínica e como um <a href='/diagnostico-clinica-odontologica' class='text-[#0B6B4F] font-bold hover:underline'>diagnóstico para clínica odontológica</a> pode identificar falhas na sua recepção.</p>
        `
      },
      "como-conseguir-pacientes-clinica-odontologica": {
        title: "Como conseguir mais pacientes para sua clínica odontológica",
        image: "https://images.pexels.com/photos/6627413/pexels-photo-6627413.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "dentista realizando procedimento odontológico",
        content: `
          <p>Muitas clínicas enfrentam o desafio de uma agenda inconsistente. Entender como conseguir mais pacientes odontologia é vital para a saúde do negócio e para uma <strong>clínica odontológica</strong> de sucesso.</p>
          <h2>Estratégias que realmente funcionam</h2>
          <p>Estar presente no Google garante que você seja encontrado no momento exato da busca. Mas atrair não é tudo; você precisa saber <a href='/blog/como-encher-agenda-clinica-odontologica' class='text-[#0B6B4F] font-bold hover:underline'>como encher a agenda com estratégia</a> para não perder dinheiro com horários vagos.</p>
          <p>Solicite um <a href='/diagnostico-clinica-odontologica' class='text-[#0B6B4F] font-bold hover:underline'>diagnóstico estratégico</a> para entender se o seu problema é captação ou conversão interna.</p>
        `
      },
      "como-encher-agenda-clinica-odontologica": {
        title: "Como encher a agenda da sua clínica odontológica com estratégia",
        image: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?auto=format&fit=crop&q=80&w=1200",
        alt: "clínica odontológica com agenda organizada",
        content: `
          <p>Ter uma agenda cheia clínica odontológica é o desejo de todo gestor. No entanto, muitos sofrem com a agenda ociosa mesmo com esforço constante em <strong>gestão de clínica odontológica</strong>.</p>
          <h2>Como organizar a agenda corretamente</h2>
          <p>O controle de horários deve ser rigoroso e preferencialmente digital. Isso permite uma visão clara da ocupação da clínica em tempo real, facilitando o <strong>aumento de faturamento odontológico</strong>.</p>
          <p>Veja também <a href='/blog/aumentar-faturamento-clinica-odontologica' class='text-[#0B6B4F] font-bold hover:underline'>estratégias para aumentar o faturamento</a> e como o <a href='/diagnostico-clinica-odontologica' class='text-[#0B6B4F] font-bold hover:underline'>diagnóstico para clínica odontológica</a> revela buracos na sua produtividade.</p>
        `
      },
      "aumentar-faturamento-clinica-odontologica": {
        title: "Como aumentar o faturamento da sua clínica odontológica com organização e estratégia",
        image: "https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?auto=format&fit=crop&q=80&w=1200",
        alt: "consultório odontológico moderno",
        content: `
          <p>Muitos dentistas trabalham exaustivamente, mas percebem que o faturamento clínica odontológica baixo impede o crescimento real do negócio. A <strong>consultoria odontológica estratégica</strong> foca justamente em resolver esse desequilíbrio.</p>
          <h2>O que realmente impacta o faturamento</h2>
          <p>A organização interna permite que a equipe produza mais em menos tempo. Processos bem definidos reduzem custos e aumentam a percepção de valor da sua <strong>clínica odontológica</strong>.</p>
          <p>Confira os <a href='/blog/erros-gestao-clinica-odontologica' class='text-[#0B6B4F] font-bold hover:underline'>erros de gestão que travam seu crescimento</a> e inicie hoje mesmo seu <a href='/diagnostico-clinica-odontologica' class='text-[#0B6B4F] font-bold hover:underline'>diagnóstico estratégico</a>.</p>
        `
      },
      "erros-gestao-clinica-odontologica": {
        title: "Erros na gestão de clínicas odontológicas que travam o crescimento",
        image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1200",
        alt: "dentista tratando paciente em clínica odontológica",
        content: `
          <p>Existem problemas silenciosos que impedem o sucesso de muitos consultórios. Identificar os erros <strong>gestão clínica odontológica</strong> é o primeiro passo para a profissionalização.</p>
          <h2>Principais erros na gestão</h2>
          <p>A falta de processos padronizados gera confusão na equipe e insatisfação no paciente. Sem um manual de conduta, cada um trabalha de um jeito diferente, prejudicando o <strong>aumento de faturamento odontológico</strong>.</p>
          <p>Melhore seu <a href='/blog/melhorar-atendimento-clinica-odontologica' class='text-[#0B6B4F] font-bold hover:underline'>atendimento para aumentar a conversão</a> e peça um <a href='/diagnostico-clinica-odontologica' class='text-[#0B6B4F] font-bold hover:underline'>diagnóstico para clínica odontológica</a> para mapear suas falhas.</p>
        `
      },
      "melhorar-atendimento-clinica-odontologica": {
        title: "Como melhorar o atendimento na clínica odontológica e aumentar a conversão",
        image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=1200",
        alt: "atendimento em clínica odontológica",
        content: `
          <p>O atendimento clínica odontológica é, muitas vezes, o fator decisivo para o fechamento de um tratamento em qualquer <strong>clínica odontológica</strong> de alto padrão.</p>
          <h2>Por que o atendimento influência na decisão</h2>
          <p>A odontologia lida com medos e expectativas. Um atendimento acolhedor reduz a ansiedade e aumenta a confiança, facilitando a <strong>consultoria odontológica estratégica</strong> de vendas.</p>
          <p>Entenda <a href='/blog/pacientes-nao-fecham-orcamento-clinica-odontologica' class='text-[#0B6B4F] font-bold hover:underline'>por que pacientes não fecham orçamentos</a> e como um <a href='/diagnostico-clinica-odontologica' class='text-[#0B6B4F] font-bold hover:underline'>diagnóstico estratégico</a> pode transformar sua recepção.</p>
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
          <Link to="/blog" className="inline-flex items-center text-sm font-bold text-[#0B6B4F] mb-8 hover:gap-2 transition-all group">
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Voltar para o Blog
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
            className="prose prose-green max-w-none text-[#333] leading-relaxed mb-12 prose-headings:text-[#0B6B4F] prose-a:text-[#0B6B4F] prose-a:font-bold hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="bg-[#EAF7F1] p-8 md:p-12 rounded-3xl border border-[#0B6B4F]/10 text-center mb-12">
            <h3 className="text-2xl font-bold text-[#0B6B4F] mb-4">
              Sua clínica está travada em algum desses pontos?
            </h3>
            <p className="text-lg text-[#333] mb-8 leading-relaxed">
              O <strong>diagnóstico estratégico</strong> mostra exatamente onde estão esses problemas e quais caminhos fazem sentido para melhorar os resultados da sua <strong>gestão de clínica odontológica</strong>.
            </p>
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col md:flex-row justify-center gap-4 w-full">
                <Button 
                  onClick={() => window.open(whatsappLink, '_blank')}
                  className="bg-[#0B6B4F] text-white hover:bg-[#0F8A5F] font-bold px-8 py-7 rounded-xl flex items-center gap-2 text-lg w-full md:w-auto shadow-lg"
                >
                  <MessageCircle className="h-6 w-6" /> Solicitar diagnóstico estratégico
                </Button>
                <Link to="/" className="flex items-center justify-center gap-2 text-[#0B6B4F] font-bold hover:underline py-4">
                  Página inicial <ArrowRight size={20} />
                </Link>
              </div>
              <p className="text-[10px] md:text-xs text-[#0B6B4F]/60 font-medium">
                Indicado para clínicas odontológicas que já estão em operação e buscam melhorar resultados.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;