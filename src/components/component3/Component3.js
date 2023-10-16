import React from 'react'
import "./Component3.css";

import c3Img from "../../assets/c3-img.webp";

const Component3 = () => {
  return (
    <>
      
      {/* MENTAL HEALTH SERVICES */}
      <div className="component3">


          <div className="component3-content container">

          <div className="c3-left">
            
            <h2>WELCOME TO</h2>
            <h1>Palm Springs Rehab</h1>
            <h2>Addiction and Mental Health Treatment Facility</h2>
            <h5>WHAT WE DO</h5>
            <p>
            At Palm Springs Rehab, we offer different levels of care based on each individual’s needs. Our programs consist of an intensive outpatient program (IOP) and a more demanding and structured partial hospitalization program (PHP).</p>
            <p>You can be confident that our caring and professional staff will recommend the right level of care for you or your loved one.</p>
            <h5>TREATMENT</h5>
            <p>All treatment clients will have a recovery/treatment plan developed within 30 days of admission. Measurement and reassessment of treatment plan progress happen on a weekly basis through the weekly summary.</p>
            <p>In the weekly summary, the drug and alcohol counselor will ensure that action steps to be taken by client or counselor are on target and that the action step achievements will enable resolution of the objective. All treatment plans are reviewed by and signed off on by the clinical director.</p>
          </div>


          <div className="c3-right">

            
            <div className='c3-right-img'>
              <img src={c3Img} alt="nurse" loading="lazy" />
            </div>
            

          </div>
          </div>
        </div>


    </>
  )
}

export default Component3
