import React from 'react'
import Hero from './sections/Hero'
import AppShowcase from './sections/ShowcaseSection'
import NavBar from './components/Navbar'
import FeatureCards from './sections/FeaturedCards'
import LogoShowcase from './sections/SkillsShowcase'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AppShowcase />
      <LogoShowcase />
      <FeatureCards />
      <TechStack />
      <Contact />
      <Footer/>
    </>
  )
}

export default App
