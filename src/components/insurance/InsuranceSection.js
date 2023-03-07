import React from 'react'
import Fade from 'react-reveal/Fade';

import './InsuranceSection.css'
import InsuranceProps from './InsuranceLogos'

import Aetna from '../../assets/aetna.png'
import Beacon from '../../assets/beacon.png'
import Bluecross from '../../assets/bluecross.png'
import Cigna from '../../assets/cigna.png'
import Horizon from '../../assets/horizon.png'
import UMR from '../../assets/umr.png'
import United from '../../assets/united-healthcare.png'
import Optima from '../../assets/optima.png'
import Optum from '../../assets/optum.png'
import Anthem from '../../assets/anthem.png'

import Team from '../../assets/team.png'


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
                            <Fade bottom>
                                <InsuranceProps Image={Aetna} className='img'/>
                            </Fade>


                            <Fade bottom>
                                <InsuranceProps Image={Beacon} />
                            </Fade>

                            <Fade bottom>
                                <InsuranceProps Image={Bluecross} />
                            </Fade>

                            <Fade bottom>
                                <InsuranceProps Image={Cigna} />                           
                            </Fade>

                            <Fade bottom>
                                <InsuranceProps Image={Horizon} />
                            </Fade>

                            <Fade bottom>
                                <InsuranceProps Image={UMR} />
                            </Fade>

                            <Fade bottom>
                                <InsuranceProps Image={United} />
                            </Fade>

                            <Fade bottom>
                                <InsuranceProps Image={Optima} />
                            </Fade>

                            <Fade bottom>
                                <InsuranceProps Image={Optum} />
                            </Fade>

                            <Fade bottom>
                                <InsuranceProps Image={Anthem} />
                            </Fade>
                </div>
            </div>

<div>

        <div className='team'>
            <Fade bottom>
                <div className='teamCaption'>
                    <h1>Don't delay care for you and those you love. . .</h1>
                </div>
            </Fade>


            <Fade bottom>
                <div className='teamImage'>
                    <img src={Team}  alt="Company Team" loading="lazy" />
                </div>
            </Fade>
            </div>
            </div>
        </div>
        </>
    )
}

export default InsuranceSection
