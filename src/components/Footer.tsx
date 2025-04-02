import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Links de navegação agrupados por categorias
  const footerLinks = [
    {
      title: "Plataforma",
      links: [
        { label: "Features", href: "#features" },
        { label: "Preços", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
        { label: "Roadmap", href: "#" },
        { label: "Atualizações", href: "#" }
      ]
    },
    {
      title: "Recursos",
      links: [
        { label: "Documentação", href: "#" },
        { label: "Guias", href: "#" },
        { label: "API", href: "#" },
        { label: "Comunidade", href: "#" },
        { label: "Templates", href: "#" }
      ]
    },
    {
      title: "Empresa",
      links: [
        { label: "Sobre", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Carreiras", href: "#" },
        { label: "Contato", href: "#" },
        { label: "Parceiros", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Termos", href: "#" },
        { label: "Privacidade", href: "#" },
        { label: "Cookies", href: "#" },
        { label: "Licenças", href: "#" },
        { label: "Segurança", href: "#" }
      ]
    }
  ];
  
  // Redes sociais
  const socialLinks = [
    {
      name: "Twitter",
      target: "_blank",
      href: "https://twitter.com/unialgo",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      target: "_blank",
      href: "https://linkedin.com/company/unialgo",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    {
      name: "GitHub",
      target: "_blank",
      href: "https://github.com/Unialgo",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      )
    },
    {
      name: "Instagram",
      target: "_blank",
      href: "https://instagram.com/unialgo",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      name: "YouTube",
      target: "_blank",
      href: "https://youtube.com/@unialgo",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      )
    }
  ];
  
  // Animação para os links
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
      }
    },
  };

  return (
    <footer className="bg-[#0F172A] text-white relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-indigo-500/5 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Superior - Newsletter e Call to Action */}
        <div className="pt-16 pb-8 border-b border-white/10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Fique por dentro das novidades</h3>
              <p className="text-white/60 mb-4">
                Receba dicas, tutoriais e atualizações sobre o UniAlgo diretamente em seu email.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Seu email" 
                  className="bg-white/10 rounded-lg px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-uni-blue"
                  required
                />
                <button 
                  type="submit"
                  className="bg-uni-blue hover:bg-uni-darkBlue text-white font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  Inscrever-se
                </button>
              </form>
            </div>
            
            <div className="flex flex-col md:items-end">
              <h3 className="text-xl font-bold mb-3">Precisa de ajuda?</h3>
              <p className="text-white/60 mb-4">
                Nossa equipe de suporte está pronta para ajudar com qualquer dúvida.
              </p>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/15 text-white px-6 py-2 rounded-lg inline-flex items-center gap-2 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>Fale com o suporte</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Links de navegação */}
        <div className="py-12 border-b border-white/10">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Logo e informações da empresa */}
            <div className="md:col-span-2">
              <a href="/" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img src="/logo.png" alt="UniAlgo" className="w-full h-full object-contain rounded-lg" />
                </div>
                <span className="text-xl font-bold">UniAlgo</span>
              </a>
              
              <p className="text-white/60 mb-6 max-w-sm">
                Plataforma educacional avançada para ensino e avaliação de algoritmos e programação com feedback em tempo real.
              </p>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a 
                    key={social.name}
                    href={social.href}
                    target={social.target}
                    rel={social.target === "_blank" ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-uni-blue transition-colors"
                    aria-label={`Visite nosso ${social.name}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* Colunas de links */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="md:col-span-3 grid sm:grid-cols-2 md:grid-cols-4 gap-8"
            >
              {footerLinks.map((group, groupIndex) => (
                <div key={group.title}>
                  <h4 className="font-semibold text-white mb-4">{group.title}</h4>
                  <motion.ul variants={containerVariants} className="space-y-2">
                    {group.links.map((link, linkIndex) => (
                      <motion.li key={link.label} variants={itemVariants}>
                        <a 
                          href={link.href} 
                          className="text-white/60 hover:text-white hover:underline transition-colors text-sm"
                        >
                          {link.label}
                        </a>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Rodapé inferior - Copyright e links legais */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between text-sm">
          <div className="text-white/40 mb-4 md:mb-0">
            © {currentYear} UniAlgo. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Termos de Serviço
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Preferências de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;