import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>My Background</h5>
      <h2>Education</h2>

      <div className="conainer services_container">
        <article className='service'>
          <div className="services_head">
            <h3>B.Tech. 2020-2024</h3>
          </div>
          <ul className='service_list'>
          <li>
              <BiCheck className='service_list-icon' />
              <p>Currently Pursuing </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>From - Shri Ramswaroop Memorial University</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Stream - Computer Science</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>CGPA - 7.5 </p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="services_head">
            <h3>Intermediate 2019-2020</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Passed out from CBSE</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>From - Central Academy</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Stream - Physics,Chemistry,Maths</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Percentage - 74.2%</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="services_head">
            <h3>High School 2017-2018</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Passed out from CBSE</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>From - Central Academy</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Stream - Science</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Percentage - 79%</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services