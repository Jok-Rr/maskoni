import React from 'react';
import { Chrono } from "react-chrono";
import katana from "./katan.png"

const Roadmap = () => {
  const items = [
    {
      title: "PHASE 1",
      cardTitle: "Project genesis",
      cardSubtitle:
        "To build this project, we formed a team of Elrond enthusiast. We have been thinking for several weeks about the project, the roadmap, the artwork, and how the project could be useful for the Elrond ecosystem."
    },
    {
      title: "PHASE 2",
      cardTitle: "Project genesis",
      cardSubtitle:
        "To build this project, we formed a team of Elrond enthusiast. We have been thinking for several weeks about the project."
    },
    {
      title: "PHASE 3",
      cardTitle: "Project genesis",
      cardSubtitle:
        "To build this project, we formed a team of Elrond enthusiast. We have been thinking for several weeks about the project, the roadmap, the artwork, and how the project could be useful for the Elrond ecosystem."
    },
    {
      title: "PHASE 4",
      cardTitle: "The Merch Store",
      cardSubtitle:
        "Our shop will go live soon, for Elronds Friends holders. Featuring clothes and some interesting stuff that we can't reveal yet. Our artist himself will design the items. Sneak peeks will be  posted as soon as possible."
    }
  ];

  return (
    <div className='roadmap-module container'>
      <div className='title-box'>
        <h2 className='neontech title'>Roadmap</h2>
        <img src={katana} alt="" />
      </div>
      <Chrono items={items} hideControls useReadMore="false" mode="VERTICAL_ALTERNATING" />
    </div>
  );
};

export default Roadmap;