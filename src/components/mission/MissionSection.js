import React from 'react'
import './MissionSection.css'
import Fade from 'react-reveal/Fade';
import ContactForm from '../contact/ContactForm'

import Therapy from '../../assets/therapy.jpg'
import Staff from '../../assets/staff.jpg'
import Clinic from '../../assets/clinic.jpg'
import Work from '../../assets/employment-assistance2.png'



const MissionSection = () => {
    return (
        <>
        <div className='mission-section'>
            <div className="container">
                <div className="content">
                    <h1>What We Can Provide</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi officiis unde perferendis voluptas laborum aliquam culpa officia a maiores porro. Consequuntur officia corporis aliquam numquam, fuga quisquam illo. Obcaecati, voluptatum.</p>


                            <div className='flex-right'>

                            <Fade top>
                    <div className='thumbnail'>
                        <div><img src= { Therapy } alt="Aetna Logo" loading="lazy" />                    
                        <p>Therapy and support groups for either addiction or mental health disorders</p>
                        </div>
                    </div>
                    </Fade>


                    <Fade bottom>
                    <div className='thumbnail'>
                        <img src= { Staff } alt="Beacon Logo" loading="lazy" /> 
                        <p>Compassionate staff that is dedicated to your success</p>
  
                    </div>
                    </Fade>

                    <Fade top>
                    <div className='thumbnail'>
                        <img src= { Clinic } alt="Bluecross Logo" loading="lazy" />   
                        <p>Evidence-based practices that give you the best chance of recovery</p>

                    </div>
                    </Fade>

                    <Fade bottom>
                    <div className='thumbnail'>
                        <img src= { Work } alt="Cigna Logo" loading="lazy" /> 
                        <p>There are a variety of programs and organizations that fall under the umbrella of employment-based recovery support services.</p>  
                    </div>
                    </Fade>                          

                    </div>
                </div>
            </div>
        </div>

        <ContactForm />

</>
    )
}

export default MissionSection
