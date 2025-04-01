
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const PricingCard = ({ 
  title,
  price,
  features,
  buttonText,
  isPrimary = false,
  recommended = false,
  isCustom = false,
  onContactClick,
  index
}: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
      className={`rounded-xl overflow-hidden ${
        isPrimary 
          ? 'bg-uni-blue text-white' 
          : isCustom
            ? 'bg-white border border-dashed border-uni-blue'
            : 'bg-white border border-uni-lightGray'
      } shadow-lg relative card-hover`}
    >
      {recommended && (
        <div className="absolute top-0 left-0 right-0 bg-yellow-400 text-uni-dark font-medium py-1 text-center text-sm">
          Recomendado
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="mb-6">
          {price ? (
            <>
              <span className="text-4xl font-bold">{price}</span>
              <span className="text-lg opacity-80">/mês</span>
            </>
          ) : (
            <span className="text-lg opacity-80">Personalizado</span>
          )}
        </div>
        <ul className="space-y-4 mb-8">
          {features.map((feature: string, i: number) => (
            <li key={i} className="flex items-start">
              <Check className={`w-5 h-5 mr-2 ${isPrimary ? 'text-white' : 'text-uni-blue'} flex-shrink-0 mt-0.5`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button 
          className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
            isPrimary 
              ? 'bg-white text-uni-blue hover:bg-uni-lightGray' 
              : isCustom
                ? 'bg-uni-blue text-white hover:bg-uni-darkBlue'
                : 'border border-uni-blue text-uni-blue hover:bg-uni-blue hover:text-white'
          }`}
          onClick={isCustom ? onContactClick : undefined}
        >
          {buttonText}
        </button>
      </div>
    </motion.div>
  );
};

const ContactForm = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Entre em contato</DialogTitle>
          <DialogDescription>
            Preencha o formulário abaixo para receber uma proposta personalizada.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input id="name" placeholder="Seu nome" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" placeholder="seu@email.com" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="message" className="text-right">
              Mensagem
            </Label>
            <textarea 
              id="message" 
              rows={4} 
              className="col-span-3 flex h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="Descreva suas necessidades"
            ></textarea>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Enviar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const PricingSection = () => {
  const [contactOpen, setContactOpen] = useState(false);
  
  const freeFeatures = [
    "Até 1 turma ativa",
    "Até 30 alunos",
    "Limite de 20 exercícios",
    "Ambiente de execução básico"
  ];
  
  const premiumFeatures = [
    "Turmas ilimitadas",
    "Alunos ilimitados",
    "Exercícios ilimitados",
    "Ambiente de execução avançado",
    "Suporte prioritário",
    "Estatísticas detalhadas"
  ];
  
  const customFeatures = [
    "Solução personalizada",
    "Integração com sistemas existentes",
    "Treinamento dedicado",
    "Suporte 24/7",
    "Personalização de interface"
  ];
  
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-uni-dark">
            Planos e Preços
          </h2>
          <p className="text-lg text-uni-gray max-w-2xl mx-auto">
            Escolha o plano ideal para suas necessidades educacionais
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard 
            title="Free"
            price="R$0"
            features={freeFeatures}
            buttonText="Começar Grátis"
            index={0}
          />
          
          <PricingCard 
            title="Premium"
            price="R$49"
            features={premiumFeatures}
            buttonText="Assinar Agora"
            isPrimary={true}
            recommended={true}
            index={1}
          />
          
          <PricingCard 
            title="Empresarial"
            price=""
            features={customFeatures}
            buttonText="Entrar em contato"
            isCustom={true}
            onContactClick={() => setContactOpen(true)}
            index={2}
          />
        </div>
        
        <ContactForm open={contactOpen} onOpenChange={setContactOpen} />
      </div>
    </section>
  );
};

export default PricingSection;
