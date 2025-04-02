import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion, useScroll, useTransform } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const { scrollY } = useScroll();
  
  // Transformações com base no scroll
  const headerWidth = useTransform(scrollY, [0, 100], ['100%', '75%']);
  const headerPaddingTop = useTransform(scrollY, [0, 100], ['8px', '16px']);
  const headerPaddingX = useTransform(scrollY, [0, 100], ['0px', '16px']);
  const headerBlur = useTransform(scrollY, [0, 100], ['0px', '16px']);
  const headerBorderRadius = useTransform(scrollY, [0, 100], ['0.5rem', '1rem']);
  const textOpacity = useTransform(scrollY, [0, 50], [1, 0]);
  const navGap = useTransform(scrollY, [0, 100], ['2rem', '1.5rem']);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 w-full z-50 flex justify-center pt-2 md:pt-0 transition-all duration-300">
      {/* Container externo com padding dinâmico */}
      <motion.div 
        className="w-full px-4 flex justify-center"
        style={{ 
          paddingTop: isMobile ? '8px' : headerPaddingTop,
          paddingLeft: isMobile ? '0px' : headerPaddingX,
          paddingRight: isMobile ? '0px' : headerPaddingX
        }}
      >
        {/* Nav com efeito glass */}
        <motion.nav 
          className={`relative w-full rounded-2xl border md:transition-all md:duration-300 ${
            scrolled ? 'bg-black/40 backdrop-blur-xl border-white/10 text-white' : 'bg-white border-transparent text-uni-dark'
          }`}
          style={{
            width: isMobile ? '100%' : headerWidth,
            borderRadius: isMobile ? '0' : headerBorderRadius
          }}
        >
          <div className="h-16 flex items-center justify-between px-6">
            {/* Logo */}
            <a className={`transition-colors flex items-center gap-2 shrink-0 ${scrolled ? 'text-white hover:text-white/80' : 'text-uni-dark hover:text-uni-darkBlue'}`} href="/">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src="/logo.png" alt="UniAlgo" className="w-full h-full object-contain rounded-lg" />
              </div>
              <motion.span 
                className="text-lg font-semibold transition-opacity duration-300 md:block hidden"
                style={{ 
                  opacity: isMobile ? 1 : textOpacity
                }}
              >
                UniAlgo
              </motion.span>
            </a>
            
            {/* Navigation Center */}
            <div className="flex-1 flex items-center justify-center">
              <motion.div 
                className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2"
                style={{ 
                  justifyContent: 'center'
                }}
              >
                <motion.div 
                  className="hidden md:flex items-center"
                  style={{ gap: navGap }}
                >
                  <a href="#features" className={`transition-colors text-sm ${scrolled ? 'text-white/80 hover:text-white' : 'text-uni-dark hover:text-uni-blue'}`}>
                    Features
                  </a>
                  <a href="#how-to-use" className={`transition-colors text-sm ${scrolled ? 'text-white/80 hover:text-white' : 'text-uni-dark hover:text-uni-blue'}`}>
                    How to Use
                  </a>
                  <a href="#pricing" className={`transition-colors text-sm ${scrolled ? 'text-white/80 hover:text-white' : 'text-uni-dark hover:text-uni-blue'}`}>
                    Pricing
                  </a>
                  <a href="#faq" className={`transition-colors text-sm ${scrolled ? 'text-white/80 hover:text-white' : 'text-uni-dark hover:text-uni-blue'}`}>
                    FAQ
                  </a>
                </motion.div>
              </motion.div>
            </div>
            
            {/* CTA Buttons */}
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
            
            {/* Mobile menu button */}
            <button className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'hover:bg-white/10 text-white' : 'hover:bg-uni-blue/5 text-uni-dark'
            }`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </motion.nav>
      </motion.div>
    </div>
  );
};

export default Header;