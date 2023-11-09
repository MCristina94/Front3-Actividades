import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card';
import imgTitle from '../assets/letra1.png'



const SimpsonsApi = () => {
    const [personajes, setPersonajes] = useState([]);
    const url = 'https://apisimpsons.fly.dev/api/personajes?limit=12';

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
       
        <img style={{display: 'block', margin: 'auto', width: '30%', marginTop: '5%'}} src={imgTitle} alt="" />
        
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', margin: '5%'}}>
            {personajes && personajes.map((personaje) =>{
             return <div>
                        <Card key={personaje.id} props={personaje}/>
                    </div>
        })}
        </div>
    </div>
  )
}

export default SimpsonsApi