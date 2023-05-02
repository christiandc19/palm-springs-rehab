import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import HeroImage from '../../assets/hero-bg-min.jpeg'

import './Hero.css'

const Hero = () => {
    return (
<>        
        <div className='hero'>

            <div className="hero-content">

                <div className='hero-left'>
                        <h1 className="animate-charcter">PALM SPRINGS REHAB</h1>
                        <h2 className='subtitle'>Substance Abuse Addiction and <br/>Mental Health Treatment Facility</h2>
                        <br />
                        <div className='hero-btn'>
                        <Link to="/contact">
                        <button>Call Us</button>
                    </Link>
                    </div>
                    <br />
                </div>

                <div className="hero-right">
                    {/* <img src={HeroImage} loading="lazy" alt='psychologist'/> */}
                </div>

            </div>
        </div>
</>

    )
}

export default Hero