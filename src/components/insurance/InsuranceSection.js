import React from 'react'
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import './InsuranceSection.css'
import Aetna from '../../assets/aetna.png'
import Beacon from '../../assets/beacon.png'
import Bluecross from '../../assets/bluecross.png'
import Cigna from '../../assets/cigna.png'
import Horizon from '../../assets/horizon.png'
import UMR from '../../assets/umr.png'
import United from '../../assets/united-healthcare.png'
import Optima from '../../assets/optima.png'
import Optum from '../../assets/optum.png'


import { Link as LinkRoll } from 'react-scroll'



const InsuranceSection = () => {
    return (
        <>
        <div className='InsuranceSection'>
            <div className="InsuranceSection-container">
                <div>
                <h1>WE WORK WITH MAJOR INSURANCE</h1>
                <p>If you don’t see your insurance provider below, please reach out to us to find a way to assist you further.</p>
                </div>
                <div className="content">
                            <Fade top>
                                <div className='insurance-thumbnail'>
                                <img src={Aetna} width="640" height="200" alt="Aetna Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>


                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={Beacon} width="640" height="200" alt="Beacon Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={Bluecross} width="640" height="200" alt="Bluecross Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={Cigna} width="640" height="200" alt="Cigna Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={Horizon} width="640" height="200" alt="Horizon Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={UMR} width="640" height="200" alt="UMR Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={United} width="640" height="200" alt="United Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={Optima} width="640" height="200" alt="Optima Health Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={Optum} width="640" height="200" alt="Optum Health Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>
                </div>
            </div>

            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                <Link to="/insurance">
                    <div className='insuranceSection-btn'>
                        <button>Learn More</button>
                    </div>
                </Link>
            </LinkRoll>

        </div>
        </>
    )
}

export default InsuranceSection
