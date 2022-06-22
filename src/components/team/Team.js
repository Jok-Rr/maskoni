import React from 'react';
import katana from "./images/katan.png";
import robin from "./images/cell-blue.png";

const Team = () => {
  return (
    <div className='team-module container'>
      <div className='title-box'>
        <h2 className='neontech title'>Team</h2>
        <img src={katana} alt="" />
      </div>
      <div className="trombinoscope">
        <div className="first-line grid">
          <div className='m_2col card first'>
            <figure>
              <img src={robin} alt="" />
            </figure>
            <p className='name neontech'>ROBIN</p>
            <p className='role'>Full Stack Dev</p>
          </div>
          <div className='m_2col card'>
            <figure>
              <img src={robin} alt="" />
            </figure>
            <p className='name neontech'>ROBIN</p>
            <p className='role'>Full Stack Dev</p>
          </div>
        </div>
        <div className="second-line grid">
          <div className='m_2col card second'>
            <figure>
              <img src={robin} alt="" />
            </figure>
            <p className='name neontech'>ROBIN</p>
            <p className='role'>Full Stack Dev</p>
          </div>
          <div className='m_2col card'>
            <figure>
              <img src={robin} alt="" />
            </figure>
            <p className='name neontech'>ROBIN</p>
            <p className='role'>Full Stack Dev</p>
          </div>
          <div className='m_2col card'>
            <figure>
              <img src={robin} alt="" />
            </figure>
            <p className='name neontech'>ROBIN</p>
            <p className='role'>Full Stack Dev</p>
          </div>
          <div className='m_2col card'>
            <figure>
              <img src={robin} alt="" />
            </figure>
            <p className='name neontech'>ROBIN</p>
            <p className='role'>Full Stack Dev</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;