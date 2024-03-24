import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Proficient in a variety of technologies including Spring Boot, Angular, React JS, and Node JS.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Skilled in both front-end and back-end development, ensuring holistic understanding and implementation of web projects.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Expertise in leveraging Spring Boot for robust backend functionalities and Angular, and React JS for dynamic front-end development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Committed to delivering high-quality solutions that meet the requirements of modern web applications.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className='service'>
          <div className='service__head'>
            <h3>Frontend Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Specialized in creating engaging user interfaces using technologies such as React JS, Angular, HTML, CSS, and JavaScript.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Possesses a keen eye for design and a focus on user experience to ensure intuitive and responsive web applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Proficient in building with React JS for its component-based architecture or utilizing Angular for its robust framework.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Passionate about translating designs into seamless digital experiences that captivate users.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className='service'>
          <div className='service__head'>
            <h3>Backend Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experienced in building scalable and efficient backend systems using Spring Boot, Node JS, Java, and Python.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Specializes in developing resilient APIs, managing databases, and ensuring smooth server-side operations.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Proficient in utilizing Spring Boot's extensive libraries and frameworks for Java-based applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Versatile in leveraging the versatility of Node JS and Python for backend development, ensuring reliability and high performance.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services
