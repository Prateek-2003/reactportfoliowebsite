import React from 'react'
import './about.css'
import ME from '../../assets/profile-pic (2).png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Behavioral Skills</h5>
              <small>Patience, Active Listening, Hardworking</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Hobby</h5>
              <small>Passionate about cricket</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Values</h5>
              <small>I prioritize ethics and quality in all aspects of my work, fostering trust and delivering impactful results</small>
            </article>
          </div>
          <p>Highly disciplined and organized individual seeking an entry-level position to apply
academic knowledge and develop practical skills. Hardworking, analytically-minded
and ready to contribute to the success of an organization.</p>
        </div>
      </div>
    </section>
  )
}

export default about