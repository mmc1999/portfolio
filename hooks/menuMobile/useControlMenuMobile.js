import React, { useState, useEffect } from 'react'

const useControlMenuMobile = () => {
    const [isMenuAppeard, setIsMenuAppeard] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleMenu = () => {
        if(isMenuAppeard) setIsMenuAppeard(false)
        else setIsMenuAppeard(true)
    }
    const handleScroll = () => {if(window.scrollY > 20) setIsMenuAppeard(false)}
    
    const handleResize = () => {
        if(window.innerWidth > 750) {
          setScroll(true)
        } else {
          setScroll(false)
        }
      }
      useEffect(() => handleResize, [])
      useEffect(() => {
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll)
    
        return () =>{ 
          window.removeEventListener("resize", handleResize)
          window.removeEventListener("scroll", handleScroll)
        };
      })
  return {
    isMenuAppeard,
    handleMenu,
    scroll,
  }
}

export default useControlMenuMobile