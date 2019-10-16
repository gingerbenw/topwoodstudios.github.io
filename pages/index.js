import React from 'react';

// Components
import Preloader from '../components/Preloader';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import Portfolio from '../components/Portfolio';

const Index = () => (

  <body>

    <Preloader />

    <div className="container-fluid">
      <Header />

      <Nav />

      <Intro />

      <Portfolio />
    </div>

    <Footer />

    <BackToTop />


  </body>


);

export default Index;
