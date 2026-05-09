const topics = [
  {
    title: "Resilience and Identity",
    description:
      "Growing up feeling different, learning to own your story, and turning pain into purpose.",
  },
  {
    title: "Disability Advocacy",
    description:
      "Navigating life with a neuromuscular condition, the power of visibility, and why representation matters.",
  },
  {
    title: "Mental Health and Healing",
    description:
      "The journey of therapy, the courage it takes to be vulnerable, and what it really means to do the work.",
  },
];

export default function Speaking() {
  return (
    <section id="speaking" className="bg-navy py-20 sm:py-28 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="fade-in-up">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-6 sm:mb-8">
            Invite Arzoo to Speak
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            Arzoo is passionate about sharing her story and would love to
            connect with conferences, corporate ERGs, universities, and
            community events. She is open to speaking on topics around
            resilience, identity, disability advocacy, and the power of owning
            your story.
          </p>

          {/* Topic Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 sm:mb-16">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="bg-navy-light rounded-2xl p-6 sm:p-8 border border-rose/20"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-semibold text-white mb-3">
                  {topic.title}
                </h3>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="mailto:apervaiz66@gmail.com?subject=Speaking%20Inquiry%20--%20Built%20Different%20Movement"
              className="inline-block px-10 py-4 bg-rose text-navy font-semibold rounded-full hover:bg-rose-light transition-colors duration-300 text-base sm:text-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
