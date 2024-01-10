import React from 'react'

export const Nav = () => {
  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="navbar">
      <div className="navleft">
        <div className="gola1"></div>
        <h1>
          <span>S</span>arthak
        </h1>
      </div>
      <div className="gola2"></div>
      <div className="navright">
        <ul>
          <li onClick={() => smoothScroll('About')}>About</li>
          <li onClick={() => smoothScroll('Portfolio')}>Portfolio</li>
          <li onClick={() => smoothScroll('Reviews')}>Reviews</li>
          <li onClick={() => smoothScroll('Contact')}>Contact</li>
        </ul>
      </div>
    </div>
  )
}
