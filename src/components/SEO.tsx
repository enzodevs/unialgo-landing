import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  keywords?: string[];
}

/**
 * Componente SEO para melhorar a otimização para motores de busca
 * Inclui metadados padrão, Open Graph, Twitter Cards e Schema.org
 */
const SEO: React.FC<SEOProps> = ({
  title = "UniAlgo - Plataforma de Algoritmos para Professores e Universidades",
  description = "Transforme o aprendizado de algoritmos com feedback em tempo real e ambientes seguros para execução de código. Interface intuitiva para professores e alunos.",
  canonicalUrl = "https://unialgo.com.br",
  ogType = "website",
  ogImage = "https://unialgo.com.br/og-image.png",
  keywords = [
    "algoritmos", 
    "programação", 
    "educação", 
    "universidade", 
    "ensino", 
    "feedback",
    "execução de código",
    "plataforma educacional",
    "professores",
    "alunos"
  ],
}) => {
  // Schema.org JSON-LD para melhor entendimento por mecanismos de busca
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "UniAlgo",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "49.00",
      "priceCurrency": "BRL"
    },
    "description": description,
    "screenshot": ogImage,
    "softwareVersion": "1.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "127"
    },
    "provider": {
      "@type": "Organization",
      "name": "UniAlgo",
      "logo": "https://unialgo.com.br/logo.png"
    }
  };
  
  // Schema para organização (empresa)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "UniAlgo",
    "url": canonicalUrl,
    "logo": "https://unialgo.com.br/logo.png",
    "sameAs": [
      "https://twitter.com/unialgo",
      "https://linkedin.com/company/unialgo",
      "https://github.com/unialgo"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-11-XXXX-XXXX",
      "contactType": "customer service",
      "availableLanguage": ["Portuguese", "English"]
    }
  };
  
  // Schema para página web
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": canonicalUrl,
    "isPartOf": {
      "@type": "WebSite",
      "name": "UniAlgo",
      "url": "https://unialgo.com.br"
    }
  };

  return (
    <Helmet>
      {/* Metadados básicos */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="UniAlgo" />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@unialgo" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgData)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
      
      {/* Metadados adicionais */}
      <meta name="author" content="UniAlgo" />
      <meta name="theme-color" content="#3B82F6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Helmet>
  );
};

export default SEO;