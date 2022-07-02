import React from 'react';
import { Chrono } from "react-chrono";
import katana from "./katan.png"

const Roadmap = () => {
  // Phase RoadMap
  const items = [
    {
      title: "PHASE 1",
      cardTitle: "The beginning",
      cardSubtitle:
        "Generate art, create minting site and secure metadata. Find idea arround project."
    },
    {
      title: "PHASE 2",
      cardTitle: "Launch",
      cardSubtitle:
        " Launch website & fix on a minting price and a mint date. Start minting & sell outGet collection verified on many platforms."
    },
    {
      title: "PHASE 3",
      cardTitle: "Holders Exclusive Discord",
      cardSubtitle:
        "A new exclusive Discord server will be created for Maskoni NFT holders. Our goal is to create the most powerful group. The Discord will strengthen our community: we will host events on a regular basis."
    },
    {
      title: "PHASE 4",
      cardTitle: "The Merch Store",
      cardSubtitle:
        "Our shop will go live soon, for Maskoni holders. Featuring clothes and some interesting stuff that we can't reveal yet. Our artist himself will design the items. Sneak peeks will be posted as soon as possible."
    },
    {
      title: "PHASE 5",
      cardTitle: "Holder Giveaway part",
      cardSubtitle:
        "We have decided to distribute part of our winnings in many giveaways. The biggest is a trip organized by us to Japan, the country of our Maskoni. And many other little giveaways will also be distributed, shhhhh stay tuned…"
    }
  ];

  return (
    <div className='roadmap-module container' id='roadmap'>
      <div className='title-box'>
        <h2 className='neontech title'>Roadmap</h2>
        <img src={katana} alt="" />
      </div>
      {/* RoadMap Library */}
      <Chrono items={items} hideControls useReadMore="false" mode="VERTICAL_ALTERNATING" />
    </div>
  );
};

export default Roadmap;