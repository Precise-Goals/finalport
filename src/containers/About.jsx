import React from 'react'
import './style.css'
import '../App.css'
import { Link } from 'react-router-dom'
import myself from '../assets/Sarthak.png'
export const About = () => {
  return (
    <div id="About">
      <h1>About me</h1>
      <div className="atent">
        <div className="img"><img src={myself} alt='sarthak' /></div>
        <div className="info">
          <p>Sarthak, a vibrant high school student at Nahata College, is your creative ally for problem-solving and design. With successful projects like the Radium App and Newton AI, he brings a fresh perspective to the table. As a Discord expert, Sarthak excels in both moderation and crafting customized bots for seamless server experiences.</p>
          <div className="diva">
            <a id='one' href="https://preciseblogs.pages.dev"><button className="project">Blogs and Articles</button></a>
            <a id='two' href="https://radium.pages.dev"><button className="project">Radium App</button></a>
            <Link id='three' to='/projects'><button className="project">Projects</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
