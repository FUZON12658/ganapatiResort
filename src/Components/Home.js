import React, { useEffect } from 'react'
import HeroSectionHome from './Home/HeroSectionHome'
import ContactUs from './Home/ContactUs'
import VideoGallery from './Home/VideoGallery'
import DisplayPanes from './Home/DisplayPanes'
import LogoSeparator from './Home/LogoSeparator'
import ScrollingLogo from "../MasterComponents/ScrollingLogo"
import { useScrollToTop } from '../MasterComponents/useScrollToTop'


const Home = () => {

  useScrollToTop();

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
