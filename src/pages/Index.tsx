"use client";

import React, { useState } from 'react';
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, CheckCircle, TrendingUp, Users, Target, Lightbulb, Calendar } from "lucide-react";
import LeadModal from "@/components/LeadModal";
import { showSuccess } from "@/utils/toast";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    
    const name = formData.get('name');
    const clinic = formData.get('clinic');
    const phone = formData.get('phone');
    const city = formData.get('city');

    const whatsappNumber = "5511983232828";
    const messageText = `Olá! Gostaria de solicitar um diagnóstico estratégico para minha clínica.\n\n*Dados do Lead:*\n*Nome:* ${name}\n*Clínica:* ${clinic}\n*Telefone:* ${phone}\n*Cidade:* ${city}`;
    
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(messageText)}`;
    
    showSuccess("Redirecionando para o WhatsApp...");
    
    setTimeout(() => {
      window.location.href = whatsappUrl;
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="min-h-screen">
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Hero Section */}
      <section className="relative gradient-hero text-white py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              CONSULTORIA ESTRATÉGICA
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Aumente o faturamento da sua clínica odontológica
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Diagnóstico completo, identificação de gargalos e plano estratégico personalizado para crescimento sustentável
          </p>
          <Button 
            size="lg" 
            onClick={handleOpenModal}
            className="bg-cta text-primary-dark hover:bg-cta-hover px-10 py-5 text-lg font-semibold shadow-elevated"
          >
            Solicitar Diagnóstico
          </Button>
        </div>
      </section>

      {/* Sobre a Empresa */}
      <section className="py-20 px-4 bg-section-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Sobre a RCS Consultoria</h2>
            <p className="text-lg text-dark max-w-3xl mx-auto">
              A RCS Consultoria é especializada em consultoria estratégica para clínicas odontológicas. 
              Com experiência prática no setor, focamos em diagnóstico completo e planejamento estratégico 
              para aumentar o faturamento e organizar a clínica de forma estruturada.
            </p>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 px-4 bg-section-dark text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
            <p className="text-lg text-primary-light">Processo estruturado para transformar sua clínica</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Levantamento de Dados", desc: "Coleta completa de informações sobre sua clínica, processos e indicadores" },
              { step: "2", title: "Diagnóstico Completo", desc: "Análise detalhada para entender o cenário atual e oportunidades" },
              { step: "3", title: "Identificação de Gargalos", desc: "Pontos críticos que estão limitando o crescimento e rentabilidade" },
              { step: "4", title: "Plano Estratégico", desc: "Roadmap personalizado com ações claras para crescimento sustentável" }
            ].map((item, i) => (
              <Card key={i} className="text-center bg-white text-primary-dark shadow-elevated">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-dark font-bold text-xl">{item.step}</span>
                  </div>
                  <CardTitle className="text-primary-dark">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Principais Problemas */}
      <section className="py-20 px-4 bg-section-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Principais Problemas que Resolvemos</h2>
            <p className="text-lg text-primary-medium">Dores comuns que impedem o crescimento das clínicas</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <TrendingUp className="text-red-500" />, title: "Baixa Conversão de Orçamentos", desc: "Pacientes que não fecham o tratamento por falta de processo comercial eficaz", border: "border-l-red-500" },
              { icon: <Calendar className="text-orange-500" />, title: "Agenda com Horários Ociosos", desc: "Horários vagos que representam perda de receita e subutilização da estrutura", border: "border-l-orange-500" },
              { icon: <Users className="text-yellow-500" />, title: "Falta de Processo Comercial", desc: "Ausência de metodologia para converter leads em pacientes tratados", border: "border-l-yellow-500" },
              { icon: <Target className="text-purple-500" />, title: "Divulgação Ineficiente", desc: "Investimento em marketing sem retorno mensurável e estratégico", border: "border-l-purple-500" },
              { icon: <Building2 className="text-blue-500" />, title: "Falta de Organização", desc: "Estrutura operacional que não escala com o crescimento do negócio", border: "border-l-blue-500" },
              { icon: <Lightbulb className="text-green-500" />, title: "Falta de Visão Estratégica", desc: "Foco no dia a dia sem planejamento para crescimento sustentável", border: "border-l-green-500" }
            ].map((item, i) => (
              <Card key={i} className={`bg-white shadow-elevated border-l-4 ${item.border}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary-dark">
                    {item.icon}
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Oportunidades de Crescimento */}
      <section className="py-20 px-4 bg-primary-dark text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Oportunidades de Crescimento</h2>
            <p className="text-xl text-white/85 max-w-3xl mx-auto">Resultados que sua clínica pode alcançar</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: <TrendingUp />, title: "Aumento de Faturamento", desc: "Escala de receita com estratégias comprovadas" },
              { icon: <Calendar />, title: "Melhor Aproveitamento da Agenda", desc: "Otimização de horários e redução de ociosidade" },
              { icon: <Users />, title: "Aumento do Ticket Médio", desc: "Maior valor por paciente com upselling estratégico" },
              { icon: <Target />, title: "Estruturação de Marketing", desc: "Sistemas de aquisição de pacientes com ROI mensurável" },
              { icon: <Building2 />, title: "Previsibilidade de Resultados", desc: "Planejamento financeiro com metas claras e atingíveis" },
              { icon: <Lightbulb />, title: "Gestão Estratégica", desc: "Indicadores que guiam decisões com base em dados" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "text-primary-dark text-3xl" })}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-100 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferencial */}
      <section className="py-20 px-4 bg-section-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Nosso Diferencial</h2>
            <p className="text-lg text-primary-medium">O que nos torna únicos no mercado</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Visão Estratégica + Prática", desc: "Combinamos análise estratégica com implementação prática, garantindo que teoria se traduza em resultados reais para sua clínica." },
              { title: "Foco em Resultado Financeiro", desc: "Todas as estratégicas são direcionadas para o aumento do faturamento e rentabilidade, com métricas claras de sucesso." },
              { title: "Direcionamento Claro", desc: "Roadmap específico com ações passo a passo, eliminando a incerteza e garantindo execução eficaz." },
              { title: "Aplicação Simples", desc: "Metodologia acessível que pode ser implementada sem necessidade de grandes mudanças operacionais." }
            ].map((item, i) => (
              <Card key={i} className="bg-white shadow-elevated">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary-dark">
                    <CheckCircle className="text-primary-medium" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Para Quem É */}
      <section className="py-20 px-4 bg-section-dark text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Para Quem é a RCS Consultoria</h2>
            <p className="text-lg text-primary-light">Se você se identifica com algum destes perfis, estamos aqui para ajudar</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <TrendingUp />, title: "Clínicas que Querem Crescer", desc: "Clínicas estabelecidas que buscam escalar operações e aumentar faturamento de forma sustentável." },
              { icon: <Users />, title: "Dentistas que Precisam de Gestão", desc: "Profissionais técnicos com excelente habilidade clínica, mas necessidade de desenvolver competências de gestão." },
              { icon: <Building2 />, title: "Negócios que Faturam mas Não Escalam", desc: "Clínicas com boa receita, mas que não conseguem transformar isso em crescimento consistente e organizado." }
            ].map((item, i) => (
              <Card key={i} className="text-center bg-white text-primary-dark shadow-elevated">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "text-primary-dark text-2xl" })}
                  </div>
                  <CardTitle className="text-primary-dark">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Descubra onde sua clínica está perdendo faturamento</h2>
          <p className="text-xl mb-8 text-blue-100">Nossa consultoria estratégica identifica oportunidades ocultas e cria um plano personalizado para crescimento sustentável.</p>
          <Button 
            size="lg" 
            onClick={handleOpenModal}
            className="bg-cta text-primary-dark hover:bg-cta-hover px-10 py-5 text-lg font-semibold shadow-elevated"
          >
            Solicitar Diagnóstico
          </Button>
        </div>
      </section>

      {/* Contato */}
      <section className="py-20 px-4 bg-section-light">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Entre em Contato</h2>
            <p className="text-lg text-primary-medium">Preencha os campos abaixo e nossa equipe entrará em contato para agendar uma conversa estratégica</p>
          </div>
          
          <Card className="bg-white shadow-elevated">
            <CardContent className="p-8">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="form-name" className="block text-sm font-medium text-primary-dark mb-2">Nome Completo</Label>
                    <Input id="form-name" name="name" type="text" placeholder="Seu nome completo" required />
                  </div>
                  <div>
                    <Label htmlFor="form-clinic" className="block text-sm font-medium text-primary-dark mb-2">Nome da Clínica</Label>
                    <Input id="form-clinic" name="clinic" type="text" placeholder="Nome da sua clínica" required />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="form-phone" className="block text-sm font-medium text-primary-dark mb-2">Telefone/WhatsApp</Label>
                    <Input id="form-phone" name="phone" type="tel" placeholder="(11) 99999-9999" required />
                  </div>
                  <div>
                    <Label htmlFor="form-city" className="block text-sm font-medium text-primary-dark mb-2">Cidade</Label>
                    <Input id="form-city" name="city" type="text" placeholder="Sua cidade" required />
                  </div>
                </div>
                
                <div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full bg-cta text-primary-dark hover:bg-cta-hover"
                  >
                    {isSubmitting ? "Conectando..." : "Enviar Solicitação via WhatsApp"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">RCS Consultoria</h3>
            <p className="text-gray-400 mb-6">Roberto Carlos Santana Consultoria Estratégica</p>
            <p className="text-gray-400 mb-8">Especialistas em crescimento para clínicas odontológicas</p>
            <MadeWithDyad />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;