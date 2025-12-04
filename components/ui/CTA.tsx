import Link from 'next/link';

interface CTAProps {
  title: string;
  subtitle?: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

const CTA = ({ title, subtitle, primaryHref, primaryLabel, secondaryHref, secondaryLabel }: CTAProps) => {
  return (
    <section className="section-padding gradient-bg text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-lg md:text-xl text-white mb-8">{subtitle}</p>}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={primaryHref} className="btn-primary">
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel && (
              <Link href={secondaryHref} className="btn-outline">
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CTA;
