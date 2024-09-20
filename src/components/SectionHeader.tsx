
interface SectionHeaderProps {
  title: string;
  description: string;
  className?: string;
}

const SectionHeader = ({ title, description, className = '' }: SectionHeaderProps) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl font-medium pb-4">{title}</h2>
      <p className="text-[15px] sm:text-xl text-secondary-dark/50 max-w-xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;