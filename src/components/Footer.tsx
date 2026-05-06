export default function Footer() {
  return (
    <footer className="bg-navy border-t border-sage/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex flex-col leading-tight">
              <span className="font-[family-name:var(--font-playfair)] text-white text-lg font-bold tracking-wider">
                BUILT DIFFERENT
              </span>
              <span className="text-sage text-xs tracking-[0.3em] uppercase">
                Movement
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 sm:gap-8">
            <a
              href="#books"
              className="text-white/60 hover:text-sage transition-colors text-sm"
            >
              Books
            </a>
            <a
              href="#movement"
              className="text-white/60 hover:text-sage transition-colors text-sm"
            >
              The Movement
            </a>
            <a
              href="#connect"
              className="text-white/60 hover:text-sage transition-colors text-sm"
            >
              Connect
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            &copy; 2026 The Built Different Movement. All rights reserved.
          </p>
          <p className="text-sage/60 text-sm mt-1">
            Created by Arzoo Pervaiz
          </p>
        </div>
      </div>
    </footer>
  );
}
