import React from 'react'
import Cards from '../servicesCards/Cards'
import InsuranceSection from '../insurance/InsuranceSection';

import './Home.css'

import Overlay from '../../assets/overlay.mp4'



const home = () => {
  return (
    <>
    <Cards />
    <div className='what-we-do'>
                         <video src={Overlay} autoPlay muted loop playsInline className='what-we-do-video-bg' />

            <div className="container">
                <div className="content">
                        
                <h1>WHAT WE DO</h1>
                            <br /> <br />
                            <p>
                            At Get Real Recovery Treatment Center, we offer different levels of care based on each individual’s needs. Our programs consist of an intensive outpatient program (IOP) and a more demanding and structured partial hospitalization program (PHP). You can be confident that our caring and professional staff will recommend the right level of care for you or your loved one.
                        </p>
                </div>
            </div>
        </div>    <InsuranceSection />


    </>
  )
}

export default home
