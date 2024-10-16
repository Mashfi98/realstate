import React from 'react'
import { RiFacebookBoxLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
        <section id="contact">
        <h1>CONTACT US</h1>
        <p><br /></p>
        <p>
        We’d love to hear from you! Whether you have questions, feedback, or need to make a reservation, feel free to reach out.
        </p>
        <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
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
                <span>House No.123 Sector A-1</span>
              </div>
              <ul>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
              </ul>
          </div>
        </div>
      </section>

    </>
  )
}

export default Contact
