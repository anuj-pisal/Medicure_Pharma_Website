import React from 'react'
import '../Style/Home.css'

export default function Footer() {
  return (

     <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="footer-col">
        <h4><i className="ri-capsule-fill" />MediCure<sup>+</sup></h4>
        <ul className="ul">
          <li><a href="#">Home</a></li>
          <li><a href="#">Labtests</a></li>
          <li><a href="#">Your Cart</a></li>
          <li><a href="#">Medicines</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Need help</h4>
        <ul className="ul">
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Shipping and Return Policy</a></li>
          <li><a href="#">Payment Partners</a></li>
          <div className="foot-img-div">
            <li><img id="foot-img" src="img/gpay.png" alt /></li>
            <li><img id="foot-img" src="img/visa.png" alt /></li>
            <li><img id="foot-img" src="img/paytm.png" alt /></li>
            <li><img id="foot-img" src="img/amazon.png" alt /></li>
          </div>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Our Services</h4>
        <ul className="ul">
          <li><a href="#">Our Doctors</a></li>
          <li><a href="#">Schedule an Appointment</a></li>
          <li><a href="#"> Contact Us :+91 2349872349</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Follow us on</h4>
        <ul className="ul">
          <div className="foot-img-div">
            <li><a href="#"><img src="img/insta.png" id="foot-img" alt="instagram" /></a></li>
            <li><a href="#"><img src="img/facebook.png" id="foot-img" alt="facebook" /></a></li>
            <li><a href="#"> <img src="img/x.png" id="foot-img" alt /></a></li>
          </div>  
        </ul>
        <div className="foot-limited">
        </div>
      </div>
    </div>
  </div>
  &nbsp;</footer>


  )
}
