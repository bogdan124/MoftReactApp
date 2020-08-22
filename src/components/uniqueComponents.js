import React from 'react'

/* Here we have the component for logo, we find this component in header*/
export const LogoComponent = () => (
    <div className="nav-logo-wrap local-scroll">
          <a href="/" className="logo small-height">
              <img src={process.env.PUBLIC_URL +"/static/img/moft.svg"} alt="" width="178" height="136"/>
          </a>
    </div>
  );
/* Here we have The Component for the menu button when the site is in in mobile mode, we find this component in header */
export const MobileNavComponent = () => (
    <div className="mobile-nav small-height Moft-black-bars">
    <i className="fa fa-bars black"></i>
  </div>
  );
  
