import React from 'react'
import './MissionSectionStyles.css'
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom'
import { Link as LinkRoll } from 'react-scroll'

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
            <div className='divider'></div>
                <div className="content">
                    <h2><span>What We Can</span> Provide</h2>
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
                    <div>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to="/contact">
                            <button>Contact Us</button>
                        </Link>
                    </LinkRoll>
                </div>
                </div>
            </div>
        </div>

        <ContactForm />

</>
    )
}

export default MissionSection
