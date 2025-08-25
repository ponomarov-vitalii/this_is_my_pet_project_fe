import Link from 'next/link';
// import ThemeColorSelect from '@/components/ui/ThemeColorSelect/ThemeColorSelect';

export default function Footer() {
  return (
    <footer className="border-t border-primary-200 bg-primary-50 text-primary-600">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <p className="text-sm">
          © {new Date().getFullYear()} NewsFlow. All rights reserved.
        </p>
        <nav className="flex gap-6 text-sm">
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        {/* <ThemeColorSelect /> */}
      </div>
    </footer>
  );
}
