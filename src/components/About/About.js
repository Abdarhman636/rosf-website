import React, { Fragment } from 'react'
import './About.css'

const About = () => {
     return (
          <Fragment>
               <div className=' margin container d-flex gap-5 align-items-center flex-column-reverse flex-md-row '>
                    <div className="aboutImage">
                         <img src="assets/images/aboutImage.png" alt="" className='w-100' />
                    </div>
                    <div className="aboutText">
                         <small className='text-light'>Tagline</small>
                         <h2 className='text-light display-5 fw-medium'>Elevate Your Online Presence with Cutting-Edge Design</h2>
                         <p className='gray my-4'>Our innovative UI/UX design service combines aesthetic appeal with seamless functionality, creating an exceptional user experience.</p>
                         <div className='d-flex my-5'>
                              <div>
                                   <h5 className='text-light'>Subheading one</h5>
                                   <small className='gray'>Our team of expert designers crafts visually stunning websites that captivate and engage users.</small>
                              </div>
                              <div >
                                   <h5 className='text-light'>Subheading one</h5>
                                   <small className='gray'>Our team of expert designers crafts visually stunning websites that captivate and engage users.</small>
                              </div>
                         </div>
                         <button className='myBtn px-3 px-md-5 me-md-4 me-2'>Get a Demo</button>
                         <button className='secondBTN px-3 px-md-5 py-1'>Learn More</button>
                    </div>
               </div>

               <div className='margin container d-flex gap-5 align-items-center py-md-5 flex-column flex-md-row'>
                    <div className="aboutText">
                         <small className='text-light'>Tagline</small>
                         <h2 className='text-light display-5 fw-medium'>Elevate Your Online Presence with Cutting-Edge Design</h2>
                         <p className='gray my-4'>Our innovative UI/UX design service combines aesthetic appeal with seamless functionality, creating an exceptional user experience.</p>
                         <div className='d-flex my-5'>
                              <div>
                                   <h5 className='text-light'>Subheading one</h5>
                                   <small className='gray'>Our team of expert designers crafts visually stunning websites that captivate and engage users.</small>
                              </div>
                              <div >
                                   <h5 className='text-light'>Subheading one</h5>
                                   <small className='gray'>Our team of expert designers crafts visually stunning websites that captivate and engage users.</small>
                              </div>
                         </div>
                         <button className='myBtn px-3 px-md-5 me-md-4 me-2'>Get a Demo</button>
                         <button className='secondBTN px-3 px-md-5 py-1'>Learn More</button>
                    </div>
                    <div className="aboutImage">
                         <img src="assets/images/aboutImage.png" alt="" className='w-100' />
                    </div>
               </div>
          </Fragment>
     )
}

export default About