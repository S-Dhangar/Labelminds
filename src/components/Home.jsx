
import About from './About'
import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import video from '../images/bg_video2.mp4'
// import { useContext } from 'react'
// import { AuthContext } from '../Context'
import Loader from '../Loader'
const Home = () => {
    const [loader,setLoader]=useState(true);
    
    
    useEffect(()=>{

        setTimeout(()=>{
            setLoader(false);
        },1000);
      
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Add smooth scrolling behavior
      });

      
        
    
    }, [])





    



    return (
        <>
        {
            loader ? <Loader/> :

            <div>
        <div className='home'>
            <video src={video} autoPlay loop muted />
            <div className="overlay"></div>
            <div className="content">
                <h1 className='animation-header'>Where Data Meets Intelligence</h1>

                <div className="animation_container">
                <h1 class="animation-class">
  <span className="animation-span" style={{color:"white"}}>Driving</span>
  <div class="message">
    <div class="word1">Data Annotation</div>
    <div class="word3">Web Scrapping</div>
    <div class="word2">Data Extraction</div>
  </div>
</h1>
                    <p className="swift-up-text">
                        Impressive group of young machine learning engineers and data scientists,
                        pioneering the development of an AI website with versatile capabilities.

                    </p>

                </div>


                <div className="btn-box">
                    <Link
                         to='/contact' 
                        className="btn emailButton"
                    >Let's Talk</Link>

                    {/* <span className="animate"></span> */}
                </div>


            </div>
            </div>
            <About/>


        </div>


        }
                    </>

        
    )
}

export default Home