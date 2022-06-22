import Navbar from './components/navbar/Navbar';
import Welcome from './components/welcome/Welcome';
import About from './components/about/About';
import Roadmap from './components/roadmap/Roadmap';
import Team from './components/team/Team';
import './assets/stylesheet/theme.scss'
import background from './background.png'

function App() {
  const divStyle = {
    color: 'blue',
    backgroundImage: 'url(' + background + ')',
    // backgroundPositionX: '28px',
    // backgroundPositionY: '-145px',
    backgroundSize: 'cover'
  };

  return (
    <div className="App" style={divStyle}>
      <Navbar />
      <Welcome />
      <About />
      <Roadmap />
      <Team />
    </ div>
  );
}

export default App;
