import React, { useEffect, useRef, useState } from "react";

const CountUpNumber = ({ target, suffix = "", duration = 1600 }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const numberRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (numberRef.current) observer.observe(numberRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let frameId;
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(target * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(updateCount);
      }
    };

    frameId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(frameId);
  }, [started, target, duration]);

  return (
    <p ref={numberRef} className="text-2xl font-extrabold text-[#5A3B1F]">
      {count}
      {suffix}
    </p>
  );
};

const AboutUs = () => {
  const aboutImages = [
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=1400&q=80",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % aboutImages.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [aboutImages.length]);

  return (
    <section className="relative py-20 px-6 md:px-14 bg-gradient-to-b from-[#f7ede4] to-[#fff8f2] overflow-hidden">
      <div className="absolute -top-16 -left-12 w-48 h-48 rounded-full bg-[#ffb58f]/20 blur-3xl" />
      <div className="absolute -bottom-20 right-0 w-64 h-64 rounded-full bg-[#ff7d4e]/15 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/90 border border-[#ffd9c4] text-sm font-semibold text-[#c76539] mb-4">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#5A3B1F] leading-tight mb-6">
            About Scooby
          </h2>

          <p className="text-[#6b4a2e] text-lg leading-relaxed mb-5">
            At <span className="font-semibold">Scooby</span>, we believe pets
            are family. We built a platform that delivers trusted, loving, and
            professional pet care services right to your doorstep.
          </p>
          <p className="text-[#7d5b40] text-base leading-relaxed mb-8">
            From grooming and vet consultations to healthy treats, we ensure
            every pet gets the care they deserve. Our mission is simple: make
            every pet feel healthy, happy, and loved.
          </p>

          <div className="grid grid-cols-2 gap-4 max-w-md">
            <div className="rounded-xl border border-[#ecd8c9] bg-white/90 p-4">
              <CountUpNumber target={5000} suffix="+" />
              <p className="text-sm text-[#7d5b40]">Happy Pets</p>
            </div>
            <div className="rounded-xl border border-[#ecd8c9] bg-white/90 p-4">
              <CountUpNumber target={20} suffix="+" />
              <p className="text-sm text-[#7d5b40]">Cities Covered</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#ffd8c1] to-[#ffe8da] opacity-70 blur-md" />
          <div className="relative h-[320px] md:h-[420px] w-full rounded-[2rem] border border-[#e8d7c8] bg-[#f8f5f2] p-3 shadow-[0_18px_45px_rgba(117,70,40,0.16)] overflow-hidden">
            <img
              src={aboutImages[currentImageIndex]}
              alt="Dogs and cats"
              className="h-full w-full rounded-[1.4rem] object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
