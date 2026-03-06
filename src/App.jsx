import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import FAQsAccordion from "./components/FAQs";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <section id="home" className="scroll-mt-24">
            <Hero />
          </section>
          <section id="services" className="scroll-mt-24">
            <Services />
          </section>
          <section id="why-us" className="scroll-mt-24">
            <WhyChooseUs />
          </section>
          <section id="about" className="scroll-mt-24">
            <AboutUs />
          </section>
          <section id="testimonials" className="scroll-mt-24">
            <Testimonials />
          </section>
          <section id="faqs" className="scroll-mt-24">
            <FAQsAccordion />
          </section>
          <section id="contact" className="scroll-mt-24">
            <Footer />
          </section>
        </>
      )}
    </>
  );
};

export default App;
