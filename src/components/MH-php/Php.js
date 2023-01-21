import React from 'react'
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';

const Php = () => {
    return (
        <div className='php submenu'>
            <div className="container">
                <div className="content">
                    <Fade top>
                    <h1>Mental Health - Partial Hospitalization Prorgam (PHP)</h1>
                    </Fade>
                    <Fade bottom>
                    <p>Your mental health is just as important as your physical health. And no matter what you’re going through, with the right treatment program, anything is possible.
                    <br /><br/>
                    At Palm Springs Rehab Treatment Center, we offer several levels of care to help you navigate recovery. Take part in one of our Partial Hospitalization Program (PHP). We will listen to you, assess your situation, and help you craft a treatment approach that works for you.</p>
                    </Fade>
                <div>
                <Link to="/treatment">
                    <button>Learn More</button>
                </Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Php
