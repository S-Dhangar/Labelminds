import React, { useEffect, useState } from 'react'
import './DataAnnotation.css'
import Loader from '../Loader';
const WebScrapping = () => {
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

          loader ? <Loader/>:
       

        <div className='outer'>
        <div class="layout">
          <input name="nav" type="radio" class="nav home-radio" id="home" checked={true} />
          <div class="page home-page d-flex" style={{flexDirection:"column"}}>
            <div class="page-contents">
            <h1>Web Scrapping</h1>
                                <p>Unlock the power of web data with DataHarvest Pro's web scraping services. Our expert team specializes in extracting valuable data from websites to supercharge your decision-making and business insights.
                                    Our web scraping services cater to various industries, including e-commerce, finance, market research, real estate, and more.
                                </p>
            </div>
            
          </div>
          
          <label onClick={changeColor} id='0' class="nav" for="home">
            <span id='0'>
             Web Scrapping
            </span>
          </label>
        
          <input name="nav" type="radio" class="about-radio" id="about" checked={true} />
          <div class="page about-page">
            <div class="page-contents">
            <h1>Data Extraction </h1>
                                <p>Unlock the power of web data with DataHarvest Pro's web scraping services. Our expert team specializes in extracting valuable data from websites to supercharge your decision-making and business insights.
                                    Our web scraping services cater to various industries, including e-commerce, finance, market research, real estate, and more.
                                </p> </div>
          </div>
          <label onClick={changeColor} id='1' class="nav" for="about">
            <span id='1'>
            
        Data Extraction      </span>
            </label>
        
          <input name="nav" type="radio" class="contact-radio" id="contact" checked={true} />
          <div class="page contact-page">
            <div class="page-contents">
            <h1>ETL</h1>
                                <p>Streamline your ETL processes with our Web Scraping for ETL service. We specialize in extracting, transforming, and loading data from web sources, ensuring that your data pipeline remains efficient and your analytics and reporting are powered by high-quality data.
        
                                </p>
            </div>
          </div>
          <label onClick={changeColor} id='2' class="nav" for="contact">
            <span id='2'>
        ETL      </span>
            
          </label>
        </div>
            </div>
               
        }
        </>
    )
}

export default WebScrapping;



