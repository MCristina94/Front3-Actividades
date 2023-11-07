import React from 'react'

const Envio = (props) => {
  return (
    <div>
      <article style={{backgroundColor: 'rgba(128, 128, 128, 0.8)', color: 'black'}}>
        <h3 >Hola {props.nombre}!!!</h3>
        <h4 >Felicidades ya te encuentras registrado para el curso {props.curso}</h4>
      </article>
    </div>
  )
}

export default Envio