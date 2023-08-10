import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/portfolio1.png'
import IMG2 from '../../assests/portfolio2.png'
import IMG3 from '../../assests/portfolio3.png'
import IMG4 from '../../assests/portfolio4.png'
import IMG5 from '../../assests/portfolio5.png'
import IMG6 from '../../assests/portfolio6.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='/' />
          </div>
          <h3>This is portfolio item title</h3>
          <a href='https://github.com/KoshikaDul1999' className='btn' target='_blank'>Github</a>
          <a href='https://dribbble.com/shots' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='/' />
          </div>
          <h3>This is portfolio item title</h3>
          <a href='https://github.com/KoshikaDul1999' className='btn' target='_blank'>Github</a>
          <a href='https://dribbble.com/shots' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt='/' />
          </div>
          <h3>This is portfolio item title</h3>
          <a href='https://github.com/KoshikaDul1999' className='btn' target='_blank'>Github</a>
          <a href='https://dribbble.com/shots' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt='/' />
          </div>
          <h3>This is portfolio item title</h3>
          <a href='https://github.com/KoshikaDul1999' className='btn' target='_blank'>Github</a>
          <a href='https://dribbble.com/shots' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt='/' />
          </div>
          <h3>This is portfolio item title</h3>
          <a href='https://github.com/KoshikaDul1999' className='btn' target='_blank'>Github</a>
          <a href='https://dribbble.com/shots' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt='/' />
          </div>
          <h3>This is portfolio item title</h3>
          <a href='https://github.com/KoshikaDul1999' className='btn' target='_blank'>Github</a>
          <a href='https://dribbble.com/shots' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
