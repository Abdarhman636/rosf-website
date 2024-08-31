import React, { Fragment } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import '../FAQ/FAQ.css'


const FAQ = () => {
     return (
          <div className='container'>
               <h2 className='text-light display-5 fw-medium text-center pt-5'>FAQ</h2>
               <div>
                    <Accordion defaultActiveKey="0">
                         <Accordion.Item eventKey="0">
                              <Accordion.Header>What is a chatbot solution, and how can it benefit my business?</Accordion.Header>
                              <Accordion.Body>
                                   A chatbot solution is an AI-powered software that can simulate conversations with users via text or voice. It can benefit your business by providing 24/7 customer support, handling common inquiries, automating repetitive tasks, and enhancing user engagement, ultimately leading to improved customer satisfaction and operational efficiency.
                              </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="1">
                              <Accordion.Header>Can a chat-bot be customized for my specific business needs?</Accordion.Header>
                              <Accordion.Body>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                   eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                   minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                   aliquip ex ea commodo consequat. Duis aute irure dolor in
                                   reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                   pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                   culpa qui officia deserunt mollit anim id est laborum.
                              </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="2">
                              <Accordion.Header>Can chat bots generate reports on user interactions and performance?</Accordion.Header>
                              <Accordion.Body>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                   eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                   minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                   aliquip ex ea commodo consequat. Duis aute irure dolor in
                                   reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                   pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                   culpa qui officia deserunt mollit anim id est laborum.
                              </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="3">
                              <Accordion.Header>What is a chatbot solution, and how can it benefit my business?</Accordion.Header>
                              <Accordion.Body>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                   eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                   minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                   aliquip ex ea commodo consequat. Duis aute irure dolor in
                                   reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                   pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                   culpa qui officia deserunt mollit anim id est laborum.
                              </Accordion.Body>
                         </Accordion.Item>
                    </Accordion>
               </div>
          </div>
     )
}

export default FAQ