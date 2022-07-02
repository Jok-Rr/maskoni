import React, { Fragment } from 'react';
import background from '../assets/images/background.png';
import Carousel from 'react-elastic-carousel'
import Footer from '../components/footer/Footer';

const MintSoon = () => {
  // BackGround General WebSite
  const divStyle = {
    color: 'blue',
    backgroundImage: 'url(' + background + ')',
    backgroundSize: 'cover'
  };
  // Image For slider 
  const items = [
    { id: 1, title: '00' },
    { id: 2, title: '01' },
    { id: 3, title: '02' },
    { id: 2, title: '03' },
    { id: 2, title: '04' },
    { id: 2, title: '05' },
    { id: 2, title: '43' },
    { id: 2, title: '65' },
    { id: 2, title: '97' }
  ]
  return (
    < >
      <div className="MintSoon" style={divStyle}>
        <div style={{ alignItems: 'center' }} className="container grid">
          <div className="s_12col m_5col left-part">
            <Carousel enableAutoPlay autoPlaySpeed={1500} infinite>
              {items.map(item => <img className='item-slider' src={process.env.PUBLIC_URL + `/images/${item.title}.png`} alt='' key={item.id} />)}
            </Carousel>
          </div>
          <div className="s_12col m_7col">
            <h1 className="title neontech">
              MINT SOON
            </h1>
            <p style={{ color: 'white', marginBottom: '30px' }}>The mint is not yet available, it will be available in a while, if you want to be the first to buy it follow us on twitter and discord and activate the notifications.</p>
            <p style={{ color: 'white', fontWeight: '700', textAlign: 'center' }} className="grid">
              <a href="#e" className='twitter s_2col m_5col'><i class="fa-brands fa-twitter"></i> Join us on Twitter</a>
              <a href="#e" className='discord s_2col m_5col'><i class="fa-brands fa-discord"></i> Join us on Discord</a>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>

  );
};

export default MintSoon;