import React from 'react'
import Image from "next/image"
import moduleTrabajo from "./Trabajos.module.css"
import { data } from '../../../data/data'

const Trabajos = ({el}) => {
  return (
    <div className={moduleTrabajo.divPrincipalTrabajo}>
        <Image
            src={el.imagen}
            alt="Imagen de mi trabajos"
            layout="fill"
            className={moduleTrabajo.imagenes}
        />
        <div className={moduleTrabajo.divSobreImagen}>
            <p className={moduleTrabajo.cuentaTrabajos}>00{el.id}/00{data.length}</p>
            <p className={moduleTrabajo.title}>{el.title}</p>
            <p className={moduleTrabajo.resumenProyecto}>{el.text}</p>
            <div className={moduleTrabajo.divEnlaces}>
                <a href='#' className={moduleTrabajo.enlaces} target="_blank">Codigo</a>
                <a href='#' className={moduleTrabajo.enlaces} target="_blank">Sitio web</a>
            </div> 
        </div>
        
    </div>
  )
}

export default Trabajos