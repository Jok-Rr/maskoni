import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './page/Home';
import Navbar from './components/navbar/Navbar';
import './assets/stylesheet/theme.scss'
import MintSoon from "./page/MintSoon";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mint-soon" element={<MintSoon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
