"use client";

const affirmations = [
  "They called it sensitive. They called it defensive. I call it survival.",
  "The mask is off. And what's underneath was always enough.",
  "You were never too much. You were always just right.",
  "Your body is not the problem. It never was.",
  "What's broken becomes beautiful.",
];

function AffirmationCard({ quote }: { quote: string }) {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[360px] bg-white rounded-2xl shadow-lg shadow-navy/5 p-8 border border-navy/5">
      <div className="text-rose text-4xl font-[family-name:var(--font-playfair)] leading-none mb-3">
        &ldquo;
      </div>
      <p className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl text-navy italic leading-relaxed">
        {quote}
      </p>
      <p className="mt-6 text-sm text-navy/50 tracking-wide">
        Arzoo Pervaiz, <span className="italic">Built Different</span>
      </p>
    </div>
  );
}

export default function Affirmations() {
  // Duplicate the array for seamless infinite scroll
  const doubled = [...affirmations, ...affirmations];

  return (
    <section className="bg-warm-white py-20 sm:py-28 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
        <div className="fade-in-up">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-navy text-center">
            Words to Carry With You
          </h2>
        </div>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-warm-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-warm-white to-transparent z-10 pointer-events-none" />

        <div className="no-scrollbar">
          <div className="affirmations-track">
            {doubled.map((quote, i) => (
              <AffirmationCard key={i} quote={quote} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
