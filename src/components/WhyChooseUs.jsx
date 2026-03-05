import React from "react";
import { FaUserMd, FaRegSmile, FaTruck, FaShieldAlt } from "react-icons/fa";

const reasons = [
  {
    icon: <FaUserMd size={30} />,
    title: "Certified Vets",
    desc: "Your pet's health is in trusted, expert hands with verified veterinarians for every need.",
  },
  {
    icon: <FaRegSmile size={30} />,
    title: "5000+ Happy Pets",
    desc: "Thousands of wagging tails and purring friends. Trusted by pet parents across India.",
  },
  {
    icon: <FaTruck size={30} />,
    title: "Fast and Reliable Delivery",
    desc: "On-time doorstep delivery of pet food, grooming kits, and accessories in 20+ cities.",
  },
  {
    icon: <FaShieldAlt size={30} />,
    title: "Safe and Verified Services",
    desc: "Background-verified staff and vet-approved products. Your pet's safety is our priority.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-20 px-6 md:px-14 bg-gradient-to-b from-[#f9efe6] to-[#fff9f4] overflow-hidden">
      <div className="absolute top-0 left-0 w-56 h-56 bg-[#ffb58f]/20 blur-3xl rounded-full -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#ff7d4e]/15 blur-3xl rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/90 border border-[#ffd8c2] text-sm font-semibold text-[#c76539] mb-4">
            Why Pet Parents Trust Us
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#5A3B1F] mb-4">
            Why Choose Scooby?
          </h2>
          <p className="text-[#7c5a3b] max-w-2xl mx-auto leading-relaxed">
            We go beyond basic pet care to deliver safety, speed, and expert
            support for every tail wag and happy moment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-[#ecd7c6] bg-white/95 backdrop-blur-sm p-6 text-center shadow-[0_10px_25px_rgba(117,70,40,0.12)] hover:-translate-y-1.5 hover:shadow-[0_16px_34px_rgba(117,70,40,0.20)] transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-[#fff1e7] border border-[#ffd8c3] flex items-center justify-center mb-5 text-[#8B4513] shadow-md group-hover:bg-[#ffe9dc] transition-colors duration-300">
                {reason.icon}
              </div>

              <h3 className="text-lg font-bold text-[#5A3B1F] mb-2">
                {reason.title}
              </h3>
              <p className="text-[#6b4a2e] text-sm leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
