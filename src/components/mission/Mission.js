import React from 'react'
// import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';

import './Mission.css'



const Mission = () => {
    return (

<>

        <div className='mission main-menu'>

                <div className="mission-content">
                    <Fade top>
                    <h1>MISSION</h1>
                    </Fade>
                    {/* <Fade bottom>
                    <p>We strive to make overcoming addiction achievable by focusing on your sobriety. We use proven medical practices and a comprehensive approach to healing through better guidance, greater compassion, and a stronger community.</p>
                    </Fade> */}
                {/* <div>
                <Link to="/treatment">
                    <button>Learn More</button>
                </Link>
                </div> */}
                </div>
            </div>
</>
    )
}

export default Mission
