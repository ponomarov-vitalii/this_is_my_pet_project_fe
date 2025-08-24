'use client';

import { useEffect, useState } from 'react';

function getDefaultPrimaryShades() {
  if (typeof document === 'undefined') return {};
  const root = getComputedStyle(document.documentElement);
  const shades: Record<string, string> = {};
  const shadeNumbers = [50,100,200,300,400,500,600,700,800,900,950];
  shadeNumbers.forEach(num => {
    shades[`--primary-${num}`] = root.getPropertyValue(`--primary-${num}`).trim();
  });
  return shades;
}

function generateShades(base: string) {
  const shades: Record<string, string> = {};
  const shadeNumbers = [50,100,200,300,400,500,600,700,800,900,950];
  const percents = [95,80,65,50,35,20,0,-15,-30,-45,-55]; // adjust for 11 shades
  shadeNumbers.forEach((num, i) => {
    shades[`--primary-${num}`] = lightenOrDarken(base, percents[i]);
  });
  return shades;
}

function lightenOrDarken(color: string, percent: number) {
  const num = parseInt(color.slice(1), 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;

  if (percent >= 0) {
    r = Math.round(r + (255 - r) * (percent / 100));
    g = Math.round(g + (255 - g) * (percent / 100));
    b = Math.round(b + (255 - b) * (percent / 100));
  } else {
    r = Math.round(r * (1 + percent / 100));
    g = Math.round(g * (1 + percent / 100));
    b = Math.round(b * (1 + percent / 100));
  }

  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function applyShadesForTheme(shades: Record<string, string>, theme: 'light'|'dark') {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  const shadeNumbers = [50,100,200,300,400,500,600,700,800,900,950];
  const arr = theme === 'dark' ? [...shadeNumbers].reverse() : shadeNumbers;
  arr.forEach((num, idx) => {
    root.style.setProperty(`--primary-${shadeNumbers[idx]}`, shades[`--primary-${num}`]);
  });
}

export default function ThemeCustomizer() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);
  const [primaryColor, setPrimaryColor] = useState<string | null>(null);

  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
      const storedPrimary = localStorage.getItem('primaryColor');
      
      if (storedTheme) setTheme(storedTheme);
      if (storedPrimary) setPrimaryColor(storedPrimary);
    } catch {
    }
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined' || !theme || !primaryColor) return;

    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);

    try {
      localStorage.setItem('theme', theme);
      localStorage.setItem('primaryColor', primaryColor);
    } catch {
    }

    const shades = primaryColor ? generateShades(primaryColor) : getDefaultPrimaryShades();
    applyShadesForTheme(shades, theme);
  }, [theme, primaryColor]);

  if (!theme || !primaryColor) {
    return <div className="h-[40px]"></div>;
  }

  return (
    <div className="flex items-center space-x-3 h-[40px]">
      <span className="text-sm text-primary-500">Theme:</span>
      <div className="flex bg-primary-200 rounded-lg p-1">
        <button
          onClick={() => setTheme('light')}
          className={`px-3 py-1 rounded-md text-sm transition-colors ${
            theme === 'light'
              ? 'bg-primary-500 text-primary-50'
              : 'text-primary-500 hover:text-primary-900'
          }`}
        >
          ☀️ Light
        </button>
        <button
          onClick={() => setTheme('dark')}
          className={`px-3 py-1 rounded-md text-sm transition-colors ${
            theme === 'dark'
              ? 'bg-primary-500 text-primary-50'
              : 'text-primary-500 hover:text-primary-900'
          }`}
        >
          🌙 Dark
        </button>
      </div>

      <input
        type="color"
        value={primaryColor}
        onChange={(e) => setPrimaryColor(e.target.value)}
        className="w-10 h-10 border rounded cursor-pointer"
      />
    </div>
  );
}