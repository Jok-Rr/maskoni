import Carousel from 'react-elastic-carousel'
import arc from "./torii-cta.png"

const Welcome = () => {

  const items = [
    { id: 1, title: 'img1' },
    { id: 2, title: 'img2' },
    { id: 3, title: 'img3' },
  ]
  return (
    <div className='welcome-module grid container'>
      <div className="left-part s_4col m_6col">
        <h2 className='title neontech'>Collect your own Maskoni nft</h2>
        <p className='subtitle'>buy one to enter the history of the Japanese demon.</p>
        <div id='mint' className='desktop'>
          <p >MINT</p>
          <img src={arc} alt="" />
        </div>


      </div>
      <div className="right-part s_4col m_6col">
        <Carousel enableAutoPlay autoPlaySpeed={1500} infinite>
          {items.map(item => <img className='item-slider' src={process.env.PUBLIC_URL + `/images/${item.title}.png`} alt='' key={item.id} />)}
        </Carousel>
        <div id='mint' className='mobile'>
          <p >MINT</p>
          <img src={arc} alt="" />
        </div>
      </div>

    </div>
  );
};

export default Welcome;