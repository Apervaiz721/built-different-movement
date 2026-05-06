export default function Story() {
  return (
    <section id="story" className="bg-warm-white py-20 sm:py-28 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="fade-in-up">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-navy text-center mb-8 sm:mb-12">
            This Is More Than a Book
          </h2>

          <div className="space-y-6 text-base sm:text-lg text-navy/80 leading-relaxed max-w-3xl mx-auto">
            <p>
              Built Different started as one woman&apos;s story. A memoir about
              growing up feeling different, hiding behind a mask, and learning
              that what made her different was what made her powerful.
            </p>
            <p>
              Now it&apos;s becoming something bigger. A movement. A community. A
              safe space for anyone who&apos;s ever been told their pain was their
              personality.
            </p>
          </div>

          <div className="mt-12 sm:mt-16 border-l-4 border-rose pl-6 sm:pl-8 py-4 max-w-2xl mx-auto">
            <blockquote className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl md:text-3xl italic text-navy leading-relaxed">
              &ldquo;That is not anger. That is survival.&rdquo;
            </blockquote>
            <cite className="block mt-4 text-sm sm:text-base text-navy/60 not-italic tracking-wide">
              Arzoo Pervaiz
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
