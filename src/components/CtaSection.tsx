
import React from 'react';
import { motion } from 'framer-motion';

const CtaSection = () => {
  return (
    <section className="bg-white py-12 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-xl md:text-2xl font-bold text-uni-dark mb-3">
            Pronto para transformar o ensino de algoritmos?
          </h2>
          <p className="text-base text-uni-gray mb-6">
            Junte-se a centenas de professores e alunos que já estão usando o UniAlgo.
          </p>
          <a 
            href="#" 
            className="bg-uni-blue text-white hover:bg-uni-darkBlue px-5 py-2 rounded-lg transition-colors font-medium text-sm inline-block"
          >
            Começar gratuitamente
          </a>
          <p className="mt-2 text-uni-gray text-xs">
            Não é necessário cartão de crédito
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
