import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import RoomsCarousel from './components/RoomsCarousel'

function App() {

  return (
   <div>
    <Navbar/>
     <div className="max-w-[1500px] mx-auto px-6">
      <Header/> 
     </div>
     <About/>
     <div id="about">
      <SectionOne/>
      <SectionTwo/>
     </div>
     <Contact/>
     <Footer/>
   </div>
  )
}

export default App
