import React, { useState } from 'react'
import './style.css'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faInstagram, faLinkedin, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons'
export const Contact = () => {

  const [userData, setUserData] = useState({
    Name: "",
    Email: "",
    Social: "",
    Message: "",
  })
  let name, value;
  const postUserData = async (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  }

  //firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { Name, Email, Social, Message } = userData;
    if (Name && Email && Social && Message) {
      const res = await fetch('https://portfolio-e2ae3-default-rtdb.firebaseio.com/userDataRecords.json',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name,
            Email,
            Social,
            Message,
          })
        }
      )
      if (res) {
        setUserData({
          Name: "",
          Email: "",
          Social: "",
          Message: "",
        })
        console.log(`Data Stored`)
      } else {
        console.log(`ache se bharo`)
      }
    } else {
      console.log(`Dont leave the Form Empty`)
    }
  }
  return (
    <div id="Contact">
      <div className="bglay">
        <div className="bg"></div>
        <div className="content">
          <div className="c1">
            <h1>Reach Out</h1>
          </div>
          <div className="c2">
            <div className="le">
              <div className="cc1"><h1><span>S</span>arthak</h1></div>
              <div className="cc2">
                <div className="ccc1">
                  <p>
                  I am Sarthak, part of Aspiring youth of India. I believe in Practical Knowledge, practice Based Approach and Proper Guidance. I am Multiskilled Learner thrive for Challenges upcoming in my journey.
                  </p>
                  <p>
                    Instagram : <span><a href="https://www.instagram.com/precisegoals.in/">precisegoals.in</a></span> <br />
                    Official App : <span><a href="https://www.instagram.com/precisegoals.in/">Radium</a></span> <br />
                    Email Id : elitesarthakamr@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="r1">
              <form id='form'>
                <div className="classform">
                  <input type="text" id='' spellCheck="false" onChange={postUserData} name='Name' value={userData.Name} className="Name" placeholder='Your Name' autoComplete='off' />
                  <input type="text" id='' spellCheck="false" onChange={postUserData} name='Email' value={userData.Email} className="Email" placeholder='Your E-mail' autoComplete='off' />
                  <input type="text" id='' spellCheck="false" onChange={postUserData} name='Social' value={userData.Social} className="Social" placeholder='Social Id' autoComplete='off' />
                  <textarea type="text" maxLength={512} id='' onChange={postUserData} name='Message' value={userData.Message} className="Message" placeholder='Message for Us' autoComplete='off' />
                </div>
                <button className="submit" spellCheck="false" onClick={submitData}>Submit</button>
              </form>
            </div>
          </div>
          <div className="c3">
            <p>Copyright© 2023 - Sarthak Patil all Rights Preserved</p>
            <div className="socials">
              <a href="https://www.youtube.com/channel/UC3WNgoJ9XxHWAQT_98xUC7A"><FontAwesomeIcon icon={faYoutube}/></a>
              <a href="https://github.com/Precise-Goals"><FontAwesomeIcon icon={faGithub}/></a>
              <a href="https://www.linkedin.com/in/sarthak-tulsidas-patil-11914b24a/"><FontAwesomeIcon icon={faLinkedin}/></a>
              <a href="https://www.instagram.com/precisegoals.in/"><FontAwesomeIcon icon={faInstagram}/></a>
              <a href="https://open.spotify.com/user/31s4ssb5ucxgvzm6qonffom5aagm?si=dac0625c49c846ad"><FontAwesomeIcon icon={faSpotify}/></a>
              <a href="https://discord.gg/HdC3QJdS5P"><FontAwesomeIcon icon={faDiscord}/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
