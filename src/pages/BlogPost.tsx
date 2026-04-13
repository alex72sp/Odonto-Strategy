"use client";

import React from 'react';
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const message = encodeURIComponent("Olá, quero solicitar um diagnóstico estratégico.\nNome:\nClínica:\nCidade:\nFaturamento médio:\nPrincipal dificuldade:");
  const whatsappLink = `https://wa.me/5511983232828?text=${message}`;

  const getPostContent = (slug: string | undefined) => {
    const posts: Record<string, any> = {
      "pacientes-nao-fecham-orcamento-clinica-odontologica": {
        title: "Por que pacientes não fecham orçamento na sua clínica odontológica",
        image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1200",
        alt: "clínica odontológica atendimento paciente",
        content: `
          <p>Muitos dentistas enfrentam a frustração de realizar diversas avaliações e perceber que os pacientes não fecham orçamento dentista no final do dia. Esse problema impacta diretamente a saúde financeira do negócio.</p>
          <p>Entender os motivos reais por trás dessa negativa é o primeiro passo para <a href='/aumentar-faturamento-clinica-odontologica' class='text-[#0B6B4F] font-bold hover:underline'>aumentar faturamento clínica odontológica</a> de forma consistente.</p>
          
          <h2>Principais motivos para a baixa conversão</h2>
          <p>A falta de clareza no valor percebido é um dos maiores vilões. Se o paciente enxerga apenas o preço e não o benefício, ele tende a buscar a opção mais barata.</p>
          <p>A ausência de um processo comercial estruturado na recepção também contribui para a perda de oportunidades. O atendimento precisa ser consultivo e não apenas informativo.</p>
          <p>Muitas vezes existe uma insegurança do paciente em relação ao tratamento ou a falta de senso de urgência. Sem um fechamento conduzido, o paciente sai da clínica para pensar e acaba não voltando.</p>
          
          <h2>Como melhorar a conversão de pacientes</h2>
          <p>A abordagem correta começa na escuta ativa. Entenda as dores do paciente antes de apresentar a solução técnica. Use uma explicação simples e evite termos excessivamente técnicos que geram confusão.</p>
          <p>A condução do atendimento deve levar o paciente a uma decisão. Ofereça opções de pagamento claras e reforce os riscos de não realizar o tratamento agora.</p>
          
          <h2>O impacto disso no faturamento</h2>
          <p>Pequenos ajustes na taxa de conversão podem gerar grandes saltos no lucro. Quando você otimiza o processo de vendas, cada hora de cadeira se torna muito mais valiosa.</p>
          <p>A <a href='/consultoria-odontologica' class='text-[#0B6B4F] font-bold hover:underline'>consultoria odontológica</a> foca justamente em ajustar esses pontos cegos da operação.</p>
          
          <p>Ter uma estrutura sólida é o que diferencia clínicas que apenas sobrevivem daquelas que dominam o mercado local. O segredo está na estratégia.</p>
        `
      },
      "como-conseguir-pacientes-clinica-odontologica": {
        title: "Como conseguir mais pacientes para sua clínica odontológica",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200",
        alt: "dentista analisando resultados",
        content: `
          <p>O problema da agenda vazia assombra muitos profissionais que buscam saber como conseguir mais pacientes odontologia. No entanto, atrair pessoas sem estratégia pode ser um erro caro.</p>
          <p>Para <a href='/aumentar-faturamento-clinica-odontologica' class='text-[#0B6B4F] font-bold hover:underline'>aumentar faturamento clínica odontológica</a>, é preciso atrair o público certo para os procedimentos mais lucrativos.</p>
          
          <h2>Por que sua clínica não atrai pacientes</h2>
          <p>Um posicionamento fraco no mercado faz com que sua clínica seja vista como apenas mais uma. Sem diferenciação, você compete apenas por preço.</p>
          <p>O marketing errado também é um fator comum. Investir em anúncios sem um funil de vendas preparado na recepção é desperdiçar investimento todos os meses.</p>
          
          <h2>Estratégias que realmente funcionam</h2>
          <p>A presença digital deve ser estratégica e focada em autoridade. Mostre os bastidores, os resultados e a segurança que sua clínica oferece.</p>
          <p>Estimular a indicação de pacientes atuais é uma das formas mais baratas e eficientes de crescer. Um paciente satisfeito é o seu melhor vendedor.</p>
          <p>O posicionamento como especialista em determinadas áreas ajuda a atrair casos de maior ticket médio, melhorando a rentabilidade do negócio.</p>
          
          <h2>O erro de focar só em marketing</h2>
          <p>Muitas clínicas acreditam que o marketing resolverá todos os problemas. Porém, se a base estruturada não estiver pronta, o marketing apenas acelerará a perda de dinheiro.</p>
          <p>Antes de escalar, é fundamental garantir que a <a href='/gestao-clinica-odontologica' class='text-[#0B6B4F] font-bold hover:underline'>gestão clínica odontológica</a> esteja alinhada com os objetivos de crescimento.</p>
          
          <p>O sucesso sustentável vem da união entre atração eficiente e operação organizada. Comece arrumando a casa para depois convidar os convidados.</p>
        `
      },
      "como-encher-agenda-clinica-odontologica": {
        title: "Como encher a agenda da sua clínica odontológica com estratégia",
        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
        alt: "consultoria odontológica estratégia",
        content: `
          <p>Muitos dentistas sofrem com a agenda ociosa mesmo investindo tempo e esforço na clínica. Ter uma agenda cheia clínica odontológica exige mais do que sorte: exige método.</p>
          <p>A base para esse resultado é uma <a href='/gestao-clinica-odontologica' class='text-[#0B6B4F] font-bold hover:underline'>gestão clínica odontológica</a> profissional e focada em produtividade.</p>
          
          <h2>Por que a agenda fica ociosa</h2>
          <p>A falta de processos claros de confirmação e remarcação gera buracos que custam caro. Cada hora de cadeira vazia é um prejuízo irrecuperável para o faturamento.</p>
          <p>A baixa conversão de orçamentos também impede que a agenda se mantenha ocupada com tratamentos de longo prazo. Além disso, a desorganização no fluxo de pacientes causa gargalos desnecessários.</p>
          
          <h2>Como organizar a agenda corretamente</h2>
          <p>O controle deve ser rigoroso. Utilize ferramentas que permitam a previsibilidade dos atendimentos e o acompanhamento em tempo real da ocupação.</p>
          <p>Crie um fluxo de pacientes que priorize a produtividade do dentista. O tempo clínico deve ser sagrado e protegido por uma recepção eficiente.</p>
          
          <h2>Como aumentar ocupação sem depender só de marketing</h2>
          <p>Trabalhe a base de pacientes inativos. Muitas vezes o lucro que você busca está em pessoas que já conhecem sua clínica mas não retornam há meses.</p>
          <p>Melhore a taxa de comparecimento com lembretes estratégicos e uma comunicação humanizada. Reduzir as faltas é a forma mais rápida de encher a agenda.</p>
          
          <p>Lembre-se: estrutura vem antes de escala. Uma agenda cheia só é lucrativa se a operação for eficiente. Solicite um <a href='/diagnostico-clinica-odontologica' class='text-[#0B6B4F] font-bold hover:underline'>diagnóstico estratégico</a> para identificar seus gargalos.</p>
        `
      },
      "por-que-sua-clinica-odontologica-nao-cresce": {
        title: "Por que sua clínica odontológica não cresce",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200",
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
              <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;