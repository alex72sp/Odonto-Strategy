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
        alt: "dentista atendendo paciente em clínica odontológica",
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
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200",
        alt: "dentista atendendo paciente em clínica odontológica",
        content: `
          <p>Muitas clínicas enfrentam o desafio de uma agenda inconsistente. Entender como conseguir mais pacientes odontologia é vital para a saúde do negócio.</p>
          <p>Se sua clínica odontológica com poucos pacientes está estagnada, o problema pode ser estratégico e não apenas falta de marketing.</p>
          
          <h2>Por que sua clínica não atrai pacientes</h2>
          <p>Um posicionamento fraco impede que o público certo veja valor no seu serviço. Se você não se diferencia, acaba competindo apenas por preço baixo.</p>
          <p>A falta de presença digital afasta pacientes que buscam soluções no Google. Hoje, quem não é visto na internet, praticamente não existe para novos clientes.</p>
          <p>A ausência de diferenciação faz com que sua clínica seja apenas mais uma no bairro. É preciso mostrar por que o paciente deve escolher você e não o concorrente.</p>
          
          <h2>Estratégias que realmente funcionam</h2>
          <p>Estar presente no Google garante que você seja encontrado no momento exato da busca. O Google Meu Negócio é uma ferramenta indispensável para atrair pacientes odontológicos.</p>
          <p>Redes sociais com posicionamento correto geram autoridade e confiança. Mostre os bastidores e a segurança que sua clínica oferece.</p>
          <p>A indicação de pacientes satisfeitos continua sendo uma ferramenta poderosa. Estimule seus pacientes atuais a recomendarem seu trabalho.</p>
          
          <h2>O erro de depender só de marketing</h2>
          <p>Marketing sem estrutura interna não resolve o problema. Se a recepção não converte o contato em agendamento, o investimento é desperdiçado.</p>
          <p>A <a href='/gestao-clinica-odontologica' class='text-[#0B6B4F] font-bold hover:underline'>gestão clínica odontológica</a> deve estar alinhada para receber a demanda. A organização deve vir antes da escala.</p>
          
          <p>Reforce a importância de ter uma estratégia clara e uma organização impecável. O crescimento sustentável depende de uma base sólida.</p>
        `
      },
      "como-encher-agenda-clinica-odontologica": {
        title: "Como encher a agenda da sua clínica odontológica com estratégia",
        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
        alt: "clínica odontológica com agenda organizada",
        content: `
          <p>Ter uma agenda cheia clínica odontológica é o desejo de todo gestor. No entanto, muitos sofrem com a agenda ociosa mesmo com esforço constante.</p>
          <p>A solução para esse problema passa por entender como lotar agenda dentista com inteligência e <a href='/gestao-clinica-odontologica' class='text-[#0B6B4F] font-bold hover:underline'>gestão de agenda odontológica</a> eficiente.</p>
          
          <h2>Por que a agenda da clínica fica vazia</h2>
          <p>A falta de um processo de confirmação rigoroso gera faltas inesperadas. Cada buraco na agenda representa um prejuízo financeiro imediato.</p>
          <p>A baixa conversão de orçamentos impede o preenchimento de horários futuros. Se o paciente não fecha o tratamento, a cadeira fica vazia.</p>
          <p>A desorganização geral compromete a produtividade da equipe. Sem um fluxo definido, o tempo clínico é desperdiçado com tarefas burocráticas.</p>
          
          <h2>Como organizar a agenda corretamente</h2>
          <p>O controle de horários deve ser rigoroso e preferencialmente digital. Isso permite uma visão clara da ocupação da clínica em tempo real.</p>
          <p>A previsibilidade permite antecipar buracos na semana e agir antes que eles aconteçam. Use listas de espera para preencher cancelamentos de última hora.</p>
          <p>Um fluxo de atendimento bem definido otimiza o tempo do dentista. Garanta que o profissional esteja focado apenas no atendimento clínico.</p>
          
          <h2>Como aumentar a ocupação da agenda</h2>
          <p>Melhorar a conversão de orçamentos é o caminho mais rápido para aumentar ocupação clínica odontológica. Treine sua equipe para o fechamento.</p>
          <p>Reaproveitar pacientes antigos através de campanhas de retorno funciona muito bem. O custo de trazer de volta quem já conhece a clínica é muito menor.</p>
          <p>Otimizar o atendimento garante que mais pessoas sejam cuidadas com qualidade no mesmo intervalo de tempo. Eficiência é a chave para o lucro.</p>
          
          <p>Lembre-se: estrutura vem antes de escala. Uma agenda cheia só é lucrativa se a operação for organizada. Solicite um <a href='/diagnostico-clinica-odontologica' class='text-[#0B6B4F] font-bold hover:underline'>diagnóstico estratégico</a> hoje mesmo.</p>
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