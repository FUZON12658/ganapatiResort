import logo from './logo.svg';
import './App.css';
import HeroSection from './Components/Home/HeroSectionHome';
import Footer from './Components/Footer';
import Home from './Components/Home';
import FloatingMenu from './MasterComponents/FloatingMenu';
import ScrollingLogo from './MasterComponents/ScrollingLogo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HamburgerMenu } from './MasterComponents/HamburgerMenu';

function App() {
  return (
  <>
  <Router>
  <ScrollingLogo/>
  <FloatingMenu/>
  <Routes>
    <Route exact path="/" element={<Home/>}></Route>
  </Routes>
  <Footer/>
  </Router>
  </>
  );
}

export default App;
