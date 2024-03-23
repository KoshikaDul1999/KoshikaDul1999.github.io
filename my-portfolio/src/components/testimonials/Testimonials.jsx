import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assests/rec1.jpg'
import AVTR2 from '../../assests/rec2.jpg'
import AVTR3 from '../../assests/rec3.jpg'
import AVTR4 from '../../assests/rec4.jpg'

import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar:AVTR1,
    name:'Mr.Naveen Devinda Walimuni',
    posision:'Lecturer(Probationary) - Faculty of Technology, University of Ruhuna',
    review:''
  },
  {
    avatar:AVTR2,
    name:'Ms.Ganga Ruwani',
    posision:"Manager - People's Bank, Ingiriya",
    review:'It gives me great pleasure to recommend Koshika Dulanjana. Koshika proved to be an invaluable asset to our team, demonstrating his honesty, reliability, and exceptional work ethic. His knowledge and positive attitude consistently contributed to our success, making him a standout colleague. Without any problem, I would confidently recommend Koshika. Due to his dedication and talent, the company he works for will receive great service from him.'
  },
  {
    avatar:AVTR3,
    name:'Mr.Chathuranga Adhikari',
    posision:'Lecturer(Probationary) - Faculty of Technology, University of Ruhuna',
    review:'I am pleased to recommend Mr. Koshika Dulanjana, a final year student in the Department of ICT at the Faculty of Technology, Ruhuna University. I am a Lecturer in the Multidisciplinary Department of the Faculty of Technology, University of Ruhuna, and have taught him course modules in the second and third years. The Koshika student exhibits an exceptional desire to constantly learn, a quick grasp of concepts, and strong skills in teamwork. Because of his reliability, commitment to helping others, proficiency in technology, soft skills, and English, I believe he will work actively with any IT industry or academic institution.'
  },
  {
    avatar:AVTR4,
    name:'cjrc hdcb',
    posision:'',
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
          data.map(({avatar, name,posision, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt='Avatar One' />
                </div>
                <h5 className='client__name'>{name}</h5>
                <h6 className='client__posision'>{posision}</h6>
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
