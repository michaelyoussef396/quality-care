import React, { useState, useRef, useEffect } from 'react';
import { imageOptimization } from '../lib/performance-utils';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * Optimized lazy loading image component
 * TASK-025: Performance optimization - Image lazy loading
 */
export default function LazyImage({
  src,
  alt,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2Y0ZjRmNCIvPjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Mb2FkaW5nLi4uPC90ZXh0Pjwvc3ZnPg==',
  width,
  height,
  priority = false,
  onLoad,
  onError
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const [optimizedSrc, setOptimizedSrc] = useState(src);

  // Optimize image source on mount
  useEffect(() => {
    const optimized = imageOptimization.getOptimizedImageSrc(src);
    setOptimizedSrc(optimized);
  }, [src]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const observer = imageOptimization.createImageObserver((entry) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer?.unobserve(entry.target);
      }
    });

    if (observer && imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (observer && imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [priority, isInView]);

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  // Handle image error
  const handleError = () => {
    setHasError(true);
    if (onError) onError();
  };

  // Create srcSet for responsive images
  const createSrcSet = (baseSrc: string) => {
    if (!baseSrc.includes('builder.io')) return undefined;
    
    const widths = [320, 640, 768, 1024, 1280, 1536];
    return widths
      .map(w => `${baseSrc}&width=${w} ${w}w`)
      .join(', ');
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Placeholder */}
      <img
        ref={imgRef}
        src={placeholder}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden="true"
      />
      
      {/* Main image */}
      {(isInView || priority) && !hasError && (
        <img
          src={optimizedSrc}
          srcSet={createSrcSet(optimizedSrc)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          width={width}
          height={height}
        />
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 text-sm">
          <div className="text-center">
            <div className="mb-2">⚠️</div>
            <div>Failed to load image</div>
          </div>
        </div>
      )}
      
      {/* Loading indicator */}
      {!isLoaded && !hasError && isInView && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#247FBF]"></div>
        </div>
      )}
    </div>
  );
}