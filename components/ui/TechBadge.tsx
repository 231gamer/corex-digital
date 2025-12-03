interface TechBadgeProps { label: string }

const TechBadge = ({ label }: TechBadgeProps) => (
  <span className="inline-block px-3 py-1 rounded-full bg-secondary text-gray-800 text-sm font-medium">
    {label}
  </span>
);

export default TechBadge;
