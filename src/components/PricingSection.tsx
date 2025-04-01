
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingCard = ({ 
  title,
  price,
  features,
  buttonText,
  isPrimary = false,
  recommended = false,
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
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-lg opacity-80">/mês</span>
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
              : 'border border-uni-blue text-uni-blue hover:bg-uni-blue hover:text-white'
          }`}
        >
          {buttonText}
        </button>
      </div>
    </motion.div>
  );
};

const ContactForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="max-w-2xl mx-auto mt-16 p-8 bg-white rounded-xl shadow-lg"
    >
      <h3 className="text-2xl font-bold mb-6 text-center">Precisa de um plano personalizado?</h3>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-uni-gray">Nome</label>
          <input 
            type="text" 
            id="name" 
            className="w-full px-4 py-3 border border-uni-lightGray rounded-lg focus:outline-none focus:ring-2 focus:ring-uni-blue"
            placeholder="Seu nome"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-uni-gray">Email</label>
          <input 
            type="email" 
            id="email" 
            className="w-full px-4 py-3 border border-uni-lightGray rounded-lg focus:outline-none focus:ring-2 focus:ring-uni-blue"
            placeholder="seu@email.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-uni-gray">Mensagem</label>
          <textarea 
            id="message" 
            rows={4} 
            className="w-full px-4 py-3 border border-uni-lightGray rounded-lg focus:outline-none focus:ring-2 focus:ring-uni-blue"
            placeholder="Descreva suas necessidades"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="w-full bg-uni-blue hover:bg-uni-darkBlue text-white font-medium px-6 py-3 rounded-lg transition-all duration-300"
        >
          Enviar
        </button>
      </form>
    </motion.div>
  );
};

const PricingSection = () => {
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
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
        </div>
        
        <ContactForm />
      </div>
    </section>
  );
};

export default PricingSection;
