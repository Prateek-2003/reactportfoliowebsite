import React from 'react'
import resume from '../../assets/ResumeNew.pdf'

const CTA = () => {
  return (
  <div className="cta">
    <a href={resume} className='btn' target={'_blank'}>Download CV</a>
    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
  </div>
  )
}

export default CTA