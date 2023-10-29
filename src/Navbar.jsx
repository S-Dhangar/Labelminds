import React, { useState } from 'react'
import './components/Navbar.css'
import { useContext } from 'react';
import { AuthContext } from './Context';
import { Link } from 'react-router-dom';
const Navbar = () => {

  const {current, setCurrent} = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  const changeNavbarColor = () => {
    if (toggle === true) {
      document.getElementById("navbar").style.background = "#081b29";
      return
    }
    if (window.scrollY >= 90) {
      document.getElementById("navbar").style.background = "#081b29";
      document.getElementById("navbar").style.borderRadius = "0 0 10px 10px";
    }
    else {

      document.getElementById("navbar").style.background = "transparent";

    }
  };
  window.addEventListener('scroll', changeNavbarColor);


 


  return (

      <nav id='navbar' className="navbar navbar-expand-lg navbar navbar-dark">
        

  <span class="logo_body">
    <div class="label">LABEL</div>
    <div class="M">M</div>
    <div class="I">
      <div class="dot"></div>
    </div>
    <div class="sec">NDS</div>
  </span>
        {/* <h1 className='ml-4 text-light' alt="">LABELMINDS</h1> */}
        <button onClick={() => { if (toggle === false) { document.getElementById("navbar").style.background = "#081b29"; setToggle(true); } else { setToggle(false) } }} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded='false' aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse justify-content-end mr-5" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item pr-4">
              <Link className="nav-link" name='home' style={{ color: current === 'home' ? "#00abf0" : "white" }} onClick={(e) => { setCurrent(e.target.name) }} to="/">HOME</Link>
            </li>
            <li className="nav-item  pr-4">
              <Link className="nav-link" name='services' style={{ color: current === 'services' ? "#00abf0" : "white" }} onClick={(e) => { setCurrent(e.target.name) }} to="/services">SERVICES</Link>
            </li>
            <li className="nav-item  pr-4">
              <Link className="nav-link" name='career' style={{ color: current === 'career' ? "#00abf0" : "white" }} onClick={ (e)=>  setCurrent(e.target.name)} to="/career">CAREER</Link>
            </li>
            <li className="nav-item  pr-4">
              <Link className="nav-link" name='contact' style={{ color: current === 'contact' ? "#00abf0" : "white" }} onClick={(e) => { setCurrent(e.target.name) }} to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </nav>


  )
}

export default Navbar