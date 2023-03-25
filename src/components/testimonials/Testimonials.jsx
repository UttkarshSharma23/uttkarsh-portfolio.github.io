import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/profile1.jpg'
import AVATAR2 from '../../assets/profile2.jpg'
import AVATAR3 from '../../assets/profile3.jpg'
import AVATAR4 from '../../assets/profile4.jpg'


// Importing the slider module for creating a sliding testimonial section >>>> import Swiper core and required modules
import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// Array list for testimonials
const data = [
  {
    avatar: AVATAR1,
    name:'Arvind Sharma',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum recusandae repellat soluta eum neque. Nihil, aperiam aliquam eius, atque velit laboriosam necessitatibus ipsum dolorem debitis excepturi, magnam blanditiis molestiae. Vitae?'
  },
  {
    avatar: AVATAR2,
    name:'Mohak Sharma',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum recusandae repellat soluta eum neque. Nihil, aperiam aliquam eius, atque velit laboriosam necessitatibus ipsum dolorem debitis excepturi, magnam blanditiis molestiae. Vitae?'
  },
  {
    avatar: AVATAR3,
    name:'Abhigyan Kumar',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum recusandae repellat soluta eum neque. Nihil, aperiam aliquam eius, atque velit laboriosam necessitatibus ipsum dolorem debitis excepturi, magnam blanditiis molestiae. Vitae?'
  },

]



const Testimonials = () => {
  return (
    <section id='testimonials'>
     <h5>Review fro Clients</h5>
     <h2>Testimonials</h2>

     <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >

{/* Mapping all the testimonials in a react-arrow function */}
      {
        data.map(({avatar,name,review,},index)=>{
          return(
            <SwiperSlide key={index}
             className='testimonial'>
            <div className="client__avatar">
              <img src={avatar} />
            </div>
              <h5 className='client__name'>
                {name}
              </h5>
              <small className='client__review'>
                {review}
              </small>
          </SwiperSlide>
          )
        })
      }   
     </Swiper>
      </section>
  )
}

export default Testimonials