import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Propriedades comuns aos planos
type PlanFeature = {
  text: string;
  included: boolean;
};

type PricingPlan = {
  id: string;
  title: string;
  price: string | null;
  period?: string;
  description: string;
  buttonText: string;
  features: PlanFeature[];
  popular?: boolean;
  highlightColor?: string;
};

const plans: PricingPlan[] = [
  {
    id: "mensal",
    title: "Mensal",
    price: "R$49",
    period: "mês",
    description: "Ideal para professores individuais ou pequenas equipes acadêmicas.",
    buttonText: "Começar agora",
    highlightColor: "#3B82F6", // Azul
    features: [
      { text: "Até 5 turmas ativas", included: true },
      { text: "Até 150 alunos", included: true },
      { text: "Exercícios ilimitados", included: true },
      { text: "Ambiente de execução básico", included: true },
      { text: "Suporte por email", included: true },
      { text: "Estatísticas básicas", included: true },
      { text: "Relatórios básicos", included: true },
      { text: "API de integração", included: false },
      { text: "Personalização avançada", included: false },
    ]
  },
  {
    id: "anual",
    title: "Anual",
    price: "R$39",
    period: "mês",
    description: "Economize 20% com cobrança anual. 2 meses grátis!",
    buttonText: "Economize agora",
    popular: true,
    highlightColor: "#8B5CF6", // Roxo
    features: [
      { text: "Turmas ilimitadas", included: true },
      { text: "Alunos ilimitados", included: true },
      { text: "Exercícios ilimitados", included: true },
      { text: "Ambiente de execução avançado", included: true },
      { text: "Suporte prioritário", included: true },
      { text: "Estatísticas detalhadas", included: true },
      { text: "Relatórios completos", included: true },
      { text: "API de integração", included: true },
      { text: "Personalização avançada", included: false },
    ]
  },
  {
    id: "empresarial",
    title: "Empresarial",
    price: null,
    description: "Solução personalizada para instituições e equipes maiores.",
    buttonText: "Falar com consultor",
    highlightColor: "#10B981", // Verde
    features: [
      { text: "Turmas e alunos ilimitados", included: true },
      { text: "Exercícios ilimitados", included: true },
      { text: "Ambiente de execução personalizado", included: true },
      { text: "Suporte 24/7 dedicado", included: true },
      { text: "Análises avançadas", included: true },
      { text: "Relatórios personalizados", included: true },
      { text: "API de integração completa", included: true },
      { text: "White-label e personalização total", included: true },
      { text: "Treinamento para equipe", included: true },
    ]
  }
];

// Toggle para frequência de pagamento
const BillingToggle = ({ showAnnual, onChange }: { showAnnual: boolean, onChange: (value: boolean) => void }) => {
  return (
    <div className="flex items-center justify-center mb-16">
      <span className={`text-sm font-medium transition-colors duration-200 ${!showAnnual ? 'text-uni-dark' : 'text-gray-500'}`}>
        Mensal
      </span>
      
      <button 
        className="relative mx-3 h-8 w-16 rounded-full bg-gray-200"
        onClick={() => onChange(!showAnnual)}
        aria-label={showAnnual ? "Mudar para pagamento mensal" : "Mudar para pagamento anual"}
      >
        <motion.div 
          className="absolute top-1 left-1 h-6 w-6 rounded-full bg-uni-blue shadow-md"
          animate={{ x: showAnnual ? 32 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </button>
      
      <span className={`text-sm font-medium transition-colors duration-200 ${showAnnual ? 'text-uni-dark' : 'text-gray-500'}`}>
        Anual
        <span className="ml-1.5 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
          Economia de 20%
        </span>
      </span>
    </div>
  );
};

const PricingCard = ({ 
  plan,
  onContactClick,
  animationDelay = 0
}: { 
  plan: PricingPlan; 
  onContactClick: () => void;
  animationDelay: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: animationDelay,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={`relative flex h-full flex-col rounded-xl overflow-hidden ${
        plan.popular 
          ? 'bg-white border-2 border-uni-blue shadow-xl z-10 my-0 lg:-my-4 scale-105 transform' 
          : 'bg-white border border-uni-lightGray shadow-md'
      }`}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      {plan.popular && (
        <div 
          className="absolute top-0 left-0 right-0 bg-uni-blue text-white font-medium py-1.5 text-center text-sm"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)' }}
        >
          Mais popular
        </div>
      )}

      <div className="p-6 md:p-8 flex flex-col h-full">
        <motion.div variants={childVariants} className="mb-4">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
            style={{ backgroundColor: `${plan.highlightColor}20` }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke={plan.highlightColor} 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {plan.id === "mensal" ? (
                <>
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                  <line x1="16" y1="8" x2="2" y2="22"></line>
                  <line x1="17.5" y1="15" x2="9" y2="15"></line>
                </>
              ) : plan.id === "anual" ? (
                <>
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </>
              ) : (
                <>
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </>
              )}
            </svg>
          </div>
          
          <h3 className="text-2xl font-bold mb-2 text-uni-dark">{plan.title}</h3>
          <p className="text-uni-gray text-sm mb-4">{plan.description}</p>
        </motion.div>
        
        <motion.div variants={childVariants} className="mb-6">
          {plan.price ? (
            <div className="flex items-baseline">
              <span className="text-4xl font-bold text-uni-dark">{plan.price}</span>
              <span className="text-lg ml-1 text-uni-gray">/{plan.period}</span>
            </div>
          ) : (
            <div className="text-lg font-medium text-uni-gray">Preço personalizado</div>
          )}
        </motion.div>
        
        <motion.ul variants={childVariants} className="mb-8 space-y-3 flex-grow">
          {plan.features.map((feature, i) => (
            <motion.li 
              key={i} 
              className="flex items-start"
              variants={childVariants}
              custom={i}
            >
              {feature.included ? (
                <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
              ) : (
                <X className="w-5 h-5 mr-2 text-gray-400 flex-shrink-0 mt-0.5" />
              )}
              <span className={feature.included ? 'text-uni-dark' : 'text-gray-500'}>
                {feature.text}
              </span>
            </motion.li>
          ))}
        </motion.ul>
        
        <motion.div variants={childVariants}>
          <button 
            className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
              plan.popular 
                ? 'bg-uni-blue text-white hover:bg-uni-darkBlue shadow-lg shadow-uni-blue/20'
                : plan.price === null
                  ? 'border-2 border-uni-blue text-uni-blue hover:bg-uni-blue hover:text-white'
                  : 'border border-uni-blue text-uni-blue hover:bg-uni-blue hover:text-white'
            }`}
            onClick={plan.price === null ? onContactClick : undefined}
          >
            {plan.buttonText}
          </button>
          
          {plan.price && (
            <p className="mt-3 text-center text-xs text-uni-gray">
              Sem compromisso. Cancele a qualquer momento.
            </p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

const ContactForm = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset do form após algum tempo
      setTimeout(() => {
        setIsSuccess(false);
        setFormState({
          name: '',
          email: '',
          company: '',
          message: '',
        });
        onOpenChange(false);
      }, 2000);
    }, 1500);
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Fale com nossa equipe</DialogTitle>
          <DialogDescription>
            Preencha o formulário abaixo para receber uma proposta personalizada para sua instituição.
          </DialogDescription>
        </DialogHeader>
        
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="py-8 text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-uni-dark mb-2">Mensagem enviada!</h3>
              <p className="text-uni-gray">
                Entraremos em contato em breve para discutir as melhores opções para sua instituição.
              </p>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4 py-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input 
                    id="name" 
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Seu nome" 
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="seu@email.com" 
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Instituição</Label>
                <Input 
                  id="company" 
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  placeholder="Nome da instituição ou empresa" 
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4} 
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="Descreva suas necessidades e o número aproximado de usuários"
                  required
                ></textarea>
              </div>
              
              <DialogFooter className="pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-uni-blue hover:bg-uni-darkBlue text-white"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : "Solicitar proposta"}
                </Button>
              </DialogFooter>
            </motion.form>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

const PricingSection = () => {
  const [showAnnual, setShowAnnual] = useState(true);
  const [contactOpen, setContactOpen] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  // Calcula preços com desconto para exibição anual
  const annualDiscount = 0.2; // 20% de desconto

  return (
    <section id="pricing" ref={sectionRef} className="bg-uni-light py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-uni-light">
        <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#3B82F6" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="text-uni-blue font-medium mb-2 inline-block text-sm">PLANOS FLEXÍVEIS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-uni-dark">
            Escolha o plano ideal para suas necessidades
          </h2>
          <motion.div 
            className="w-20 h-1 bg-uni-blue mx-auto mt-2 mb-4 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
          <p className="text-uni-gray text-lg max-w-2xl mx-auto">
            Todos os planos incluem todas as funcionalidades essenciais. 
            Escolha a opção que melhor se adapta ao seu contexto.
          </p>
        </motion.div>

        <BillingToggle 
          showAnnual={showAnnual} 
          onChange={setShowAnnual}
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard 
              key={plan.id}
              plan={{
                ...plan,
                // Aplicar desconto se for visualização anual e tiver preço
                price: plan.price && showAnnual && plan.id === "mensal" 
                  ? `R$${Math.round(parseInt(plan.price.replace('R$', '')) * (1 - annualDiscount))}`
                  : plan.price
              }}
              onContactClick={() => setContactOpen(true)}
              animationDelay={0.1 * index}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p className="text-uni-gray mb-4">
            Precisa de algo diferente? Temos opções flexíveis para todas as necessidades.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-uni-blue hover:text-uni-darkBlue font-medium inline-flex items-center"
            onClick={() => setContactOpen(true)}
          >
            <span>Entre em contato para um plano personalizado</span>
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
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </motion.button>
        </motion.div>

        <ContactForm open={contactOpen} onOpenChange={setContactOpen} />
      </div>
    </section>
  );
};

export default PricingSection;