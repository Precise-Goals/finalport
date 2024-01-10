import React from 'react'
import './style.css'
import '../App.css'
import headphone from '../assets/headphone.png'
export const Home = () => {
  return (
    <div id="Home">
      <div className="i1"></div>
      <div className="homecontent">
        <div className="hleft">
          <div className="contento">
            <h1>Hey Guys</h1>
            <p>I am Sarthak, <br /> Who codes, design and thrilled to solve problems</p>
          </div>
        </div>
        <div className="hright">
          <div className="i2"></div>
          <img src={headphone} alt="headphone" />
        </div>
      </div>
      <div className="i3"></div>
    </div>
  )
}
