import React from 'react';
import Welcome from '../components/welcome/Welcome';
import About from '../components/about/About';
import Roadmap from '../components/roadmap/Roadmap';
import Team from '../components/team/Team';
import background from '../assets/images/background.png';
import Footer from '../components/footer/Footer';


const Home = () => {

  // BackGround General WebSite
  const divStyle = {
    color: 'blue',
    backgroundImage: 'url(' + background + ')',
    backgroundSize: 'cover'
  };

  return (
    <div className="App" style={divStyle}>
      {/* Welcome Module */}
      <Welcome />
      {/* About Us Module */}
      <About />
      {/* Roadmap Module */}
      <Roadmap />
      {/* Team Module */}
      <Team />
      <Footer />
    </ div>
  );
};

export default Home;