import React from 'react'
import './style.css'
import '../App.css'
import { cardData } from './cards'
import { Link } from 'react-router-dom';

export const Portfolio = () => {

  const Data = React.useMemo(() => cardData, [])

  return (
    <div id="Portfolio">
      <div className="lay">
        <div className="texts">
          <h1>Projects and Contributions</h1>
          <p>I created a lot of projects using Html, CSS, JavaScript [Particles, Mojaang, Mineflayer, Discord], Node Js, React Js, Python. Provide Ui and Ux designs and Graphics Design Services through Figma, Canva and PhotoShop. I do Social Media managing too.</p>
        </div>
        <div className="jobcards">
          {Data.map((job,index) => (
            <div className="cd" key={index}>
              <img src={job.image} alt={job.header} />
              <h1>{job.header}</h1>
              <p>{job.para}</p>
            </div>
          ))}
        </div>
        <Link to='/projects-n-timeline'>
          <button className="projects">
            Work & Projects
          </button>
        </Link>
      </div>
    </div>
  )
}
