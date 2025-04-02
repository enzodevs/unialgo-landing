import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  // Cursor blink animation for code-like effect
  const cursorVariants = {
    blink: {
      opacity: [0, 1, 0],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "linear"
      }
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements (abstract code-like patterns) - Reposicionados */}
      <div className="absolute inset-0 -z-10 opacity-5">
        {/* Posicionados de forma responsiva usando porcentagens */}
        <div className="absolute top-[10%] left-[5%] text-6xl font-mono hidden md:block">{'{'}</div>
        <div className="absolute top-[20%] left-[10%] text-4xl font-mono hidden lg:block">{'const future = () => {'}</div>
        <div className="absolute top-[30%] right-[5%] text-5xl font-mono hidden md:block">{'}'}</div>
        <div className="absolute bottom-[10%] left-[5%] text-6xl font-mono hidden md:block">{'</'}</div>
        <div className="absolute bottom-[20%] right-[5%] text-4xl font-mono hidden lg:block">{'function('}</div>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative"
      >
        {/* Subtle floating shape behind text */}
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 -z-10 blur-3xl"
          whileInView={{
            y: [0, -10, 0]
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse" as const
          }}
        ></motion.div>

        <motion.div
          className="relative"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 }
          }}
        >
          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-2 relative inline-block"
            variants={{
              hidden: { y: 50, opacity: 0 },
              show: { 
                y: 0, 
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }
              }
            }}
          >
            <span className="text-uni-black relative">
              Debug
            </span>
          </motion.h1>

          <motion.span 
            className="text-xl md:text-2xl lg:text-3xl font-medium block mb-2"
            variants={{
              hidden: { y: 20, opacity: 0 },
              show: { 
                y: 0, 
                opacity: 1,
                transition: {
                  delay: 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }
              }
            }}
          >
            your
          </motion.span>

          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-uni-blue mb-8 relative"
            variants={{
              hidden: { y: 50, opacity: 0 },
              show: { 
                y: 0, 
                opacity: 1,
                transition: {
                  delay: 0.4,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }
              }
            }}
          >
            <span className="relative inline-block">
              Potential
              <motion.span 
                className="absolute -right-6 top-1/2 h-6 w-1 bg-uni-blue"
                variants={cursorVariants}
                animate="blink"
              ></motion.span>
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto"
            variants={{
              hidden: { y: 20, opacity: 0 },
              show: { 
                y: 0, 
                opacity: 1, 
                transition: {
                  delay: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }
              }
            }}
          >
            Transforme o aprendizado de algoritmos com feedback em tempo real e ambientes 
            seguros para execução de código. A plataforma que revoluciona o ensino de programação.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={{
              hidden: { y: 20, opacity: 0 },
              show: { 
                y: 0, 
                opacity: 1,
                transition: {
                  delay: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }
              }
            }}
          >
            <motion.a 
              href="#" 
              className="btn-primary inline-block text-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10">Comece gratuitamente</span>
              <motion.span 
                className="absolute inset-0 bg-uni-darkBlue -z-10 rounded-lg"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </motion.a>
            
            <motion.a 
              href="#demo" 
              className="text-uni-blue hover:text-uni-darkBlue font-medium flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
              whileHover={{ 
                x: 5,
                transition: { duration: 0.2 }
              }}
            >
              <span>Ver demonstração</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </motion.a>
          </motion.div>
          
          <motion.div
            className="mt-6 text-sm text-uni-gray flex justify-center items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <span>Utilizado por</span>
            <div className="flex items-center space-x-4">
              <span className="font-medium">+50</span>
              <span>universidades</span>
              <span className="font-medium">+2000</span>
              <span>estudantes</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Code floating elements - Repositioned for better responsiveness */}
      <motion.div 
        className="absolute bottom-2 text-xs text-gray-500 font-mono opacity-40 hidden sm:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        {`function learnFaster() { return "UniAlgo"; }`}<br />

      </motion.div>
      
      <motion.div 
        className="absolute top-20 right-10 text-xs text-gray-500 font-mono opacity-40 hidden sm:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        {`import { success } from "unialgo";`}
      </motion.div>
    </section>
  );
};

export default HeroSection;