import React from 'react'
import './Clients.css'


const Clients = () => {
     return (
          <section className='text-center container my-5 py-5'>
               <p className='gray'>Boost your business with Rsof , trusted by over 1,000 companies for effective RCS, WhatsApp</p>
               <img src="/assets/images/newClientImage.png" className='w-100 my-5' alt="" />
               <h3 className='gray'>Industry-leading connectivity. True global reach.</h3>
               <div className='d-flex justify-content-center w-100 gap-5 mt-5 pt-4'>
                    <div className='px-3'>
                         <h3 className='text-light'>1500 +</h3>
                         <p className='fs-5 gray'>Registered Users</p>
                    </div>
                    <div className='px-3'>
                         <h3 className='text-light'>1200+</h3>
                         <p className='fs-5 gray'>Chatbots</p>
                    </div>
                    <div className='px-3'>
                         <h3 className='text-light'>100,000 +</h3>
                         <p className='fs-5 gray'>Campaigns</p>
                    </div>
                    <div className='px-3'>
                         <h3 className='text-light'>70 M +</h3>
                         <p className='fs-5 gray'>Messages</p>
                    </div>
               </div>
               <h1 className='display-3 pt-5 text-light mt-5'>Whatsapp Business API Integrations</h1>
               <img src="/assets/images/Integrations.png" className='w-100 my-5' alt="" />
          </section>
     )
}

export default Clients