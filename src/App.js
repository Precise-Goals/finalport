import React from 'react';
import { Home } from './containers/Home';
import { About } from './containers/About';
import { Portfolio } from './containers/Portfolio';
import { Review } from './containers/Reviews/Review';
import { Contact } from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Work } from './components/Work';
import { Nav } from './components/nav';
import top from './assets/top.png'

export const Wrap = () => {
  return (
    <>
      <Nav />
      <Home id="Home" />
      <About id="About" />
      <Portfolio id="Projects" />
      <Review id="Reviews" />
      <Contact id="Contact" />
    </>
  );
}


function App() {
  
  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Wrap />} />
          <Route path='/projects' element={<Work/>} />
        </Routes>
        <img src={top} onClick={() => smoothScroll('navbar')} className='top' alt='top'></img>
      </BrowserRouter>
    </div>
  );
}

export default App;
