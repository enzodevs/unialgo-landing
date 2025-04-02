import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const steps = [
  {
    title: "Comece Agora",
    description: "Crie sua conta gratuita e configure seu perfil de professor ou aluno em menos de 2 minutos, sem burocracia.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    position: "left"
  },
  {
    title: "Crie ou Participe",
    description: "Professores: crie turmas e exercícios personalizados. Alunos: junte-se às turmas com código de acesso e comece a praticar.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"></path>
        <path d="M18.4 9.4 8.5 19.2"></path>
        <path d="m10.8 5.6 3.6 3.6"></path>
        <path d="m14.4 5.6 3.6 3.6"></path>
      </svg>
    ),
    position: "right"
  },
  {
    title: "Pratique e Avalie",
    description: "Codifique soluções para problemas desafiadores e receba feedback instantâneo sobre o desempenho, complexidade e estilo do seu código.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
    ),
    position: "left"
  },
  {
    title: "Evolua Consistentemente",
    description: "Acompanhe seu progresso com métricas detalhadas e visualizações claras de seu desenvolvimento em cada habilidade e conceito.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20v-6"></path>
        <path d="M6 20v-6"></path>
        <path d="M18 20v-6"></path>
        <path d="M6 9v3"></path>
        <path d="M18 9v3"></path>
        <path d="M12 9v3"></path>
        <path d="M12 3v3"></path>
        <path d="M6 3v3"></path>
        <path d="M18 3v3"></path>
        <path d="M18 16h.01"></path>
        <path d="M12 16h.01"></path>
        <path d="M6 16h.01"></path>
      </svg>
    ),
    position: "right"
  }
];

const TimelineStep = ({ step, index }: any) => {
  const stepRef = useRef(null);
  const isInView = useInView(stepRef, { once: true, amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: stepRef,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const x = useTransform(
    scrollYProgress, 
    [0, 0.5], 
    [step.position === "left" ? -50 : 50, 0]
  );

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.2
      }
    }
  };

  return (
    <div 
      ref={stepRef}
      className={`flex flex-col md:flex-row items-center mb-24 md:mb-40 ${
        step.position === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text content */}
      <motion.div 
        className="md:w-1/2 mb-8 md:mb-0 px-6"
        style={{ opacity, x }}
      >
        <div className="max-w-md mx-auto md:mx-0">
          <motion.div 
            className={`flex items-center mb-4 ${step.position === "right" ? "md:justify-end" : ""}`}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.1, duration: 0.5 }
              }
            }}
          >
            <div className="flex items-center">
              <motion.div 
                className="w-12 h-12 rounded-full bg-uni-blue/10 flex items-center justify-center text-uni-blue mr-4"
                variants={iconVariants}
              >
                {step.icon}
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-uni-dark">{step.title}</h3>
            </div>
          </motion.div>
          
          <motion.p 
            className="text-lg text-uni-gray"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.3, duration: 0.5 }
              }
            }}
          >
            {step.description}
          </motion.p>
          
          <motion.div 
            className="mt-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.5, duration: 0.5 }
              }
            }}
          >
            <a 
              href="#" 
              className="text-uni-blue hover:text-uni-darkBlue font-medium flex items-center gap-2"
            >
              <span>Saiba mais</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div 
        className="md:w-1/2 px-6"
        style={{ opacity, x: useTransform(x, value => value * -1) }}
      >
        <motion.div 
          className="rounded-xl overflow-hidden shadow-xl relative"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {/* Image gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-uni-blue/20 to-transparent opacity-60 mix-blend-overlay"></div>
          
          <img 
            src={step.image} 
            alt={step.title} 
            className="w-full h-auto transition-transform duration-700 hover:scale-105"
          />
          
          {/* Image number indicator */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center font-bold text-uni-blue">
            {index + 1}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const HowToUseSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="how-to-use" className="bg-white py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" className="absolute top-0 left-0 text-blue-500 opacity-5">
          <defs>
            <pattern id="dots-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-pattern)" />
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <span className="text-uni-blue font-medium mb-2 inline-block text-sm">PROCESSO SIMPLES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-uni-dark">
            Como Utilizar o UniAlgo
          </h2>
          <motion.div 
            className="w-20 h-1 bg-uni-blue mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p 
            className="max-w-2xl mx-auto mt-4 text-uni-gray"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Siga estes passos simples para começar sua jornada de aprendizado
            ou ensino com o UniAlgo.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line with animation */}
          <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-1 hidden md:block">
            <div className="absolute inset-0 bg-gray-200"></div>
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-uni-blue origin-top"
              style={{ height: lineHeight }}
            ></motion.div>
            
            {/* Animated dots along the timeline */}
            {steps.map((_, index) => (
              <motion.div 
                key={index}
                className="absolute w-5 h-5 bg-white border-2 border-uni-blue rounded-full left-1/2 transform -translate-x-1/2"
                style={{ top: `${(index / (steps.length - 1)) * 100}%` }}
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ 
                  delay: 0.5 + (index * 0.2),
                  duration: 0.6,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          {/* Timeline steps */}
          <div className="relative z-10">
            {steps.map((step, index) => (
              <TimelineStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#pricing"
            className="inline-block bg-uni-blue hover:bg-uni-darkBlue text-white font-medium px-6 py-3 rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Comece agora mesmo
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToUseSection;