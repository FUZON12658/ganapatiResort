import logo from './logo.svg';
import './App.css';
import HeroSection from './Components/Home/HeroSectionHome';
import Footer from './Components/Footer';
import Home from './Components/Home';
import FloatingMenu from './MasterComponents/FloatingMenu';
import ScrollingLogo from './MasterComponents/ScrollingLogo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HamburgerMenu } from './MasterComponents/HamburgerMenu';
import RoomsDisplay from './Components/RoomsAndSuites/RoomsDisplay';
import RoomDisplayFrame from './Components/RoomsAndSuites/RoomDisplayFrame';
import PhotoGallery from './Components/Gallery/PhotoGallery';



function App() {
  return (
  <>
  <Router>
  <FloatingMenu/>
  <ScrollingLogo/>
  <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/rooms" element={<RoomsDisplay/>}></Route>
    <Route exact path="/roomDetails" element={<PhotoGallery/>}></Route>
  </Routes>
  <Footer/>
  </Router>
  </>
  );
}

export default App;


