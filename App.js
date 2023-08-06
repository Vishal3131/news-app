
import './App.css';

import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';

export default class App extends Component {

  render() {
    return (
      <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<News key='NATIONAL' topic='NATIONAL' category='Top Headlines'/>} />   

        <Route path="/Sports" element={<News key='SPORTS' topic='SPORTS ' category='Sports News'/>} /> 
        <Route path="/Technology" element={<News key='TECHNOLOGY' topic='TECHNOLOGY'category='Technology News'/>} /> 
        <Route path="/Business" element={<News key='BUSINESS' topic='BUSINESS' category='Business News'/>} /> 
        <Route path="/Entertainment" element={<News key='ENTERTAINMENT' topic='ENTERTAINMENT' category='Entertainment News'/>} /> 
        <Route path="/Health" element={<News key='HEALTH' topic='HEALTH' category='Health News'/>} /> 
      
        <Route path="/About" element={<About/>} />
          
      </Routes>
    </BrowserRouter>
        
     
        
   
      {/* <h6 class="text-center bg-dark text-white p-3 m-0">© 2023 Designed and Developed by Vishal Maulkar. All Rights Reserved.</h6> */}
      </div>
    )
  }
}
