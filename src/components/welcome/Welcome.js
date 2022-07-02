import Carousel from 'react-elastic-carousel'
import { Link } from 'react-router-dom';
import arc from "./torii-cta.png"

const Welcome = () => {
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

    <div className='welcome-module grid container'>
      <div className="left-part s_4col m_6col">
        <h2 className='title neontech'>Collect your own Maskoni nft</h2>
        <p className='subtitle'>buy one to enter the history of the Japanese demon.</p>
        <div id='mint' className='desktop'>
          <Link to="/mint-soon"><p>MINT</p><img src={arc} alt="" /></Link>
        </div>


      </div>
      <div className="right-part s_4col m_6col">

        {/* React Elastic Carousel Library */}
        <Carousel enableAutoPlay autoPlaySpeed={1500} infinite>
          {items.map(item => <img className='item-slider' src={process.env.PUBLIC_URL + `/images/${item.title}.png`} alt='' key={item.id} />)}
        </Carousel>

        <div id='mint' className='mobile'>
          <Link to="/mint-soon"><p>MINT</p><img src={arc} alt="" /></Link>
        </div>
      </div>

    </div>
  );
};

export default Welcome;