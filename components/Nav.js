import React from 'react';

const Nav = () => (
  <nav>
    <ul className="box-primary-nav">
      <li className="box-label">About me</li>

      <li>
        <a href="index.html">Intro</a>
        <i className="ion-ios-circle-filled color" />
      </li>
      <li><a href="about.html">About me</a></li>
      <li><a href="services.html">services</a></li>
      <li><a href="portfolio.html">portfolio</a></li>
      <li><a href="contact.html">contact me</a></li>


      <li className="box-label">Follow me</li>

      <li className="box-social"><a href="#0"><i className="ion-social-facebook" /></a></li>
      <li className="box-social"><a href="#0"><i className="ion-social-instagram-outline" /></a></li>
      <li className="box-social"><a href="#0"><i className="ion-social-twitter" /></a></li>
      <li className="box-social"><a href="#0"><i className="ion-social-dribbble" /></a></li>
    </ul>
  </nav>
);

export default Nav;
