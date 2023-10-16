import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { Link as LinkRoll } from "react-scroll";





import Slide1 from '../../assets/slider1-min.webp'
import Slide2 from '../../assets/slider2-min.webp'
import Slide3 from '../../assets/slider3-min.webp'

import './Hero.css'

const Hero = () => {
    return (
        <>
<div className="slider">
	<ul>
		<li><img src={Slide1} alt="Conselling Session with a patient" loading="lazy" /></li>
		<li><img src={Slide2} alt="Conselling Session with a patient" loading="lazy" /></li>
		<li><img src={Slide3} alt="Conselling Session with a patient" loading="lazy" /></li>
	</ul>

    <div className='hero-caption'> 
    <Fade left>
        <p>A Journey to Healing and Renewed Well-being</p>
        <h1>PALM SPRINGS REHAB</h1>
    </Fade>
        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to='/contact'>
        <button>
            CALL US
        </button>
        </Link>
        </LinkRoll>
    </div>

</div>

        </>
    )
}

export default Hero