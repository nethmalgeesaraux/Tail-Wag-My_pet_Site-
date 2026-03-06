import React, { useEffect, useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Animation from "./Animation";

const testimonials = [
  {
    name: "Anjali Sharma",
    role: "Dog Mom",
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=500&q=80",
    feedback:
      "Scooby is a blessing. My dog loves their grooming service, and I have never seen him so excited for a bath.",
  },
  {
    name: "Rahul Desai",
    role: "Pet Parent",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=500&q=80",
    feedback:
      "Their vet consultation was smooth and professional. The doctor was kind, knowledgeable, and very clear.",
  },
  {
    name: "Sneha Iyer",
    role: "Cat Mom",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=500&q=80",
    feedback:
      "Pet food delivery is always on time and quality is top-notch. My cat absolutely loves the treats.",
  },
  {
    name: "Arjun Patel",
    role: "Puppy Dad",
    image:
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=500&q=80",
    feedback:
      "The training team is excellent. My puppy learned basic commands quickly and became more confident.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative py-20 px-6 md:px-14 bg-gradient-to-b from-[#fff7f1] to-[#f7ede4] overflow-hidden">
      <div className="absolute -top-16 right-0 w-64 h-64 rounded-full bg-[#ffb189]/20 blur-3xl" />
      <div className="absolute -bottom-20 left-0 w-64 h-64 rounded-full bg-[#ff7d4e]/15 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <Animation variant="dissolveDown">
            <p className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/90 border border-[#ffd5bf] text-sm font-semibold text-[#c86436] mb-4">
              Trusted Reviews
            </p>
          </Animation>
          <Animation variant="dissolveUp" delay={60}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#5A3B1F] mb-4">
              What Pet Parents Say
            </h2>
          </Animation>
          <Animation variant="dissolveUp" delay={120}>
            <p className="text-[#7c5a3b] max-w-2xl mx-auto leading-relaxed">
              Real stories from happy customers who experienced Scooby care with
              love, safety, and reliability.
            </p>
          </Animation>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
          {testimonials.map((_, index) => {
            const current = testimonials[(index + activeIndex) % testimonials.length];

            return (
              <Animation key={index} variant="liftIn" delay={index * 100}>
                <div className="group relative rounded-2xl border border-[#ecd8c8] bg-white/95 backdrop-blur-sm p-7 shadow-[0_10px_30px_rgba(125,66,35,0.10)] hover:-translate-y-1.5 hover:shadow-[0_16px_34px_rgba(125,66,35,0.18)] transition-all duration-300">
                  <FaQuoteLeft className="text-[#e3c8b2] text-3xl absolute top-5 right-5 opacity-60" />

                  <div className="flex text-[#f3a63a] gap-1 mb-4">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  <p className="text-[#5e3e28] leading-relaxed mb-6">
                    "{current.feedback}"
                  </p>

                  <div className="flex items-center gap-3">
                    <img
                      src={current.image}
                      alt={`${current.name} pet`}
                      className="w-11 h-11 rounded-full object-cover border border-[#ffd8c4] shadow-sm"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <p className="text-[#5A3B1F] font-semibold leading-tight">
                        {current.name}
                      </p>
                      <p className="text-xs text-[#8d674a]">{current.role}</p>
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

export default Testimonials;
