import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/netflix clone.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.png'

// Array of  portfolio projects for mapping
const data= [
  {
    id:1,
    image:IMG1,
    title: 'Netflix Clone Project',
    github: 'https://github.com/UttkarshSharma23/netflix-clone',
    demo: 'https://netflix-clone-afo.pages.dev/' 
  } ,
  {
    id:2,
    image:IMG4,
    title: 'Dashboard Work',
    github: 'https://github.com',
    demo: 'https://github.com' ,
  },
  {
    id:3,
    image:IMG3,
    title: 'Crypto Currency Dashboard',
    github: 'https://github.com',
    demo: 'https://github.com' ,
  } ,
  {
    id:4,
    image:IMG4,
    title: 'Crypto Currency Dashboard',
    github: 'https://github.com',
    demo: 'https://github.com' ,
  } , 
  {
    id:5,
    image:IMG5,
    title: 'Crypto Currency Dashboard',
    github: 'https://github.com',
    demo: 'https://github.com' ,
  } ,
  {
    id:6,
    image:IMG6,
    title: 'Crypto Currency Dashboard',
    github: 'https://github.com',
    demo: 'https://github.com' ,
  } 
 ]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      
      <div className="container portfolio__container">
{/* Method Used to call the array data */}
{
  data.map(({id,image,title,github,demo}) =>{
    return(
      <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target='blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='blank'>  Live Demo</a>
          </div>          
        </article>
    )
  })
}



{/* 1st Project
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={IMG1} alt="" />
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='blank'>Github</a>
            <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='blank'>  Live Demo</a>
          </div>          
        </article> */}
{/* ************End of Projects***************** */}
      </div>
    </section>
  )
}

export default Portfolio
