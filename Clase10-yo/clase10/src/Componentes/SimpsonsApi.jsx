import React, { useEffect, useState } from 'react'
import axios from 'axios'

const SimpsonsApi = () => {
    const [personajes, setPersonajes] = useState([]);
    const url = 'https://apisimpsons.fly.dev/api/personajes?limit=10';

    useEffect(() => {
    axios(url)
    .then((response) => {
        console.log(response.data.docs);
        setPersonajes(response.data.docs)  
    })  
    }, [])
    
    console.log(personajes);

  return (
    <div>
        <h1>Personajes Simpsons</h1>
        {personajes && personajes.map((personaje) =>{
            return <div key={personaje.id}>
                <h3>Nombre: {personaje.Nombre}</h3>
                <img src={personaje.Imagen} />
                <h4>Ocupación: {personaje.Ocupacion}</h4>
                <h5>Historia: {personaje.Historia}</h5>

            </div>
        })}

    </div>
  )
}

export default SimpsonsApi