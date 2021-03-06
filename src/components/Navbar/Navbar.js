import { Link } from "react-router-dom";
import arc from "./torii-cta.png"
export default function navbar() {

  function openMenu() {
    const menuMobile = document.getElementById('mobile-menu');
    const burgerBtn = document.getElementById('burger-btn');

    menuMobile.classList.toggle('open-flex');
    burgerBtn.classList.toggle('fa-xmark')
  }

  return (
    <div className='header' id="home">
      {/* Desktop Menu */}
      <nav className='grid container'>
        <h1 className='h1 s_3col m_3col'>Maskoni</h1>
        <ul className='nav-links m_7col flex justify-content-center'>
          <li className='link'><Link to="/">HOME</Link></li>
          <li className='link'><a href="#about">ABOUT</a></li>
          <li className='link'><a href="#roadmap">ROADMAP</a></li>
          <li className='link'><a href="#team">TEAM</a></li>
          <li className='link' id='mint'><Link to="/mint-soon"><p>MINT</p><img src={arc} alt="" /></Link></li>
        </ul>
        <ul className='social_link m_2col flex justify-content-end'>
          <li className='items'><a href='#sd' className="discord-logo"><i className="fa-brands fa-discord"></i></a></li>
          <li className='items'><a href='https://twitter.com/MaskOni_NFT' className="discord-logo" target='blank'><i className="fa-brands fa-twitter"></i></a></li>
        </ul>
        <i className="fa-solid fa-bars s_1col justify-content-end" onClick={openMenu} id='burger-btn'  ></i>
      </nav>
      {/* Mobile Menu */}
      <div id='mobile-menu' >
        <ul className='nav-links'>
          <li className='link'><Link to="/">HOME</Link></li>
          <li className='link'><a href="#about">ABOUT</a></li>
          <li className='link'><a href="#roadmap">ROADMAP</a></li>
          <li className='link'><a href="#team">TEAM</a></li>
          <li className='link' id='mint'><Link to="/mint-soon"><p>MINT</p><img src={arc} alt="" /></Link></li>
        </ul>
        <ul className='social_link flex'>
          <li className='items'><a href='#sd' className="discord-logo"><i className="fa-brands fa-discord"></i></a></li>
          <li className='items'><a href='https://twitter.com/MaskOni_NFT' className="discord-logo" target='blank'><i className="fa-brands fa-twitter"></i></a></li>
        </ul>
      </div>
    </div>
  )
}
