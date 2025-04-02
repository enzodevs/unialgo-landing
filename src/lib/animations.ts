// Arquivo a ser adicionado como src/lib/animations.ts

import { useEffect, useRef, useState, RefObject } from 'react';
import { useInView } from 'framer-motion';

/**
 * Hook personalizado para revelar elementos durante o scroll
 * @param threshold Porcentagem do elemento que deve estar visível para acionar (0-1)
 * @param rootMargin Margem para ajustar quando a detecção ocorre
 * @param triggerOnce Se o efeito deve ocorrer apenas uma vez
 */
export function useScrollReveal(
  threshold: number = 0.1,
  rootMargin: string = '0px',
  triggerOnce: boolean = true
): [RefObject<HTMLElement>, boolean] {
  const ref = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  
  const isInView = useInView(ref, {
    once: triggerOnce,
    amount: threshold,
  });
  
  useEffect(() => {
    if (isInView && !isRevealed) {
      setIsRevealed(true);
    }
  }, [isInView, isRevealed]);
  
  return [ref, isRevealed];
}

/**
 * Hook para criar efeito de parallax baseado no scroll
 * @param speed Velocidade do efeito parallax (positivo = movimento para baixo)
 */
export function useParallax(speed: number = 0.5): [RefObject<HTMLElement>, { y: number }] {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const scrollY = window.scrollY;
      const rect = ref.current.getBoundingClientRect();
      const elementTop = rect.top + scrollY;
      const viewportMiddle = scrollY + window.innerHeight / 2;
      const distanceFromMiddle = elementTop - viewportMiddle;
      
      setOffset(distanceFromMiddle * speed);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Calcular posição inicial
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  
  return [ref, { y: offset }];
}

/**
 * Hook para criar um contador animado
 * @param end Valor final do contador
 * @param duration Duração da animação em ms
 * @param delay Atraso antes de iniciar em ms
 * @param triggerOnce Se o contador deve ser animado apenas uma vez
 */
export function useCountUp(
  end: number,
  duration: number = 2000,
  delay: number = 0,
  triggerOnce: boolean = true
): [RefObject<HTMLElement>, number] {
  const ref = useRef<HTMLElement>(null);
  const [count, setCount] = useState(0);
  const isInView = useInView(ref, { once: triggerOnce });
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTimestamp: number;
    let animationFrameId: number;
    const startValue = 0;
    
    // Atraso antes de iniciar a animação
    const timeoutId = setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentCount = Math.floor(progress * (end - startValue) + startValue);
        
        setCount(currentCount);
        
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setCount(end); // Garante que o valor final seja exato
        }
      };
      
      animationFrameId = requestAnimationFrame(step);
    }, delay);
    
    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, delay, isInView]);
  
  return [ref, count];
}

/**
 * Hook para animar SVG path (stroke)
 * @param duration Duração da animação em ms
 * @param easing Função de easing (cubic-bezier)
 * @param delay Atraso em ms
 */
export function useSvgPathAnimation(
  duration: number = 2000,
  easing: string = 'cubic-bezier(0.65, 0, 0.35, 1)',
  delay: number = 0
): [RefObject<SVGPathElement>, boolean] {
  const ref = useRef<SVGPathElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (!isInView || !ref.current) return;
    
    // Configura animação
    const path = ref.current;
    const length = path.getTotalLength();
    
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;
    path.style.animation = `dash ${duration / 1000}s ${easing} ${delay / 1000}s forwards`;
    
    const timeoutId = setTimeout(() => {
      setIsAnimated(true);
    }, duration + delay);
    
    return () => clearTimeout(timeoutId);
  }, [isInView, duration, easing, delay]);
  
  return [ref, isAnimated];
}

/**
 * Hook para criar efeito de progresso no scroll
 * @param start Porcentagem do viewport onde o progresso inicia (0-1)
 * @param end Porcentagem do viewport onde o progresso termina (0-1) 
 */
export function useScrollProgress(
  start: number = 0,
  end: number = 1
): [RefObject<HTMLElement>, number] {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calcula posições de início e fim em pixels
      const startPos = windowHeight * start;
      const endPos = windowHeight * end;
      
      // Calcula o progresso baseado na posição do elemento
      if (rect.top <= startPos && rect.bottom >= endPos) {
        // Elemento está totalmente na zona de progresso
        setProgress(1);
      } else if (rect.top <= startPos) {
        // Elemento está entrando na zona de progresso pelo topo
        const total = rect.height + (endPos - startPos);
        const current = rect.bottom - endPos;
        setProgress(Math.max(0, Math.min(1, current / total)));
      } else if (rect.bottom >= endPos) {
        // Elemento está entrando na zona de progresso por baixo
        const total = rect.height + (endPos - startPos);
        const current = startPos - rect.top;
        setProgress(Math.max(0, Math.min(1, current / total)));
      } else {
        // Elemento está fora da zona de progresso
        setProgress(0);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Inicial
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [start, end]);
  
  return [ref, progress];
}

/**
 * Hook para animação de digitação
 * @param text Texto a ser digitado
 * @param speed Velocidade de digitação (ms por caractere)
 * @param startDelay Atraso inicial (ms)
 */
export function useTypewriter(
  text: string,
  speed: number = 50,
  startDelay: number = 0
): [RefObject<HTMLElement>, string, boolean] {
  const ref = useRef<HTMLElement>(null);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (!isInView) return;
    
    let currentIndex = 0;
    setIsTyping(true);
    
    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setIsTyping(false);
          setIsComplete(true);
        }
      }, speed);
      
      return () => clearInterval(intervalId);
    }, startDelay);
    
    return () => clearTimeout(timeoutId);
  }, [text, speed, startDelay, isInView]);
  
  return [ref, displayText, isComplete];
}

/**
 * Hook para animação de scroll suave para links de ancoragem
 */
export function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Verifica se é um link de ancoragem
      if (target.tagName === 'A' && target.hasAttribute('href')) {
        const href = target.getAttribute('href');
        
        if (href && href.startsWith('#') && href.length > 1) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            // Scroll suave para o elemento
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
            
            // Atualiza URL sem recarregar a página
            window.history.pushState({}, '', href);
          }
        }
      }
    };
    
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
}

/**
 * Hook para detectar quando elemento chega/sai de determinadas posições do viewport
 * @param offsets Objeto com limites de detecção
 */
export function useScrollTrigger(offsets: {
  top?: number;
  center?: number;
  bottom?: number;
} = { top: 0, center: 0.5, bottom: 1 }) {
  const ref = useRef<HTMLElement>(null);
  const [triggers, setTriggers] = useState({
    isAtTop: false,
    isAtCenter: false,
    isAtBottom: false,
    progress: 0
  });
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calcula posições de detecção
      const topOffset = windowHeight * (offsets.top || 0);
      const centerOffset = windowHeight * (offsets.center || 0.5);
      const bottomOffset = windowHeight * (offsets.bottom || 1);
      
      // Calcula progresso total (0-1) de quanto do elemento já passou
      const elementStart = rect.top - windowHeight;
      const elementEnd = rect.bottom;
      const totalDistance = elementEnd - elementStart;
      const distancePassed = Math.min(Math.max(0, -elementStart), totalDistance);
      const progress = distancePassed / totalDistance;
      
      setTriggers({
        isAtTop: rect.top <= topOffset,
        isAtCenter: rect.top <= centerOffset && rect.bottom >= centerOffset,
        isAtBottom: rect.bottom <= bottomOffset,
        progress
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Calcular posição inicial
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offsets]);
  
  return [ref, triggers] as const;
}