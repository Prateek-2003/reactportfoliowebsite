import React from 'react'
import './nav.css'
import { FaHouseUser } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { useState } from 'react';

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <Nav>
     <a href="#" className={activeNav === '#'? 'active' : ''}><FaHouseUser/></a>
     <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about'? 'active' : ''}><FaUser/></a>
     <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience'? 'active' : ''}><FaRegCheckSquare/></a>
     <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services'? 'active' : ''}><FaRegHandshake/></a>
     <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact'? 'active' : ''}><FaRegCommentDots/></a>
    </Nav>
  )
}

export default nav