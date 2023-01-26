import React from 'react'
import './Cards.css'

import { Link } from 'react-router-dom'

// import ServicesCards from '../props/CardProps';

// import Fade from 'react-reveal/Fade';


import Card1 from '../../assets/card1.jpg'
import Card2 from '../../assets/card2.jpg'
import Card3 from '../../assets/card3.jpg'


const Cards = () => {
  return (
    <>
            <div className="cards-header container">
                <h1>WE OFFER VARIOUS SERVICES </h1>
                <p>At Palm Springs Rehab Treatment Center, clients receive individual therapy alongside a range of additional treatments, including relapse prevention, trauma therapy, mindfulness meditation, transportation, yoga, and more. We offer support that clients need to allow them to gradually go back to treatment. </p>
            </div>

<div class="card-wrap">
<div class="tile"> 
  <img src={Card1} alt="Mental Health" loading="lazy"/>
  <div class="text">
  <h1>MENTAL HEALTH TREATMENT​</h1>
  <p class="animate-text">Some of our clients are here to attend to their mental health, and some come to us for help with addiction and sobriety. Depending on your needs, we offer treatment for co-occurring disorders that can address both mental health and addiction disorders at the same time.</p>

    <div class="animate-text">
        <Link to="/contact">
            <button>Contact Us</button>
        </Link>
    </div>

  </div>
 </div>


<div class="tile"> 
<img src={Card2} alt="Substance Use" loading="lazy"/>
  <div class="text">
  <h1>SUBSTANCE USE TREATMENT</h1>
  <p class="animate-text">No matter what type of addiction or mental health condition you are dealing with, there’s something for everyone at Palm Springs Rehab.</p>
  <div class="animate-text">
        <Link to="/contact">
            <button>Contact Us</button>
        </Link>
    </div>

  </div>
 </div>
  
  <div class="tile"> 
  <img src={Card3} alt="Warehouse Employees" loading="lazy"/>
  <div class="text">
  <h1>EMPLOYMENT ASSISTANCE</h1>
  <p class="animate-text">We offer a variety of employment tools and resources to help you land on your feet and get hired at a great company in recovery.</p>
  <div class="animate-text">
        <Link to="/contact">
            <button>Contact Us</button>
        </Link>
    </div>
  </div>
 </div>
</div>
  
  



{/* 
            <div className="cards-header container">
                <h1>WE OFFER VARIOUS SERVICES </h1>
                <p>At Commonwealth Rehab Center, clients receive individual therapy alongside a range of additional treatments, including relapse prevention, trauma therapy, mindfulness meditation, transportation, yoga, and more. We offer support that clients need to allow them to gradually go back to treatment. </p>
            </div>

        <div className='cards'>
            <div className='card-container'>
                <Fade bottom>
                    <ServicesCards
                        Image={Card1}
                        CardName="MENTAL HEALTH TREATMENT​"
                        Description="Clients suffer from both mental health disorders and addiction. Therefore, we provide treatment for co-occurring disorders, addressing both conditions simultaneously."
                    />
                </Fade>

                <Fade top>
                    <ServicesCards
                        Image={Card2}
                        CardName="SUBSTANCE USE TREATMENT"
                        Description="We treat a multitude of substance use disorders. Whether the client is suffering from an alcohol addiction, prescription drug addiction, we can help."
                    />
                </Fade>

                <Fade bottom>
                    <ServicesCards
                        Image={Card3}
                        CardName="EMPLOYMENT / JOB ASSISTANCE"
                        Description="There are a variety of programs and organizations that fall under the umbrella of employment-based recovery support services. Jobs Assistance is available."
                    />
                </Fade>
            </div>
        </div> */}
    </>
  )
}

export default Cards
