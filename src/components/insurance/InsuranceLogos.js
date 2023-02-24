import React from 'react'


function InsuranceLogos(props) {
  return (
        <div className='insurance-props'>
            <div className='insurance-thumbnail'>
              <img className='image' src= {props.Image} alt="logo" />
            </div>
        </div>
  )
}

export default InsuranceLogos;