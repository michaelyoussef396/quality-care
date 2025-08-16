/**
 * Navigation Mapping Utility for Quality Care NDIS Website
 * 
 * Intelligently maps button/link text to appropriate routes based on content analysis.
 * Handles variations in text format, service names, and common CTA patterns.
 * 
 * TASK-004: Create Navigation Mapping Utility (P0 Critical)
 */

// Main navigation routes
const MAIN_ROUTES = {
  // Home page variations
  'home': '/',
  'homepage': '/',
  'main': '/',
  
  // About page variations
  'about': '/about',
  'about us': '/about',
  'our story': '/about',
  'who we are': '/about',
  
  // Contact page variations
  'contact': '/contact',
  'contact us': '/contact',
  'get in touch': '/contact',
  'reach out': '/contact',
  'contact our team': '/contact',
  'speak with us': '/contact',
} as const;

// Service-specific routes mapping
const SERVICE_ROUTES = {
  // Accommodation & Tenancy Services
  'accommodation': '/AccommodationTenancy',
  'accommodation tenancy': '/AccommodationTenancy',
  'accommodation & tenancy': '/AccommodationTenancy',
  'housing': '/AccommodationTenancy',
  'housing services': '/AccommodationTenancy',
  'tenancy support': '/AccommodationTenancy',
  'housing support': '/AccommodationTenancy',
  'contact our housing team': '/AccommodationTenancy',
  
  // Life Stage Transition
  'assist life stage transition': '/AssistLifeStageTransition',
  'life stage transition': '/AssistLifeStageTransition',
  'life transitions': '/AssistLifeStageTransition',
  'transition support': '/AssistLifeStageTransition',
  'life stage support': '/AssistLifeStageTransition',
  'contact our transition team': '/AssistLifeStageTransition',
  
  // Personal Activities
  'assist personal activities': '/AssistPersonalActivities',
  'personal activities': '/AssistPersonalActivities',
  'personal care': '/AssistPersonalActivities',
  'daily living': '/AssistPersonalActivities',
  'personal support': '/AssistPersonalActivities',
  'contact our support team': '/AssistPersonalActivities',
  
  // Travel & Transport
  'assist travel transport': '/AssistTravelTransport',
  'assist travel & transport': '/AssistTravelTransport',
  'travel transport': '/AssistTravelTransport',
  'travel & transport': '/AssistTravelTransport',
  'transport services': '/AssistTravelTransport',
  'travel support': '/AssistTravelTransport',
  'transportation': '/AssistTravelTransport',
  'contact our travel team': '/AssistTravelTransport',
  
  // Shared Living
  'shared living': '/SharedLiving',
  'shared accommodation': '/SharedLiving',
  'supported living': '/SharedLiving',
  'independent living': '/SharedLiving',
  'contact our living team': '/SharedLiving',
  
  // Community Participation
  'community participation': '/CommunityParticipation',
  'community involvement': '/CommunityParticipation',
  'community engagement': '/CommunityParticipation',
  'social participation': '/CommunityParticipation',
  'contact our community team': '/CommunityParticipation',
  
  // Development Life Skills
  'development life skills': '/DevelopmentLifeSkills',
  'life skills': '/DevelopmentLifeSkills',
  'skill development': '/DevelopmentLifeSkills',
  'personal development': '/DevelopmentLifeSkills',
  'life skills training': '/DevelopmentLifeSkills',
  'contact our skills team': '/DevelopmentLifeSkills',
  
  // Assistive Products
  'assistive products': '/AssistiveProducts',
  'assistive technology': '/AssistiveProducts',
  'equipment': '/AssistiveProducts',
  'adaptive equipment': '/AssistiveProducts',
  'household tasks': '/AssistiveProducts',
  'contact our products team': '/AssistiveProducts',
  
  // Participate in Community
  'participate in community': '/ParticipateInCommunity',
  'community services': '/ParticipateInCommunity',
  'social activities': '/ParticipateInCommunity',
  'community programs': '/ParticipateInCommunity',
  
  // Group Centre Activities
  'group centre activities': '/GroupCentreActivities',
  'group activities': '/GroupCentreActivities',
  'centre activities': '/GroupCentreActivities',
  'day programs': '/GroupCentreActivities',
  'group programs': '/GroupCentreActivities',
} as const;

// Common CTA (Call to Action) patterns that should go to contact
const CTA_PATTERNS = {
  // Getting started patterns
  'get started': '/contact',
  'start your journey': '/contact',
  'start your journey with us': '/contact',
  'get started today': '/contact',
  'begin your journey': '/contact',
  'start now': '/contact',
  
  // Contact-related CTAs
  'contact our team': '/contact',
  'speak with our team': '/contact',
  'talk to us': '/contact',
  'schedule consultation': '/contact',
  'book consultation': '/contact',
  'free consultation': '/contact',
  
  // Learn more patterns (context-dependent)
  'learn more': '#', // Default fallback, should be determined by context
  'find out more': '#',
  'discover more': '#',
  'explore': '#',
  'read more': '#',
} as const;

// Phone and email patterns
const CONTACT_PATTERNS = {
  // Phone number patterns
  'call us': 'tel:+61-X-XXXX-XXXX', // Will be replaced with actual number
  'phone': 'tel:+61-X-XXXX-XXXX',
  'call': 'tel:+61-X-XXXX-XXXX',
  
  // Email patterns
  'email us': 'mailto:contact@qualitycareproviders.com.au',
  'send email': 'mailto:contact@qualitycareproviders.com.au',
  'email': 'mailto:contact@qualitycareproviders.com.au',
} as const;

// Combined mapping object
const ALL_ROUTES = {
  ...MAIN_ROUTES,
  ...SERVICE_ROUTES,
  ...CTA_PATTERNS,
  ...CONTACT_PATTERNS,
} as const;

/**
 * Normalizes text for consistent matching
 * @param text - Raw button/link text
 * @returns Normalized text for mapping
 */
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s&-]/g, '') // Remove special chars except & and -
    .replace(/\s+/g, ' ') // Normalize whitespace
    .replace(/\s*&\s*/g, ' & ') // Normalize ampersands
    .replace(/\s*-\s*/g, ' ') // Normalize hyphens to spaces
    .trim();
}

/**
 * Attempts to find a route based on partial text matching
 * @param normalizedText - Pre-normalized text
 * @returns Route path or null if no match
 */
function findPartialMatch(normalizedText: string): string | null {
  // Check for service-specific keywords with priority order
  const serviceKeywords = [
    { keywords: ['accommodation', 'housing', 'tenancy'], route: '/AccommodationTenancy' },
    { keywords: ['transition', 'life stage'], route: '/AssistLifeStageTransition' },
    { keywords: ['personal activities', 'personal care', 'personal'], route: '/AssistPersonalActivities' },
    { keywords: ['travel', 'transport'], route: '/AssistTravelTransport' },
    { keywords: ['shared living', 'supported living', 'independent living', 'living'], route: '/SharedLiving' },
    { keywords: ['community participation', 'community involvement', 'community engagement', 'community programs', 'community services', 'community'], route: '/CommunityParticipation' },
    { keywords: ['participate in community', 'participate'], route: '/ParticipateInCommunity' },
    { keywords: ['life skills', 'skill development', 'skills'], route: '/DevelopmentLifeSkills' },
    { keywords: ['assistive products', 'assistive technology', 'products', 'equipment'], route: '/AssistiveProducts' },
    { keywords: ['group centre', 'group activities', 'centre activities', 'day programs', 'group', 'centre', 'activities'], route: '/GroupCentreActivities' },
  ];
  
  for (const service of serviceKeywords) {
    for (const keyword of service.keywords) {
      if (normalizedText.includes(keyword)) {
        return service.route;
      }
    }
  }
  
  // Check for contact-related keywords
  if (normalizedText.includes('contact') || 
      normalizedText.includes('get started') || 
      normalizedText.includes('journey')) {
    return '/contact';
  }
  
  // Check for about-related keywords
  if (normalizedText.includes('about') || 
      normalizedText.includes('story') || 
      normalizedText.includes('who we are')) {
    return '/about';
  }
  
  return null;
}

/**
 * Maps button/link text to appropriate route
 * @param buttonText - The text content of the button or link
 * @param context - Optional context for disambiguation (e.g., page name, section)
 * @returns Route path, external URL, or fallback
 */
export function getRoute(buttonText: string, context?: string): string {
  if (!buttonText || typeof buttonText !== 'string') {
    console.warn('Navigation mapper: Invalid button text provided');
    return '#';
  }
  
  const normalizedText = normalizeText(buttonText);
  const trimmedText = buttonText.trim();
  
  // Check for phone/email patterns FIRST (before text normalization affects them)
  // Phone number detection - improved regex to handle various formats
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]+$/;
  if (phoneRegex.test(trimmedText) && trimmedText.length >= 8) {
    return `tel:${trimmedText.replace(/[^\d+]/g, '')}`;
  }
  
  // Email detection
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedText)) {
    return `mailto:${trimmedText}`;
  }
  
  // Check for exact matches
  if (normalizedText in ALL_ROUTES) {
    return ALL_ROUTES[normalizedText as keyof typeof ALL_ROUTES];
  }
  
  // Try partial matching
  const partialMatch = findPartialMatch(normalizedText);
  if (partialMatch) {
    return partialMatch;
  }
  
  // Context-based routing for ambiguous cases
  if (context) {
    const normalizedContext = normalizeText(context);
    
    // If "Learn More" appears in service context, route to that service
    if (normalizedText === 'learn more' || normalizedText === 'find out more') {
      const serviceMatch = findPartialMatch(normalizedContext);
      if (serviceMatch) {
        return serviceMatch;
      }
    }
    
    // For other ambiguous terms, also try context matching
    if (normalizedText === 'explore' || normalizedText === 'discover more') {
      const serviceMatch = findPartialMatch(normalizedContext);
      if (serviceMatch) {
        return serviceMatch;
      }
    }
  }
  
  console.warn(`Navigation mapper: No route found for "${buttonText}"${context ? ` in context "${context}"` : ''}`);
  return '#'; // Fallback for unmapped text
}

/**
 * Gets all available service routes
 * @returns Array of service route objects
 */
export function getServiceRoutes() {
  return Object.entries(SERVICE_ROUTES)
    .filter(([key]) => !key.includes('contact our')) // Filter out CTA variations
    .map(([name, path]) => ({
      name: name.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' '),
      path,
      slug: path.slice(1), // Remove leading slash
    }));
}

/**
 * Validates if a route exists in the application
 * @param route - Route path to validate
 * @returns True if route exists
 */
export function isValidRoute(route: string): boolean {
  const validRoutes = new Set([
    '/',
    '/about',
    '/contact',
    '/AccommodationTenancy',
    '/AssistLifeStageTransition',
    '/AssistPersonalActivities',
    '/AssistTravelTransport',
    '/SharedLiving',
    '/CommunityParticipation',
    '/DevelopmentLifeSkills',
    '/AssistiveProducts',
    '/ParticipateInCommunity',
    '/GroupCentreActivities',
  ]);
  
  return validRoutes.has(route) || 
         route.startsWith('tel:') || 
         route.startsWith('mailto:') ||
         route.startsWith('http');
}

/**
 * Debug function to test route mapping
 * @param texts - Array of button texts to test
 * @returns Mapping results for debugging
 */
export function debugRouteMapping(texts: string[]): Array<{text: string, route: string, valid: boolean}> {
  return texts.map(text => ({
    text,
    route: getRoute(text),
    valid: isValidRoute(getRoute(text))
  }));
}

// Export route constants for testing and validation
export { SERVICE_ROUTES, MAIN_ROUTES, CTA_PATTERNS, CONTACT_PATTERNS };