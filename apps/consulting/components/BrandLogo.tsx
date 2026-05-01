import Link from 'next/link';

type BrandLogoProps = {
  compact?: boolean;
  className?: string;
};

export function BrandLogo({ compact = false, className = '' }: BrandLogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 ${className}`} aria-label="Regression Consulting home">
      <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#6c7489] bg-[#0b1020] shadow-[0_0_0_2px_rgba(245,181,68,0.08)]">
        <span className="absolute h-[1px] w-9 bg-[#aeb6c6]" />
        <span className="absolute h-9 w-[1px] bg-[#aeb6c6]" />
        <span className="absolute h-6 w-6 rounded-full border border-[#aeb6c6]" />
        <span className="h-2 w-2 rotate-45 bg-[#f5b544] shadow-[0_0_10px_rgba(245,181,68,0.8)]" />
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block text-lg tracking-[0.28em] text-[#e8ecf8]">REGRESSION</span>
          <span className="block pt-1 text-[10px] tracking-[0.52em] text-[#f5b544]">CONSULTING</span>
        </span>
      )}
    </Link>
  );
}
