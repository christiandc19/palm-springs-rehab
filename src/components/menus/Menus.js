import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { Link as LinkRoll } from 'react-scroll'
import './Menus.css'

import Contact2 from '../contact/Contact2'
import SubCardBg from '../../assets/sub-card-bg-min.jpg'

import Card1 from '../../assets/card1.jpg'
import Card2 from '../../assets/card2.jpg'
import Card3 from '../../assets/card3.jpg'


const Menus = () => {
  return (
    <>

<div className="mh-cards-header container">
                <h1>Palm Springs REHAB TREATMENT CENTER OFFERS VARIOUS MENTAL HEALTH PROGRAMS </h1>
                <p>At Palm Springs Rehab Treatment Center, clients receive individual therapy alongside a range of additional treatments, including relapse prevention, trauma therapy, mindfulness meditation, transportation, yoga, and more. We offer support that clients need to allow them to gradually go back to treatment. </p>
            </div>

<div class="mh-card-wrap">
<div class="mh-tile"> 
  <Fade left>
  <img src={Card1} alt="Mental Health" loading="lazy"/>
  </Fade>
  <div class="mh-text">
  <h1>Partial Hospitalizaion Program​</h1>
  <p class="mh-animate-text">Some of our clients are here to attend to their mental health, and some come to us for help with addiction and sobriety.</p>
    <div class="mh-animate-text">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/mental-health-php">
            <button>Learn More</button>
        </Link>
    </LinkRoll>
    </div>
  </div>
 </div>

<div class="mh-tile"> 
<Fade top>
<img src={Card2} alt="Substance Use" loading="lazy"/>
</Fade>
  <div class="mh-text">
  <h1>Intensive Outpatient Program</h1>
  <p class="mh-animate-text">No matter what type of addiction or mental health condition you are dealing with, there’s something for everyone at Palm Springs Rehab.</p>
  <div class="mh-animate-text">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/mental-health-iop">
            <button>Learn More</button>
        </Link>
    </LinkRoll>
    </div>

  </div>
 </div>
  
  <div class="mh-tile"> 

  <Fade right>
  <img src={Card3} alt="Warehouse Employees" loading="lazy"/>
  </Fade>
  <div class="mh-text">
  <h1>Outpatient Program</h1>
  <p class="mh-animate-text">We offer a variety of employment tools and resources to help you land on your feet and get hired at a great company in recovery.</p>
  <div class="mh-animate-text">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/mental-health-op">
            <button>Learn More</button>
        </Link>
    </LinkRoll>

    </div>
  </div>
 </div>
</div>



{/* Mental Health Thumbnails */}



<div class="mh-thumbnail-wrap container">

 <div class="mh-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>MENTAL HEALTH TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>Depression</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/depression">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

  <div class="mh-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>MENTAL HEALTH TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>ANXIETY</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/anxiety">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

  <div class="mh-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>MENTAL HEALTH TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>PANIC DISORDER</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/panic-disorder">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

  <div class="mh-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>MENTAL HEALTH TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>STRESS DISORDER</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/acute-stress-disorder">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

  <div class="mh-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>MENTAL HEALTH TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>ANGER DISORDER</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/anger-disorder">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

  <div class="mh-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>MENTAL HEALTH TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>ADHD</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/adhd">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

  <div class="mh-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>MENTAL HEALTH TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>PTSD</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/ptsd">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

  <div class="mh-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>MENTAL HEALTH TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>BIPOLAR</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/bipolar-disorder">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

  <div class="mh-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>MENTAL HEALTH TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>SCHIZOAFFECTIVE</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/schizoaffective">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

  <div class="mh-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>MENTAL HEALTH TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>SCHIZOPHRENIA</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/schizophrenia">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>


 </div>
 <div>
</div>



<Contact2 />

    </>

  )
}

export default Menus
