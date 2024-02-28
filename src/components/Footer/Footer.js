import React from 'react'
import './Footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
     return (
          <div className='border-top'>
               <section className=' container d-flex justify-content-between gray margin gap-5 flex-column flex-sm-row'>
                    <div className="logo">
                         <img src="assets/images/rosfLogo.png" width={90} alt="" />
                    </div>
                    <div className="aboutUs text-left">
                         <h5>About Us</h5>
                         <ul className='p-0 m-0'>
                              <li>Services</li>
                              <li>Services</li>
                              <li>Services</li>
                              <li>Services</li>
                              <li>Services</li>
                         </ul>
                    </div>
                    <div className="Terms text-left">
                         <h5>Terms</h5>
                         <ul className='p-0 m-0'>
                              <li>Services</li>
                              <li>Services</li>
                              <li>Services</li>
                              <li>Services</li>
                              <li>Services</li>
                         </ul>
                    </div>
                    <form action="">
                         <h5>Subscribe</h5>
                         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, sunt!</p>
                         <input type="text" placeholder='Your email' className='w-100' />
                         <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </form>
               </section>
               <section className='border-top'>
                    <div className='d-flex justify-content-between container pb-5 pt-2 text-light'>
                         <div>
                              <small className='px-2 text-decoration-underline'>© 2023 Relume. All rights reserved.</small>
                              <small className='px-2 text-decoration-underline'>Privacy Policy</small>
                              <small className='px-2 text-decoration-underline'>Terms of Service</small>
                              <small className='px-2 text-decoration-underline'>Cookies Settings</small>
                         </div>
                         <div>
                              <FaLinkedin fontSize={20} className='mx-2' />
                              <FaWhatsapp fontSize={20} className='mx-2' />
                              <FaWhatsapp fontSize={20} className='mx-2' />
                         </div>
                    </div>
               </section>
          </div>
     )
}

export default Footer