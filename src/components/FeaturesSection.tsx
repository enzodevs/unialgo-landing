import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Shield, Folder, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: "Feedback Instantâneo",
    description: "Execute e avalie código em tempo real, eliminando a espera por correções manuais e acelerando o ciclo de aprendizado.",
    image: "https://placehold.co/800x600",
    color: "#3B82F6" // Blue
  },
  {
    icon: Shield,
    title: "Ambientes Isolados",
    description: "Códigos executados em containers isolados, garantindo segurança e consistência para todas as submissões dos alunos.",
    image: "https://placehold.co/800x600",
    color: "#10B981" // Green
  },
  {
    icon: Folder,
    title: "Listas e Turmas",
    description: "Crie e gerencie listas de exercícios e turmas facilmente, com interface intuitiva de arrastar e soltar para organizar conteúdo.",
    image: "https://placehold.co/800x600",
    color: "#8B5CF6" // Purple
  },
  {
    icon: Lightbulb,
    title: "Foco no Aprendizado",
    description: "Interface projetada para manter os alunos engajados e facilitar o acompanhamento do progresso individual por parte dos professores.",
    image: "https://placehold.co/800x600",
    color: "#F59E0B" // Amber
  }
];

const FeatureCard = ({ icon: Icon, title, description, image, color, index }: any) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.6, 
            delay: 0.1 * index,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
      className="group relative bg-white border border-uni-lightGray rounded-xl p-6 overflow-hidden hover:shadow-xl transition-all duration-500"
      whileHover={{ y: -5 }}
    >
      {/* Gradient Border Animation */}
      <motion.div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 z-0 transition-opacity duration-500"
        style={{ 
          background: `linear-gradient(135deg, ${color}20 0%, ${color}50 100%)`,
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />

      {/* Subtle background pulse */}
      <motion.div
        className="absolute inset-0 bg-white z-0"
        style={{ 
          background: `radial-gradient(circle at center, ${color}10 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Image Background (subtle) */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-xl" />
      </div>

      <div className="relative z-10">
        <motion.div 
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300"
          style={{ backgroundColor: `${color}20` }}
          whileHover={{ 
            rotate: [0, -5, 5, -5, 0],
            transition: { duration: 0.5 }
          }}
        >
          <Icon style={{ color: color }} className="w-6 h-6" />
        </motion.div>
        
        <h3 className="text-xl font-bold mb-3 text-uni-dark group-hover:text-uni-blue transition-colors duration-300">{title}</h3>
        
        <p className="text-uni-gray text-base">{description}</p>
        
        <motion.div 
          className="mt-4 flex items-center text-sm font-medium"
          style={{ color }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <span>Saiba mais</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="ml-1"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="features" ref={sectionRef} className="relative bg-uni-light py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg width="100%" height="100%" className="absolute top-0 left-0 text-blue-500 opacity-5">
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 10 L40 10 M10 0 L10 40" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          
          <circle cx="20%" cy="30%" r="100" fill="#3B82F6" fillOpacity="0.05" />
          <circle cx="80%" cy="70%" r="150" fill="#8B5CF6" fillOpacity="0.05" />
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block text-uni-blue font-medium mb-2 text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            RECURSOS EXCLUSIVOS
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-uni-dark">
            Por que escolher o UniAlgo?
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
            Nossa plataforma oferece ferramentas avançadas para transformar
            o ensino e aprendizado de algoritmos e programação.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="#how-to-use"
            className="inline-flex items-center gap-2 text-uni-blue hover:text-uni-darkBlue transition-colors duration-300 font-medium"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span>Conheça mais recursos</span>
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
            >
              <path d="m12 5 7 7-7 7"></path>
              <path d="M5 12h14"></path>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;