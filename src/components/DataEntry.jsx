import React, { useEffect, useState } from 'react'
import Loader from '../Loader';
import './DataAnnotation.css'
import { useContext } from 'react'
import { AuthContext } from '../Context'
const DataEntry = () => {
  const { setCurrent } = useContext(AuthContext);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setCurrent("services");
    setTimeout(() => {
      setLoader(false);
    }, 1000);

    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  }, []);


  const changeColor = (e) => {
    var labels = document.getElementsByTagName("label");
    for (let i = 0; i < labels.length; i++) {
      if (e.target.id === labels[i].id) {
        document.getElementById(labels[i].id).style.backgroundColor = "black";
        document.getElementById(labels[i].id).style.color = "white";
        document.getElementById(labels[i].id).style.fontWeight = "600";
      }
      else {
        document.getElementById(labels[i].id).style.backgroundColor = "#ced4d6"
        document.getElementById(labels[i].id).style.color = "";
        document.getElementById(labels[i].id).style.fontWeight = "";

      }

    }
  }


  return (

    <>{
      loader ? <Loader /> :
        <div className='outer'>
          <div className="layout">
            <label onClick={changeColor} id='0' className="nav" for="contact">
              <span id='0'>
              </span>

            </label>
            <input name="nav" type="radio" className="nav home-radio" id="home" checked={true} />
            <div className="page home-page d-flex" style={{ flexDirection: "column" }}>
              <div className="page-contents">
                <h1>Data Entry</h1>
                <p>Simplify your data entry tasks with our Web Scraping for Data Entry service. We specialize in automating the process of populating databases,
                  spreadsheets, and systems with accurate and up-to-date data from web sources, saving you time and reducing manual data entry errors.
                  Our web scraping and data entry services cater to a wide range of industries, including e-commerce, healthcare, real estate, finance, and more.
                </p>
              </div>

            </div>

            <label onClick={changeColor} id='1' className="nav" for="home">
              <span id='1'>
                DATA ENTRY
              </span>
            </label>



            <label onClick={changeColor} id='2' className="nav" for="contact">
              <span id='2'>
              </span>
            </label>
          </div>
        </div>
    }</>

  )
}

export default DataEntry;