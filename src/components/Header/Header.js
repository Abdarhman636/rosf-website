import React from 'react'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css'

const Header = () => {
     return (
          <header className=' py-3'>
               <div className='container d-flex justify-content-between align-items-center'>
                    <div className=' text-center'>
                         <a href="/"><img src="assets/images/rosfLogo.png" alt="" width={90} /></a>
                    </div>

                    <nav>
                         <ul className='d-flex gap-4 p-0 m-0'>
                              <li className='gray fs-5 active'><a href="/" className='active'>Home</a></li>
                              <li className='gray fs-5'>About us</li>
                              <li className='gray fs-5'>Services</li>
                              <li className='gray fs-5'>Services</li>
                         </ul>
                    </nav>

                    <div className='text-end'>
                         <button className='myBtn d-none d-md-inline'><a href="/contact-us" className='text-light'>Contact Us</a></button>
                    </div>
               </div>
          </header >
     )
}

export default Header