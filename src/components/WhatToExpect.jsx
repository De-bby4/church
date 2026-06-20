import { useState } from "react";

export default function WhatToExpect() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  const ITEMS = [
    {
      question: "What should I wear?",
      answer: "Whatever you're comfortable in — there's no dress code. Some come in jeans, some dress up. Just come as you are.",
    },
    {
      question: "How long is service?",
      answer: "About two hours on Sunday (4–6 PM) and ninety minutes on Wednesday (7–8:30 PM). Enough time to worship, hear the Word, and connect.",
    },
    {
      question: "What about my kids?",
      answer: "We've got them covered! Children's Church runs every Sunday with safe, fun, age-appropriate programming while you worship.",
    },
    {
      question: "I'm new — will I feel welcome?",
      answer: "Absolutely. We're a warm, friendly community and we love meeting new people. No one will put you on the spot — just come and be yourself.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28 px-6 md:px-10">
      <div style={{ maxWidth: "750px", margin: "0 auto" }}>
        <div className="text-center pb-6">
          <p className="text-brand text-[12px] font-bold tracking-[3px] uppercase mb-3">
            First Time?
          </p>
          <h2 className="font-display font-bold text-ink leading-[1.1] tracking-tight text-[clamp(28px,4vw,42px)] mb-4">
            What to expect when you visit
          </h2>
          <p className="text-subtle text-[16px] leading-[1.5]" style={{ maxWidth: "520px", margin: "0 auto" }}>
            We know visiting a new church can feel like a big step.
            Here's what you need to know.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.question}
                className="bg-surface border border-line rounded-xl overflow-hidden shadow-soft"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-display font-semibold text-ink text-[16px]">
                    {item.question}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#c8102e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div
                  className="transition-all duration-300 overflow-hidden"
                  style={{ maxHeight: isOpen ? "200px" : "0", opacity: isOpen ? 1 : 0 }}
                >
                  <p className="px-6 pb-5 text-subtle text-[14.5px] leading-[1.75]">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}