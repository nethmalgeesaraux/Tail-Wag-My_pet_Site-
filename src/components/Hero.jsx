import React from "react";
import heroImg from "../assets/hero.jpg"; 

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#fff9f6] to-[#ffece1] min-h-screen flex flex-col md:flex-row items-center justify-center px-6 lg:px-20 py-20 overflow-hidden">
      {/* Decorative Shape */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ff7d4e"
            fillOpacity="0.2"
            d="M0,224L48,202.7C96,181,192,139,288,138.7C384,139,480,181,576,176C672,171,768,117,864,117.3C960,117,1056,171,1152,170.7C1248,171,1344,117,1392,90.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Left Content */}
      <div className="flex-1 z-10 text-center md:text-left">
        <p className="text-sm text-[#d1733d] font-medium mb-2 border-l-4 border-[#d1733d] pl-2 inline-block">
          Trusted Pet Care, Tailored With Love
        </p>
        <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight text-[#1e1e1e]">
          Your <span className="text-[#ff7d4e]">Pet</span> Deserves <br /> The
          Best Family.
        </h1>
        <p className="mt-6 text-lg text-[#555] max-w-xl mx-auto md:mx-0">
          We provide personalized care and a loving environment where every
          pet feels at home. Join our community of happy tails today!
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-[#ff7d4e] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#e46637] transition duration-300">
            Make a Reservation
          </button>
          <button className="bg-transparent border-2 border-[#ff7d4e] text-[#ff7d4e] px-6 py-3 rounded-lg font-semibold hover:bg-[#ff7d4e] hover:text-white transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-2/5 z-10 flex justify-center md:justify-end">
        <img
          src={heroImg}
          alt="Dog"
          className="w-80 h-80 object-cover rounded-full shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;