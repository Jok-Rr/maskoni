import Navbar from './components/navbar/Navbar';
import Welcome from './components/welcome/Welcome';
import './assets/stylesheet/theme.scss'

function App() {
  return (
    <div className="App">
      <style>{'body { background-color: black; }'}</style>
      <Navbar />
      <Welcome />
    </div>
  );
}

export default App;
