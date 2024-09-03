"use client"
import React from 'react'
import NabBar from './NavBar/NabBar'
import HeroSection from './HeroSection/HeroSection'
import Footer from './Footer/Footer'
import { ScrollProvider } from './ScrollContext'

const LayoutWrapper = ({children}) => {
  return (
    <ScrollProvider>
        <NabBar />
        
        {children}
        <Footer />
     </ScrollProvider>
  )
}

export default LayoutWrapper