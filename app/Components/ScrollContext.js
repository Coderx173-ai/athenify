"use client"
import React, { createContext, useRef, useCallback } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const sectionRefs = {
    subscription: useRef(null),
    section2: useRef(null),
    // Add more sections as needed
  };

  const scrollToSection = useCallback((section) => {
    console.log(sectionRefs); // Debugging: Check if refs are created
    if (sectionRefs[section] && sectionRefs[section].current) {
      sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' });
      sectionRefs[section].current.focus();
    }
  }, [sectionRefs]);

  return (
    <ScrollContext.Provider value={{ sectionRefs, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContext;