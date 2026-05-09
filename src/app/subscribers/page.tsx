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

  // Newsletter compose state
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [sending, setSending] = useState(false);
  const [sendResult, setSendResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [showCompose, setShowCompose] = useState(false);

  useEffect(() => {
    fetch("https://arzoo.zanpervaiz.com/api/public/subscribers")
      .then((res) => res.json())
      .then((data) => {
        setSubscribers(data.subscribers || []);
        setCount(data.count ?? data.subscribers?.length ?? 0);
      })
      .catch(() => {
        setError(true);
        fetch("https://arzoo.zanpervaiz.com/api/public/subscriber-count")
          .then((res) => res.json())
          .then((data) => {
            setCount(data.count);
            setError(false);
          })
          .catch(() => setError(true));
      });
  }, []);

  const handleSendNewsletter = async () => {
    if (!subject.trim() || !body.trim()) return;

    const confirmed = window.confirm(
      `Send this newsletter to ${count} subscriber${count !== 1 ? "s" : ""}?\n\nSubject: ${subject}`
    );
    if (!confirmed) return;

    setSending(true);
    setSendResult(null);

    try {
      const res = await fetch(
        "https://arzoo.zanpervaiz.com/api/public/send-newsletter",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            subject,
            body,
            adminKey: "builtdifferent2026",
          }),
        }
      );
      const data = await res.json();

      if (data.success) {
        setSendResult({
          success: true,
          message: `Newsletter sent to ${data.sent} subscriber${data.sent !== 1 ? "s" : ""}${data.failed ? ` (${data.failed} failed)` : ""}.`,
        });
        setSubject("");
        setBody("");
        setShowCompose(false);
      } else {
        setSendResult({
          success: false,
          message: data.error || "Something went wrong.",
        });
      }
    } catch {
      setSendResult({
        success: false,
        message: "Could not connect to the server.",
      });
    } finally {
      setSending(false);
    }
  };

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

        {/* Send Result Banner */}
        {sendResult && (
          <div
            className={`mb-8 rounded-2xl p-5 text-center text-sm sm:text-base font-medium ${
              sendResult.success
                ? "bg-sage/20 text-sage border border-sage/30"
                : "bg-red-500/20 text-red-300 border border-red-500/30"
            }`}
          >
            {sendResult.message}
          </div>
        )}

        {/* Subscriber List */}
        {subscribers.length > 0 && (
          <div className="bg-navy-light rounded-2xl border border-rose/20 overflow-hidden mb-10">
            <div className="px-6 py-4 border-b border-rose/10">
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-white">
                All Subscribers
              </h3>
            </div>
            <div className="divide-y divide-rose/10">
              {[...subscribers].reverse().map((sub, i) => (
                <div
                  key={i}
                  className="px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
                >
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

        {/* Newsletter Compose */}
        {!showCompose ? (
          <div className="text-center mb-10">
            <button
              onClick={() => setShowCompose(true)}
              disabled={count === 0}
              className={`inline-block px-10 py-4 font-semibold rounded-full transition-colors duration-300 text-base sm:text-lg ${
                count === 0
                  ? "bg-white/10 text-white/30 cursor-not-allowed"
                  : "bg-rose text-navy hover:bg-rose-light"
              }`}
            >
              Send a Newsletter
            </button>
            {count === 0 && (
              <p className="text-white/30 text-sm mt-3">
                You will be able to send newsletters once you have subscribers.
              </p>
            )}
          </div>
        ) : (
          <div className="bg-navy-light rounded-2xl border border-rose/20 p-6 sm:p-8 mb-10">
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-white mb-6">
              Compose Newsletter
            </h3>

            <div className="space-y-5">
              <div>
                <label className="block text-white/60 text-sm mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. A Note from Arzoo"
                  className="w-full px-4 py-3 bg-navy border border-rose/20 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-rose/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-white/60 text-sm mb-2 font-medium">
                  Message
                </label>
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="Write your newsletter here..."
                  rows={8}
                  className="w-full px-4 py-3 bg-navy border border-rose/20 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-rose/50 transition-colors resize-y leading-relaxed"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleSendNewsletter}
                  disabled={sending || !subject.trim() || !body.trim()}
                  className={`flex-1 px-8 py-3.5 font-semibold rounded-full transition-colors duration-300 ${
                    sending || !subject.trim() || !body.trim()
                      ? "bg-white/10 text-white/30 cursor-not-allowed"
                      : "bg-rose text-navy hover:bg-rose-light"
                  }`}
                >
                  {sending ? "Sending..." : `Send to ${count} Subscriber${count !== 1 ? "s" : ""}`}
                </button>
                <button
                  onClick={() => {
                    setShowCompose(false);
                    setSendResult(null);
                  }}
                  className="px-8 py-3.5 border border-white/20 text-white/60 font-semibold rounded-full hover:border-white/40 hover:text-white/80 transition-colors duration-300"
                >
                  Cancel
                </button>
              </div>
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
