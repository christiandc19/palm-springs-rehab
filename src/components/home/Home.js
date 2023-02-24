import React from 'react'
import Cards from '../servicesCards/Cards'
import InsuranceSection from '../insurance/InsuranceSection';
import WhatWeDo from '../whatWeDo/WhatWeDo';
import ContactForm from '../contact/ContactForm';
// import Specialization from '../specialization/Specialization';



const home = () => {
  return (
    <>
    <Cards />
    <WhatWeDo />
    {/* <Specialization /> */}
    <InsuranceSection />
    <ContactForm />
    </>
  )
}

export default home
