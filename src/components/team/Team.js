import React from 'react';
import katana from "./images/katan.png";
import marc from "./images/04.png";
import robin from "./images/43.png";
import daenys from "./images/02.png";
import tom from "./images/03.png";
import florian from "./images/05.png";
import baptiste from "./images/01.png";

const Team = () => {
  return (
    <div className='team-module container' id='team'>
      <div className='title-box'>
        <h2 className='neontech title'>Team</h2>
        <img src={katana} alt="" />
      </div>
      <div className="trombinoscope">
        <div className="first-line grid">
          <div className='m_2col s_2col card first'>
            <figure>
              <img src={tom} alt="" />
            </figure>
            <p className='name neontech'>TOM</p>
            <p className='role'>Full Stack Dev</p>
          </div>
          <div className='m_2col s_2col card'>
            <figure>
              <img src={florian} alt="" />
            </figure>
            <p className='name neontech'>FLORIAN</p>
            <p className='role'>Full Stack Dev</p>
          </div>
        </div>
        <div className="second-line grid">
          <div className='s_2col m_2col card second'>
            <figure>
              <img src={robin} alt="" />
            </figure>
            <p className='name neontech'>ROBIN</p>
            <p className='role'>Marketing Expert</p>
          </div>
          <div className='m_2col s_2col card'>
            <figure>
              <img src={baptiste} alt="" />
            </figure>
            <p className='name neontech'>BAPTISTE</p>
            <p className='role'>Content Creator</p>
          </div>
          <div className='m_2col s_2col card'>
            <figure>
              <img src={marc} alt="" />
            </figure>
            <p className='name neontech'>MARC</p>
            <p className='role'>Artist</p>
          </div>
          <div className='m_2col s_2col card'>
            <figure>
              <img src={daenys} alt="" />
            </figure>
            <p className='name neontech'>DAENYS</p>
            <p className='role'>Head of Community</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;