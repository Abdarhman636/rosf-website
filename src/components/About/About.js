import React, { Fragment } from 'react'
import './About.css'

const About = () => {
     return (
          <Fragment>
               <div className='margin container d-flex gap-5 align-items-center py-md-5 flex-column flex-md-row'>
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
                         <img src="assets/images/aboutImage.png" alt="" className='w-100' />
                    </div>
               </div>

               <div className=' margin container d-flex gap-5 align-items-center flex-column-reverse flex-md-row '>
                    <div className="aboutImage">
                         <img src="assets/images/aboutImage.png" alt="" className='w-100' />
                    </div>
                    <div className="aboutText">
                         <h2 className='text-light display-5 fw-medium'>Reports and Optimization</h2>
                         <p className='gray my-4'>Testing the chat bot's performance, collecting feedback, and optimizing its responses and capabilities to ensure seamless integration and maximum benefit for the users and the organization.</p>
                         <div className='d-flex my-5'>
                              <div>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0BA3CC" class="bi bi-archive-fill mb-3" viewBox="0 0 16 16">
                                        <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
                                   </svg>
                                   <h5 className='text-light'>Feedback and Satisfaction</h5>
                                   <small className='gray'>User ratings and feedback on their experience with
                                        the chat bot.</small>
                              </div>
                              <div >
                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0BA3CC" class="bi bi-archive-fill mb-3" viewBox="0 0 16 16">
                                        <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
                                   </svg>
                                   <h5 className='text-light'>Retention</h5>
                                   <small className='gray'>Measures the rate at which users return to interact with the chat-bot again.</small>
                              </div>
                         </div>
                         <button className='myBtn px-3 px-md-5 me-md-4 me-2'>Get a Demo</button>
                         <button className='secondBTN px-3 px-md-5 py-1'>Learn More</button>
                    </div>
               </div>
          </Fragment>
     )
}

export default About