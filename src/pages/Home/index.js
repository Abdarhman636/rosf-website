import React from 'react'
import Hero from '../../components/HeorSection/Hero';
import Clients from '../../components/Clients/Clients';
import About from '../../components/About/About';
import Features from '../../components/Features/Features';
import CallToAction from '../../components/CallToAction/CallToAction.js';
import FAQ from '../../components/FAQ/FAQ.js';

const index = () => {
     return (
          <div>
               <Hero />
               <Clients />
               <About />
               <Features />
               <FAQ />
               <CallToAction />
          </div>
     )
}

export default index