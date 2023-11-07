import React from 'react'

const NuevoEstudiante = (props) => {
  return (
    <div>
      <article style={{backgroundColor: 'rgba(128, 128, 128, 0.8)', color: 'black'}}>
        <h2 >Nuevo ingreso de estudiante</h2>
        <h3>{props.nombre} - {props.curso}</h3>
      </article>
    </div>
  )
}

export default NuevoEstudiante