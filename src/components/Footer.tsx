
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-uni-dark text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="mb-6 md:mb-0 flex items-center">
            <div className="bg-uni-blue rounded-md w-8 h-8 flex items-center justify-center text-white font-bold text-sm">
              UN
            </div>
            <span className="ml-2 text-lg font-bold">UniAlgo</span>
          </div>
          
          {/* Links */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
              Termos
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
              Privacidade
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
              Contato
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-white/60 text-sm">
            © 2025 UniAlgo. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
