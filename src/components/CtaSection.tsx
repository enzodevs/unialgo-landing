import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CtaSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="bg-gradient-to-r from-uni-darkBlue to-blue-700 py-20 relative overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Círculos flutuantes */}
        <div className="absolute top-40 left-20 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute top-20 right-40 w-72 h-72 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
        
        {/* Linhas de código */}
        <div className="absolute top-10 left-10 text-white/5 text-xl font-mono">
          const future = await learning.transform();
        </div>
        <div className="absolute bottom-10 right-10 text-white/5 text-xl font-mono">
          if (student.potential === undefined) potential = Infinity;
        </div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block text-blue-200 font-medium mb-2 text-sm"
          >
            COMECE SUA JORNADA
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3"
          >
            Pronto para transformar o ensino de algoritmos?
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-blue-100 text-lg mx-auto mb-8 max-w-2xl"
          >
            Junte-se a centenas de professores e milhares de alunos que já estão revolucionando 
            o aprendizado de programação com o UniAlgo.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a 
              href="#" 
              className="bg-white text-uni-darkBlue hover:bg-blue-50 px-6 py-3 rounded-lg transition-all duration-300 font-medium text-base sm:text-lg inline-block min-w-[200px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Começar gratuitamente
            </motion.a>
            
            <motion.a 
              href="#demo" 
              className="text-white border border-white/30 hover:bg-white/10 px-6 py-3 rounded-lg transition-all duration-300 font-medium text-base sm:text-lg inline-block min-w-[200px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Agendar demonstração
            </motion.a>
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-blue-200 text-sm"
          >
            Não é necessário cartão de crédito • Configuração em minutos • Suporte técnico gratuito
          </motion.p>
          
          {/* Métricas de usuários */}
          <motion.div 
            variants={itemVariants}
            className="pt-8 border-t border-white/10 flex flex-wrap justify-center gap-x-12 gap-y-4"
          >
            <div className="text-center">
              <motion.div 
                className="text-3xl font-bold text-white mb-1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                50+
              </motion.div>
              <p className="text-blue-200 text-sm">Universidades</p>
            </div>
            
            <div className="text-center">
              <motion.div 
                className="text-3xl font-bold text-white mb-1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                1000+
              </motion.div>
              <p className="text-blue-200 text-sm">Professores</p>
            </div>
            
            <div className="text-center">
              <motion.div 
                className="text-3xl font-bold text-white mb-1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                25.000+
              </motion.div>
              <p className="text-blue-200 text-sm">Estudantes</p>
            </div>
            
            <div className="text-center">
              <motion.div 
                className="text-3xl font-bold text-white mb-1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                2M+
              </motion.div>
              <p className="text-blue-200 text-sm">Exercícios Resolvidos</p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Logotipos de clientes/parceiros */}
        <motion.div 
          className="mt-16 pt-6 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-center text-blue-200 text-sm mb-8">Confiado por instituições de ensino em todo o Brasil</p>
          
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
            {/* Esta seria a área para os logos de universidades parceiras */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-8 w-32 rounded-md bg-white/20 flex items-center justify-center">
                <span className="text-white/80 text-xs font-bold tracking-wide">UNIVERSIDADE {i + 1}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Elemento de decoração para transição suave para a próxima seção */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent"></div>
    </section>
  );
};

export default CtaSection;