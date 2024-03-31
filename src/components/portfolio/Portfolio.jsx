import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/portfolio1.jpg'
import IMG2 from '../../assests/portfolio2.jpg'
import IMG3 from '../../assests/portfolio3.png'
import IMG4 from '../../assests/portfolio4.png'
import IMG5 from '../../assests/portfolio5.jpg'
import IMG6 from '../../assests/portfolio6.png'
import IMG7 from '../../assests/portfolio7.png'

const data = [
  {
    id: 1,
    image:IMG1,
    title: 'Rockvin Cafe Web - ReactJS & NodeJS',
    github: 'https://github.com/KoshikaDul1999/Rockvin-Cafe-Web-Application',
  },
  {
    id: 2,
    image:IMG2,
    title: 'Hostal Management System - Angular & SpringBoot',
    github: 'https://github.com/gaganachiranjitha99/SpringBoot_HMS_Back_End',
  },
  {
    id: 3,
    image:IMG3,
    title: 'Gym Web Site - ReactJS',
    github: 'https://github.com/KoshikaDul1999/Gym-Website-React-js-',
  },
  {
    id: 4,
    image:IMG4,
    title: 'Chat Application - Java',
    github: 'https://github.com/sanjeewa999/Chat-Application',
  },
  {
    id: 5,
    image:IMG5,
    title: 'Pet Shop - PHP',
    github: 'https://github.com/sanjeewa999/Pet-shop-store',
  },
  {
    id: 6,
    image:IMG6,
    title: 'Student Management System - Java',
    github: 'https://github.com/sanjeewa999/Student-Management-System--Java',
  },
  {
    id: 7,
    image:IMG7,
    title: 'Car Rental System - Java',
    github: 'https://github.com/BK-KAVIYA/GetFarCar-CarRentalSystem',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
