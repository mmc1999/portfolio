import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import moduleHeader from "./Header.module.css"
import useControlMenuMobile from './useControlMenuMobile'

const Header = () => {
  let {
    handleMenu,
    isMenuAppeard,
    scroll
  } = useControlMenuMobile()
  
  return (
    <header className={moduleHeader.header}>
        <div className={moduleHeader.divBtnHamburguesa} onClick={handleMenu}>
          <Image
            src="/lista.png"
            alt="Icono de hamburguesa"
            width={20}
            height={20}
            className={moduleHeader.btnHamburguesa}
          />
        </div>
        <nav className={`${moduleHeader.nav} ${!isMenuAppeard ? moduleHeader.navDisapeard : ""}`}>
          <div className={moduleHeader.divLink}>
            <Link href="/">
              <a className={moduleHeader.link}>01 : Inicio</a>
            </Link>
          </div>
          {!scroll ? <span className={moduleHeader.spanBarra}>|</span> : ""}
          <div className={moduleHeader.divLink}>
            <Link href="/work">
              <a className={moduleHeader.link}>02 : Trabajos</a>
            </Link>
          </div>
          {!scroll ? <span className={moduleHeader.spanBarra}>|</span>: ""}
          <div className={moduleHeader.divLink}>
            <Link href="/about">
              <a className={moduleHeader.link}>03 : Sobre mi</a>
            </Link>
          </div>
          {!scroll ? <span className={moduleHeader.spanBarra}>|</span>: ""}
          <div className={moduleHeader.divLink}>
            <Link href="/contact">
              <a className={moduleHeader.link}>04 : Contact</a>
            </Link>
          </div>
        </nav>
    </header>
  )
}

export default Header