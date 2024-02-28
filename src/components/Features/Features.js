import React from 'react'
import './Features.css'
import { FiBox } from "react-icons/fi";

const Features = () => {
     return (
          <div className='d-flex container gap-5 margin py-5 flex-column flex-md-row text-center'>
               <div>
                    <FiBox color='#fff' size={30} />
                    <h4 className='text-light fw-medium fs-5 mt-3'>Boost Sales and Enhance Your Online Presence</h4>
                    <p className='gray my-4'>Partner with us to elevate your business success.</p>
                    <button className='secondBTN px-5 py-1'>Learn More</button>
               </div>
               <div>
                    <FiBox color='#fff' size={30} />
                    <h4 className='text-light fw-medium fs-5 mt-3'>Boost Sales and Enhance Your Online Presence</h4>
                    <p className='gray my-4'>Partner with us to elevate your business success.</p>
                    <button className='secondBTN px-5 py-1'>Learn More</button>
               </div>
               <div>
                    <FiBox color='#fff' size={30} />
                    <h4 className='text-light fw-medium fs-5 mt-3'>Boost Sales and Enhance Your Online Presence</h4>
                    <p className='gray my-4'>Partner with us to elevate your business success.</p>
                    <button className='secondBTN px-5 py-1'>Learn More</button>
               </div>
          </div>
     )
}

export default Features