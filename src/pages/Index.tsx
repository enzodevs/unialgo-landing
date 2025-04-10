
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DemoSection from '@/components/DemoSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowToUseSection from '@/components/HowToUseSection';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Change page title
  useEffect(() => {
    document.title = "UniAlgo - Plataforma de Algoritmos para Universidades";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="pt-20 bg-white">
          <div className="container-custom">
            <div className="flex flex-col items-center">
              <HeroSection />
              <div className="mt-8 w-full max-w-6xl mx-auto">
                <DemoSection />
              </div>
            </div>
          </div>
        </div>
        <FeaturesSection />
        <HowToUseSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
