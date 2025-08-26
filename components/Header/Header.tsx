'use client';

import Link from 'next/link';
import Button from '../Button/Button';
import ThemeCustomizer from '../ThemeCustomizer/ThemeCustomizer';
// import ThemeToggle from '@/components/ui/ThemeToggle/ThemeToggle';

export default function Header() {
  return (
    <header className="w-full border-b border-primary-200 bg-primary-50 text-primary-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-primary-700"
        >
          📰 <span>NewsFlow</span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex gap-6 text-sm text-primary-600">
          <Link href="/features">Features</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
          <Link href="/help">Help</Link>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm text-primary-600 hover:text-primary-800"
          >
            Sign In
          </Link>
          <Button size="sm">Get Started</Button>
          {/* <ThemeToggle /> */}
          <ThemeCustomizer />
        </div>
      </div>
    </header>
  );
}
