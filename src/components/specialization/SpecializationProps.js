import React from 'react'
import './Specialization.css'

const SpecializationProps = (props) => {
  return (
    <div className='specialization-props'>
            <div>
            <img className='image' src= {props.Image} alt="logo" />
            </div>
        </div>
  )
}

export default SpecializationProps
