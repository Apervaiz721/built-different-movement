"use client";

import { useState, useEffect } from "react";

interface Subscriber {
  email: string;
  date: string;
  source?: string;
}

export default function SubscribersPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [count, setCount] = useState<number | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://arzoo.zanpervaiz.com/api/public/subscribers")
      .then((res) => res.json())
      .then((data) => {
        setSubscribers(data.subscribers || []);
        setCount(data.count ?? data.subscribers?.length ?? 0);
      })
      .catch(() => {
        setError(true);
        // Fallback to count-only endpoint
        fetch("https://arzoo.zanpervaiz.com/api/public/subscriber-count")
          .then((res) => res.json())
          .then((data) => {
            setCount(data.count);
            setError(false);
          })
          .catch(() => setError(true));
      });
  }, []);

  return (
    <div className="min-h-screen bg-navy py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white mb-2">
            Built Different Movement
          </h1>
          <h2 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl text-rose mb-8">
            Newsletter Subscribers
          </h2>

          <div className="bg-navy-light rounded-2xl p-8 sm:p-10 border border-rose/20 inline-block mb-4">
            {error && count === null ? (
              <p className="text-white/60 text-lg">Unable to load</p>
            ) : count === null ? (
              <p className="text-white/60 text-lg">Loading...</p>
            ) : (
              <span className="font-[family-name:var(--font-playfair)] text-6xl sm:text-7xl font-bold text-rose">
                {count}
              </span>
            )}
          </div>
          <p className="text-white/50 text-sm sm:text-base">
            You receive an email notification each time someone subscribes.
          </p>
        </div>

        {subscribers.length > 0 && (
          <div className="bg-navy-light rounded-2xl border border-rose/20 overflow-hidden mb-10">
            <div className="px-6 py-4 border-b border-rose/10">
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-white">
                All Subscribers
              </h3>
            </div>
            <div className="divide-y divide-rose/10">
              {[...subscribers].reverse().map((sub, i) => (
                <div key={i} className="px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="text-white text-sm sm:text-base font-medium">
                    {sub.email}
                  </span>
                  <span className="text-white/40 text-xs sm:text-sm">
                    {new Date(sub.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center">
          <a
            href="/"
            className="inline-block px-8 py-3.5 bg-rose text-navy font-semibold rounded-full hover:bg-rose-light transition-colors duration-300"
          >
            Back to Site
          </a>
        </div>
      </div>
    </div>
  );
}
