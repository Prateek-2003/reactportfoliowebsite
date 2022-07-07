import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img1.webp'
import IMG2 from '../../assets/img2.webp'
import IMG3 from '../../assets/img3.webp'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target={'_blank'}>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target={'_blank'}>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target={'_blank'}>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio