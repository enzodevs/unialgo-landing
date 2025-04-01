
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    title: "Comece Agora",
    description: "Crie sua conta gratuita e configure seu perfil de professor ou aluno.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    position: "left"
  },
  {
    title: "Crie ou Participe",
    description: "Professores: crie turmas e exercícios. Alunos: junte-se às turmas com código de acesso.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    position: "right"
  },
  {
    title: "Pratique e Avalie",
    description: "Codifique soluções para problemas e receba feedback instantâneo sobre o desempenho.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    position: "left"
  }
];

const TimelineStep = ({ step, index }: any) => {
  const stepRef = useRef(null);
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
  
  return (
    <div 
      ref={stepRef}
      className={`flex flex-col md:flex-row items-center mb-16 md:mb-32 ${
        step.position === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text content */}
      <motion.div 
        className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left px-6"
        style={{ opacity, x }}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-uni-dark">{step.title}</h3>
        <p className="text-lg text-uni-gray">{step.description}</p>
      </motion.div>
      
      {/* Image */}
      <motion.div 
        className="md:w-1/2 px-6"
        style={{ opacity, x: useTransform(x, value => value * -1) }}
      >
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img 
            src={step.image} 
            alt={step.title} 
            className="w-full h-auto"
          />
        </div>
      </motion.div>
    </div>
  );
};

const HowToUseSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  return (
    <section id="how-to-use" className="bg-white py-24" ref={sectionRef}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-uni-dark">
            Como Utilizar o UniAlgo
          </h2>
        </motion.div>
        
        <div className="relative">
          {/* Zigzag timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 hidden md:block">
            <svg 
              className="h-full" 
              width="50" 
              preserveAspectRatio="none"
              viewBox="0 0 50 1000"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M25 0L25 250L50 500L25 750L25 1000" 
                stroke="#3B82F6" 
                strokeWidth="2" 
                strokeDasharray="10 5"
                pathLength="1"
                strokeDashoffset="0"
                className="transition-all duration-300"
                style={{ 
                  strokeDashoffset: `calc(1 - ${lineHeight.get()})`,
                  pathLength: 1 
                }}
              />
            </svg>
          </div>
          
          {/* Timeline steps */}
          <div className="relative z-10">
            {steps.map((step, index) => (
              <TimelineStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
