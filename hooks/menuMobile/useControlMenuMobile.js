import React, { useState, useEffect } from 'react'

const useControlMenuMobile = () => {
    const [isMenuAppeard, setIsMenuAppeard] = useState(false);
    const [scroll, setScroll] = useState( false)

    const handleMenu = () => {
        if(isMenuAppeard) setIsMenuAppeard(false)
        else setIsMenuAppeard(true)
    }

    const handleResize = () => {
        if(window.innerWidth < 750) {
          setScroll(true)
        } else {
          setScroll(false)
        }
      }
    
      useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
    
        return () => window.removeEventListener("resize", handleResize);
      })
  return {
    isMenuAppeard,
    handleMenu,
    scroll
  }
}

export default useControlMenuMobile