
import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como os alunos acessam a plataforma?",
    answer: "Os alunos recebem um código de convite do professor para acessar a turma. Após o cadastro, terão acesso imediato aos exercícios disponibilizados."
  },
  {
    question: "Quais linguagens de programação são suportadas?",
    answer: "Atualmente, o UniAlgo suporta Java, Python, JavaScript e C/C++. Estamos trabalhando para adicionar mais linguagens em breve."
  },
  {
    question: "É possível integrar com outros sistemas acadêmicos?",
    answer: "Sim, oferecemos API para integração com sistemas LMS como Moodle e Canvas. Entre em contato para mais detalhes de implementação."
  },
  {
    question: "Como funciona a avaliação automática?",
    answer: "O código submetido é executado em ambiente seguro contra casos de teste predefinidos pelo professor. O sistema avalia corretude, eficiência e estilo de código."
  },
  {
    question: "Posso usar o UniAlgo para competições de programação?",
    answer: "Sim! Além do uso em sala de aula, o UniAlgo é perfeito para organizar e executar competições de programação com ranking, timer e scoreboard."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="bg-blue-50 py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-uni-dark">
            Perguntas Frequentes
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg overflow-hidden shadow-sm border border-uni-lightGray">
                <AccordionTrigger className="px-6 py-4 hover:no-underline font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-uni-gray">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
