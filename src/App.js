import Navbar from './components/navbar/Navbar';
import Welcome from './components/welcome/Welcome';
import About from './components/about/About';
import Roadmap from './components/roadmap/Roadmap';
import Team from './components/team/Team';
import Footer from './components/footer/Footer';
import './assets/stylesheet/theme.scss'
import background from './background.png'

function App() {
  const divStyle = {
    color: 'blue',
    backgroundImage: 'url(' + background + ')',
    backgroundSize: 'cover'
  };

  return (
    <div className="App" style={divStyle}>
      <Navbar />
      <Welcome />
      <About />
      <Roadmap />
      <Team />
      <Footer />
    </ div>
  );
}

export default App;
