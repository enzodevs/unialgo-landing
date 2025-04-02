import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { scrollY } = useScroll();
  
  // Transformações com base no scroll - mantidas para desktop
  const headerWidth = useTransform(scrollY, [0, 100], ['100%', '75%']);
  const headerPaddingTop = useTransform(scrollY, [0, 100], ['8px', '16px']);
  const headerPaddingX = useTransform(scrollY, [0, 100], ['0px', '16px']);
  const headerBorderRadius = useTransform(scrollY, [0, 100], ['0.5rem', '1rem']);
  const textOpacity = useTransform(scrollY, [0, 50], [1, 0]);
  const navGap = useTransform(scrollY, [0, 100], ['2rem', '1.5rem']);

  // Transformações específicas para mobile 
  const mobileHeaderOpacity = useTransform(scrollY, [0, 20], [0.8, 1]);
  const mobileHeaderBgColor = useTransform(
    scrollY, 
    [0, 50], 
    ["rgba(255, 255, 255, 0.7)", "rgba(0, 0, 0, 0.7)"]
  );
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar o menu mobile quando a tela for redimensionada para desktop
  useEffect(() => {
    if (!isMobile && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [isMobile, mobileMenuOpen]);

  // Prevenir scroll quando o menu mobile está aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Toggle do menu mobile
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Header Principal - Oculto quando o menu mobile está aberto em dispositivos móveis */}
      <motion.div 
        className="fixed left-0 top-0 w-full z-50 flex justify-center transition-all duration-300"
        animate={{
          opacity: (isMobile && mobileMenuOpen) ? 0 : 1,
          pointerEvents: (isMobile && mobileMenuOpen) ? 'none' : 'auto'
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Container adaptado para mobile */}
        <motion.div 
          className="w-full flex justify-center"
          style={{ 
            paddingTop: isMobile ? '4px' : headerPaddingTop,
            paddingLeft: isMobile ? '8px' : headerPaddingX,
            paddingRight: isMobile ? '8px' : headerPaddingX
          }}
        >
          {/* Nav com efeito glass otimizado para mobile */}
          <motion.nav 
            className={`relative w-full transition-all duration-300 border ${
              scrolled 
                ? 'bg-black/40 backdrop-blur-xl border-white/10 text-white' 
                : 'bg-white/90 backdrop-blur-sm border-transparent text-uni-dark'
            }`}
            style={{
              width: isMobile ? '100%' : headerWidth,
              borderRadius: isMobile ? '0.75rem' : headerBorderRadius,
              opacity: isMobile ? mobileHeaderOpacity : 1,
              backgroundColor: isMobile ? mobileHeaderBgColor : undefined,
            }}
          >
            <div className={`flex items-center justify-between ${isMobile ? 'h-14 px-4' : 'h-16 px-6'}`}>
              {/* Logo otimizado para mobile */}
              <a 
                className={`transition-colors flex items-center gap-2 shrink-0 ${
                  scrolled ? 'text-white hover:text-white/80' : 'text-uni-dark hover:text-uni-darkBlue'
                }`} 
                href="/"
              >
                <div className={`flex items-center justify-center ${isMobile ? 'w-7 h-7' : 'w-8 h-8'}`}>
                  <img src="/logo.png" alt="UniAlgo" className="w-full h-full object-contain rounded-lg" />
                </div>
                <motion.span 
                  className={`font-semibold transition-opacity duration-300 ${isMobile ? 'text-base' : 'text-lg'}`}
                  style={{ 
                    opacity: isMobile ? (scrolled ? 1 : 0.9) : textOpacity
                  }}
                >
                  UniAlgo
                </motion.span>
              </a>
            
              {/* Navigation Center - Desktop Only */}
              <div className="flex-1 flex items-center justify-center">
                <motion.div 
                  className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2"
                  style={{ justifyContent: 'center' }}
                >
                  <motion.div 
                    className="hidden md:flex items-center"
                    style={{ gap: navGap }}
                  >
                    <a href="#features" className={`transition-colors text-sm ${scrolled ? 'text-white/80 hover:text-white' : 'text-uni-dark hover:text-uni-blue'}`}>
                      Recursos
                    </a>
                    <a href="#how-to-use" className={`transition-colors text-sm ${scrolled ? 'text-white/80 hover:text-white' : 'text-uni-dark hover:text-uni-blue'}`}>
                      Como usar
                    </a>
                    <a href="#pricing" className={`transition-colors text-sm ${scrolled ? 'text-white/80 hover:text-white' : 'text-uni-dark hover:text-uni-blue'}`}>
                      Preços
                    </a>
                    <a href="#faq" className={`transition-colors text-sm ${scrolled ? 'text-white/80 hover:text-white' : 'text-uni-dark hover:text-uni-blue'}`}>
                      FAQ
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            
              {/* CTA Buttons - Desktop Only */}
              <div className="hidden md:flex items-center gap-4 shrink-0">
                <a href="#" className={`transition-colors text-sm ${scrolled ? 'text-white/80 hover:text-white' : 'text-uni-dark hover:text-uni-blue'}`}>
                  Log in
                </a>
                <a 
                  href="#" 
                  className={`px-4 py-2 rounded-lg transition-colors font-medium text-sm ${
                    scrolled ? 'bg-white text-black hover:bg-white/90' : 'bg-uni-blue text-white hover:bg-uni-darkBlue'
                  }`}
                >
                  Start for free
                </a>
              </div>
            
              {/* Mobile menu button - Melhorado */}
              <button 
                onClick={toggleMobileMenu}
                className={`md:hidden p-3 rounded-lg transition-colors ${
                  scrolled ? 'hover:bg-white/10 text-white active:bg-white/20' : 'hover:bg-uni-blue/10 text-uni-dark active:bg-uni-blue/20'
                }`}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" x2="20" y1="12" y2="12"></line>
                    <line x1="4" x2="20" y1="6" y2="6"></line>
                    <line x1="4" x2="20" y1="18" y2="18"></line>
                  </svg>
                )}
              </button>
            </div>
          </motion.nav>
        </motion.div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && isMobile && (
          <motion.div 
            className="fixed inset-0 z-50 flex flex-col bg-white dark:bg-black"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="h-14 px-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
              <a className="flex items-center gap-2" href="/">
                <div className="w-7 h-7 flex items-center justify-center">
                  <img src="/logo.png" alt="UniAlgo" className="w-full h-full object-contain rounded-lg" />
                </div>
                <span className="text-base font-semibold">UniAlgo</span>
              </a>
              <button 
                onClick={toggleMobileMenu}
                className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700"
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-6 px-4">
              <nav className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Navegação
                  </h3>
                  <motion.div 
                    className="flex flex-col space-y-3"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.05
                        }
                      }
                    }}
                  >
                    {[
                      { href: "#features", label: "Recursos" },
                      { href: "#how-to-use", label: "Como usar" },
                      { href: "#pricing", label: "Preços" },
                      { href: "#faq", label: "FAQ" }
                    ].map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.href}
                        className="py-2 px-3 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700"
                        onClick={toggleMobileMenu}
                        variants={{
                          hidden: { opacity: 0, x: -10 },
                          visible: { opacity: 1, x: 0 }
                        }}
                      >
                        {item.label}
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Conta
                  </h3>
                  <motion.div 
                    className="flex flex-col space-y-3"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.1
                        }
                      }
                    }}
                  >
                    <motion.a
                      href="#"
                      className="py-2 px-3 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={toggleMobileMenu}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      Login
                    </motion.a>
                    <motion.a
                      href="#"
                      className="py-2 px-3 rounded-lg bg-uni-blue text-white hover:bg-uni-darkBlue flex items-center justify-center"
                      onClick={toggleMobileMenu}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      <span>Start for free</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </motion.a>
                  </motion.div>
                </div>
              </nav>
            </div>
            
            <div className="border-t border-gray-100 dark:border-gray-800 py-4 px-4">
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300">Terms</a>
                <span>•</span>
                <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300">Privacy</a>
                <span>•</span>
                <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300">Contact</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;