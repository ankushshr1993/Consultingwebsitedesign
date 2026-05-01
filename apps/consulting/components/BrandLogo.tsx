import Image from 'next/image';
import Link from 'next/link';

type BrandLogoProps = {
  compact?: boolean;
  className?: string;
};

export function BrandLogo({ compact = false, className = '' }: BrandLogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="Regression Consulting home">
      <Image
        src="/logo/regression-logo.svg"
        alt="Regression Consulting logo"
        width={compact ? 160 : 320}
        height={compact ? 44 : 88}
        priority
        className={compact ? 'h-8 w-auto' : 'h-12 w-auto'}
      />
    </Link>
  );
}
