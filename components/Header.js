import React from 'react';

const Header = () => (
  <header className="box-header">
    <div className="box-logo">
      <a href="index.html"><img src="img/logo.png" width="80" alt="Logo" /></a>
    </div>
    <a className="box-primary-nav-trigger" href="#0">
      <span className="box-menu-text">Menu</span>
      <span className="box-menu-icon" />
    </a>
  </header>
);

export default Header;
