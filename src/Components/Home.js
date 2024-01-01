import React from 'react'
import HeroSectionHome from './Home/HeroSectionHome'
import ContactUs from './Home/ContactUs'
import VideoGallery from './Home/VideoGallery'
import DisplayPanes from './Home/DisplayPanes'
import LogoSeparator from './Home/LogoSeparator'
import ScrollingLogo from "../MasterComponents/ScrollingLogo"


const Home = () => {
  return (
    <>
    <ScrollingLogo/>
    <HeroSectionHome/>
    <LogoSeparator/>
    <VideoGallery/>
    <DisplayPanes/>
    <ContactUs/>
    </>
  )
}

export default Home
