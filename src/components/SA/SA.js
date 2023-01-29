import React from 'react'
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';

import './SA.css'

const SA = () => {
    return (
        <div className='sa submenu'>
                <div className="sa-content">
                    <Fade top>
                    <h2>- Our Services</h2>
                    <h1>SUBSTANCE ABUSE PROGRAMS</h1>
                    </Fade>
                    {/* <Fade bottom>
                    <p>
                    At  Palm Springs Rehab Treatment Center, we recognize that overcoming addiction on your own may not be possible. Fortunately our treatment programs give you the path to healing/recovery. Through our intensive outpatient program, we give you the tools to manage your addiction in the most healthy way possible. To learn more, reach out to us today. 
                    </p>
                    </Fade> */}
            </div>
        </div>
    )
}

export default SA
