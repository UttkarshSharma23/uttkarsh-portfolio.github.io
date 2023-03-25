import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>

{/* ***************Start of UI/UX***************** */}
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
{/* 1st */}
            <li>
              <BiCheck className='service__list-item'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
{/* 2nd */}
            <li>
              <BiCheck className='service__list-item'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
{/* 3rd */}
            <li>
              <BiCheck className='service__list-item'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
{/* 4th */}
            <li>
              <BiCheck className='service__list-item'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
{/* 5th */}
            <li>
              <BiCheck className='service__list-item'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>

          </ul>
        </article>
{/* *************END OF UI/UX*************** */}

<article className='service'>

{/* **********Start of Web Development************ */}
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
{/* 1st */}
            <li>
              <BiCheck className='service__list-item'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
{/* 2nd */}
            <li>
              <BiCheck className='service__list-item'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
{/* 3rd */}
            <li>
              <BiCheck className='service__list-item'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
{/* 4th */}
            <li>
              <BiCheck className='service__list-item'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
{/* 5th */}
            <li>
              <BiCheck className='service__list-item'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>

          </ul>
        </article>
{/* ***********END OF Web Development************* */}
<article className='service'>

{/* *********Start of Content Creation************* */}
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
{/* 1st */}
            <li>
              <BiCheck className='service__list-item'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
{/* 2nd */}
            <li>
              <BiCheck className='service__list-item'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
{/* 3rd */}
            <li>
              <BiCheck className='service__list-item'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
{/* 4th */}
            <li>
              <BiCheck className='service__list-item'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
{/* 5th */}
            <li>
              <BiCheck className='service__list-item'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>

          </ul>
        </article>
{/* ***********END OF Content Creation************* */}
      </div>
      </section>
  )
}

export default Services