import React from 'react'
import Layout from '../../components/views/layout/Layout'
import moduleAbout from "./About.module.css"

const index = () => {
  return (
    <Layout color="white">
      <div className={moduleAbout.divPrincipalAbout}>
        <h1 className={moduleAbout.h1}>03 : Sobre mi</h1>
        <div className={moduleAbout.divSecciones}>
          <p className={moduleAbout.parrafo}>Soy Matias centorbi nací en Buenos Aires.
            Me fascina el mundo del desarrollo web, sobre todo el Front End. Disfruto mucho del proceso creativo de crear interfaces, así como también me encanta estar en constante aprendizaje y compartir lo que aprendo. Empece a estudiar desarrollo web a principios del 2021, me capacito de manera autodidacta. Soy responsable, curioso, autodidacta y perseverante.
          </p>
        </div>
        <div className={moduleAbout.divSecciones}>
          <h2 className={moduleAbout.subtitulos}>Objetivo</h2>
          <p className={moduleAbout.parrafo}>Dominar las tecnologias orientadas al frontend para luego pasar aprender tecnologias backend y asi ser desarrollador fullstack. Laboralmente me gustaria establecerme en una empresa que me brinde estabilidad laboral y que me permita desarrollar mi carrera y crecer como profesional.</p>
        </div>
        <div className={moduleAbout.divSecciones}>
          <h2 className={moduleAbout.subtitulos}>Tecnologias</h2>
          <div>

          </div>
        </div>
        <a href='assets/my_pdf.pdf' download>Download pdf</a>
      </div>
    </Layout>
  )
}

export default index