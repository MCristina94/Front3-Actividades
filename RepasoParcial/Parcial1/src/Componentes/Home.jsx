import React from 'react'
import Card from './Card';



const Home = () => {
    let estudiantes = [
        {id: 1, nombre: 'Juan', curso: 'Java'},
        {id: 2, nombre: 'sofia', curso: 'Java Script'},
        {id: 3, nombre: 'Juan', curso: 'Bases de datos'}
    ];
  return (
    <div>
      <article style={{backgroundColor: 'rgba(128, 128, 128, 0.8)', color: 'black'}}>
        <h2 >Estudiantes Matriculados</h2>
        {estudiantes.map(estudiante => <Card key={estudiante.id} nombre = {estudiante.nombre} curso = {estudiante.curso}/>)}
      </article>           
    </div>
  )
}

export default Home