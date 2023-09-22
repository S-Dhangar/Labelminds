import './App.css';
import About from './components/About';
// import Task from './components/task';
import { useContext, useState} from 'react';
import Navbar from './Navbar';
import Home from './components/Home';
import Career from './components/Career';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { AuthContext } from './Context';
import Loader from './Loader';
import Services from './components/Services';
import DataAnnotation from './components/DataAnnotation';
import DataEntry from './components/DataEntry';
import WebScrapping from './components/WebScrapping';
import { useEffect } from 'react';
import Privacy from './components/Privacy';
import PNF from './PNF';
function App() {
const [loader,setLoader]=useState(false);
  useEffect(()=>{
      setTimeout(()=>{
          setLoader(false);
      },3000);
  },[])

  return (
    <>
{
     loader?  <Loader/>  :
  <div className="App">
        <Router>
        <Navbar/>
      
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/dataannotation' element={<DataAnnotation/>}/>
        <Route path='/dataentry' element={<DataEntry/>}/>
        <Route path='/webscrapping' element={<WebScrapping/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<PNF/>}/>


        </Routes> 


  
        <Footer/>
        </Router>
      </div>
     
}
    
    
    </>
    
  );
}

export default App;
