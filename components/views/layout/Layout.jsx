import React from 'react'
import Head from 'next/head'
import Header from '../header/Header'
import moduleLayout from "./Layout.module.css"

const Layout = ({children, color}) => {
  return (
    <>
        <Head>
            <title>Portfolio de matias</title>
            <meta name="description" content="Soy un desarrollador frontend autodidacta. Mi stack tecnologico es react, javascript, css, html" />
            <meta name="author" content="Matias centorbi" />
            <meta name="keywords" content="Desarrollador frontend, desarrollador react, desarrollador javascript"/>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        
        <main 
          className={color ? moduleLayout.mainConColor : moduleLayout.mainSinColor}
        >
            <Header color={color} />
            {children}
        </main>
        <footer>

        </footer>
    </>
  )
}

export default Layout