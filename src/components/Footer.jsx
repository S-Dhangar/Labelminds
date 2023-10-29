import React from 'react'
import './Footer.css';
import instagram from '../images/instagram.svg'
import facebook from '../images/facebook.svg'

import linkedin from '../images/linkedin.svg'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="row container-fluid footer-main">
            <div className="col-xl-3 my-1" style={{display:"flex",flexDirection:"column",width:"300px"}}><p className='logo-style'>
  <span class="logo_body">
    <div class="label">LABEL</div>
    <div class="M">M</div>
    <div class="I">
      <div class="dot"></div>
    </div>
    <div class="sec">NDS</div>
  </span></p>
            <p className='logo-p'>Partner with LabelMinds for unparalleled data annotation services that drive AI innovation. Let us be your trusted ally in the journey towards groundbreaking artificial intelligence solutions.</p>
            <div className="row container-fluid" style={{justifyContent:'space-between'}}>
            <a className='social-media-logo' href="http://linkedin.com/company/labelminds/"><span><img height="20px" width="20px" src={linkedin} alt="" /> </span></a>
            <a className='social-media-logo' href="https://instagram.com/labelminds"><span><img height="20px" width="20px" src={facebook} alt="" /> </span></a>
            <a className='social-media-logo' href="https://instagram.com/labelminds"><span><img height="20px" width="20px" src={instagram} alt="" /> </span></a>
            </div>
            </div>
            <div className="col-xl-3 my-2" style={{display:"flex",flexDirection:"column",width:"300px"}}>
                <p className='headings'>Resources</p>
                <Link to='/dataannotation' className='links'> Data annotation</Link>
                <Link to='/webscrapping' className='links'> Web scrapping</Link>
                <Link to='/dataannotation' className='links'> Text annotation</Link>
                <Link to='/dataentry' className='links'> Data Entry</Link>
                <Link to='/webscrapping' className='links'> ETL</Link>
            </div>
            <div className="col-xl-3 my-2" style={{display:"flex",flexDirection:"column",width:"300px"}}>
                <p className='headings'>Solutions</p>
               
                <Link to='/privacy' className='links'> Privacy policy</Link>    
            </div>
            <div className="col-xl-3 my-2" style={{display:"flex",flexDirection:"column",width:"300px"}}>
                <p className='headings'>CONTACT</p>
                <Link to='/' className='links'> contact@labelminds.com</Link>
                <Link to='/' className='links'> 7067751093</Link>
            </div>

        </div>
        <div className="row container-fluid below-footer my-5 d-flex">
            <p className='below-footer-p'>© Copyright Lableminds 2023, All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer