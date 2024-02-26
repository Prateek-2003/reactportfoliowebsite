import  React  from 'react';
import './testimonial.css'
import AVATAR from '../../assets/avatar1.png'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

import 'swiper/core/classes'

const data = [
  {
    avatar: AVATAR,
    name: 'Tim Cartin',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet incidunt distinctio animi quaerat provident autem accusamus repellendus, dolor culpa, magni reiciendis aliquam illum, eum voluptas.'
  },
  {
    avatar: AVATAR,
    name: 'Michael',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet incidunt distinctio animi quaerat provident autem accusamus repellendus, dolor culpa, magni reiciendis aliquam illum, eum voluptas.'
  },
  {
    avatar: AVATAR,
    name: 'Rober Dowry',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet incidunt distinctio animi quaerat provident autem accusamus repellendus, dolor culpa, magni reiciendis aliquam illum, eum voluptas.'
  },
]

const testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial_container">
        {
          data.map(({avatar,name,review},index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
               <div className="client_avatar">
                <img src={avatar} />
               </div>
               <h5 className='client_name'>{name}</h5>
               <small className="client_review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonial