import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const DemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Demo features to highlight
  const demoFeatures = [
    { id: 1, title: "Interface Intuitiva", description: "Design clean e organizado para fácil navegação" },
    { id: 2, title: "Feedback em Tempo Real", description: "Resultados e análises instantâneos para cada submissão" },
    { id: 3, title: "Ambientes Isolados", description: "Execução segura de código em containers isolados" }
  ];

  const [activeFeature, setActiveFeature] = useState(1);

  const handlePlayClick = () => {
    setIsPlaying(true);
    setLoaded(true);
    // Poderia iniciar um vídeo real aqui
  };

  return (
    <section id="demo" ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-uni-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute top-0 opacity-5">
          <defs>
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#3B82F6" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-uni-blue font-medium mb-2 inline-block text-sm">VEJA EM AÇÃO</span>
          <h2 className="text-3xl md:text-4xl font-bold text-uni-dark mb-4">
            Experimente o UniAlgo
          </h2>
          <p className="text-uni-gray text-lg max-w-2xl mx-auto">
            Veja como nossa plataforma transforma o ensino e aprendizado de algoritmos com uma experiência interativa e eficiente.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Demo Viewer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200"
          >
            {/* Video frame with gradient overlay */}
            <div className="aspect-video bg-white rounded-xl overflow-hidden relative">
              <div className={`absolute inset-0 bg-gradient-to-br from-uni-blue/20 to-transparent mix-blend-overlay transition-opacity duration-500 ${isPlaying ? 'opacity-30' : 'opacity-60'}`}></div>
              
              {/* Code editor UI mockup, visible when video isn't playing */}
              {!isPlaying && (
                <div className="absolute inset-0 flex flex-col">
                  <div className="h-12 bg-gray-900 flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="mx-auto text-gray-400 text-sm font-mono">UniAlgo IDE - main.java</div>
                  </div>
                  <div className="flex-1 flex">
                    <div className="w-1/6 bg-gray-800 border-r border-gray-700 p-2">
                      <div className="text-gray-400 text-xs font-mono">EXPLORER</div>
                      <div className="mt-2 text-gray-300 text-xs font-mono">
                        <div className="flex items-center">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                          </svg>
                          <span className="ml-1">src</span>
                        </div>
                        <div className="flex items-center ml-3 mt-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          </svg>
                          <span className="ml-1">Main.java</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 bg-gray-900 p-4 font-mono text-sm">
                      <div className="flex text-gray-400">
                        <div className="mr-4 text-right w-6 select-none">
                          {Array.from({ length: 10 }).map((_, i) => (
                            <div key={i} className="leading-loose">{i + 1}</div>
                          ))}
                        </div>
                        <div className="text-green-300 leading-loose">
                          <div>public class Main {"{"}</div>
                          <div>  public static void main(String[] args) {"{"}</div>
                          <div>    System.out.println("Hello, UniAlgo!");</div>
                          <div className="text-blue-300">    // Implementação do algoritmo aqui</div>
                          <div>    int[] array = {"{"}1, 5, 3, 9, 2, 7{"}"}</div>
                          <div>    sort(array);</div>
                          <div>    printArray(array);</div>
                          <div>  {"}"}</div>
                          <div>  {"}"}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Placeholder image or video */}
              {!loaded && !isPlaying && (
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                  alt="UniAlgo Demo" 
                  className="w-full h-full object-cover opacity-40"
                />
              )}

              {/* Play button overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-20 h-20 rounded-full bg-uni-blue/90 flex items-center justify-center cursor-pointer hover:bg-uni-blue transition-colors shadow-lg"
                    onClick={handlePlayClick}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="32" 
                      height="32" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-white ml-1"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </motion.div>
                </div>
              )}

              {/* Video player (would be an actual video in production) */}
              {isPlaying && (
                <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                  <div className="text-white text-lg">
                    Vídeo em reprodução...
                    <div className="mt-4 h-1.5 w-full max-w-md bg-gray-700 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-uni-blue"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 30, ease: "linear" }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Feature indicator - animated pulse on the interface */}
              {!isPlaying && (
                <motion.div
                  className={`absolute w-12 h-12 rounded-full bg-uni-blue/30 flex items-center justify-center`}
                  style={{ 
                    top: activeFeature === 1 ? '20%' : activeFeature === 2 ? '50%' : '70%',
                    left: activeFeature === 1 ? '80%' : activeFeature === 2 ? '30%' : '60%' 
                  }}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 0.3, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                >
                  <div className="w-4 h-4 rounded-full bg-uni-blue"></div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Feature highlights below the demo */}
          <motion.div 
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {demoFeatures.map((feature) => (
              <motion.div
                key={feature.id}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${activeFeature === feature.id ? 'bg-white shadow-lg' : 'bg-transparent hover:bg-white/50'}`}
                onClick={() => setActiveFeature(feature.id)}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-2">
                  <div className={`w-8 h-8 rounded-full ${activeFeature === feature.id ? 'bg-uni-blue' : 'bg-gray-200'} flex items-center justify-center text-white font-bold`}>
                    {feature.id}
                  </div>
                  <h3 className={`ml-3 font-semibold ${activeFeature === feature.id ? 'text-uni-blue' : 'text-uni-dark'}`}>
                    {feature.title}
                  </h3>
                </div>
                <p className="text-uni-gray pl-11">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;