import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Animation from "./Animation";

const faqs = [
  {
    question: "Is Scooby available in all cities?",
    answer:
      "Currently, we are available in major metro cities across India. We're expanding rapidly — stay tuned!",
  },
  {
    question: "Are your pets certified?",
    answer:
      "Yes! All our pets are government-registered and verified by our internal quality team.",
  },
  {
    question: "What if my pet doesn’t like the food?",
    answer:
      "No worries! We have a 3-day replacement guarantee for unused items. Your pet’s happiness is our priority.",
  },
  {
    question: "Can I cancel a subscription anytime?",
    answer:
      "Absolutely. You can manage, pause, or cancel your subscription anytime through your dashboard.",
  },
  {
    question: "How do I book a grooming session?",
    answer:
      "Just head to the Grooming section and choose a slot. Our experts will visit your home at your chosen time.",
  },
];

const FAQsAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="relative py-20 px-6 md:px-14 bg-gradient-to-b from-[#fff8f2] to-[#f5e8dc] overflow-hidden">
      <div className="absolute -top-16 left-0 h-56 w-56 rounded-full bg-[#ffbe99]/20 blur-3xl" />
      <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-[#ff7d4e]/15 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Animation variant="dissolveDown">
            <p className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/90 border border-[#ffd8c3] text-sm font-semibold text-[#c76539] mb-4">
              Need Help?
            </p>
          </Animation>
          <Animation variant="dissolveUp" delay={60}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#5A3B1F] mb-4">
              Frequently Asked Questions
            </h2>
          </Animation>
          <Animation variant="dissolveUp" delay={120}>
            <p className="text-[#7c5a3b] max-w-2xl mx-auto leading-relaxed">
              Got pawsitive doubts? Here are quick answers to the questions pet
              parents ask us most.
            </p>
          </Animation>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <Animation key={index} variant="liftIn" delay={index * 80}>
                <div
                  className={`rounded-2xl border bg-white/95 backdrop-blur-sm shadow-[0_10px_30px_rgba(125,66,35,0.10)] transition-all duration-300 ${
                    isOpen
                      ? "border-[#f0b995] shadow-[0_16px_34px_rgba(125,66,35,0.18)]"
                      : "border-[#ecd8c8] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(125,66,35,0.14)]"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="w-full flex justify-between items-center gap-5 px-6 py-5 text-left"
                  >
                    <span className="text-[#5A3B1F] font-semibold text-base md:text-lg">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                        isOpen
                          ? "border-[#f0bf9e] bg-[#fff1e7] text-[#c96a3a]"
                          : "border-[#ecd8c8] bg-white text-[#8d674a]"
                      }`}
                    >
                      {isOpen ? <FaChevronUp size={15} /> : <FaChevronDown size={15} />}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm md:text-[15px] leading-relaxed text-[#6d4a30]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Animation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQsAccordion;
