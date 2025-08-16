/**
 * Performance optimization utilities for Quality Care NDIS website
 * TASK-025: Performance optimization
 */

// Image optimization utilities
export const imageOptimization = {
  // Lazy loading observer for images
  createImageObserver: (callback: (entry: IntersectionObserverEntry) => void) => {
    if (typeof window === 'undefined') return null;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(callback);
      },
      {
        rootMargin: '50px 0px', // Start loading 50px before image comes into view
        threshold: 0.1
      }
    );
    
    return observer;
  },

  // Preload critical images
  preloadCriticalImages: (imageSrcs: string[]) => {
    if (typeof window === 'undefined') return;
    
    imageSrcs.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  },

  // Convert images to WebP format if supported
  getOptimizedImageSrc: (originalSrc: string): string => {
    if (typeof window === 'undefined') return originalSrc;
    
    const supportsWebP = (() => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL('image/webp').startsWith('data:image/webp');
    })();
    
    if (supportsWebP && originalSrc.includes('builder.io')) {
      return `${originalSrc}&format=webp`;
    }
    
    return originalSrc;
  }
};

// Code splitting utilities
export const codeOptimization = {
  // Dynamic import with error handling
  dynamicImport: async <T>(importFunction: () => Promise<{ default: T }>): Promise<T> => {
    try {
      const module = await importFunction();
      return module.default;
    } catch (error) {
      console.error('Dynamic import failed:', error);
      throw error;
    }
  },

  // Preload routes for better navigation performance
  preloadRoute: (routePath: string) => {
    if (typeof window === 'undefined') return;
    
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = routePath;
    document.head.appendChild(link);
  }
};

// Bundle analysis utilities
export const bundleOptimization = {
  // Analyze component render frequency for optimization
  createRenderTracker: (componentName: string) => {
    if (process.env.NODE_ENV !== 'development') return () => {};
    
    let renderCount = 0;
    const startTime = performance.now();
    
    return () => {
      renderCount++;
      if (renderCount % 10 === 0) {
        const currentTime = performance.now();
        const avgRenderTime = (currentTime - startTime) / renderCount;
        console.log(`${componentName} rendered ${renderCount} times, avg time: ${avgRenderTime.toFixed(2)}ms`);
      }
    };
  },

  // Memory usage tracking
  trackMemoryUsage: (label: string) => {
    if (typeof window === 'undefined' || !('performance' in window)) return;
    
    const memory = (performance as any).memory;
    if (memory) {
      console.log(`${label} - Memory usage:`, {
        used: `${Math.round(memory.usedJSHeapSize / 1024 / 1024)}MB`,
        total: `${Math.round(memory.totalJSHeapSize / 1024 / 1024)}MB`,
        limit: `${Math.round(memory.jsHeapSizeLimit / 1024 / 1024)}MB`
      });
    }
  }
};

// Network optimization utilities
export const networkOptimization = {
  // Check network connection quality
  getNetworkInfo: () => {
    if (typeof navigator === 'undefined' || !('connection' in navigator)) {
      return { effectiveType: '4g', downlink: 10 }; // Default fallback
    }
    
    const connection = (navigator as any).connection;
    return {
      effectiveType: connection.effectiveType || '4g',
      downlink: connection.downlink || 10,
      rtt: connection.rtt || 50
    };
  },

  // Adaptive loading based on network quality
  shouldLoadHeavyContent: (): boolean => {
    const network = networkOptimization.getNetworkInfo();
    
    // Don't load heavy content on slow connections
    if (network.effectiveType === 'slow-2g' || network.effectiveType === '2g') {
      return false;
    }
    
    // Load heavy content on good connections
    return network.downlink >= 1.5;
  },

  // Service worker for caching optimization
  registerServiceWorker: async () => {
    if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) {
      return false;
    }
    
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered successfully:', registration.scope);
      return true;
    } catch (error) {
      console.error('Service Worker registration failed:', error);
      return false;
    }
  }
};

// Animation performance utilities
export const animationOptimization = {
  // Use requestAnimationFrame for smooth animations
  createAnimationLoop: (callback: (timestamp: number) => boolean) => {
    let animationId: number;
    
    const animate = (timestamp: number) => {
      const shouldContinue = callback(timestamp);
      if (shouldContinue) {
        animationId = requestAnimationFrame(animate);
      }
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  },

  // Reduce motion for accessibility and performance
  shouldReduceMotion: (): boolean => {
    if (typeof window === 'undefined') return false;
    
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  // GPU acceleration hints
  addGPUAcceleration: (element: HTMLElement) => {
    element.style.transform = element.style.transform || 'translateZ(0)';
    element.style.willChange = 'transform';
  },

  removeGPUAcceleration: (element: HTMLElement) => {
    element.style.willChange = 'auto';
  }
};

// Font loading optimization
export const fontOptimization = {
  // Preload critical fonts
  preloadFonts: (fontUrls: string[]) => {
    if (typeof document === 'undefined') return;
    
    fontUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.href = url;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  },

  // Font display optimization
  optimizeFontDisplay: () => {
    if (typeof document === 'undefined') return;
    
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'Inter';
        font-display: swap;
      }
      @font-face {
        font-family: 'Unna';
        font-display: swap;
      }
    `;
    document.head.appendChild(style);
  }
};

// Core Web Vitals monitoring
export const webVitalsMonitoring = {
  // Track Largest Contentful Paint (LCP)
  trackLCP: (callback: (value: number) => void) => {
    if (typeof window === 'undefined') return;
    
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as any;
      callback(lastEntry.startTime);
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  },

  // Track First Input Delay (FID)
  trackFID: (callback: (value: number) => void) => {
    if (typeof window === 'undefined') return;
    
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        callback(entry.processingStart - entry.startTime);
      });
    });
    
    observer.observe({ entryTypes: ['first-input'] });
  },

  // Track Cumulative Layout Shift (CLS)
  trackCLS: (callback: (value: number) => void) => {
    if (typeof window === 'undefined') return;
    
    let clsValue = 0;
    
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      callback(clsValue);
    });
    
    observer.observe({ entryTypes: ['layout-shift'] });
  }
};

// Performance monitoring setup
export const performanceMonitoring = {
  // Initialize all performance monitoring
  initialize: () => {
    if (typeof window === 'undefined') return;
    
    // Track Core Web Vitals
    webVitalsMonitoring.trackLCP((lcp) => {
      console.log('LCP:', lcp);
      // Send to analytics in production
    });
    
    webVitalsMonitoring.trackFID((fid) => {
      console.log('FID:', fid);
      // Send to analytics in production
    });
    
    webVitalsMonitoring.trackCLS((cls) => {
      console.log('CLS:', cls);
      // Send to analytics in production
    });
    
    // Register service worker
    networkOptimization.registerServiceWorker();
    
    // Optimize fonts
    fontOptimization.optimizeFontDisplay();
    
    // Preload critical resources
    const criticalImages = [
      'https://api.builder.io/api/v1/image/assets/TEMP/5485bd83ba3750ad5d72f6e9531811779681422f?width=358',
      'https://api.builder.io/api/v1/image/assets/TEMP/5e8c32b443f3c60d2707fe4ca4d9a70d413d3e1d?width=200'
    ];
    
    imageOptimization.preloadCriticalImages(criticalImages);
  }
};

export default {
  imageOptimization,
  codeOptimization,
  bundleOptimization,
  networkOptimization,
  animationOptimization,
  fontOptimization,
  webVitalsMonitoring,
  performanceMonitoring
};