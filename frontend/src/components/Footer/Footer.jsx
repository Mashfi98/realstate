import React from 'react'
import {Link , useLocation } from 'react-router-dom'


const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <div>
      <footer className={isHomePage ? 'homePage_footer otherPage_footer': 'otherPage_footer' }>
        <div className="container">
          <h4>ELITE ESCAPES</h4>
          <p >These rentals often include villas, penthouses, or upscale apartments located in prime locations, such as beachfronts, city centers, or exclusive neighborhoods. Luxury rentals typically feature spacious living areas, private pools, high-end furnishings, and concierge services, catering to travelers or residents seeking comfort, privacy, and exclusivity.</p>
          <ul>
            <li>
              <Link to = {'/'}>HOME</Link>
            </li>
            
            <li>
              <Link to = {'/contact'}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h4>Connect with us</h4>
          <p>01874614406</p>
          <p>mashfi.azim@gmail.com</p>
          <p>All Rights Reserved BY Mashfi Azim</p>
        </div>
      </footer>
    </div>
  
  )
}

export default Footer
