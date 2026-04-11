"use client";

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { showSuccess } from "@/utils/toast";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadModal = ({ isOpen, onClose }: LeadModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    clinic: '',
    phone: '',
    city: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = "5511983232828";
    const messageText = `Olá! Gostaria de solicitar um diagnóstico estratégico para minha clínica.\n\n*Dados do Lead:*\n*Nome:* ${formData.name}\n*Clínica:* ${formData.clinic}\n*Telefone:* ${formData.phone}\n*Cidade:* ${formData.city}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;
    
    showSuccess("Abrindo WhatsApp...");
    
    // Abrir imediatamente para evitar bloqueio de popup do navegador
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white border-primary-dark">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary-dark">Solicitar Diagnóstico</DialogTitle>
          <DialogDescription className="text-primary-medium">
            Preencha os dados abaixo para iniciarmos o seu atendimento estratégico.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-primary-dark font-semibold">Nome Completo</Label>
            <Input 
              id="name" 
              placeholder="Seu nome" 
              required 
              value={formData.name}
              onChange={handleChange}
              className="border-primary-light focus:ring-primary-dark"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="clinic" className="text-primary-dark font-semibold">Nome da Clínica</Label>
            <Input 
              id="clinic" 
              placeholder="Nome da sua clínica" 
              required 
              value={formData.clinic}
              onChange={handleChange}
              className="border-primary-light focus:ring-primary-dark"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-primary-dark font-semibold">WhatsApp</Label>
            <Input 
              id="phone" 
              type="tel" 
              placeholder="(11) 99999-9999" 
              required 
              value={formData.phone}
              onChange={handleChange}
              className="border-primary-light focus:ring-primary-dark"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city" className="text-primary-dark font-semibold">Cidade/Estado</Label>
            <Input 
              id="city" 
              placeholder="Sua cidade" 
              required 
              value={formData.city}
              onChange={handleChange}
              className="border-primary-light focus:ring-primary-dark"
            />
          </div>
          <Button type="submit" className="w-full bg-cta text-primary-dark hover:bg-cta-hover font-bold text-lg shadow-elevated mt-4">
            Iniciar Atendimento no WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadModal;