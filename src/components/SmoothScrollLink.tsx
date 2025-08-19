import React from 'react';

interface SmoothScrollLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  offset?: number;
}

export const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({ 
  to, 
  children, 
  className = '', 
  offset = 0 
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(to);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <a 
      href={to} 
      onClick={handleClick}
      className={`cursor-pointer transition-colors hover:text-electric-blue ${className}`}
    >
      {children}
    </a>
  );
};