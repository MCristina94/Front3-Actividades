import React from 'react'
import Formulario from './Formulario'
import {home, titulo} from '../Styles/Home.module.css'

const Home = () => {
  return (
    <div className={home}>
        <h1 className={titulo}>Formulario de Registro</h1>
        <Formulario/>
    </div>
  )
}

export default Home