interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  eyebrow?: string;
}

const SectionHeader = ({ title, subtitle, align = 'center', eyebrow }: SectionHeaderProps) => {
  return (
    <div className={`${align === 'center' ? 'text-center' : ''} mb-12`}>
      {eyebrow && (
        <div className="text-accent font-semibold tracking-wide uppercase text-sm mb-2">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-primary mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
