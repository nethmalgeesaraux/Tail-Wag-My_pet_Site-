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
          <Hero />
          <Services />
          <WhyChooseUs />
          <AboutUs />
          <Testimonials />
          <FAQsAccordion />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
