import { ReactNode } from "react";

interface SectionContainerProps {
  className?: string;
  children: ReactNode;
}

const SectionContainer = ({ className = '', children }: SectionContainerProps) => {
  return (
    <section className={`md:mt-28 md:mb-48 mt-8 mb-32 text-center ${className}`}>
      {children}
    </section>
  );
};

export default SectionContainer;