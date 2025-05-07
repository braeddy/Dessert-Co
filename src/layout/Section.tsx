import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
  return (
    <section 
      id={id} 
      className={`px-4 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;