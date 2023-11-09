import React from 'react'
import {cardStyle, image, containerTexto} from '../Styles/Card.module.css'

const Card = ({props}) => {
  return (
    <div className={cardStyle}>
        <img className={image} src={props.Imagen} alt="fotoPersonaje" />
        <article className={containerTexto}>
            <h3 > {props.Nombre} </h3>
            <h4 > {props.Ocupacion} </h4>
            <h5 > {props.Historia} </h5>
        </article>
    </div>
  )
}

export default Card
//, nameChart, image, job, history