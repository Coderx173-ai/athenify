"use client"
import React from 'react'
import NabBar from './NavBar/NabBar'
import HeroSection from './HeroSection/HeroSection'
import Footer from './Footer/Footer'
import { ScrollProvider } from './ScrollContext'

const LayoutWrapper = ({children}) => {
  return (
    <ScrollProvider>
        <div className="bg-heroBG min-h-[100vh] bg-[#062630] px-4 bg-cover from-transparent pb-14">
          <div className="max-w-7xl mx-auto">
            <NabBar />
            <HeroSection />
          </div>
        </div>
        {children}
        <Footer />
     </ScrollProvider>
  )
}

export default LayoutWrapper