import React from 'react'
import Head from 'next/head'
import Header from '../header/Header'

const Layout = ({children}) => {
  return (
    <>
        <Head>
            <title>Portfolio de matias</title>
            <meta name="description" content="Soy un desarrollador frontend autodidacta. Mi stack tecnologico es react, javascript, css, html" />
            <meta name="author" content="Matias centorbi" />
            <meta name="keywords" content="Desarrollador frontend, desarrollador react, desarrollador javascript"/>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main>
            {children}
        </main>
        <footer>

        </footer>
    </>
  )
}

export default Layout