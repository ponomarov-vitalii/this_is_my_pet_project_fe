export function getDefaultPrimaryShades() {
  if (typeof document === 'undefined') return {};
  const root = getComputedStyle(document.documentElement);
  const shades: Record<string, string> = {};
  const shadeNumbers = [50,100,200,300,400,500,600,700,800,900,950];
  shadeNumbers.forEach(num => {
    shades[`--primary-${num}`] = root.getPropertyValue(`--primary-${num}`).trim();
  });
  return shades;
}

export function generateShades(base: string) {
  const shades: Record<string, string> = {};
  const shadeNumbers = [50,100,200,300,400,500,600,700,800,900,950];
  const percents = [95,80,65,50,35,20,0,-15,-30,-45,-55]; 
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

export function applyShadesForTheme(shades: Record<string, string>, theme: 'light'|'dark') {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  const shadeNumbers = [50,100,200,300,400,500,600,700,800,900,950];
  const arr = theme === 'dark' ? [...shadeNumbers].reverse() : shadeNumbers;
  arr.forEach((num, idx) => {
    root.style.setProperty(`--primary-${shadeNumbers[idx]}`, shades[`--primary-${num}`]);
  });
}
