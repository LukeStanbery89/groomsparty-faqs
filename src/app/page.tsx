"use client";

import { useState, useEffect } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "When and where is the party?",
    answer: "The celebration will be on June 26, 2026. More details coming soon!",
  },
  {
    question: "What's the dress code?",
    answer: "Smart casual. Think comfortable but put-together.",
  },
  {
    question: "Is there a registry?",
    answer: "We're not registered - just your presence is the best gift!",
  },
  {
    question: "Can I bring a plus one?",
    answer: "Check your invitation for +1 details.",
  },
  {
    question: "What should I bring?",
    answer: "Just yourself and good vibes! We'll handle the rest.",
  },
  {
    question: "Will there be food and drinks?",
    answer: "Absolutely - food and drinks will be provided.",
  },
];

function Countdown({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 sm:gap-8 justify-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <span className="text-3xl sm:text-5xl font-light text-zinc-900">
            {value}
          </span>
          <span className="text-xs sm:text-sm text-zinc-500 uppercase tracking-wider mt-1">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQ & { isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-zinc-200">
      <button
        onClick={onToggle}
        className="w-full py-5 flex justify-between items-center text-left group"
      >
        <span className="text-base font-medium text-zinc-900 group-hover:text-zinc-700 transition-colors">
          {question}
        </span>
        <span className="ml-4 text-zinc-400 text-xl transition-transform duration-200" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '200px' : '0' }}
      >
        <p className="pb-5 text-zinc-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const targetDate = new Date("June 26, 2026 21:30:00Z"); // 4:30 PM CDT

  return (
    <div className="min-h-screen bg-white">
      <header className="py-16 sm:py-24 px-6 text-center border-b border-zinc-100">
        <h1 className="text-2xl sm:text-3xl font-light text-zinc-900 tracking-wide">
          The Grooms Party
        </h1>
        <p className="mt-3 text-zinc-500 text-sm tracking-wide uppercase">
          June 26, 2026
        </p>
      </header>

      <section className="py-12 sm:py-16 px-6 border-b border-zinc-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-sm text-zinc-400 uppercase tracking-widest mb-8">
            Countdown
          </h2>
          <Countdown targetDate={targetDate} />
        </div>
      </section>

      <section className="py-16 sm:py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-sm text-zinc-400 uppercase tracking-widest mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div>
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-zinc-100">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-zinc-400 text-sm">
            Questions? Reach out to the groom directly.
          </p>
        </div>
      </footer>
    </div>
  );
}
