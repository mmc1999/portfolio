import React from 'react'
import Layout from '../../components/views/layout/Layout';
import moduleHeader from "./Work.module.css";
import { data } from '../../data/data';
import Trabajos from '../../components/views/card/Trabajos';

const index = () => {
  return (
    <Layout color="white">
      <div className={moduleHeader.divWorkPrincipal}>
        <div className={moduleHeader.divTitulo}>
          <h1 className={moduleHeader.h1}>02 : Proyectos</h1>
          <p className={moduleHeader.resumenSeccion}>En esta seccion les voy a mostrar algunos de los proyectos mas desafiantes que he realizado.</p> 
        </div>
        <div className={moduleHeader.divTrabajos}>
          {
            data.map(el => (
              <Trabajos key={el.id} el={el} />
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export default index