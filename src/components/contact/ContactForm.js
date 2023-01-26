import React, { useRef } from "react";
// import { BsFillPinMapFill } from 'react-icons/bs';
// import { AiOutlinePhone } from 'react-icons/ai';
// import { AiOutlineMail } from 'react-icons/ai';


import './ContactForm.css';
import emailjs from 'emailjs-com'


const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        //    Service Id        Template Id                 Public Key (Account Tab) 
        emailjs.sendForm('service_9v2gipl', 'template_rxc8sbg', form.current, 'Rj5e7bWJla-kOEL0H')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <>

<section className="container">
<div className='contact-section-left'>
      <div class="footer_get_touch_inner">
        <div class="colmun-70 get_form">
          <div class="get_form_inner">
            <div class="get_form_inner_text">
              <h3>Get In Touch</h3>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div class="inputs">
                <input type="text" name='name' placeholder='Your Name' required /> <br/>
                <input type="text" name='email' placeholder='Your Email' required /> <br/>
                <input type="tel" name='phone' placeholder='Your Phone' required /> <br/>
                <input type="text" name='subject' placeholder='Subject' required /> <br/>

              </div>
              <div>
                <textarea name="message" placeholder="How can we help?" cols="30" rows="10" required></textarea>
                <input type="submit" value="Submit" />
              </div>
            </form>
        </div>
    </div>
</div>
</div>
</section>
    

{/* 
<div className="contact-cards container">

    <div id="container">  
        <div id="imageContainer"></div>
        <center><h2>CALL US</h2></center>
        <p><AiOutlinePhone /><a href="tel:3234521224"> +1 (323) 452-1224</a></p><br /> 
    </div>

    <div id="container">  
        <div id="imageContainer"></div>
        <center><h2>EMAIL</h2></center>
        <p><AiOutlineMail /> info@domainName.com  </p><br />
    </div>


    <div id="container">  
        <div id="imageContainer"></div>
        <center><h2>LOCATION</h2></center>
        <p><BsFillPinMapFill /> 3700 Sunset Ln, Suite 2, Antioch, CA 94509 </p><br />
    </div>

</div> */}


        </>
    )
}

export default ContactForm