import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  noIndex?: boolean;
  schemaMarkup?: object;
}

interface Organization {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    '@type': string;
    addressCountry: string;
    addressRegion: string;
  };
  telephone: string;
  email: string;
  sameAs: string[];
  serviceArea: {
    '@type': string;
    name: string;
  };
  hasOfferCatalog: {
    '@type': string;
    name: string;
    itemListElement: Array<{
      '@type': string;
      name: string;
      description: string;
    }>;
  };
}

const defaultSEO = {
  title: 'Quality Care - Professional NDIS Services Australia',
  description: 'Quality Care provides compassionate, personalized NDIS services across Australia. Supporting individuals with disabilities to live with dignity and independence. Contact us today.',
  keywords: 'NDIS services, disability support, personal care, accommodation support, community participation, life skills development, assistive technology, quality care, australia',
  canonical: 'https://qualitycareproviders.com.au',
  ogImage: 'https://qualitycareproviders.com.au/images/og-image.jpg',
  ogType: 'website' as const,
  twitterCard: 'summary_large_image' as const
};

const organizationSchema: Organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Quality Care Providers',
  url: 'https://qualitycareproviders.com.au',
  logo: 'https://qualitycareproviders.com.au/images/logo.png',
  description: 'Professional NDIS services provider supporting individuals with disabilities across Australia',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'AU',
    addressRegion: 'Australia'
  },
  telephone: '+61-2-3456-7890',
  email: 'contact@qualitycareproviders.com.au',
  sameAs: [
    'https://www.facebook.com/qualitycareproviders',
    'https://www.linkedin.com/company/quality-care-providers'
  ],
  serviceArea: {
    '@type': 'Country',
    name: 'Australia'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'NDIS Services',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Accommodation and Tenancy Support',
        description: 'Support with housing, accommodation, and independent living skills'
      },
      {
        '@type': 'Offer',
        name: 'Assist Travel/Transport',
        description: 'Transportation support and travel training services'
      },
      {
        '@type': 'Offer',
        name: 'Assist-Personal Activities',
        description: 'Personal care and daily living support services'
      },
      {
        '@type': 'Offer',
        name: 'Development-Life Skills',
        description: 'Life skills development and capacity building programs'
      },
      {
        '@type': 'Offer',
        name: 'Assistive Products',
        description: 'Assistive technology and equipment support'
      },
      {
        '@type': 'Offer',
        name: 'Community Participation',
        description: 'Community engagement and social participation support'
      },
      {
        '@type': 'Offer',
        name: 'Shared Living',
        description: 'Supported independent living and shared accommodation'
      },
      {
        '@type': 'Offer',
        name: 'Assist Life Stage Transition',
        description: 'Support during major life transitions and changes'
      }
    ]
  }
};

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false,
  schemaMarkup
}: SEOProps) {
  const seoTitle = title ? `${title} | Quality Care` : defaultSEO.title;
  const seoDescription = description || defaultSEO.description;
  const seoKeywords = keywords || defaultSEO.keywords;
  const seoCanonical = canonical || defaultSEO.canonical;
  const seoOgImage = ogImage || defaultSEO.ogImage;

  // Combine organization schema with any additional schema markup
  const combinedSchema = schemaMarkup 
    ? [organizationSchema, schemaMarkup]
    : organizationSchema;

  useEffect(() => {
    // Update document title
    document.title = seoTitle;
    
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let metaTag = document.querySelector(selector) as HTMLMetaElement;
      
      if (!metaTag) {
        metaTag = document.createElement('meta');
        if (property) {
          metaTag.setAttribute('property', name);
        } else {
          metaTag.setAttribute('name', name);
        }
        document.head.appendChild(metaTag);
      }
      
      metaTag.setAttribute('content', content);
    };

    // Basic Meta Tags
    updateMetaTag('description', seoDescription);
    updateMetaTag('keywords', seoKeywords);
    updateMetaTag('robots', noIndex ? 'noindex, nofollow' : 'index, follow');
    updateMetaTag('author', 'Quality Care Providers');
    updateMetaTag('theme-color', '#247FBF');
    
    // Open Graph Meta Tags
    updateMetaTag('og:title', seoTitle, true);
    updateMetaTag('og:description', seoDescription, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', seoCanonical, true);
    updateMetaTag('og:image', seoOgImage, true);
    updateMetaTag('og:image:alt', 'Quality Care - Professional NDIS Services', true);
    updateMetaTag('og:site_name', 'Quality Care Providers', true);
    updateMetaTag('og:locale', 'en_AU', true);
    
    // Twitter Card Meta Tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:title', seoTitle);
    updateMetaTag('twitter:description', seoDescription);
    updateMetaTag('twitter:image', seoOgImage);
    updateMetaTag('twitter:image:alt', 'Quality Care - Professional NDIS Services');
    
    // Additional Meta Tags
    updateMetaTag('geo.region', 'AU');
    updateMetaTag('geo.country', 'Australia');
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', seoCanonical);
    
    // Add Schema.org JSON-LD
    let schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(combinedSchema, null, 2);
    
  }, [seoTitle, seoDescription, seoKeywords, seoCanonical, seoOgImage, ogType, twitterCard, noIndex, combinedSchema]);

  return null;
}

// Helper function to create service page schema
export function createServiceSchema(serviceName: string, serviceDescription: string, serviceUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'Organization',
      name: 'Quality Care Providers',
      url: 'https://qualitycareproviders.com.au'
    },
    areaServed: {
      '@type': 'Country',
      name: 'Australia'
    },
    url: serviceUrl,
    category: 'NDIS Services',
    audience: {
      '@type': 'Audience',
      audienceType: 'People with disabilities'
    }
  };
}

// Helper function to create article schema for content pages
export function createArticleSchema(title: string, description: string, url: string, datePublished?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    author: {
      '@type': 'Organization',
      name: 'Quality Care Providers'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Quality Care Providers',
      logo: {
        '@type': 'ImageObject',
        url: 'https://qualitycareproviders.com.au/images/logo.png'
      }
    },
    datePublished: datePublished || new Date().toISOString(),
    dateModified: new Date().toISOString()
  };
}