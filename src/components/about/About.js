import React from 'react';
import image from './image.png'

const About = () => {
  return (
    <div className='about-module grid container' id='about'>
      <div className="left-part s_4col m_6col">
        <figure>
          <img src={image} alt="Illustration représentant des téléphones affichant des NFT" />
        </figure>
      </div>
      <div className="right-part s_4col m_6col">
        <h2 className='title neontech'>What are <br /> Maskoni ?</h2>
        <p className='subtitle'>Maskoni  is not just an NFT collection, our goal is to build a strong community and a large long-term.
          Our ambitions are huge. We want to conquer different areas and create something that every member will be able to enjoy and to be proud to be part of this community.
        </p>
      </div>
    </div>
  );
};

export default About;