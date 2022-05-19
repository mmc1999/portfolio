import React from 'react';
import moduleForm from "./FormularioContacto.module.css";

const FormularioContacto = ({formik}) => {
    let {handleChange,handleSubmit, values, errors} = formik;
    
  return (
    <form onSubmit={handleSubmit} className={moduleForm.form}  >
        <div className={moduleForm.divInput}>
            <input
                type="email"
                onChange={handleChange}
                value={values.email}
                placeholder="Email"
                name='email'
                className={moduleForm.allInput}
            />
            {errors.email && <p className={moduleForm.mensajeError}>{errors.email}</p>}
        </div>
        <div className={moduleForm.divInput}>
            <input
                type="text"
                onChange={handleChange}
                value={values.tema}
                placeholder="Tema"
                name='tema'
                className={moduleForm.allInput}
            />
            {errors.tema && <p className={moduleForm.mensajeError}>{errors.tema}</p>}
        </div>
        <div className={moduleForm.divInput}>
            <textarea 
                onChange={handleChange} 
                value={values.comentario}
                placeholder="Comentario"
                className={`${moduleForm.textArea} ${moduleForm.allInput}`}
                name="comentario"
            ></textarea>
            {errors.comentario && <p className={moduleForm.mensajeError}>{errors.comentario}</p>}  
        </div>
        
        <button type='submit' className={`${moduleForm.button} ${moduleForm.allInput}`} >Enviar</button>
    </form>
  )
}

export default FormularioContacto