
import React, { Component} from 'react'
import {Cursor, Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom'
import coder_image from './coder_image.jpg';
import Footer from './Footer';

//export default class About extends Component {
  export default function About() {
    
    return (
      <div>
       <div className='fullscreen'style={{"background-color": "#e5e5e5"}}>
      <div className="container aboutus" style={{"background-color": ""}}>
        <div className="row my-3">

            <div className="col-md-6 col-12 my-5">
            <img src={coder_image} alt="about us" className="img-fluid" style={{width: "35rem",height:"25rem"}} /> 
            </div>

            <div className="col-md-6 col-12 my-auto rounded shadow">
                <h1 className="display-4 text-center my-5 "style={{"font-weight": "normal"}}>About me </h1>
                
                <h2 className=" text-justify text-center" style={{'fontWeight': 'bold',color:'blue'}} >
                  <Typewriter 
                  words={['Hi, I am Vishal Maulkar','Looking For Opportunity !']}
                  loop={true}
                  cursor
                  typeSpeed={150}
                  /> 
                  <span class="wave">👋</span>
                </h2>

                <p className="lead text-justify text-center"style={{"font-weight": "bold"}}>A Passionate Software developer</p>
                <div className="text-center col-md-6 col-12 mx-auto">
                    <Link to="" className="btn btn-outline-dark btn-block btn-lg shadow-none my-5" >Contact us</Link>
                </div>
            </div>
        </div>
        <div className="about_company">
            <h2 className="display-4"style={{"font-weight": "normal"}}>About This Website</h2> 
            <p> This website develping learning purpose it is a platform that delivers up-to-date and comprehensive news coverage on various topics such as politics, technology, sports, entertainment, and more. The website is designed to provide users with a simple and intuitive interface that makes it easy to browse and discover news articles.
                Overall, your news app website is a valuable resource for anyone looking to stay informed and up-to-date on the latest news and events happening around the world.
            </p>
            </div>
        </div>
       <Footer/>
        

       </div>
      </div>
       
    )
  
}
