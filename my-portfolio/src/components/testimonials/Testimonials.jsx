import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assests/avatar1.jpg'
import AVTR2 from '../../assests/avatar2.jpg'
import AVTR3 from '../../assests/avatar3.jpg'
import AVTR4 from '../../assests/avatar4.jpg'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className='container testimonials__container'>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR1} alt='Avatar One' />
            <h5 className='client__name'>Erfngjbt ejefnr</h5>
            <small className='client__review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ipsa ea dolorem, rerum a exercitationem ut, sequi eum deleniti modi obcaecati iure nulla facere explicabo architecto dolor animi autem similique!
            </small>
          </div>
        </article>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR2} alt='Avatar Two' />
            <h5 className='client__name'>Erfngjbt ejefnr</h5>
            <small className='client__review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ipsa ea dolorem, rerum a exercitationem ut, sequi eum deleniti modi obcaecati iure nulla facere explicabo architecto dolor animi autem similique!
            </small>
          </div>
        </article>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR3} alt='Avatar Three' />
            <h5 className='client__name'>Erfngjbt ejefnr</h5>
            <small className='client__review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ipsa ea dolorem, rerum a exercitationem ut, sequi eum deleniti modi obcaecati iure nulla facere explicabo architecto dolor animi autem similique!
            </small>
          </div>
        </article>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR4} alt='Avatar Four' />
            <h5 className='client__name'>Erfngjbt ejefnr</h5>
            <small className='client__review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ipsa ea dolorem, rerum a exercitationem ut, sequi eum deleniti modi obcaecati iure nulla facere explicabo architecto dolor animi autem similique!
            </small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonials
