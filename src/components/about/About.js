import React from "react";
import Fade from 'react-reveal/Fade';
import ContactForm from "../contact/ContactForm";



const About = () => {

    return (
            <>
            <div className='about main-menu'>
                    <div className="container">
                        <div className="main-menu-content">
                            <Fade top>
                                <h1>ABOUT US</h1>

                                <p>Palm Springs Rehab Treatment Center strives to make sobriety less stressful by focusing on sobriety. We utilize established medical treatments to help you get sober and stay sober. </p>
                            </Fade>
                        </div>
                    </div>
            </div>
                                            {/* aboutUsContainer */}
                                <div className="main-menu-header">
                                <br/>
                                    <h1>WHO WE ARE</h1>
                                    <br/>
                                    <Fade top>
                                    <p className="container">
                                    <br/>
                                    Palm Springs Rehab Treatment Center helps you taper in a safe, structured environment We are there for you, through every stage of recovery. No matter where you’re located, you can reach out and get in touch with someone from our staff today.
                                    </p><br/> <br/>
                                    </Fade>
                                </div>



            <ContactForm />
            </>
    )

    }
export default About
