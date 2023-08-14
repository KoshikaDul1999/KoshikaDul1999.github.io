import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assests/avatar1.jpg'
import AVTR2 from '../../assests/avatar2.jpg'
import AVTR3 from '../../assests/avatar3.jpg'
import AVTR4 from '../../assests/avatar4.jpg'

import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar:AVTR1,
    name:'cjrc hdcb',
    review:'nfvlfjn jvnfjv nfvlfjn jvnfjv vnfv oijfv cjnv dvbfv lorem ndcd hbsdch vherv dbdhv dbv yydsv ydsvr dy vnfv oijfv cjnv dvbfv lorem ndcd hbsdch vherv dbdhv dbv yydsv ydsvr dyv ydsbvy sdgv syevwf'
  },
  {
    avatar:AVTR2,
    name:'cjrc hdcb',
    review:'nfvlfjn jvnfjv vnfv oijfv cjnv dvbfv lorem ndcd hbsdch vherv dbdhv dbv nfvlfjn jvnfjv vnfv oijfv cjnv dvbfv lorem ndcd hbsdch vherv dbdhv dbv yydsv ydsvr dy yydsv ydsvr dyv ydsbvy sdgv syevwf'
  },
  {
    avatar:AVTR3,
    name:'cjrc hdcb',
    review:'nfvlfjn jvnfjv vnfv oijfv cjnv dvbfv lorem ndcd hbsdch vherv dbdhv dbv yydsv ydsvr dyv ydsbvy sdgv sy nfvlfjn jvnfjv vnfv oijfv cjnv dvbfv lorem ndcd hbsdch vherv dbdhv dbv yydsv ydsvr dy evwf'
  },
  {
    avatar:AVTR4,
    name:'cjrc hdcb',
    review:'nfvlfjn jvnfjv vnfv oijfv cjnv dvbfv lorem ndcd hbsdch vherv dbdhv dbv yydsv ydsvr dyv ydsbvy sdg nfvlfjn jvnfjv vnfv oijfv cjnv dvbfv lorem ndcd hbsdch vherv dbdhv dbv yydsv ydsvr dy v syevwf'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt='Avatar One' />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
