import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Hero.css'

import BgVideo from '../../assets/hero-vbg.mp4'



const Hero = () => {
    return (
        <div className='hero'>
             <video src={BgVideo} autoPlay muted loop className='video-bg' />

            <div className="container">
                <div className="content">
                    
                    <Fade top><h1>PALM SPRINGS</h1></Fade> 
                
                    <Fade bottom>
                        <h2 className='subtitle'>Mental Health  Treatment Facility </h2>
                    </Fade>
                        <p>Find your happiness</p>
                        <p>and learn to put it first.</p>
                        <Link to="/about-us">
                        <div><button>Learn More</button></div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
