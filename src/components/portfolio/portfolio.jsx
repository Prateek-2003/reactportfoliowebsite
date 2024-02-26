import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/carrental.png'
import IMG2 from '../../assets/weather.png'
import IMG3 from '../../assets/notes.png'

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
          <h3>Fullstack Car Rental Website</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/Prateek-2003/CarRental" className='btn'>Github</a>
          <a href="https://carrental-x7uq.onrender.com" className='btn btn-primary' target={'_blank'}>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={IMG2} alt="" />
          </div>
          <h3>Weather Webapp</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/Prateek-2003/WeatherForecastapp" className='btn'>Github</a>
          <a href="https://prateek-2003.github.io/WeatherForecastapp/" className='btn btn-primary' target={'_blank'}>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={IMG3} alt="" />
          </div>
          <h3>Notes Taking Webapp</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/Prateek-2003/noteTakingApp" className='btn'>Github</a>
          <a href="https://prateek-2003.github.io/noteTakingApp/" className='btn btn-primary' target={'_blank'}>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio