import React from 'react'
import './Home.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Home = () => {
  return (
    <div className='hero Container' id='Home'>
      <div className="home-text">
        <h1>P.A COLLEGE OF ENGINEERING</h1>
        <center><h2>CSE (ICSB)</h2></center>
        <p>IOT|CYBER SECURITY|BLOCK CHAIN</p>
        {/* <a href='https://www.pace.edu.in/' target='_blank' rel="noopener noreferrer">
          <button className='btn'>Know More<img src={dark_arrow} alt="" /></button> 
        </a> */}
      </div>
    </div>
  )
}

export default Home