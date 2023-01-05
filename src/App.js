
import React from 'react';
import './App.css';
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
 import { useState } from 'react';
import Home from './Home';
import Service from './Service';
import Contact from './Contact';
 import contextTheme from './Context';
import Navbar from './Navbar';


const App = ()=> {
  const[isLight,setIslight]=useState(true);

  const changeTheme=(e)=>{
     setIslight(e);
  }
 
  return (
    <div className='Main'>
    <p className="theme">I have changed Theme to {isLight===true?"Light":"Dark"}</p>
    <div className={isLight===true?"Light":"Dark"}>
      <p className="Geekster">Geekster</p>
      <contextTheme.Provider value={{isLight,changeTheme}}>
      <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
       </Routes>
      </BrowserRouter>
      </contextTheme.Provider>
    
      
      </div>
      
    </div>
  );
}

export default App;
