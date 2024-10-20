import React, { Fragment } from 'react'
import './About.css'
import Clients from '../Clients/Clients';


const About = () => {
     return (
          <Fragment>
               <div className=' container d-flex gap-5 align-items-center pt-md-5 flex-column flex-md-row mb-md-5 pb-md-5' >
                    <div className="aboutText">
                         <small className='text-light'>Tagline</small>
                         <h2 className='text-light display-5 fw-medium'>Transform Your Customer Experience with IN SYNC, Advanced Chatbot Platform</h2>
                         <p className='gray my-4'>IN SYNC is an all-in-one platform that blends advanced technology with user-friendly features, designed to enhance efficiency and drive business growth. Join the IN SYNC community for innovative solutions that exceed your expectations.</p>
                         <div className='d-flex my-5'>
                              <div>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0BA3CC" class="bi bi-archive-fill mb-3" viewBox="0 0 16 16">
                                        <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
                                   </svg>
                                   <h5 className='text-light'>Customer satisfaction</h5>
                                   <small className='gray'>Integrating a chat bot into In sync can
                                        significantly enhance customer support by providing 24/7 availability, quick responses, and personalized interactions, leading to improved customer satisfaction and retention.</small>
                              </div>
                              <div >
                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0BA3CC" class="bi bi-archive-fill mb-3" viewBox="0 0 16 16">
                                        <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
                                   </svg>
                                   <h5 className='text-light'>Enhancing Interactions</h5>
                                   <small className='gray'>The chat bot enhances client interactions by providing timely and accurate responses, automating repetitive tasks, and offering proactive assistance, resulting in improved client engagement and retention.
                                   </small>
                              </div>
                         </div>
                         <button className='myBtn px-3 px-md-5 me-md-4 me-2'>Get a Demo</button>
                         <button className='secondBTN px-3 px-md-5 py-1'>Learn More</button>
                    </div>
                    <div className="aboutImage">
                         <img src="assets/images/newAboutImage.png" alt="" className='w-100' />
                    </div>
               </div>
               <Clients />
               <div className='my-md-5 py-md-5  container d-flex gap-5 align-items-center flex-column-reverse flex-md-row '>
                    <div className="aboutText">
                         <p className='secondColor'>No Code Chatbot</p>
                         <h2 className='text-light display-5 fw-medium'>Empower Customer Interactions</h2>
                         <p className='gray my-4 pb-5'>Rapid Deployment: Create your own no-code chatbot in just minutes.
                              Seamless Communication: Enable consistent engagement with customers throughout their journey.
                              Versatile Channels: Connect with customers via messaging, voice, or email effortlessly.
                              Strengthen Relationships: Build deeper connections
                         </p>
                         <button className='myBtn px-3 px-md-5 me-md-4 me-2'>Get a Demo</button>
                         <button className='secondBTN px-3 px-md-5 py-1'>Learn More</button>
                    </div>
                    <div className="aboutImage">
                         <img src="assets/images/newAboutImage2.png" alt="" className='w-100' />
                    </div>
               </div>
          </Fragment>
     )
}

export default About