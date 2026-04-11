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

  const handleOpenModal = () => setIsModalOpen(true);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const name = formData.get('name');
    const clinic = formData.get('clinic');
    const phone = formData.get('phone');
    const city = formData.get('city');

    const whatsappNumber = "5511983232828";
    const message = `Olá! Gostaria de solicitar um diagnóstico estratégico para minha clínica.%0A%0ADados do Lead.%0ANome: ${name}%0AClínica: ${clinic}%0ATelefone: ${phone}%0ACidade: ${city}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    showSuccess("Redirecionando para o WhatsApp...");
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Hero Section - Strong Visual Impact */}
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

      {/* Sobre a Empresa - Light Background */}
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

      {/* Como Funciona - Dark Background */}
      <section className="py-20 px-4 bg-section-dark text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
            <p className="text-lg text-primary-light">Processo estruturado para transformar sua clínica</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center bg-white text-primary-dark shadow-elevated">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-dark font-bold text-xl">1</span>
                </div>
                <CardTitle className="text-primary-dark">Levantamento de Dados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Coleta completa de informações sobre sua clínica, processos e indicadores</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white text-primary-dark shadow-elevated">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-dark font-bold text-xl">2</span>
                </div>
                <CardTitle className="text-primary-dark">Diagnóstico Completo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Análise detalhada para entender o cenário atual e oportunidades</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white text-primary-dark shadow-elevated">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-dark font-bold text-xl">3</span>
                </div>
                <CardTitle className="text-primary-dark">Identificação de Gargalos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Pontos críticos que estão limitando o crescimento e rentabilidade</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white text-primary-dark shadow-elevated">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-dark font-bold text-xl">4</span>
                </div>
                <CardTitle className="text-primary-dark">Plano Estratégico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Roadmap personalizado com ações claras para crescimento sustentável</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Principais Problemas - Light Background */}
      <section className="py-20 px-4 bg-section-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Principais Problemas que Resolvemos</h2>
            <p className="text-lg text-primary-medium">Dores comuns que impedem o crescimento das clínicas</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white shadow-elevated border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary-dark">
                  <TrendingUp className="text-red-500" />
                  Baixa Conversão de Orçamentos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Pacientes que não fecham o tratamento por falta de processo comercial eficaz</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-elevated border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary-dark">
                  <Calendar className="text-orange-500" />
                  Agenda com Horários Ociosos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Horários vagos que representam perda de receita e subutilização da estrutura</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-elevated border-l-4 border-l-yellow-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary-dark">
                  <Users className="text-yellow-500" />
                  Falta de Processo Comercial
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Ausência de metodologia para converter leads em pacientes tratados</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-elevated border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary-dark">
                  <Target className="text-purple-500" />
                  Divulgação Ineficiente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Investimento em marketing sem retorno mensurável e estratégico</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-elevated border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary-dark">
                  <Building2 className="text-blue-500" />
                  Falta de Organização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Estrutura operacional que não escala com o crescimento do negócio</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-elevated border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary-dark">
                  <Lightbulb className="text-green-500" />
                  Falta de Visão Estratégica
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Foco no dia a dia sem planejamento para crescimento sustentável</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Oportunidades de Crescimento - CORRIGIDO com contraste máximo */}
      <section className="py-20 px-4 bg-primary-dark text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Oportunidades de Crescimento
            </h2>
            <p className="text-xl text-white/85 max-w-3xl mx-auto">
              Resultados que sua clínica pode alcançar
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp className="text-primary-dark text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Aumento de Faturamento</h3>
              <p className="text-gray-100 text-lg">
                Escala de receita com estratégias comprovadas
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Calendar className="text-primary-dark text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Melhor Aproveitamento da Agenda</h3>
              <p className="text-gray-100 text-lg">
                Otimização de horários e redução de ociosidade
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="text-primary-dark text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Aumento do Ticket Médio</h3>
              <p className="text-gray-100 text-lg">
                Maior valor por paciente com upselling estratégico
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="text-primary-dark text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Estruturação de Marketing</h3>
              <p className="text-gray-100 text-lg">
                Sistemas de aquisição de pacientes com ROI mensurável
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Building2 className="text-primary-dark text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Previsibilidade de Resultados</h3>
              <p className="text-gray-100 text-lg">
                Planejamento financeiro com metas claras e atingíveis
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Lightbulb className="text-primary-dark text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Gestão Estratégica</h3>
              <p className="text-gray-100 text-lg">
                Indicadores que guiam decisões com base em dados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial - Light Background */}
      <section className="py-20 px-4 bg-section-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Nosso Diferencial</h2>
            <p className="text-lg text-primary-medium">O que nos torna únicos no mercado</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary-dark">
                  <CheckCircle className="text-primary-medium" />
                  Visão Estratégica + Prática
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Combinamos análise estratégica com implementação prática, garantindo que teoria se traduza em resultados reais para sua clínica.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary-dark">
                  <TrendingUp className="text-primary-medium" />
                  Foco em Resultado Financeiro
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Todas as estratégicas são direcionadas para o aumento do faturamento e rentabilidade, com métricas claras de sucesso.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary-dark">
                  <Target className="text-primary-medium" />
                  Direcionamento Claro
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Roadmap específico com ações passo a passo, eliminando a incerteza e garantindo execução eficaz.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary-dark">
                  <Lightbulb className="text-primary-medium" />
                  Aplicação Simples
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Metodologia acessível que pode ser implementada sem necessidade de grandes mudanças operacionais.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Para Quem É - Dark Background */}
      <section className="py-20 px-4 bg-section-dark text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Para Quem é a RCS Consultoria</h2>
            <p className="text-lg text-primary-light">Se você se identifica com algum destes perfis, estamos aqui para ajudar</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-white text-primary-dark shadow-elevated">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-primary-dark text-2xl" />
                </div>
                <CardTitle className="text-primary-dark">Clínicas que Querem Crescer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Clínicas estabelecidas que buscam escalar operações e aumentar faturamento de forma sustentável.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white text-primary-dark shadow-elevated">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary-dark text-2xl" />
                </div>
                <CardTitle className="text-primary-dark">Dentistas que Precisam de Gestão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Profissionais técnicos com excelente habilidade clínica, mas necessidade de desenvolver competências de gestão.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white text-primary-dark shadow-elevated">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="text-primary-dark text-2xl" />
                </div>
                <CardTitle className="text-primary-dark">Negócios que Faturam mas Não Escalam</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Clínicas com boa receita, mas que não conseguem transformar isso em crescimento consistente e organizado.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action - Strong Visual Impact */}
      <section className="py-20 px-4 gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Descubra onde sua clínica está perdendo faturamento
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Nossa consultoria estratégica identifica oportunidades ocultas e cria um plano personalizado para crescimento sustentável.
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

      {/* Contato - Light Background */}
      <section className="py-20 px-4 bg-section-light">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Entre em Contato</h2>
            <p className="text-lg text-primary-medium">
              Preencha os campos abaixo e nossa equipe entrará em contato para agendar uma conversa estratégica
            </p>
          </div>
          
          <Card className="bg-white shadow-elevated">
            <CardContent className="p-8">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium text-primary-dark mb-2">
                      Nome Completo
                    </Label>
                    <Input id="name" name="name" type="text" placeholder="Seu nome completo" required />
                  </div>
                  <div>
                    <Label htmlFor="clinic" className="block text-sm font-medium text-primary-dark mb-2">
                      Nome da Clínica
                    </Label>
                    <Input id="clinic" name="clinic" type="text" placeholder="Nome da sua clínica" required />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="block text-sm font-medium text-primary-dark mb-2">
                      Telefone/WhatsApp
                    </Label>
                    <Input id="phone" name="phone" type="tel" placeholder="(11) 99999-9999" required />
                  </div>
                  <div>
                    <Label htmlFor="city" className="block text-sm font-medium text-primary-dark mb-2">
                      Cidade
                    </Label>
                    <Input id="city" name="city" type="text" placeholder="Sua cidade" required />
                  </div>
                </div>
                
                <div>
                  <Button type="submit" size="lg" className="w-full bg-cta text-primary-dark hover:bg-cta-hover">
                    Enviar Solicitação via WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer - Strong Dark Background */}
      <footer className="bg-primary-dark text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">RCS Consultoria</h3>
            <p className="text-gray-400 mb-6">
              Roberto Carlos Santana Consultoria Estratégica
            </p>
            <p className="text-gray-400 mb-8">
              Especialistas em crescimento para clínicas odontológicas
            </p>
            <MadeWithDyad />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;