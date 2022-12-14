import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import './Treatment.css'
import Service1 from '../../assets/treatment-image-1.jpg'
import ContactForm from '../contact/ContactForm';

import { FaHandPointRight } from 'react-icons/fa';
import { RiMovieFill } from 'react-icons/ri';
import { GiBowlingStrike } from 'react-icons/gi';
import { FaUmbrellaBeach } from 'react-icons/fa';
import { FaGolfBall } from 'react-icons/fa';
import { IoIosBonfire } from 'react-icons/io';
import { GiSparkles } from 'react-icons/gi';
import { MdSportsSoccer } from 'react-icons/md';
import { FaHiking } from 'react-icons/fa';
import { MdPool } from 'react-icons/md';
import { MdVolunteerActivism } from 'react-icons/md';


const Treatment = () => {
    return (
        <>

            {/* -------------------------------- HERO -------------------------------------- */}

            <div className='treatment'>
                <div className="container">
                    <div className="content">
                        <Fade right>
                            <h1>TREATMENT</h1>
                        </Fade>
                        <Fade left>
                            <p>All treatment clients will have a recovery/treatment plan developed within 30 days of admission. Measurement and reassessment of treatment plan progress happen on a weekly basis through the weekly summary. In the weekly summary, the drug and alcohol counselor will ensure that action steps to be taken by client or counselor are on target and that the action step achievements will enable resolution of the objective. All treatment plans are reviewed by and signed off on by the clinical director. </p>
                        </Fade>
                    </div>
                </div>
            </div>

            {/* -------------------------------- SECTION 1 -------------------------------------- */}

            <div className='treatment-1'>
                <h1 className='treatment1-header'>KEY AREAS/FUNDAMENTALS</h1>
                    <div className='description1'>
                        <div className='flex-item-3'>
                        <img src={Service1} width="500" height="300" alt="palm trees" />
                        </div>
                        <Fade left>
                        <div className='flex-item-1'>
                            <p>The treatment plan will be developed between client and counselor from key information gleaned from the assessment and intake process. This treatment plan will be goal and action oriented with objective and measurable criteria. Each treatment plan will have a statement of problem(s) with which the client identifies, statement of objectives to be reached that addressees each problem, action steps for client and counselor to ensure that objective will be completed.
                            <br/><br/>
                            Counselor and client will work together to compose a treatment plan with clear objectives and goals based on key areas intake assessment. It will include: challenges that the client may encounter during recovery process, clear methods of navigating obstacles in recovery, action steps to be taken by the program and/or client to overcome the challenges of recovery.
                            </p>
                        </div>

                        <div className='flex-item-2'>
                            <p>
                            Some areas to be examined may be personal relationships, work, anger management, lack of power, financial burdens, separation from children, past trauma as it relates to present, school, etc. 
                            <br/><br/>
                        </p>
                            <ul>
                                <li>
                                <FaHandPointRight /> Counselor and client will set clear and tangible goals regarding above      mentioned obstacles.
                                </li><br/>
                                <li>
                                <FaHandPointRight /> Counselor and client will brainstorm potential hurdles as client attempts to accomplish goals.
                                </li><br/>
                                <li>
                                <FaHandPointRight /> Counselor and client discuss systems for working through hurdles. Counselor and client will ??? upon following weekly session ??? discuss successes and setbacks for set goals.
                                </li>
                            </ul>
                        </div>
                    </Fade>
                </div>
            </div>


<div className='activity-container'>

                        <div className='activity-section'>
                            <div className='revisions'>
                                <h1> REVISIONS </h1>                  
                                <p>
                                    As mentioned above, the weekly summary reflective of the session between client and counselor/therapist will measure each treatment plan goal on a weekly basis. The client will also initial the weekly summary as this is a review of the treatment plan goals and objectives. Furthermore, clients may have new issues come up during treatment that were not identified at the time of assessment. Drug and alcohol counselors/therapists will develop new treatment plan goals as needed using this protocol whenever necessary.
                                </p>
                            </div>

                            <div className='recreations'>
                                <h1> RECREATIONS </h1>                                
                                <p>
                                    As mentioned above, the weekly summary reflective of the session between client and counselor/therapist will measure each treatment plan goal on a weekly basis. The client will also initial the weekly summary as this is a review of the treatment plan goals and objectives. Furthermore, clients may have new issues come up during treatment that were not identified at the time of assessment. Drug and alcohol counselors/therapists will develop new treatment plan goals as needed using this protocol whenever necessary.
                                </p>
                            </div>
                        </div>


            {/* ------------------------------ RECREATION --------------------------- */}


                <div className='activities'>
                    
                        <p><RiMovieFill /><span> MOVIES</span></p><br />
                        <p><GiBowlingStrike /> <span> BOWLING</span></p><br />
                        <p><FaUmbrellaBeach /> <span> BEACH/LAKE ACTIVITIES</span></p><br />
                        <p><FaGolfBall /> <span> MINIATURE GOLF</span></p><br />
                        <p><IoIosBonfire /> <span> BONFIRE</span></p><br />
                        <p><GiSparkles /> <span> AMUSEMENT PARKS</span></p><br />
                        <p><MdSportsSoccer /> <span> SPORTING EVENTS</span></p><br />
                        <p><FaHiking /> <span> HIKING</span></p><br />
                        <p><MdPool /> <span> POOL</span></p><br />
                        <p><MdVolunteerActivism /> <span> FUNDRAISERS</span> </p><br />
                        <br />
                </div>

    </div>
          


        <ContactForm />
        </>
    )
}

export default Treatment
