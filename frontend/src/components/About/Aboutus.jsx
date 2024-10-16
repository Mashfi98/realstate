import React from 'react'
import AboutComponentMini from "../../subComponents/About";


const Aboutus = () => {
  return (
    <>
        <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
          <h3>Your peace of mind, our priority!</h3>
          <p>Luxury rentals are high-end properties available for short- or long-term stays, offering premium amenities and services.</p>
          <p>Luxury rentals are high-end properties available for short- or long-term stays, offering premium amenities and services.</p>
          <p>Luxury rentals are high-end properties available for short- or long-term stays, offering premium amenities and services.</p>
        </div>
      </div>
      <AboutComponentMini />
    </section>
    </>
  )
}

export default Aboutus
