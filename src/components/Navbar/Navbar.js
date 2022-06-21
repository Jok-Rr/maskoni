export default function navbar() {

  function openMenu() {
    const menuMobile = document.getElementById('mobile-menu');
    const burgerBtn = document.getElementById('burger-btn');

    menuMobile.classList.toggle('open-flex');
    burgerBtn.classList.toggle('fa-xmark')
  }

  return (
    <div className='header'>
      <nav className='grid container'>
        <h1 className='h1 s_3col m_3col'>Maskoni</h1>
        <ul className='nav-links m_7col flex justify-content-center'>
          <li className='link'>HOME</li>
          <li className='link'>ABOUT</li>
          <li className='link'>ROADMAP</li>
          <li className='link'>TEAM</li>
          <li className='link' id='mint'>MINT</li>
        </ul>
        <ul className='social_link m_2col flex justify-content-end'>
          <li className='items'><a href='#sd' className="discord-logo"><i className="fa-brands fa-discord"></i></a></li>
          <li className='items'><a href='#sd' className="discord-logo"><i className="fa-brands fa-twitter"></i></a></li>
        </ul>
        <i className="fa-solid fa-bars s_1col justify-content-end" onClick={openMenu} id='burger-btn'  ></i>
      </nav>
      <div id='mobile-menu' >
        <ul className='nav-links'>
          <li className='link'>HOME</li>
          <li className='link'>ABOUT</li>
          <li className='link'>ROADMAP</li>
          <li className='link'>TEAM</li>
          <li className='link' id='mint'>MINT</li>
        </ul>
        <ul className='social_link flex'>
          <li className='items'><a href='#sd' className="discord-logo"><i className="fa-brands fa-discord"></i></a></li>
          <li className='items'><a href='#sd' className="discord-logo"><i className="fa-brands fa-twitter"></i></a></li>
        </ul>
      </div>
    </div>
  )
}
