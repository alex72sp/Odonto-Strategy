"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormData {
  name: string;
  clinic: string;
  phone: string;
  city: string;
}

const DiagnosisForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    clinic: '',
    phone: '',
    city: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.phone || !formData.city) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulação de envio (sem integração WhatsApp)
      console.log('Dados do formulário:', formData);
      
      setIsSubmitted(true);
      setFormData({ name: '', clinic: '', phone: '', city: '' });
      
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Ocorreu um erro ao enviar seu formulário. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="text-center bg-green-50 border-green-200">
        <CardContent className="p-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-green-800 mb-2">Solicitação Enviada!</h3>
          <p className="text-green-700 mb-4">
            Obrigado! Sua solicitação de diagnóstico foi recebida e nossa equipe entrará em contato em breve.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="text-green-700 border-green-300 hover:bg-green-50"
          >
            Enviar Nova Solicitação
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white shadow-elevated">
      <CardHeader>
        <CardTitle className="text-primary-dark text-center">Solicitar Diagnóstico</CardTitle>
        <CardDescription className="text-primary-medium text-center">
          Preencha os campos abaixo e nossa equipe entrará em contato
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name" className="block text-sm font-medium text-primary-dark mb-2">
                Nome Completo *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="clinic" className="block text-sm font-medium text-primary-dark mb-2">
                Nome da Clínica
              </Label>
              <Input
                id="clinic"
                name="clinic"
                type="text"
                placeholder="Nome da sua clínica"
                value={formData.clinic}
                onChange={handleInputChange}
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="phone" className="block text-sm font-medium text-primary-dark mb-2">
                Telefone/WhatsApp *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(11) 99999-9999"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="city" className="block text-sm font-medium text-primary-dark mb-2">
                Cidade *
              </Label>
              <Input
                id="city"
                name="city"
                type="text"
                placeholder="Sua cidade"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          
          <div>
            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-cta text-primary-dark hover:bg-cta-hover"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </>
              ) : (
                'Solicitar Diagnóstico'
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default DiagnosisForm;