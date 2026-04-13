"use client";

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Faturamento = () => {
  const whatsappLink = "https://wa.me/5511983232828";

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      
      <section className="pt-32 pb-20 px-4 bg-[#0B6B4F] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm mb-6 text-white/80">
            A consultoria odontológica é essencial para clínicas que querem aumentar o faturamento com organização, estratégia e processos bem definidos.
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6">Aumentar faturamento da clínica odontológica</h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Estratégias práticas para converter mais orçamentos e maximizar o lucro de cada paciente atendido na sua clínica odontológica.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-green max-w-none text-[#333]">
            <h2 className="text-[#0B6B4F] font-bold text-2xl mb-6">O segredo não é apenas atrair novos pacientes</h2>
            <p className="mb-4">
              Muitas clínicas focam 100% em marketing digital para atrair novos leads, mas perdem contatos por falhas na recepção. A gestão de clínica odontológica correta resolve isso.
            </p>
            <p className="mb-8">
              Para aumentar faturamento da clínica odontológica, é preciso olhar para a estratégia para clínica odontológica como um todo.
            </p>
            
            <div className="bg-[#0B6B4F] p-8 rounded-3xl text-white text-center">
              <h3 className="text-xl font-bold mb-4">Quer saber onde sua clínica odontológica está perdendo dinheiro?</h3>
              <p className="mb-6 text-white/80">Nosso diagnóstico identifica os gargalos que impedem seu faturamento de crescer.</p>
              <Button 
                onClick={() => window.open(whatsappLink, '_blank')}
                className="bg-[#F4C542] text-[#0B6B4F] hover:bg-[#E0B837] font-bold px-8 py-6 rounded-xl"
              >
                Solicitar diagnóstico gratuito
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Faturamento;