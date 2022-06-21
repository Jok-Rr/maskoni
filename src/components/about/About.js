import React from 'react';
import image from './image.png'

const About = () => {
  return (
    <div className='about-module grid container'>
      <div className="left-part m_6col">
        <figure>
          <img src={image} alt="" />
        </figure>
      </div>
      <div className="right-part m_6col">
        <h2 className='title neontech'>What are <br /> Maskoni ?</h2>
        <p className='subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique ut odio nec suscipit. maximus ex sapien, malesuada tincidunt nunc laoreet id.Lorem ipsum dolor sit amet, consectetur adipiscing elit.  tristique ut odio nec suscipit. Suspendisse maximus ex sapien, malesuada tincidunt nunc laoreet id.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default About;