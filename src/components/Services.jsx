import React, { useEffect, useState } from 'react'
import './Services.css'
import video from '../images/bg_video_services.mp4'
import Loader from '../Loader'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../Context'
const Services = () => {
  const navigate = useNavigate();
  const {setCurrent} = useContext(AuthContext);
  const [loader,setLoader]=useState(true);
  useEffect(()=>{
    setCurrent("services")
      setTimeout(()=>{
          setLoader(false);
      },1000);
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
    },[]);
  // const changeNavbarColor=()=>{
  //   if (window.scrollY <= 90) {
  //     document.getElementById("links").style.color = "#081b29";
  //   }
  //   else{
  //     document.getElementById("links").style.color = "#fff";

  //   }

  // }

  // window.addEventListener('scroll', changeNavbarColor);


  const navigator = (e) => {
    if (e.target.name === 'dataannotation'){
      navigate('/dataannotation');

    }
    else if (e.target.name === 'webscrapping')
     {
      navigate('/webscrapping');
     }

    else if (e.target.name === 'dataentry'){
      navigate('/dataentry');

    }
  }
  return (
<>
{
  loader? <Loader/>  :

  <div className='services' id='services'>
      <video src={video} className='video' autoPlay loop muted />
      <div className="overlay1"></div>
      <div className="content1">

        <div className='service container-fluid' id='service'>

          <div className="service-row row d-flex align-items-center">

            <div className="col-sm-3 text-center service-one">

              <div className='service-box-one'>

              </div>
              <div className='service-box-two'>

                Data Annotation
                <p style={{ fontSize: "15px", marginTop: "5px" }}>Min Price: $0.005 Per Image</p>
                <button onClick={navigator} name='dataannotation' className="btn btn-primary bouncy" style={{ animationDelay: "0.07s" }}>Read me</button>

              </div>
            </div>

            <div className="col-sm-3 text-center service-one">
              <div className='service-box-2'>
              </div>
              <div className='service-box-two'>
                Web Scrapping

                <p style={{ fontSize: "15px", marginTop: "5px" }}>Min Price: $5 </p>
                <button onClick={navigator} name='webscrapping' className="btn btn-primary bouncy" style={{ animationDelay: "0.34s" }}>Read me</button>

              </div>
            </div>
            <div className="col-sm-3 text-center service-one">
              <div className='service-box-3'>
              </div>
              <div className='service-box-two'>
                Data Entry
                <p style={{ fontSize: "15px", marginTop: "5px" }}>Min Price: $2 Per Document</p>
                <button onClick={navigator} name='dataentry' className="btn btn-primary bouncy" style={{ animationDelay: "0.60s" }}>Read me</button>

              </div>
            </div>
          </div>
        </div>



      </div>

    </div>


}

</>
    
  )
}

export default Services