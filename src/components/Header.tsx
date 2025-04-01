
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion, useScroll, useTransform } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const { scrollY } = useScroll();
  
  const headerOpacity = useTransform(scrollY, [0, 50], [0, 1]);
  const headerScale = useTransform(scrollY, [0, 50], [0.95, 1]);
  const headerBgOpacity = useTransform(scrollY, [0, 50], [0, 1]);
  const headerBorderRadius = useTransform(scrollY, [0, 50], ["0px", "1rem"]);
  const headerMargin = useTransform(scrollY, [0, 50], ["0px", "0.5rem"]);
  const logoScale = useTransform(scrollY, [0, 50], [1, 0.8]);
  const textOpacity = useTransform(scrollY, [0, 50], [1, 0]);
  
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
    <header className="fixed top-0 left-0 right-0 z-50 px-0 md:px-4">
      {/* Header Container */}
      <motion.div 
        className={`mx-auto max-w-7xl transition-all duration-300 flex items-center justify-between`}
        style={{ 
          backgroundColor: isMobile ? "white" : scrolled ? "white" : "transparent",
          boxShadow: scrolled || isMobile ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" : "none",
          backdropFilter: scrolled || isMobile ? "blur(8px)" : "none",
          borderRadius: isMobile ? "0" : headerBorderRadius,
          marginTop: headerMargin,
          padding: isMobile ? "1rem" : scrolled ? "1rem 1.5rem" : "1.5rem",
        }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src="/logo.png" alt="UniAlgo" className="w-full h-full object-contain" />
          </div>
          <motion.div 
            className="ml-2 text-xl font-bold text-uni-dark"
            style={{ 
              opacity: isMobile ? 1 : textOpacity,
              display: scrolled && !isMobile ? 'none' : 'block' 
            }}
          >
            UniAlgo
          </motion.div>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-uni-dark hover:text-uni-blue transition-colors">
            Features
          </a>
          <a href="#how-to-use" className="text-uni-dark hover:text-uni-blue transition-colors">
            How to Use
          </a>
          <a href="#pricing" className="text-uni-dark hover:text-uni-blue transition-colors">
            Pricing
          </a>
          <a href="#faq" className="text-uni-dark hover:text-uni-blue transition-colors">
            FAQ
          </a>
        </nav>
        
        {/* CTA Buttons */}
        <div className="flex items-center space-x-4">
          <a href="#" className="hidden md:block text-uni-dark hover:text-uni-blue transition-colors">
            Log in
          </a>
          <a 
            href="#" 
            className="bg-uni-blue text-white hover:bg-uni-darkBlue px-4 py-2 rounded-lg transition-colors font-medium"
          >
            Start for free
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
