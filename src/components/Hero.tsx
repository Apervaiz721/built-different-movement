export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-navy-light opacity-80" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
          You&apos;re not broken.
          <br />
          <span className="text-white">You&apos;re </span>
          <span className="text-rose">Built Different.</span>
        </h1>

        <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-body)]">
          A movement for everyone who was told they were too much and chose to
          keep going anyway.
        </p>

        <a
          href="#connect"
          className="inline-block mt-8 sm:mt-10 px-8 sm:px-10 py-3.5 sm:py-4 bg-rose text-navy font-semibold text-base sm:text-lg rounded-full hover:bg-rose-light transition-colors duration-300 tracking-wide"
        >
          Join the Movement
        </a>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
