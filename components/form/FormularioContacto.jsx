import React from 'react';
import moduleForm from "./FormularioContacto.module.css";

const FormularioContacto = ({props}) => {
    let {handleChange, handleSubmit, values, errors} = props;
    console.log(props)
  return (
    <form onSubmit={handleSubmit} className={moduleForm.form}>
        <input
            type="email"
            onChange={handleChange}
            value={values.email}
            placeholder="Email"
            name='email'
        />
        {errors.email && <p>Escribe el email correctamente</p>}
        <input
            type="text"
            onChange={handleChange}
            value={values.tema}
            placeholder="Tema"
            name='tema'
        />
        {errors.tema && <p>Escribe un tema</p>}
        <textarea 
            onChange={handleChange} 
            value={values.comenario}
            placeholder="Comentario"
            className={moduleForm.textArea}
            tema="comentario"
        >
        {errors.comentario && <p>Escribe un comentario</p>}
        </textarea>
        <button type='submit' className={moduleForm.button} >Enviar</button>
    </form>
  )
}

export default FormularioContacto