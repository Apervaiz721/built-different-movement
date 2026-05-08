const books = [
  {
    title: "Built Different: A Memoir",
    description:
      "The story that started it all. A raw, honest journey through bullying, chronic illness, identity, and the power of being unapologetically yourself.",
    available: true,
    coverImage: "/images/book-1-cover.jpg",
    links: [
      { label: "Amazon", href: "https://www.amazon.com/dp/B0GYJRFY87" },
      {
        label: "Barnes & Noble",
        href: "https://www.barnesandnoble.com/w/built-different-arzoo-pervaiz/1150005697?ean=9798256337476",
      },
    ],
  },
  {
    title: "Built Different: The Workbook & Guide",
    description:
      "Your turn to do the work. A guided companion to help you unpack your story, reclaim your truth, and step into who you were always meant to be.",
    available: false,
    coverImage: null,
    links: [{ label: "Get Notified", href: "#connect" }],
  },
];

export default function Books() {
  return (
    <section id="books" className="bg-warm-white py-20 sm:py-28 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="fade-in-up">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-navy text-center mb-12 sm:mb-16">
            The Books
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {books.map((book) => (
              <div
                key={book.title}
                className="bg-white rounded-2xl shadow-lg shadow-navy/5 p-8 sm:p-10 flex flex-col border border-navy/5 hover:shadow-xl hover:shadow-navy/10 transition-shadow duration-300"
              >
                {/* Book cover image or placeholder */}
                {book.coverImage ? (
                  <div className="mb-6">
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="w-32 h-auto rounded-lg shadow-md object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-20 bg-navy/5 rounded-lg mb-6 flex items-center justify-center">
                    <svg
                      className="w-8 h-10 text-navy/30"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM4 18V6h7v12H4zm9 0V6h7v12h-7z" />
                    </svg>
                  </div>
                )}

                {!book.available && (
                  <span className="inline-block self-start bg-sage/20 text-sage px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                    Coming Soon
                  </span>
                )}

                <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold text-navy mb-4">
                  {book.title}
                </h3>

                <p className="text-navy/70 leading-relaxed mb-8 flex-1">
                  {book.description}
                </p>

                <div className={`flex flex-wrap gap-3 ${book.available ? "" : ""}`}>
                  {book.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("#") ? undefined : "_blank"}
                      rel={link.href.startsWith("#") ? undefined : "noopener noreferrer"}
                      className={`inline-block text-center px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${
                        book.available
                          ? "bg-navy text-white hover:bg-navy-light"
                          : "bg-rose text-navy hover:bg-rose-light"
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
