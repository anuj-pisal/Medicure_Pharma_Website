import React from 'react'
import '../Style/Home.css'
import { Link } from 'react-router-dom'

export default function 
() {
  return (
    <nav>
        <div class="navdiv">
            <div class="logo"><a href="#">Medicure +</a></div>
            <ul>
                <Link to="/"><li><a href="#"><i class="fa-solid fa-house"></i>&nbsp;&nbsp;Home</a></li></Link>
                <Link to="/medicines"><li><a href="#"><i class="fa-solid fa-capsules"></i>&nbsp;&nbsp;Medicines</a></li></Link>
                <Link to=""><li><a href="#"><i class="fa-solid fa-vial-virus"></i>&nbsp;&nbsp;Lab Tests</a></li></Link>            
                <Link to=""><li><a href="#"><i class="fa-solid fa-stethoscope"></i>&nbsp;&nbsp;Doctors </a></li></Link>
                <Link to=""><li><a href="#"><i class="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;Cart</a></li></Link>
                <Link to=""><li><a href="#"><i class="fa-solid fa-user"></i>&nbsp;&nbsp;Profile</a></li></Link>
                
                <button href="#">Sign up</button>
                <button href="#">Log in</button> 
            </ul>
        </div>
    </nav>
  )
}
