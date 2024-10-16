import React from 'react'
import { Link } from "react-router-dom"
import { RiFacebookBoxLine, RiYoutubeLine, RiGithubLine } from "react-icons/ri"

const Contact = () => {
  return (
    <>
       <section id="contact_Mini">
        <div className="super_container">
        <div className="container_1">
          <h3>Let's connect</h3>
          <div>
            <p>Phone</p>
            <span>+8801874614406</span>
          </div>
          <div>
            <p>Email</p>
            <span>mashfi.azim@gmail.com</span>
          </div>
          <div>
            <p>Address</p>
            <span>House No 12 Sector 11 Uttara Dhaka-1230</span>
          </div>
          <ul>
          <Link to={"/facebook/mashfiazim"} target="_blank"><RiFacebookBoxLine/></Link>
          <Link to={"/facebook/mashfiazim"} target="_blank"><RiFacebookBoxLine/></Link>
          <Link to={"/facebook/mashfiazim"} target="_blank"><RiFacebookBoxLine/></Link>
        </ul>
        </div>
        
        <div className="container_2">
          <h3>We'd love to hear from you</h3>
          <form>
            <div>
              <input type="text" placeholder="Your Name"/>
              <input type="email" placeholder="Email"/>
            </div>
            <textarea rows="4" placeholder="Your Message..."/>
            <button type="submit">SEND</button>
          </form>
        </div>
        </div>
      </section>
    </>
  )
}

export default Contact
