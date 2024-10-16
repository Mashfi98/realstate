import React, { useState } from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import {Link ,useNavigate} from 'react-router-dom';

const Navbar = () => {
  const [navHeight,setnavHeight]= useState(false);
  const navigate = useNavigate();
  const gotoHome = ()=>{
    navigate("/");
  }
  return (
    <div>
      <nav className={navHeight ? "show nav" : "nav"}>
        <div className='logo' onClick={()=>gotoHome()}>ELITE ESCAPES</div>
        <ul>
            <li>
                <Link to ="/about">ABOUT US</Link>
            </li>
            <li>
                <Link to ="/villa">VILLAS</Link>
            </li>
            <li>
                <Link to ="/contact">CONTACT</Link>
            </li>
            </ul>
            <RxHamburgerMenu className='hamburger' onClick={()=> setnavHeight(!navHeight)}/> 
              {/* click to set navHeight for true  or false */}
      </nav>
    </div>
  )
}

export default Navbar
