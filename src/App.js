import logo from './logo.svg';
import './App.css';
import HeroSection from './Components/Home/HeroSectionHome';
import Footer from './Components/Footer';
import Home from './Components/Home';
import FloatingMenu from './MasterComponents/FloatingMenu';
import ScrollingLogo from './MasterComponents/ScrollingLogo';

function App() {
  return (
  <>
  <ScrollingLogo/>
  <FloatingMenu/>
  <Home/>
  <Footer/>
  </>
  );
}

export default App;
