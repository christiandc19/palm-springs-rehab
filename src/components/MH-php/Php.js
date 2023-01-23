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
                    <p>Our Partial Hospitalization Program is available every day of the week, whenever you need us. PHP allows you to practice mindfulness, prioritize self-care, and heal your mind with an immersive treatment program rooted in supervision and personalized guidance.
                    <br /><br/>
                    Put your mental health first and take part in structured one-on-one sessions with an experienced counselor. Then, continue your recovery by spending time interacting with our community under the supervision of our experienced staff.</p>
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
