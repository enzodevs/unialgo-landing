import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const DemoSection = () => {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Demo features to highlight
  const demoFeatures = [
    { id: 1, title: "Interface Intuitiva", description: "Design clean e organizado para fácil navegação" },
    { id: 2, title: "Feedback em Tempo Real", description: "Resultados e análises instantâneos para cada submissão" },
    { id: 3, title: "Ambientes Isolados", description: "Execução segura de código em containers isolados" }
  ];

  const [activeFeature, setActiveFeature] = useState(1);

  // Efeito para reproduzir o vídeo automaticamente quando estiver em visualização
  useEffect(() => {
    if (isInView && videoRef.current) {
      // Inicia a reprodução do vídeo quando a seção estiver visível
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
        // Algumas vezes o navegador pode bloquear o autoplay, especialmente em dispositivos móveis
        // Podemos adicionar um fallback com um botão de play se necessário
      });
    }
  }, [isInView]);

  // Efeito para reiniciar o vídeo quando terminar
  useEffect(() => {
    const video = videoRef.current;
    
    const handleEnded = () => {
      if (video) {
        // Pequeno atraso antes de reiniciar para uma transição mais suave
        setTimeout(() => {
          video.currentTime = 0;
          video.play().catch(e => console.log("Replay prevented:", e));
        }, 500);
      }
    };
    
    if (video) {
      video.addEventListener('ended', handleEnded);
    }
    
    return () => {
      if (video) {
        video.removeEventListener('ended', handleEnded);
      }
    };
  }, []);

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
              {/* Gradient overlay sobre o vídeo */}
              <div className="absolute inset-0 bg-gradient-to-br from-uni-blue/20 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
              
              {/* Vídeo em autoplay com loop */}
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                muted
                playsInline
                loop
                preload="auto"
                poster="/demo-poster.jpg" // Imagem de poster enquanto o vídeo carrega
                onLoadedData={() => setLoaded(true)}
              >
                <source src="/demo-video.mp4" type="video/mp4" />
                {/* Mensagem de fallback se o navegador não suportar o elemento video */}
                Seu navegador não suporta o elemento de vídeo.
              </video>

              {/* Fallback de conteúdo enquanto o vídeo não carrega */}
              {!loaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 bg-opacity-80">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-uni-blue mb-4"></div>
                  <p className="text-uni-dark">Carregando demonstração...</p>
                </div>
              )}

              {/* Feature indicator - animated pulse on the interface */}
              <motion.div
                className={`absolute w-12 h-12 rounded-full bg-uni-blue/30 flex items-center justify-center z-20 pointer-events-none`}
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