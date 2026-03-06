import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import AboutUs from './components/AboutUs'
import Testimonials from './components/Testimonials'
import FAQsAccordion from './components/FAQs'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <WhyChooseUs/>
    <AboutUs/>
    <Testimonials/>
    <FAQsAccordion/>
    </>
  )
}

export default App