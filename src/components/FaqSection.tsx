import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Tipos para as FAQ
type FaqCategory = {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
  category: string;
};

// Categorias de FAQ
const faqCategories: FaqCategory[] = [
  {
    id: "geral",
    name: "Geral",
    description: "Perguntas sobre a plataforma e funcionalidades",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
      </svg>
    )
  },
  {
    id: "tecnico",
    name: "Técnico",
    description: "Questões sobre linguagens, execução e configurações",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  },
  {
    id: "professores",
    name: "Professores",
    description: "Informações específicas para educadores",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      </svg>
    )
  },
  {
    id: "estudantes",
    name: "Estudantes",
    description: "Dúvidas comuns dos alunos",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
      </svg>
    )
  },
];

// Lista completa de FAQs
const faqs: FaqItem[] = [
  // Categoria: Geral
  {
    question: "Como os alunos acessam a plataforma?",
    answer: "Os alunos recebem um código de convite do professor para acessar a turma. Após o cadastro, terão acesso imediato aos exercícios disponibilizados e podem começar a praticar. O processo de entrada é simples e rápido, sem necessidade de verificação administrativa.",
    category: "geral"
  },
  {
    question: "É possível integrar com outros sistemas acadêmicos?",
    answer: "Sim, oferecemos API para integração com sistemas LMS como Moodle, Canvas, Blackboard e Google Classroom. É possível sincronizar turmas, notas e atividades. Nossa documentação detalhada de API fornece todas as informações necessárias para implementação.",
    category: "geral"
  },
  {
    question: "Quanto tempo leva para implementar o UniAlgo?",
    answer: "A implementação básica pode ser feita em minutos! Professores podem criar uma conta e começar a usar imediatamente. Para integrações institucionais completas, nossa equipe de suporte fornece assistência personalizada, com tempo médio de 1-2 semanas para implementação total.",
    category: "geral"
  },
  
  // Categoria: Técnico
  {
    question: "Quais linguagens de programação são suportadas?",
    answer: "O UniAlgo suporta mais de 60 linguagens de programação. Cada ambiente é configurado com bibliotecas e frameworks populares para cada linguagem.",
    category: "tecnico"
  },
  {
    question: "Como funciona a avaliação automática?",
    answer: "O código submetido é executado em ambiente seguro containerizado contra casos de teste predefinidos pelo professor. O sistema avalia corretude (resultados esperados), eficiência (complexidade e performance) e estilo de código (padrões e boas práticas). Relatórios detalhados são gerados para cada submissão.",
    category: "tecnico"
  },
  {
    question: "Os ambientes de execução são configuráveis?",
    answer: "Sim! Os professores podem definir limites de recursos (memória, CPU, tempo de execução), bibliotecas disponíveis e versões das linguagens. É possível criar ambientes específicos para diferentes exercícios e turmas, garantindo que os alunos tenham acesso exatamente às ferramentas necessárias.",
    category: "tecnico"
  },
  
  // Categoria: Professores
  {
    question: "Posso usar o UniAlgo para competições de programação?",
    answer: "Absolutamente! Além do uso em sala de aula, o UniAlgo é ideal para organizar e executar competições de programação com ranking, timer e scoreboard em tempo real. Você pode configurar regras personalizadas, penalidades por tempo e visualizações públicas ou privadas dos resultados.",
    category: "professores"
  },
  {
    question: "Como posso acompanhar o progresso dos alunos?",
    answer: "O UniAlgo oferece um dashboard completo com análises de desempenho individual e coletivo. Você visualiza métricas como taxa de conclusão, tempo médio por exercício, conceitos problemáticos e progresso ao longo do tempo. Relatórios podem ser exportados em vários formatos para análise externa.",
    category: "professores"
  },
  {
    question: "É possível criar exercícios colaborativos?",
    answer: "Sim, o UniAlgo suporta exercícios em grupo onde múltiplos alunos podem trabalhar no mesmo projeto. Professores podem definir papéis, monitorar contribuições individuais e avaliar tanto o resultado final quanto o processo de desenvolvimento.",
    category: "professores"
  },
  
  // Categoria: Estudantes
  {
    question: "Posso usar o UniAlgo em dispositivos móveis?",
    answer: "Sim! O UniAlgo possui uma interface responsiva e também oferece aplicativos para iOS e Android. Os apps incluem todas as funcionalidades da versão desktop e permitem praticar offline com sincronização quando estiver conectado novamente.",
    category: "estudantes"
  },
  {
    question: "Como recebo feedback sobre meu código?",
    answer: "O UniAlgo fornece feedback detalhado e imediato sobre cada submissão, destacando testes passados/falhados, sugestões de otimização, problemas de estilo e alertas de segurança. Professores podem adicionar comentários personalizados e você pode solicitar ajuda diretamente pela plataforma.",
    category: "estudantes"
  },
  {
    question: "Posso acessar exercícios antigos após o término do curso?",
    answer: "Sim, mesmo após o término do curso, você mantém acesso ao histórico de exercícios, soluções e feedbacks. Isso permite revisitar conceitos e reutilizar seu próprio código em projetos futuros. O acesso é vitalício para exercícios que você já completou.",
    category: "estudantes"
  }
];

const FaqSection = () => {
  const [activeCategory, setActiveCategory] = useState("geral");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  // Filtra FAQs baseado na categoria ativa e pesquisa
  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  // Gerencia expanão/colapso dos itens
  const toggleAccordion = (value: string) => {
    setExpandedItems(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value) 
        : [...prev, value]
    );
  };

  return (
    <section id="faq" ref={sectionRef} className="bg-white py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-uni-light to-white">
        <div className="absolute inset-0 bg-dots opacity-50"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-uni-blue font-medium mb-2 inline-block text-sm">DÚVIDAS FREQUENTES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-uni-dark">
            Perguntas Frequentes
          </h2>
          <motion.div 
            className="w-20 h-1 bg-uni-blue mx-auto mt-2 mb-4 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
          <p className="text-uni-gray text-lg max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre o UniAlgo.
            Se não encontrar o que procura, entre em contato conosco.
          </p>
        </motion.div>

        {/* Barra de pesquisa */}
        <motion.div 
          className="max-w-lg mx-auto mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <input
              type="text"
              className="w-full py-3 pl-10 pr-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-uni-blue focus:border-transparent transition-all duration-200"
              placeholder="Pesquisar pergunta ou resposta..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                onClick={() => setSearchQuery("")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>
        </motion.div>

        {/* Navegação por categorias */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === "all" 
                ? 'bg-uni-blue text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveCategory("all")}
          >
            Todas as categorias
          </button>
          
          {faqCategories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                activeCategory === category.id 
                  ? 'bg-uni-blue text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="w-4 h-4">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Resultados de pesquisa */}
        {searchQuery && (
          <motion.div 
            className="mb-4 text-center text-uni-gray"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Encontrados {filteredFaqs.length} resultados para "{searchQuery}"
          </motion.div>
        )}

        {/* Lista de FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Accordion 
                type="multiple" 
                value={expandedItems}
                onValueChange={setExpandedItems}
                className="border border-uni-lightGray rounded-lg overflow-hidden bg-white shadow-sm"
              >
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, index) => (
                    <AccordionItem 
                      key={`${faq.category}-${index}`} 
                      value={`${faq.category}-${index}`} 
                      className={`border-0 ${index !== 0 ? 'border-t border-uni-lightGray' : ''}`}
                    >
                      <AccordionTrigger 
                        onClick={() => toggleAccordion(`${faq.category}-${index}`)}
                        className={`px-6 py-4 hover:no-underline font-medium text-lg group ${
                          expandedItems.includes(`${faq.category}-${index}`) 
                            ? 'text-uni-blue' 
                            : 'text-uni-dark'
                        }`}
                      >
                        <div className="flex items-center">
                          <span className="text-left">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 pt-0 text-uni-gray">
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {faq.answer}
                        </motion.div>
                      </AccordionContent>
                    </AccordionItem>
                  ))
                ) : (
                  <div className="py-8 text-center text-uni-gray">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-gray-400">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M9 10h.01"></path>
                      <path d="M15 10h.01"></path>
                      <path d="M9.5 15.5a3.5 3.5 0 0 0 5 0"></path>
                    </svg>
                    <p className="text-lg font-medium mb-2">Nenhuma pergunta encontrada</p>
                    <p>Tente buscar por termos diferentes ou veja todas as categorias.</p>
                  </div>
                )}
              </Accordion>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Seção de contato adicional */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-uni-gray mb-4">
            Não encontrou o que procurava?
          </p>
          <a 
            href="#" 
            className="inline-flex items-center text-uni-blue hover:text-uni-darkBlue font-medium transition-colors duration-200"
          >
            <span>Entre em contato com nossa equipe</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="ml-2"
            >
              <path d="M10 9l-6 6 6 6"></path>
              <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;