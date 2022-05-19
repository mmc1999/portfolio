import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import moduleHeader from "./Header.module.css"
import useControlMenuMobile from '../../../hooks/menuMobile/useControlMenuMobile'

const Header = ({color}) => {
  let {
    handleMenu,
    isMenuAppeard,
    scroll,
  } = useControlMenuMobile()
 
  return (
    <header className={moduleHeader.header} style={{backgroundColor:color}}>
        <div 
          className={moduleHeader.divBtnHamburguesa} 
          onClick={handleMenu}
        >
          <Image
            src="/lista.png"
            alt="Icono de hamburguesa"
            width={20}
            height={20}
            className={color ? moduleHeader.btnHamburguesaSinMain : moduleHeader.btnHamburguesa}
          />
        </div>
        <nav className={`${moduleHeader.nav} ${color ? moduleHeader.navSinMain : ""} ${!isMenuAppeard ? moduleHeader.navDisapeard : ""} `}>
          <div className={moduleHeader.divLink}>
            <Link href="/">
              <a className={`${moduleHeader.link} ${color ? moduleHeader.linkSinMain : ""}`}>01 : Inicio</a>
            </Link>
          </div>
          {scroll ? <span className={`${moduleHeader.spanBarra} ${color ? moduleHeader.barraBlack : ""}`} >|</span> : ""}
          <div className={moduleHeader.divLink}>
            <Link href="/work">
              <a className={`${moduleHeader.link} ${color ? moduleHeader.linkSinMain : ""}`}>02 : Proyectos</a>
            </Link>
          </div>
          {scroll ? <span className={`${moduleHeader.spanBarra} ${color ? moduleHeader.barraBlack : ""}`}>|</span>: ""}
          <div className={moduleHeader.divLink}>
            <Link href="/about">
              <a className={`${moduleHeader.link} ${color ? moduleHeader.linkSinMain : ""}`}>03 : Sobre mi</a>
            </Link>
          </div>
          {scroll ? <span className={`${moduleHeader.spanBarra} ${color ? moduleHeader.barraBlack : ""}`} >|</span>: ""}
          <div className={moduleHeader.divLink}>
            <Link href="/contact">
              <a className={`${moduleHeader.link} ${color ? moduleHeader.linkSinMain : ""}`}>04 : Contacto</a>
            </Link>
          </div>
        </nav>
    </header>
  )
}

export default Header