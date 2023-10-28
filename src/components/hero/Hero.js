import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Hero.css'

import BgVideo from '../../assets/Bg-Video2.mp4'


const Hero = () => {
    return (
<>        

        <div className='hero'>
            <video src={BgVideo} autoPlay muted loop playsInline className='video-bg' />
            <div className="hero-container">

                <div className="content">
                        <h2>Journey. Healing. Well-being.</h2>
                        <h1>PALM SPRINGS REHAB</h1>
                    <Fade left>
                        <h3>Addiction and Mental Health Facility</h3>
                    </Fade>
                        <div className='hero-btn'>
                        <Link to="/contact">
                        <button>CALL US</button>
                    </Link>
                    </div>

                </div>
            </div>
        </div>


</>

    )
}

export default Hero