import React, { useState } from 'react'
import Envio from './Envio';
import NuevoEstudiante from './NuevoEstudiante';

const Formulario = () => {
    const [estudiante, setEstudiante] = useState({
        id: '',
        nombre: '',
        curso: ''
    });
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSumbit = (event) => {
      event.preventDefault()
      const regex = /^[A-Za-z]{3,}( [A-Za-z]+)?$/
      if(estudiante.id > 0 && estudiante.nombre.length > 3 && estudiante.curso.length > 3 && regex.test(estudiante.nombre)){
          setShow(true)
          setError(false)
      } else {
          setError(true)
          setShow(false)
      }
     
  }
    
  return (
    <div>
      {!show &&  //esto lo uso si quiero que no se muestre el formulario despues del registro
        <form onSubmit={handleSumbit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <label>Id:</label>
            <input type="text" value={estudiante.id} onChange={(event) => setEstudiante({...estudiante, id: event.target.value})} />

            <label>Nombre:</label>
            <input type="text" value={estudiante.nombre}  onChange={(event) => setEstudiante({...estudiante, nombre: event.target.value})}/>

            <label>Curso:</label>
            <input type="text" value={estudiante.curso}  onChange={(event) => setEstudiante({...estudiante, curso: event.target.value})}/>

            <button style={{margin : '10px'}}>Registrar</button>
        </form>}
        {show && <Envio nombre = {estudiante.nombre} curso = {estudiante.curso}/>}
        {show && <NuevoEstudiante  nombre = {estudiante.nombre} curso = {estudiante.curso}/>}
        {error && <h5 style={{color: 'red' , backgroundColor: 'rgba(128, 128, 128, 0.8)'}}>Debe ingresar todos los datos antes de registrarse</h5>}
        
    </div>
  )
}

export default Formulario