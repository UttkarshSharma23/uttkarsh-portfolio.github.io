import React from 'react'
import './about.css'
import ME from '../../assets/uttkarshsharma.png'
import {TbAward} from 'react-icons/tb'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">

{/* Card 1 */}

          <div className="about__cards">
            <article className='about__card'> 
            <TbAward className='about__icon'/>
            <h5>Experience</h5>
            <small>3+ Years Working</small>
            </article>

{/* Card 2 */}
            <article className='about__card'> 
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>300+ WorldWide</small>
            </article>
{/* Card 3 */}
            <article className='about__card'> 
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>80+ Completed Projects</small>
            </article>
          </div>


          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi eligendi eveniet, ab corporis quae provident unde reiciendis impedit sed in odit nisi atque dolorum debitis? Ab, provident corrupti. Nesciunt, doloribus.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      </section>
  )
}

export default About