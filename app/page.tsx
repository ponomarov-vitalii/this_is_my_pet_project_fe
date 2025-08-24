import ThemeCustomizer from '../components/ThemeCustomizer/ThemeCustomizer';

export default function Home() {
  

  return (
    <div className="min-h-screen bg-primary-50 text-primary-900 transition-colors duration-300">
      {/* Header */}
      <header className="border-b border-primary-200 bg-primary-100 min-h-[72px]">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-primary-50 font-bold text-sm">N</span>
            </div>
            <h1 className="text-xl font-bold text-primary-900">NewsFlow</h1>
          </div>
          <ThemeCustomizer />
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">
          Dynamic Primary Color & Theme
        </h1>
        <p className="text-primary-500 mb-4">
          Pick a primary color and switch between light/dark mode. Shades will be generated automatically.
        </p>
        <button className="bg-primary-500 text-primary-50 px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
          Example Button
        </button>
      </main>
    </div>
  );
}
