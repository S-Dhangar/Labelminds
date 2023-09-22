import './Contact.css'
import React, { useRef, useState,useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Loader from '../Loader';
const Contact = () => {

  const [loader,setLoader]=useState(true);
  useEffect(()=>{
      setTimeout(()=>{
          setLoader(false);
      },1000);
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
    },[]);




  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jijm2fu', 'template_1nlstbk', form.current, '4GhcRCe9tRjvV3n-3')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };




  return (
  <>
  {
      loader ? <Loader/>  :
      <div className='contact' id='contact'>
      <div className="login-box">
        <h2>Get in Touch</h2>
        <form ref={form}>
          <div className="user-box">
            <input type="text" name="user_name" required="" />
            <label>Subject</label>
          </div>
          <div className="user-box">
            <input type="email" name="user_email" required="" />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input style={{ color: "gray", fontSize: "13px" }} type="text" placeholder='xyz@mail.com :- Your Query' name="message" required="" />
            <label>Tell here how can we help you.</label>
          </div>
          <a href='#' onClick={sendEmail}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </div>
  }
  </>
    
  )
}

export default Contact