import React, { useEffect, useState } from 'react'
import Loader from '../Loader';
import './DataAnnotation.css'
const DataAnnotation = () => {
    
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
     const changeColor = (e)=>{
      var labels = document.getElementsByTagName("label");
      for(let i=0;i<labels.length;i++){
        if(e.target.id===labels[i].id)
       {
        document.getElementById(labels[i].id).style.backgroundColor="black";
        document.getElementById(labels[i].id).style.color="white";
        document.getElementById(labels[i].id).style.fontWeight="600";


       }
       else{
        document.getElementById(labels[i].id).style.backgroundColor="#ced4d6"
        document.getElementById(labels[i].id).style.color="";
        document.getElementById(labels[i].id).style.fontWeight="";

       }

      }
     }   
  return (
    <>
    {
    loader ? <Loader/>  :
    <div className='outer'>
    <div className="layout">
      <input name="nav" type="radio" className="nav home-radio" id="home" checked={true} />
      <div className="page home-page d-flex" style={{flexDirection:"column"}}>
        <div className="page-contents">
          <h1>Image Annotation</h1>
          <p>Unlock the potential of your computer vision applications with our Image Annotation Services.
             We specialize in providing high-quality, accurate, and customized image annotation solutions to train and improve the performance of machine learning models.
             Our Image Annotation Services cater to various industries, including autonomous vehicles, healthcare, retail, agriculture, and more.</p>
        </div>
        
      </div>
      
      <label onClick={changeColor} id='0' className="nav" for="home">
      <span id='0' className='label-one'>  Image Annotation
        </span>
      </label>
    
      <input name="nav" type="radio" className="about-radio" id="about" checked={true} />
      <div className="page about-page">
        <div className="page-contents">
          <h1>Video Annotation</h1>
          <p>Unlock the power of video data with our Video Annotation Services. 
            We specialize in providing precise and customized video annotation solutions to improve the accuracy of your machine learning models and video analysis applications.
            Our Video Annotation Services cater to various industries, including surveillance, autonomous vehicles, entertainment, healthcare, and more.</p>
        </div>
      </div>
      <label onClick={changeColor} id='1' className="nav" for="about">
      <span id='1' className='label-two'>    
        Video Annotation
          </span>
        </label>
    
      <input name="nav" type="radio" className="contact-radio" id="contact" checked={true} />
      <div className="page contact-page">
        <div className="page-contents">
          <h1>Text Annotation</h1>
          <p>Our Text Annotation Services are designed to optimize your Natural Language Processing (NLP) projects. 
            We offer accurate and comprehensive text annotation solutions that fuel the development of AI-driven chatbots, sentiment analysis tools, content categorization systems, and more.
            Our Text Annotation Services cater to a wide range of industries, including e-commerce, healthcare, finance, legal, and more.
    </p>
        </div>
      </div>
      <label onClick={changeColor} id='2' className="nav" for="contact">
        <span id='2' className='label-three'>
        Text Annotation
          </span>
        
      </label>
    </div>
        </div>

    }
    </>
   
  )
}

export default DataAnnotation