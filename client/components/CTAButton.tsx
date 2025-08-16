import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getRoute } from '../lib/navigation-mapper';

interface CTAButtonProps {
  children: React.ReactNode;
  buttonText: string;
  context?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
}

/**
 * Intelligent CTA Button Component
 * 
 * Automatically routes based on button text using the navigation mapper.
 * Supports different variants and sizes while maintaining consistent styling.
 */
export default function CTAButton({ 
  children, 
  buttonText,
  context,
  variant = 'primary',
  size = 'medium',
  className = '',
  showArrow = true,
  onClick 
}: CTAButtonProps) {
  
  const route = getRoute(buttonText, context);
  const isExternalLink = route.startsWith('http') || route.startsWith('mailto') || route.startsWith('tel');
  const isPlaceholder = route === '#';

  // Variant styles
  const variantClasses = {
    primary: 'bg-[#247FBF] hover:bg-[#1e6a9f] text-white',
    secondary: 'bg-white hover:bg-gray-50 text-[#121212]',
    outline: 'border-2 border-[#247FBF] hover:bg-[#247FBF] text-[#247FBF] hover:text-white'
  };

  // Size styles
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-5 py-[6px] text-[15px]',
    large: 'px-6 py-3 text-base'
  };

  // Base button classes
  const baseClasses = `
    flex items-center gap-4 pl-5 pr-[10px] rounded-[24px] 
    transition-all duration-200 group font-inter font-medium 
    leading-6 tracking-[0.15px] text-center
    ${variantClasses[variant]} 
    ${sizeClasses[size]}
    ${className}
  `;

  const buttonContent = (
    <>
      <span>{children}</span>
      {showArrow && (
        <div className="flex w-9 h-9 justify-center items-center rounded-[90px] bg-white">
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 19 19" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <path 
              d="M14.8438 4.78003V12.0925C14.8438 12.3163 14.7549 12.5309 14.5966 12.6891C14.4384 12.8474 14.2238 12.9363 14 12.9363C13.7762 12.9363 13.5616 12.8474 13.4034 12.6891C13.2451 12.5309 13.1562 12.3163 13.1562 12.0925V6.81909L5.59695 14.377C5.43844 14.5355 5.22346 14.6245 4.9993 14.6245C4.77513 14.6245 4.56015 14.5355 4.40164 14.377C4.24313 14.2185 4.15408 14.0035 4.15408 13.7793C4.15408 13.5552 4.24313 13.3402 4.40164 13.1817L11.9609 5.62378H6.6875C6.46372 5.62378 6.24911 5.53488 6.09088 5.37665C5.93264 5.21842 5.84375 5.00381 5.84375 4.78003C5.84375 4.55625 5.93264 4.34164 6.09088 4.18341C6.24911 4.02517 6.46372 3.93628 6.6875 3.93628H14C14.2238 3.93628 14.4384 4.02517 14.5966 4.18341C14.7549 4.34164 14.8438 4.55625 14.8438 4.78003Z" 
              fill={variant === 'primary' ? 'black' : '#247FBF'}
            />
          </svg>
        </div>
      )}
    </>
  );

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        cta_text: buttonText,
        cta_route: route,
        cta_context: context || 'none'
      });
    }
  };

  // External links
  if (isExternalLink) {
    return (
      <motion.a
        href={route}
        className={baseClasses}
        onClick={handleClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        target={route.startsWith('http') ? '_blank' : undefined}
        rel={route.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {buttonContent}
      </motion.a>
    );
  }

  // Placeholder links (no route found)
  if (isPlaceholder) {
    return (
      <motion.button
        className={`${baseClasses} cursor-not-allowed opacity-75`}
        onClick={handleClick}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        title="Route not configured yet"
      >
        {buttonContent}
      </motion.button>
    );
  }

  // Internal routing
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        to={route}
        className={baseClasses}
        onClick={handleClick}
      >
        {buttonContent}
      </Link>
    </motion.div>
  );
}

/**
 * Specialized CTA Button variants for common use cases
 */

interface LearnMoreButtonProps {
  context?: string;
  className?: string;
}

export function LearnMoreButton({ context, className }: LearnMoreButtonProps) {
  return (
    <CTAButton
      buttonText="Learn More"
      context={context}
      variant="outline"
      size="small"
      showArrow={true}
      className={className}
    >
      Learn More
    </CTAButton>
  );
}

interface GetStartedButtonProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export function GetStartedButton({ className, size = 'medium' }: GetStartedButtonProps) {
  return (
    <CTAButton
      buttonText="Start Your Journey With Us"
      variant="primary"
      size={size}
      showArrow={true}
      className={className}
    >
      Start Your Journey With Us
    </CTAButton>
  );
}

interface ContactButtonProps {
  text?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export function ContactButton({ 
  text = "Contact Us", 
  className, 
  variant = "primary" 
}: ContactButtonProps) {
  return (
    <CTAButton
      buttonText={text}
      variant={variant}
      size="medium"
      showArrow={true}
      className={className}
    >
      {text}
    </CTAButton>
  );
}

export type { CTAButtonProps };