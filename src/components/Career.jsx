import React, { useEffect, useState } from 'react'
import './Career.css'
import { Link } from 'react-scroll'
import Loader from '../Loader'
import { AuthContext } from '../Context'
import { useContext } from 'react'

const Career = () => {
  const [loader, setLoader] = useState(true);
  const { setCurrent } = useContext(AuthContext);
  useEffect(() => {
    setCurrent("career");
    setTimeout(() => {
      setLoader(false);
    }, 1000);

    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  }, []);
  const submitData = (e) => {
    e.preventDefault();
    window.alert("Thanks: We will get back to you soon");
  }
  return (
    <>
      {
        loader ? <Loader /> :
          <div className="pagecontainer">

            <div className="headerimagecontainer">
              <div className="headercontent">
                <h1>do what you <img src="//s3-us-west-2.amazonaws.com/ec-cdn-content/ec-image-resources/1345984533_love_360.png" alt="Love" className="img-responsive" /> everyday</h1>
                <p>Want to join the Labelminds team? If you have a passion for planning & want to work for a rapidly growing entrepreneurial company, check out the listings below or send your resume to <span>careers@labelminds.com</span></p>
                <a href="#"> <Link to="joblistings" smooth={true} duration={1000} >view job openings</Link>
                </a>
              </div>
            </div>
            <div className="benefitscontainer">
              <h2>benefits of being Labelminds</h2>
              <ul>
                <li>
                  <img src="//s3-us-west-2.amazonaws.com/ec-cdn-content/ec-image-resources/501213759_insurance.jpg" alt="competitive insurance" />
                  <h3>competitive Insurance</h3>
                  <p>We provide health, dental and vision insurance options. Complementary life insurance is included too!</p>
                </li>
                <li>
                  <img src="//s3-us-west-2.amazonaws.com/ec-cdn-content/ec-image-resources/1960341131_pto.jpg" alt="paid time off" />
                  <h3>paid time off</h3>
                  <p>We believe that if you work hard, you get to play hard too. Enjoy paid time off in addition to all main holidays.</p>
                </li>
                <li>
                  <img src="//s3-us-west-2.amazonaws.com/ec-cdn-content/ec-image-resources/1367242323_retire.jpg" alt="retirement options" />
                  <h3>retirement options</h3>
                  <p>We care about your retirement and give you the freedom to customize your 401(k) options.</p>
                </li>
                <li>
                  <img src="//s3-us-west-2.amazonaws.com/ec-cdn-content/ec-image-resources/1766766672_attire.jpg" alt="casual attire" />
                  <h3>casual attire</h3>
                  <p>We keep it classy yet casual, so feel free to wear what you feel comfortable in!</p>
                </li>
              </ul>
              <ul id="ul2">
                <li>
                  <img src="//s3-us-west-2.amazonaws.com/ec-cdn-content/ec-image-resources/1553563634_coffee.jpg" alt="coffee and tea bar" />
                  <h3 id="bottom-adjustment">coffee & tea bar</h3>
                  <p>Get the juices flowing every morning with complimentary coffee and tea.</p>
                </li>
                <li>
                  <img src="//s3-us-west-2.amazonaws.com/ec-cdn-content/ec-image-resources/546814012_community.jpg" alt="community" />
                  <h3 id="bottom-adjustment">community</h3>
                  <p>We host happy hours, employee appreciation events, and some awesome team building events.</p>
                </li>
                <li>
                  <img src="//s3-us-west-2.amazonaws.com/ec-cdn-content/ec-image-resources/1242376693_cali.jpg" alt="california location" />
                  <h3 id="location"><span>Bhopal location:</span><br />MP</h3>
                  <p>Our Bhopal location is located in the heart of Madhya Pradesh, just 15 minutes from the Lake View!</p>
                </li>
                <li>
                  <img src="//s3-us-west-2.amazonaws.com/ec-cdn-content/ec-image-resources/231731189_texas.jpg" alt="texas location" />
                  <h3 id="location"><span>Bhopal location:</span><br />East Bhopal</h3>
                  <p>Our Bhopal location has plenty of free parking away from the crowds. There’s a killer Donut shop down the road too.</p>
                </li>
              </ul>
            </div>

            <div className="current-openings" id="joblistings">
              <h2>CURRENT OPENINGS</h2>
            </div>
            <div className="cards">
              <div className="card">

                <h6 className="card__title">Sr. Software Eng.</h6>
                <p className="card__paragraph">We are hiring a 5 year experienced React developer.
                  <p>Location : Bhopal</p>



                  <br />
                  <input style={{ marginTop: "20px", width: "100%" }} type="file" />  </p>

                <button className='btn btn-primary' onClick={submitData}>Submit</button>


              </div>
              <div className="card">

                <h6 className="card__title">Power BI developer</h6>
                <p className="card__paragraph">We are hiring an experienced person in Power BI.
                  <p>Location : Bhopal</p>
                  <br />



                  <input style={{ marginTop: "20px", width: "100%" }} type="file" />
                </p>
                <button className='btn btn-primary' onClick={submitData}>Submit</button>

              </div>
              <div className="card">

                <h6 className="card__title">DB Administrator</h6>
                <p className="card__paragraph">We are hiring an experienced person in database administration.
                  <p>Location : Bhopal</p>
                  <br />
                  <input style={{ marginTop: "20px", width: "100%" }} type="file" /></p>
                <button className='btn btn-primary' onClick={submitData}>Submit</button>

              </div>
            </div>
          </div>



      }
    </>

  )
}

export default Career