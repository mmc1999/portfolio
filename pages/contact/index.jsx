import React from 'react';
import FormularioContacto from '../../components/form/FormularioContacto';
import Layout from '../../components/views/layout/Layout';
import contactoModule from "./Contacto.module.css"
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import {useFormik } from 'formik';
import Image from "next/image"

const Index = () => {
  const campo = "* campo requerido";

  const validationSchema = Yup.object().shape({
    tema: Yup.string().min(4, "Minimo 4 caracteres").required(campo),
    email: Yup.string().email("Email invalido").required(campo),
    comentario: Yup.string().min(10, "Minimo 10 caracteres").required(campo),
  });

  const initialValues={tema: "", email: "", comentario:"" };

  const onSubmit = () => {
    console.log(formik)
      /*emailjs.send('service_e89k5es', 'template_kdnrdal', {
        comentario: values.comentario,
        tema: values.tema,
        email: values.email
      }, "jMk1WAgEfrguR9vt8")
        .then((result) => {
           formik.resetForm({});
        }, (error) => {
            console.log(error.text);
            
        });*/
      
  };
  
  const formik = useFormik({initialValues, validationSchema ,onSubmit});
  return (
    <Layout color="white">
      <div  className={contactoModule.divPrincipalContacto}>
        <div>
          <h1 className={contactoModule.h1}>04 : Contactame</h1>
        </div>
        <section className={contactoModule.sectionContacto}>
          <FormularioContacto formik={formik}/>
          <div className={contactoModule.divRedes}>
            <p className={contactoModule.titleRedes}>Sigueme en mis redes</p>
            <a href='https://www.linkedin.com/in/matias-centorbi/' target="_blank" rel="noreferrer" >
              <Image 
                src="/assets/linkedin.png" 
                alt="Icono de linkedin"
                width={20}
                height={20}
              />
            </a>
            <a href='https://github.com/mmc1999' target="_blank" rel="noreferrer" >
              <Image 
                src="/assets/github.png" 
                alt="Icono de github"
                width={20}
                height={20}
              />
            </a>
          </div>
        </section>
        
      </div>
    </Layout>
  )
}

export default Index