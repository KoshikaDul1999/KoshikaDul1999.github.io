import React from 'react'
import "./about.css"
import ME from '../../assests/me-about.jpg';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <ul className="about__intro">
            <li>
              <p>
                An undergraduate student of University of Ruhuna (BICT (Hons) - Bachelor of Information Communication and Technology).
              </p>
            </li>
            <li>
              <p>
                G.P.A 3.51/4.00 (06 Semesters)
              </p>
            </li>
          </ul>

          <div className='personal-info'>
            <h3 className="personal-heading"><b>Personal Information</b></h3>
            <ul className="personal-info-list">
              <li><span>Name:</span> G.Koshika Dulanjana</li>
              <li><span>DOB:</span> 1999/08/09</li>
              <li><span>Address:</span> Sri Dharmaloka mawathe, Urugala, Ingiriya</li>
              <li><span>Zip code:</span> 12440</li>
              <li><span>Email:</span> koshikadulanjana95@gmail.com</li>
              <li><span>Phone:</span> +94 76 545 8476</li>
              <li><span>Linkedin:</span> in/koshika-dulanjana</li>
              <li><span>GitHub:</span> github/KoshikaDul1999</li>
            </ul>
          </div>
          
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
