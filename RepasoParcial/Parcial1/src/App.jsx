import { useState } from 'react'
import './App.css'
import Formulario from './Componentes/Formulario'
import Home from './Componentes/Home'
import {todo} from './Styles/All.module.css'



function App() {


  return (
    <>
    <div className={todo}>
      <h1 style={{backgroundColor: 'rgba(128, 128, 128, 0.8)', color: 'black'}}>Carga de estudiantes</h1>
      <form></form>
      <Formulario/>
      <Home/>

    </div>
    </>
  )
}

export default App
