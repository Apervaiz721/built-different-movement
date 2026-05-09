const topics = [
  {
    title: "Resilience and Identity",
    description:
      "What it means to grow up feeling different and how to turn pain into purpose.",
  },
  {
    title: "Disability Advocacy",
    description:
      "Living with a neuromuscular condition, navigating healthcare, and the power of visibility.",
  },
  {
    title: "Mental Health and Healing",
    description:
      "Breaking the stigma around therapy, vulnerability, and doing the work.",
  },
];

export default function Speaking() {
  return (
    <section id="speaking" className="bg-navy py-20 sm:py-28 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="fade-in-up">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-6 sm:mb-8">
            Book Arzoo to Speak
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            Arzoo shares her story at conferences, corporate ERGs, universities,
            and community events. Her talks center on resilience, identity,
            disability advocacy, and the power of owning your story.
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
              Book Arzoo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
