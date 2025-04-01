
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, Folder, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: "Feedback Instantâneo",
    description: "Execute e avalie código em tempo real, eliminando a espera por correções manuais e acelerando o ciclo de aprendizado.",
    image: "/feedback.jpg"
  },
  {
    icon: Shield,
    title: "Ambientes Isolados",
    description: "Códigos executados em containers isolados, garantindo segurança e consistência para todas as submissões dos alunos.",
    image: "/security.jpg"
  },
  {
    icon: Folder,
    title: "Listas e Turmas",
    description: "Crie e gerencie listas de exercícios e turmas facilmente, com interface intuitiva de arrastar e soltar para organizar conteúdo.",
    image: "/organize.jpg"
  },
  {
    icon: Lightbulb,
    title: "Foco no Aprendizado",
    description: "Interface projetada para manter os alunos engajados e facilitar o acompanhamento do progresso individual por parte dos professores.",
    image: "/learning.jpg"
  }
];

const FeatureCard = ({ icon: Icon, title, description, image, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
      className="group relative bg-white border border-uni-lightGray rounded-xl p-6 overflow-hidden card-hover"
    >
      {/* Border Animation */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-300 group-hover:border-uni-blue opacity-0 group-hover:opacity-100"></div>
      
      {/* Image Background (subtle) */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-xl" />
      </div>
      
      <div className="relative z-10">
        <div className="w-12 h-12 bg-uni-blue/10 rounded-lg flex items-center justify-center mb-4">
          <Icon className="text-uni-blue w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-uni-dark">{title}</h3>
        <p className="text-uni-gray">{description}</p>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-uni-light py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-uni-dark">
            Por que escolher o UniAlgo?
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
