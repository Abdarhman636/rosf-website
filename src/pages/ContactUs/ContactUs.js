import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./style.css"

import { MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const ContactUs = () => {
     return (
          <div className='container py-5'>
               <h1 className='display-4 fw-bold text-light mt-5'>Contact Us</h1>
               <div className='flex-div flex-column flex-sm-row d-sm-flex gap-5'>
                    <Form>
                         <Form.Group className="my-4" controlId="formBasicEmail">
                              <Form.Label className='text-light'>Name</Form.Label>
                              <Form.Control type="text" />
                         </Form.Group>

                         <Form.Group className="my-4" controlId="formBasicEmail">
                              <Form.Label className='text-light'>Email address</Form.Label>
                              <Form.Control type="email" />
                         </Form.Group>

                         <Form.Group className="my-4" controlId="formBasicEmail">
                              <Form.Label className='text-light'>Message</Form.Label>
                              <Form.Control as="textarea" rows={4} />
                         </Form.Group>

                         <Button type="submit" className='mt-5 myBtn'>
                              Submit
                         </Button>
                    </Form>

                    <div className="contactDetails d-flex flex-column gap-4 text-light mt-5 mt-sm-0 pt-5 pt-sm-0">
                         <span><MdLocationPin color='#0BA3CC' size={20} />  Kingdome Of Saudi Arabia, – office at 7965 Al Muhandis Masaid Al Anqari, As Sulimaniyah, Riyadh 12245, Saudi Arabia.  </span>
                         <span><FaPhone color='#0BA3CC' size={20} />  +966 9200 139 24 </span>
                         <span><FaFacebook color='#0BA3CC' size={20} />  <IoLogoWhatsapp color='#0BA3CC' size={20} /> </span>
                         <iframe className='d-none d-sm-block' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28998.60444561315!2d46.682048415224855!3d24.698522734057285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f030e8e8a0429%3A0x1e60a6957d1d9d55!2sAs%20Sulimaniyah%2C%20Riyadh!5e0!3m2!1sen!2ssa!4v1725098272713!5m2!1sen!2ssa" width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
               </div>
          </div>
     )
}

export default ContactUs;