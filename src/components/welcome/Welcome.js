import React from 'react';
import Carousel from 'react-elastic-carousel'

const Welcome = () => {
  const items = [
    { id: 1, title: 'img1' },
    { id: 2, title: 'img2' },
    { id: 3, title: 'img3' },
  ]
  return (
    <div className='welcome-module grid container'>
      <div className="left-part m_6col">
        <h2 className='title neontech'>collect super
          rate digital
          artnoir</h2>
        <p className='subtitle'>buy and sell NFTs from the world's
          top artists.</p>
        <p id='mint'>MINT</p>
      </div>
      <div className="right-part m_6col">
        <Carousel enableAutoPlay autoPlaySpeed={1500} infinite>
          {items.map(item => <img className='item-slider' src={process.env.PUBLIC_URL + `/images/${item.title}.png`} alt='' key={item.id} />)}
        </Carousel>
      </div>
    </div>
  );
};

export default Welcome;