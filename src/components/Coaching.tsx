const method = [
  {
    step: "Reset",
    description:
      "Quiet the shame and self-doubt, and get honest about where you are right now.",
  },
  {
    step: "Reframe",
    description:
      "Turn your difference and your story into your strongest asset.",
  },
  {
    step: "Reposition",
    description:
      "Rebuild your brand, your voice, and your next move, whether that is your résumé, LinkedIn, your network, or a pivot you have been putting off.",
  },
  {
    step: "Relaunch",
    description:
      "Step forward with a clear, confident plan and real momentum behind you.",
  },
];

const ways = [
  {
    title: "The 90-Day Comeback",
    description:
      "A guided journey of private sessions over three months, with support in between. Best for a real transition.",
  },
  {
    title: "Single Clarity Session",
    description:
      "One focused conversation to help you get unstuck. Best when you are facing a specific decision.",
  },
  {
    title: "Groups & Workshops",
    description:
      "The Comeback Method brought to teams, ERGs, and cohorts.",
  },
];

export default function Coaching() {
  return (
    <section id="coaching" className="bg-navy py-20 sm:py-28 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="fade-in-up">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4 sm:mb-6">
            Work With Me
          </h2>

          <p className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl text-rose text-center italic mb-8 sm:mb-10">
            From surviving to becoming, with a guide who has walked it.
          </p>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            You have read the story. Now it is your turn to write yours. I coach
            people navigating reinvention, difference, and hard transitions, the
            career pivots and identity shifts that come with stepping into who
            you were always meant to be. I bring the same honesty I put on the
            page, plus the structure of a healthcare executive and PMP-certified
            project manager. Heart and a system.
          </p>

          {/* The Method */}
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-semibold text-white text-center mb-8 sm:mb-10">
            The Built Different Comeback Method
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 sm:mb-16">
            {method.map((item, index) => (
              <div
                key={item.step}
                className="bg-navy-light rounded-2xl p-6 sm:p-8 border border-rose/20"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-rose">
                    {index + 1}
                  </span>
                  <h4 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-semibold text-white">
                    {item.step}
                  </h4>
                </div>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Ways to work together */}
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-semibold text-white text-center mb-8 sm:mb-10">
            Ways We Can Work Together
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 sm:mb-16">
            {ways.map((way) => (
              <div
                key={way.title}
                className="bg-navy-light rounded-2xl p-6 sm:p-8 border border-rose/20"
              >
                <h4 className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl font-semibold text-white mb-3">
                  {way.title}
                </h4>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                  {way.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://calendly.com/apervaiz66/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-rose text-navy font-semibold rounded-full hover:bg-rose-light transition-colors duration-300 text-base sm:text-lg"
            >
              Book a Free Intro Call
            </a>
            <p className="text-white/50 text-sm mt-6">
              Not sure yet?{" "}
              <a href="#connect" className="text-rose hover:text-rose-light underline">
                Grab the free 5 Truths guide
              </a>{" "}
              and start there.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
