import React from 'react'
import './Hero.css'

const Hero = () => {
     return (
          <section className='p-md-5 m-md-5 pt-5'>
               <div className='container text-center'>
                    <div className="hero-text">
                         <h1 className='display-1 fw-bold text-light '>Transform Your Customer Experience with Advanced </h1>
                         <h1 className='display-1 fw-bold secondColor'>Chatbot Solutions</h1>
                         <p className='my-5 gray m-auto'>Welcome to our dynamic company specializing in cutting-edge UI/UX design and innovative chatbot solutions. We empower businesses by enhancing website design and optimizing customer service experiences. Learn more about our services today.</p>
                         <div>
                              <button className='myBtn px-3 px-md-5 me-md-4 me-2'>Get a Demo</button>
                              <button className='secondBTN px-3 px-md-5 py-1'>Learn More</button>
                         </div>
                    </div>
                    <div className="hero-img">
                         <img src="assets/images/dashbord.png" className='mt-5 pt-5 w-100' alt="" />
                    </div>
               </div>
          </section>
     )
}

export default Hero