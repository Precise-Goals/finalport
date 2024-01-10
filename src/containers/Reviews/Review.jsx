import React, { useState, useRef } from 'react';
import top from '../../assets/top.png';
import { reviewData } from './data';
import './style.css';
import svg from '../../assets/review.png'

export const Review = () => {
  const cardRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  const memoizedReviewData = React.useMemo(() => reviewData, []);

  const cardWidth = 400;
  const cardsPerPage = 4;

  function handleClickLeft() {
    if (cardRef.current) {
      cardRef.current.scrollBy({
        left: -cardsPerPage * cardWidth,
        behavior: 'smooth',
      });
    }
    updateActiveDot(-1);
  }

  function handleClickRight() {
    if (cardRef.current) {
      cardRef.current.scrollBy({
        left: cardsPerPage * cardWidth,
        behavior: 'smooth',
      });
    }
    updateActiveDot(1);
  }

  function handleDotClick(groupIndex) {
    if (cardRef.current) {
      cardRef.current.scrollTo({
        left: cardRef.current.clientWidth * groupIndex * cardsPerPage,
        behavior: 'smooth',
      });
    }
    setActiveDot(groupIndex);
  }

  function updateActiveDot(increment) {
    const totalDots = Math.ceil(memoizedReviewData.length / cardsPerPage);
    setActiveDot((prevDot) => (prevDot + increment + totalDots) % totalDots);
  }
  return (
    <div id='Reviews'>
      <div className="head">
        <div className="svg">
          <img src={svg} alt="review svg" />
          <h1>Reviews</h1>
          <p>Reviews of Clients which i provided services and our beloved Customers of Radium App</p>
        </div>
      </div>
      <div className="carousel-container">
        <div className="leftnav" onClick={handleClickLeft}>
          <img src={top} alt="leftnav" />
        </div>
        <div className="carousel" ref={cardRef} >
          {memoizedReviewData.map((customers, index) => (
            <div className="card" key={index}>
              <div className="head">
                <div className="reviright">
                  <img src={customers.profilePic} alt={customers.name} />
                </div>
                <div className="revileft">
                  <h1>{customers.name}</h1>
                  <h4>{customers.designation}</h4>
                  <div className="line"></div>
                  <div className="para">
                    <p>{customers.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rightnav" onClick={handleClickRight}>
          <img src={top} alt="rightnav" />
        </div>
      </div>
      <div className="dots">
        {Array.from({ length: Math.ceil(memoizedReviewData.length / cardsPerPage) }, (_, groupIndex) => (
          <div
            key={groupIndex}
            className={`dot ${groupIndex === activeDot ? 'active' : ''}`}
            onClick={() => handleDotClick(groupIndex)}
          ></div>
        ))}
      </div>
    </div>
  );
};
