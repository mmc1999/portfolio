import React from 'react'
import Layout from '../../components/views/layout/Layout'
import moduleAbout from "./About.module.css"
import Image from 'next/image'
import {tecnologias} from "../../data/tecnologias";

const index = () => {
  return (
    <Layout color="white">
      <div className={moduleAbout.divPrincipalAbout}>
          <h1 className={moduleAbout.h1}>03 : Sobre mi</h1>
          <div className={moduleAbout.divAbout}>
            <section className={moduleAbout.seccionSobreMi}>
                <div className={moduleAbout.divSecciones}>
                  <p className={moduleAbout.parrafo}>Soy Matias centorbi nací en Buenos Aires.
                    Me fascina el mundo del desarrollo web, sobre todo el Front End. Disfruto mucho del proceso creativo de crear interfaces, así como también me encanta estar en constante aprendizaje y compartir lo que aprendo. Empece a estudiar desarrollo web a principios del 2021, me capacito de manera autodidacta. Soy responsable, curioso, autodidacta y perseverante. Actualmente me encuentro haciendo la aceleracion en react en la empresa <a href='https://www.alkemy.org/' className={moduleAbout.alkemy} target="_blank" rel="noreferrer">Alkemy</a>.
                  </p>
                </div>
                <div className={moduleAbout.divSecciones}>
                  <h2 className={moduleAbout.subtitulos}>Objetivos</h2>
                  <p className={moduleAbout.parrafo}>Dominar las tecnologias orientadas al frontend para luego pasar aprender tecnologias backend y asi ser desarrollador fullstack. Laboralmente me gustaria establecerme en una empresa que me brinde estabilidad laboral y que me permita desarrollar mi carrera y crecer como profesional.</p>
                </div>
            </section>
            <div className={moduleAbout.divSeccionTecnologia}>
              <h2 className={moduleAbout.subtitulos}>Tecnologias</h2>
              <div className={moduleAbout.divTecnologias}>
                {
                  tecnologias.map(el => 
                    <div className={moduleAbout.divDivTecnologias} key={el.id}>
                      <Image src={el.imagen} alt={`Icono de ${el.nombre}`} width={20} height={20} />
                      <p>{el.nombre}</p>
                    </div>
                  )
                }
              </div>
              <a href='/assets/cv.pdf' download className={moduleAbout.cv}>Descargar cv</a>
            </div>
          </div>
      </div>
    </Layout>
  )
}

export default index