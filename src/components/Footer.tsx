
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1E293B] text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="mb-6 md:mb-0 flex items-center">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="/logo.png" alt="UniAlgo" className="w-full h-full object-contain" />
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
