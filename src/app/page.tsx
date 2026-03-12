"use client";

import { useState, useEffect, ReactNode } from "react";

interface FAQ {
    id: string;
    question: string;
    answer: ReactNode;
}

interface FAQSection {
    title: string;
    id: string;
    faqs: FAQ[];
}

const sections: FAQSection[] = [
    {
        title: "General",
        id: "general",
        faqs: [
            {
                id: "when-where",
                question: "When and where is the party?",
                answer: <>The celebration will be on June 26, 2026. More details coming soon!</>,
            },
            {
                id: "dress-code",
                question: "What's the dress code?",
                answer: <>Smart casual. Think comfortable but put-together.</>,
            },
            {
                id: "registry",
                question: "Is there a registry?",
                answer: <>We're not registered - just your presence is the best gift!</>,
            },
            {
                id: "plus-one",
                question: "Can I bring a plus one?",
                answer: <>Check your invitation for +1 details.</>,
            },
            {
                id: "what-to-bring",
                question: "What should I bring?",
                answer: <>Just yourself and good vibes! We'll handle the rest.</>,
            },
            {
                id: "food-drinks",
                question: "Will there be food and drinks?",
                answer: <>Absolutely - food and drinks will be provided.</>,
            },
        ],
    },
    {
        title: "Groomsladies",
        id: "groomsladies",
        faqs: [
            {
                id: "groomsladies-attire",
                question: "What should I wear?",
                answer: <>Details coming soon!</>,
            },
            {
                id: "groomsladies-schedule",
                question: "What's the schedule for the day?",
                answer: <>Details coming soon!</>,
            },
        ],
    },
    {
        title: "Groomsmen",
        id: "groomsmen",
        faqs: [
            {
                id: "groomsmen-attire",
                question: "What should I wear?",
                answer: <>Details coming soon!</>,
            },
            {
                id: "groomsmen-schedule",
                question: "What's the schedule for the day?",
                answer: <>Details coming soon!</>,
            },
        ],
    },
];

function Countdown({ targetDate }: { targetDate: Date; }) {
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

function FAQItem({ id, question, answer, isOpen, onToggle }: FAQ & { isOpen: boolean; onToggle: () => void; }) {
    return (
        <div id={id} className="border-b border-zinc-200 scroll-mt-8">
            <button
                onClick={onToggle}
                className="w-full py-4 flex justify-between items-center text-left group"
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
                style={{ maxHeight: isOpen ? '500px' : '0' }}
            >
                <div className="pb-5 text-zinc-600 leading-relaxed">{answer}</div>
            </div>
        </div>
    );
}

function FAQSectionComponent({
    title,
    id,
    faqs,
    openId,
    onToggle
}: FAQSection & { openId: string | null; onToggle: (faqId: string) => void; }) {
    return (
        <section id={id} className="py-10 sm:py-12 px-6">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-sm text-zinc-400 uppercase tracking-widest mb-8 text-center">
                    {title}
                </h2>
                <div>
                    {faqs.map((faq) => (
                        <FAQItem
                            key={faq.id}
                            id={faq.id}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openId === faq.id}
                            onToggle={() => onToggle(faq.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    const [openFaqId, setOpenFaqId] = useState<string | null>(null);
    const targetDate = new Date("June 26, 2026 21:30:00Z");

    useEffect(() => {
        const hash = window.location.hash.slice(1);
        if (hash) {
            for (const section of sections) {
                const faq = section.faqs.find(f => f.id === hash);
                if (faq) {
                    setOpenFaqId(hash);
                    setTimeout(() => {
                        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                    break;
                }
            }
        }
    }, []);

    const handleToggle = (faqId: string) => {
        const newOpenId = openFaqId === faqId ? null : faqId;
        setOpenFaqId(newOpenId);
        if (newOpenId !== null) {
            window.history.pushState(null, "", `#${newOpenId}`);
        } else {
            window.history.pushState(null, "", window.location.pathname);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <header className="py-12 sm:py-16 px-6 text-center border-b border-zinc-100">
                <img src="/assets/icon_200.png" alt="Bowtie" className="w-24 h-24 mx-auto mb-4" />
                <h1 className="text-2xl sm:text-3xl font-light text-zinc-900 tracking-wide">
                    The Grooms Party
                </h1>
                <p className="mt-3 text-zinc-500 text-sm tracking-wide uppercase">
                    June 26, 2026
                </p>
            </header>

            <section className="py-8 sm:py-10 px-6 border-b border-zinc-100">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-sm text-zinc-400 uppercase tracking-widest mb-8">
                        Countdown
                    </h2>
                    <Countdown targetDate={targetDate} />
                </div>
            </section>

            <section className="py-8 px-6 border-b border-zinc-100 bg-zinc-50">
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-zinc-600 mb-3">Visit our wedding website for more details</p>
                    <a 
                        href="https://theknot.com/stanbery" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-2 bg-zinc-900 text-white text-sm font-medium rounded-full hover:bg-zinc-700 transition-colors"
                    >
                        The Knot
                    </a>
                </div>
            </section>

            {sections.map((section) => (
                <FAQSectionComponent
                    key={section.id}
                    {...section}
                    openId={openFaqId}
                    onToggle={handleToggle}
                />
            ))}

            <footer className="py-8 px-6 border-t border-zinc-100">
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-zinc-400 text-sm">
                        Questions? Reach out to the groom directly.
                    </p>
                </div>
            </footer>
        </div>
    );
}
