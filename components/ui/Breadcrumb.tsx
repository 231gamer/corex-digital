import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: 'default' | 'light';
}

const Breadcrumb = ({ items, variant = 'default' }: BreadcrumbProps) => {
  const linkClass =
    variant === 'light'
      ? 'text-white/80 hover:text-white transition-colors'
      : 'text-gray-500 hover:text-accent transition-colors';
  const activeClass = variant === 'light' ? 'text-white font-semibold' : 'text-gray-900 font-medium';
  const iconClass = variant === 'light' ? 'text-white/60' : 'text-gray-400';

  return (
    <nav className={`flex items-center space-x-2 text-sm mb-8 ${variant === 'light' ? 'text-white/80' : ''}`}>
      <Link href="/" className={linkClass}>
        Home
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className={`w-4 h-4 ${iconClass}`} />
          {item.href ? (
            <Link href={item.href} className={linkClass}>
              {item.label}
            </Link>
          ) : (
            <span className={activeClass}>{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
