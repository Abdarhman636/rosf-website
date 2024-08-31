import React, { Fragment } from 'react'
import './Features.css'
import { FiBox } from "react-icons/fi";

const Features = () => {
     return (
          <Fragment>
               <h2 className='text-light display-5 fw-medium text-center pt-5'>Key Tasks of Chat bots</h2>
               <div className='d-flex container gap-5 margin flex-column flex-md-row text-center'>
                    <div>
                         <FiBox color='#fff' size={30} />
                         <h4 className='text-light fw-medium fs-5 mt-3'>Answering Basic Queries</h4>
                         <p className='gray my-4'>Chatbots can respond to common questions and
                              basic inquiries from users instantly.</p>
                         <button className='secondBTN px-3 px-md-5 me-md-4 me-2'>Learn More</button>
                    </div>
                    <div>
                         <FiBox color='#fff' size={30} />
                         <h4 className='text-light fw-medium fs-5 mt-3'>Directing Users to Relevant Information</h4>
                         <p className='gray my-4'>They can guide users to the correct
                              information or appropriate contacts within the organization.</p>
                         <button className='secondBTN px-3 px-md-5 me-md-4 me-2'>Learn More</button>
                    </div>
                    <div>
                         <FiBox color='#fff' size={30} />
                         <h4 className='text-light fw-medium fs-5 mt-3'>Assisting with Payments and Orders</h4>
                         <p className='gray my-4'>Chatbots can help users with purchase
                              processes or order submissions by handling data and verifying details</p>
                         <button className='secondBTN px-3 px-md-5 me-md-4 me-2'>Learn More</button>
                    </div>
               </div>
          </Fragment>
     )
}

export default Features