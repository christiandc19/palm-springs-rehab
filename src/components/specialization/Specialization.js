import React from 'react'
import './Specialization.css'

import { Link } from 'react-router-dom';
import { Link as LinkRoll } from 'react-scroll'


import SpecializationProps from './SpecializationProps'
import Anxiety from '../../assets/anxiety.png'
import PTSD from '../../assets/ptsd.png'
import BIPOLAR from '../../assets/bipolar.png'
import SCHIZOPHRENIA from '../../assets/schizophrenia.png'
import DEPRESSION from '../../assets/depression.png'




const Specialization = () => {
  return (
    <>
      
    
    <div className='specialization SpecializaionHeader'>
        <p>S P E C I A L I Z A T I O N</p>
        <h1>Treating a wide range of psychological conditions</h1>

    <div className='specializationContainer container'>

        <div className='specializationThumbnail'>
            <SpecializationProps Image={Anxiety} />
            <h5>Anxiety</h5>
        </div>

        <div className='specializationThumbnail'>
            <SpecializationProps Image={PTSD} />
            <h5>PTSD</h5>
        </div>

        <div className='specializationThumbnail'>
            <SpecializationProps Image={BIPOLAR} />
            <h5>Bipolar Disorder</h5>
        </div>

        <div className='specializationThumbnail'>
            <SpecializationProps Image={SCHIZOPHRENIA} />
            <h5>Schizophrenia</h5>
        </div>

        <div className='specializationThumbnail'>
            <SpecializationProps Image={DEPRESSION} />
            <h5>Depression</h5>
        </div>
    </div>


    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
            <Link to="/mental-health">
            <div className='Specializaion-btn'>        
                <button>VIEW MORE</button>
            </div>       
            </Link>
    </LinkRoll>

    </div>

    </>
  )
}

export default Specialization
