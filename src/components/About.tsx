export default function About() {
  return (
    <section id="about" className="bg-warm-white py-20 sm:py-28 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="fade-in-up">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-navy text-center mb-12 sm:mb-16">
            Meet Arzoo
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
            {/* Photo Placeholder */}
            <div className="flex-shrink-0">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-rose/40 bg-navy/5 flex items-center justify-center">
                <span className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-navy/30">
                  AP
                </span>
              </div>
            </div>

            {/* Bio Text */}
            <div className="space-y-6 text-base sm:text-lg text-navy/80 leading-relaxed">
              <p>
                Arzoo Pervaiz is a healthcare executive, PMP-certified project
                manager, and the author of Built Different: A Memoir of
                Difference, Survival, and Becoming. She holds a Master of Health
                Administration from The George Washington University and
                completed the Yale Women&apos;s Leadership Program.
              </p>
              <p>
                Living with Myotonia Congenita, a neuromuscular condition she was
                diagnosed with in 2023, Arzoo spent years masking her pain,
                hiding her difference, and performing normalcy. Her writing is
                rooted in the belief that what makes you different is what makes
                you powerful.
              </p>
              <p>
                Built Different is her mission to create a safe space for anyone
                who has ever been told they were too much and chose to keep going
                anyway.
              </p>
            </div>
          </div>

          {/* Credentials Bar */}
          <div className="mt-12 sm:mt-16 border-t border-navy/10 pt-8">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base text-navy/60 font-medium tracking-wide">
              <span>MHA from GWU</span>
              <span className="hidden sm:inline text-rose/40">|</span>
              <span>PMP Certified</span>
              <span className="hidden sm:inline text-rose/40">|</span>
              <span>Yale Women&apos;s Leadership</span>
              <span className="hidden sm:inline text-rose/40">|</span>
              <span>Published Author</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
