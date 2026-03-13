"use client";

import { useState, useEffect, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faPlaneDeparture, faPlaneArrival, faMapMarkerAlt, faCalendar, faHouse } from "@fortawesome/free-solid-svg-icons";

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
                id: "venue",
                question: "Where is the wedding venue?",
                answer: (
                    <div>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /><strong>Hoosier Grove Barn</strong><br />
                        700 Irving Park Rd, Streamwood, IL 60107</p>
                        <a 
                            href="https://maps.app.goo.gl/dbaX1iA3eR1nX7Z38" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 mt-1 inline-block"
                        >
                            View on Google Maps
                        </a>
                    </div>
                ),
            },
            {
                id: "schedule",
                question: "What is the schedule for the day of the wedding?",
                answer: (
                    <div className="space-y-3">
                        <div>
                            <p><strong>Pre-Ceremony</strong></p>
                            <p className="text-sm"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Eaglewood Resort & Spa, Itasca, IL</p>
                            <p className="text-sm">Schedule: TBA</p>
                        </div>
                        <div>
                            <p><strong>Ceremony / Reception</strong></p>
                            <p className="text-sm"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Hoosier Grove Barn, Streamwood, IL</p>
                            <p>4:30pm - Ceremony</p>
                            <p>5:00pm-6:00pm - Cocktail hour</p>
                            <p>6:00pm-6:25pm - Guests are seated for dinner</p>
                            <p>6:25pm - Cake cutting</p>
                            <p>6:30pm-7:30pm - Dinner</p>
                            <p>7:50pm - Special dances</p>
                            <p>11:00pm - Bar closed</p>
                        </div>
                    </div>
                ),
            },
            {
                id: "getting-ready",
                question: "Where is the groom's party getting ready?",
                answer: (
                    <div>
                        <p className="mb-2">At the hotel.</p>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /><strong>Eaglewood Resort & Spa</strong><br />
                        1401 Nordic Rd, Itasca, IL 60143</p>
                        <a 
                            href="https://maps.app.goo.gl/Hf3e7N8JPWXT51f27" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 mt-1 inline-block"
                        >
                            View on Google Maps
                        </a>
                    </div>
                ),
            },
            {
                id: "rehearsal",
                question: "When is the rehearsal?",
                answer: (
                    <div>
                        <p className="mb-2"><FontAwesomeIcon icon={faCalendar} className="mr-2" />June 25th, 2026 at 5:00pm</p>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /><strong>Hoosier Grove Barn</strong><br />
                        700 Irving Park Rd, Streamwood, IL 60107</p>
                        <a 
                            href="https://maps.app.goo.gl/dbaX1iA3eR1nX7Z38" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 mt-1 inline-block"
                        >
                            View on Google Maps
                        </a>
                    </div>
                ),
            },
            {
                id: "rehearsal-dinner",
                question: "Where is the rehearsal dinner?",
                answer: (
                    <div>
                        <p className="mb-2"><FontAwesomeIcon icon={faCalendar} className="mr-2" />June 25th, 2026 at 7:00pm</p>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /><strong>TBA</strong></p>
                    </div>
                ),
            },
        ],
    },
    {
        title: "Groomsladies",
        id: "groomsladies",
        faqs: [
            {
                id: "groomsladies-tux",
                question: "Where do I get my suit?",
                answer: (
                    <div>
                        <p>Suit components are in this Amazon list:</p>
                        <a 
                            href="https://www.amazon.com/hz/wishlist/ls/33OZ0UYP25Q9" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800"
                        >
                            Amazon Wishlist
                        </a>
                        <p className="mt-2 text-sm text-zinc-500">FYI - The bow ties sold out, so I bought them myself.</p>
                        <img 
                            src="/assets/groomsladies_look.png" 
                            alt="Groomsladies outfit inspiration" 
                            className="mt-3 rounded-md max-w-full"
                        />
                    </div>
                ),
            },
            {
                id: "groomsladies-reception-attire",
                question: "What should I wear to the reception?",
                answer: (
                    <p>You are welcome to change out of your suit into a dress for the reception, but we ask that it be yellow. We want the grooms party to maintain visual cohesion even after changing out of your suits.</p>
                ),
            },
            {
                id: "groomsladies-hair-nails",
                question: "How should I do my hair and nails?",
                answer: (
                    <p>You can do your hair and nails however you like. We only ask that if you incorporate color, it does not conflict with the yellow and sage theme.</p>
                ),
            },
            {
                id: "groomsladies-makeup",
                question: "Can I use the bride's hair and makeup provider?",
                answer: (
                    <div>
                        <p>Yes, but...</p>
                        <p className="mt-2 text-sm">The bridal party will be getting ready at the venue while the grooms party gets ready at the hotel. If you want to use the same service, they will need to add another staff member to be onsite at the hotel, which will cost extra. If you want to use the same service, we can arrange it but it would be at your own expense. Just talk to Stephanie.</p>
                        <p className="mt-2"><strong>Pricing:</strong></p>
                        <p>Hair: $100</p>
                        <p>Full makeup: $100</p>
                    </div>
                ),
            },
            {
                id: "groomsladies-shoes",
                question: "What kind of shoes should I wear?",
                answer: (
                    <p>Heels are preferred. Flats are also okay, but we ask that you avoid anything casual like sneakers. Color should be neutral or yellow. Style (open toe, point, rounded, etc) is completely up to you.</p>
                ),
            },
        ],
    },
    {
        title: "Groomsmen",
        id: "groomsmen",
        faqs: [
            {
                id: "groomsmen-tux",
                question: "Where do I get my tux?",
                answer: (
                    <div>
                        <p>Use the link below to reserve your tux. You need to order online, then do your fitting at home.</p>
                        <a 
                            href="https://gentux.me/1q7rbp" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 mt-1 inline-block"
                        >
                            Reserve Your Tux
                        </a>
                        <img 
                            src="/assets/groomsmen_looks.png" 
                            alt="Groomsmen outfit inspiration" 
                            className="mt-3 rounded-md max-w-full"
                        />
                    </div>
                ),
            },
            {
                id: "groomsmen-measure",
                question: "How do I measure myself for a tux?",
                answer: (
                    <div>
                        <div className="mb-3">
                            <iframe 
                                width="100%" 
                                src="https://www.youtube.com/embed/KkiQH9msHaU" 
                                title="How to measure yourself for a tux" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                className="rounded-md w-full aspect-video"
                            />
                        </div>
                        <p><strong>Note:</strong> If you do not own a tape measure, let me know and I will buy one for you.</p>
                    </div>
                ),
            },
        ],
    },
    {
        title: "Bachelor Party",
        id: "bachelor-party",
        faqs: [
            {
                id: "bp-location",
                question: "Where are we going?",
                answer: <p><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Las Vegas, NV</p>,
            },
            {
                id: "bp-dates",
                question: "What dates will we be there?",
                answer: <p><FontAwesomeIcon icon={faCalendar} className="mr-2" />April 23-26, 2026</p>,
            },
            {
                id: "bp-flights",
                question: "How are we getting there?",
                answer: (
                    <div>
                        <p>Please note that everyone is responsible for booking their own flights. If you want to take the same flights as me, here are my flight details:</p>
                        <div className="mt-2 space-y-2">
                            <p><FontAwesomeIcon icon={faPlaneDeparture} className="mr-2" /><strong>Depart:</strong><br />
                            O'Hare Int'l Airport<br />
                            American Airlines 6:45am<br />
                            Seat 31D</p>
                            <p><FontAwesomeIcon icon={faPlaneArrival} className="mr-2" /><strong>Return:</strong><br />
                            Harry Reid Int'l Airport<br />
                            American Airlines 3:04pm<br />
                            Seat 29F</p>
                        </div>
                    </div>
                ),
            },
            {
                id: "bp-stay",
                question: "Where are we staying?",
                answer: (
                    <div>
                        <p className="mb-2"><FontAwesomeIcon icon={faHouse} className="mr-2" />6885 Coley Avenue<br />Las Vegas, NV 89146</p>
                        <a 
                            href="https://www.airbnb.com/trips/shared/878f3593-5587-4650-b5db-29be05d9475a?confCode=HMMKPH8BWX&principal_token=5f343252-5b39-49e3-806d-a48ea1271ed0&s=67&unique_share_id=5b5e87e7-285e-4223-b477-33e0436980bd" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800"
                        >
                            View Airbnb Reservation
                        </a>
                    </div>
                ),
            },
            {
                id: "bp-itinerary",
                question: "What is the itinerary?",
                answer: (
                    <div className="space-y-3">
                        <p>This itinerary is nearly final. You are welcome to opt out of any group activity you want and spend time on your own.</p>
                        <p><strong>Thursday 4/23</strong></p>
                        <p>Afternoon - Arrival<br />
                        Evening - Dinner<br />
                        Night - Explore Fremont Street</p>
                        <p><strong>Friday 4/24</strong></p>
                        <p>11:00am - Wizard of Oz at The Sphere<br />
                        Afternoon - Lunch<br />
                        7:00pm - Free Craps lesson at the Venetian<br />
                        Evening - Dinner and explore the strip</p>
                        <p><strong>Saturday 4/25</strong></p>
                        <p>Morning - Brunch<br />
                        Afternoon - Go-Karting<br />
                        Evening - Dinner<br />
                        7:00pm - Cirque du Soleil (Ka)<br />
                        Night - Explore the strip</p>
                        <p><strong>Sunday 4/26</strong></p>
                        <p>Morning - Brunch<br />
                        Afternoon - Departure</p>
                    </div>
                ),
            },
            {
                id: "bp-pay",
                question: "I owe you money. How do I pay?",
                answer: (
                    <div>
                        <p>I accept all common methods of electronic payment:</p>
                        <div className="mt-2 space-y-1">
                            <p>Venmo: <a href="https://account.venmo.com/u/Luke-Stanbery" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">@Luke-Stanbery</a></p>
                            <p>PayPal: LukeStanbery89@gmail.com</p>
                            <p>CashApp: $LukeStanbery</p>
                            <p>Zelle: (my phone number)</p>
                        </div>
                    </div>
                ),
            },
            {
                id: "bp-cash",
                question: "Can I pay you in cash?",
                answer: <p>No.</p>,
            },
        ],
    },
];

function Countdown({ targetDate }: { targetDate: string }) {
    const calculateTimeLeft = () => {
        const target = new Date(targetDate).getTime();
        const now = new Date().getTime();
        const difference = target - now;
        
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        setTimeLeft(calculateTimeLeft());
        
        const intervalId = setInterval(() => {
            setTimeLeft(prev => {
                const target = new Date(targetDate).getTime();
                const now = new Date().getTime();
                const diff = target - now;
                
                if (diff <= 0) {
                    clearInterval(intervalId);
                    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
                }
                
                return {
                    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((diff / 1000 / 60) % 60),
                    seconds: Math.floor((diff / 1000) % 60),
                };
            });
        }, 1000);
        
        return () => clearInterval(intervalId);
    }, [targetDate]);

    return (
        <div className="flex gap-4 sm:gap-8 justify-center">
            {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center">
                    <span 
                        className="text-3xl sm:text-5xl font-light text-zinc-900"
                        suppressHydrationWarning
                    >
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
                style={{ maxHeight: isOpen ? '800px' : '0' }}
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
    const targetDate = "2026-06-26T21:30:00Z";

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
                    Stanbery Grooms Party FAQs
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
