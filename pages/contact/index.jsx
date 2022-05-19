import { Formik } from 'formik';
import React from 'react';
import FormularioContacto from '../../components/form/FormularioContacto';
import Layout from '../../components/views/layout/Layout';
import contactoModule from "./Contacto.module.css"


const index = () => {
  return (
    <Layout color="white">
      <div  className={contactoModule.divPrincipalContacto}>
        <div>
          <h1>04 : Contactame</h1>
        </div>
        <Formik
          initialValues={{ tema: "", email: "", comentario:"" }}
          onSubmit={(values,) => {
            alert(values)
          }}
        >
           {props => <FormularioContacto props={props} />}  
        </Formik>
      </div>
    </Layout>
  )
}

export default index