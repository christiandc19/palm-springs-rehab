import React from 'react'
import Cards from '../servicesCards/Cards'
import InsuranceSection from '../insurance/InsuranceSection';
import ContactForm from '../contact/ContactForm';

import './Home.css'

import Fade from 'react-reveal/Fade';



const home = () => {
  return (
    <>
    <Cards />
    <div className='WhatWeDoContainer'>
        <div className='home-whatWeDo'>
            <div className='description'>
                <Fade left>
                <h1>What We Do</h1>
                <br /> <br />
                <p>
                At Palm Springs Mental Health Treatment Facility, we offer different levels of care based on each individual’s needs. Our programs consist of an intensive outpatient program (IOP) and a more demanding and structured partial hospitalization program (PHP). You can be confident that our caring and professional staff will recommend the right level of care for you or your loved one.                    
                <br /><br />
                Counselor and client will work together to compose a treatment plan with clear objectives and goals based on key areas intake assessment. It will include: challenges that the client may encounter during recovery process, clear methods of navigating obstacles in recovery, action steps to be taken by the program and/or client to overcome the challenges of recovery.
                </p><br />
                </Fade>
            </div>

      </div>
  </div>
    <InsuranceSection />
    <ContactForm />


    </>
  )
}

export default home
