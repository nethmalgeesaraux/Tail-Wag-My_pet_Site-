import React from "react";
import { GiDogHouse, GiSittingDog, GiDogBowl } from "react-icons/gi";
import { FaUserMd, FaPaw, FaTruck } from "react-icons/fa";
import Animation from "./Animation";

const petServices = [
  {
    icon: <GiDogHouse size={40} />,
    title: "Pet Boarding",
    desc: "Safe and comfortable home for your pets when you're away.",
  },
  {
    icon: <FaUserMd size={40} />,
    title: "Vet Consultation",
    desc: "Expert vet support for your pet's health & wellness.",
  },
  {
    icon: <GiDogBowl size={40} />,
    title: "Pet Food Delivery",
    desc: "Nutritious food & treats delivered to your doorstep.",
  },
  {
    icon: <GiSittingDog size={40} />,
    title: "Pet Training",
    desc: "Professional training to keep your pet well-behaved.",
  },
  {
    icon: <FaPaw size={40} />,
    title: "Grooming Services",
    desc: "Bathing, trimming & pampering sessions for your furry friend.",
  },
  {
    icon: <FaTruck size={40} />,
    title: "Quick Delivery",
    desc: "Fast, hassle-free service at your convenience.",
  },
];

const Services = () => {
  return (
    <section className="relative py-20 px-6 md:px-14 bg-gradient-to-b from-[#fff7f1] to-[#f7ede4] overflow-hidden">
      <div className="absolute -top-12 -left-12 w-40 h-40 rounded-full bg-[#ffb189]/30 blur-2xl" />
      <div className="absolute -bottom-16 -right-10 w-56 h-56 rounded-full bg-[#ff7d4e]/20 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Animation variant="dissolveDown">
            <p className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/80 border border-[#ffd5bf] text-sm font-semibold text-[#c86436] mb-4">
              What We Offer
            </p>
          </Animation>
          <Animation variant="dissolveUp" delay={60}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#5a331f] mb-4">
              Our Pet Services
            </h2>
          </Animation>
          <Animation variant="dissolveUp" delay={120}>
            <p className="text-[#8d674a] max-w-2xl mx-auto leading-relaxed">
              Complete pet care solutions designed for comfort, health, and
              happiness. Every service is crafted to give your furry friend the
              best experience.
            </p>
          </Animation>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {petServices.map((service, index) => (
            <Animation key={index} variant="liftIn" delay={index * 90}>
              <div className="group relative bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-[#ecd8c8] shadow-[0_10px_30px_rgba(125,66,35,0.10)] hover:-translate-y-1.5 hover:shadow-[0_16px_34px_rgba(125,66,35,0.18)] transition-all duration-300">
                <span className="absolute top-4 right-4 text-xs font-bold text-[#d58a62] bg-[#fff3ec] border border-[#ffd9c5] rounded-full w-8 h-8 flex items-center justify-center">
                  {index + 1}
                </span>

                <div className="w-14 h-14 rounded-xl bg-[#fff2ea] border border-[#ffd8c4] text-[#a0522d] flex items-center justify-center mb-5 group-hover:bg-[#ffede3] transition-colors duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-[#5d3925] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#6f5441] leading-relaxed">{service.desc}</p>
              </div>
            </Animation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
