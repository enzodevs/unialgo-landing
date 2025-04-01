
import React from 'react';
import { motion } from 'framer-motion';

const CtaSection = () => {
  return (
    <section className="bg-gradient-to-r from-uni-blue to-uni-darkBlue py-20 relative overflow-hidden">
      {/* Abstract shapes in background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute top-40 left-20 w-20 h-20 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-1/3 w-32 h-32 rounded-full bg-white"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para transformar o ensino de algoritmos?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Junte-se a centenas de professores e alunos que já estão usando o UniAlgo.
          </p>
          <a 
            href="#" 
            className="bg-white text-uni-darkBlue hover:bg-uni-lightGray px-8 py-4 rounded-lg transition-colors font-bold text-lg inline-block"
          >
            Começar gratuitamente
          </a>
          <p className="mt-4 text-white/80 text-sm">
            Não é necessário cartão de crédito
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
