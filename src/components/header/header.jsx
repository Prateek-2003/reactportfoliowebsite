import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/profile-pic (2).png'

const header = () => {
  return (
   <header>
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Prateek Singh</h1>
      <h5 className="text-light">Web Developer</h5>
      <CTA/>
      <div className="me">
        <img src={ME} alt="me" />
      </div>
      <a href="#contact" className='scroll_down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default header