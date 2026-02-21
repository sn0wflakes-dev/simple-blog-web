import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-card border-b shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 h-16 flex items-center">
        <Link href="/" className="text-2xl font-bold font-headline text-primary hover:opacity-80 transition-opacity">
          RenderFlow Blog
        </Link>
      </div>
    </header>
  );
}
