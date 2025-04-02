import React from 'react';
import { motion } from 'framer-motion';

/**
 * Componente para criar transições suaves entre seções
 * Pode ser usado como divisor entre duas seções para criar efeito de continuidade
 */
const SectionTransition = ({ 
  from = "white", 
  to = "bg-uni-light",
  mode = "wave",
  height = 120,
  className = "",
  inverted = false
}) => {
  // Baseado no modo, retorna o SVG path adequado
  const getPath = () => {
    if (mode === "wave") {
      return inverted 
        ? "M0,32 C320,0 480,64 720,32 C960,0 1120,64 1440,32 L1440,120 L0,120 Z"
        : "M0,0 L1440,0 L1440,88 C1120,120 960,56 720,88 C480,120 320,56 0,88 Z";
    }
    
    if (mode === "curve") {
      return inverted
        ? "M0,0 L1440,0 L1440,64 C960,120 480,120 0,64 Z"
        : "M0,56 C480,0 960,0 1440,56 L1440,120 L0,120 Z";
    }
    
    if (mode === "angle") {
      return inverted
        ? "M0,0 L1440,0 L1440,0 L720,100 L0,0 Z"
        : "M0,0 L1440,0 L1440,120 L0,120 L720,20 Z";
    }
    
    // Padrão - linha simples diagonal
    return inverted
      ? "M0,0 L1440,120 L0,120 Z"
      : "M0,0 L1440,0 L1440,120 L0,0 Z";
  };

  return (
    <div 
      className={`w-full overflow-hidden ${className}`} 
      style={{ height: `${height}px` }}
      aria-hidden="true"
    >
      <svg
        className="absolute w-full"
        style={{ 
          height: `${height}px`,
          transform: inverted ? 'translateY(-1px)' : 'translateY(1px)'
        }}
        preserveAspectRatio="none"
        viewBox={`0 0 1440 ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={getPath()}
          fill={to.startsWith('bg-') ? `var(--${to.substring(3)})` : to}
        />
      </svg>
    </div>
  );
};

/**
 * Componente de fundo gradiente que cria efeito de continuidade
 * Pode ser usado como container para dar efeito de transição suave
 */
const GradientBackground = ({ 
  from, 
  to, 
  direction = "to-b",
  children, 
  className = "" 
}) => {
  return (
    <div className={`relative bg-gradient-${direction} from-${from} to-${to} ${className}`}>
      {children}
    </div>
  );
};

/**
 * Componente de overlay que suaviza transições entre seções
 * Pode ser adicionado ao final de uma seção para criar transição para próxima
 */
const SectionOverlay = ({ 
  color = "bg-white",
  opacity = 10,
  height = 200,
  className = "",
  inverted = false
}) => {
  return (
    <div 
      className={`absolute ${inverted ? 'top-0' : 'bottom-0'} left-0 w-full pointer-events-none ${className}`}
      style={{ height: `${height}px` }}
    >
      <div 
        className={`w-full h-full ${color}/${opacity} bg-gradient-to-b ${
          inverted ? 'from-transparent to-current' : 'from-current to-transparent'
        }`}
      ></div>
    </div>
  );
};

export { SectionTransition, GradientBackground, SectionOverlay };