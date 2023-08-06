import React from 'react'
import { AiFillLinkedin,AiFillFacebook,AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <div>
      

      <footer class="footer-bs" style={{backgroundColor:'#947fba', color: 'black'}}>
        <div class="row">
        	
        	<div className="col-md-6 footer-social animated fadeInDown"> 
            	<h4>Follow Us</h4>
            	 <ul className='icons'> 
                	<li><a href="#"><h3><AiFillFacebook/></h3></a></li>
                	<li><a href="https://www.linkedin.com/in/vishal-maulkar-ab49a622a"target='blank'> <h3><AiFillLinkedin/></h3></a></li>
                	<li><a href="#" ><h3><AiFillInstagram/></h3></a></li>
                 
                 </ul> 
            </div>
        </div>
        <h6 class="text-center bg-dark text-white p-3 m-0">© 2023 Designed and Developed by Vishal Maulkar. All Rights Reserved.</h6>
    </footer>





    </div>
  )
}
