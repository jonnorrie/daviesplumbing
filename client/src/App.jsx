import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  return (
    <>
      <header id="banner">
        <span>Davies Plumbing</span>
        <span>Call: (416) 580-6934</span>
      </header>

      <section id="center">
        <div>
          <h1>Davies Plumbing</h1>
        </div>
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="quote">
          <h2>Book a Free Quote</h2>
          <div id="quote-form">
            <div className="quote-row">
              <label>Name: </label>
              <input type='text' />
            </div>
            <div className="quote-row">
              <label>Email: </label>
              <input type='email' />
            </div>
            <div className="quote-row">
              <label>Issue: </label>
              <textarea rows={4}></textarea>
            </div>
          </div>
          <div id="quote-submit"><button>Submit</button></div>
        </div>

      </section>

      <section id="next-steps">
        <div id="reviews">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Reviews</h2>
          <p>See what your neighbours are saying!</p>
          <div className='review'>
            <h4>Jonathon</h4>
            <p>"Preston was great! He knew exactly what was wrong with my toilet, and fixed it right away. 10/10"</p>
          </div>
          <div className='review'>
            <h4>Melissa</h4>
            <p>"He's alright I guess."</p>
          </div>
        </div>  
      </section>

      <section></section>
    </>
  )
}

export default App
