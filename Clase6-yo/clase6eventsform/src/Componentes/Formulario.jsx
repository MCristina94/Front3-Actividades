import React, { useState } from 'react'
import Envio from './Envio';
import {formulario} from '../Styles/Formulario.module.css'

const Formulario = () => {
    
    //1. se crea el state del maestro pokemon
    const [maestroPokemon, setMaestropokemon] = useState({
        nombre: '',
        edad: 0,
        pokemon: ''
    });

    //2. se crea el state para mostrar el error o el mensaje de recibido de la información
    const [show, setShow] = useState(false); //para el mensaje de recibido 
    const [error, setError] = useState(false); //para el mensaje de error

    //3. se crea el evento para el preventDefault del formulario, y el uso de los state de mensajes error y recibido
    const handleSubmit = (event) => {
        event.preventDefault();
        const regex = /^[A-Za-z]{3,}( [A-Za-z]+)?$/ //este regex sirve para la validación de los datos ingresados
        if(maestroPokemon.nombre.length > 3 && regex.test(maestroPokemon.nombre) && maestroPokemon.pokemon.length > 3 && regex.test(maestroPokemon.pokemon) 
        && maestroPokemon.edad > 8){
            setShow(true);
            setError(false);
        }else{
            setError(true);
            setShow(false);
        }
    }
   
    return (
    <div >
        
        <form  onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            
            <label>Nombre Completo:</label>
            <input type="text" value={maestroPokemon.nombre} onChange={(event) => setMaestropokemon({...maestroPokemon, nombre: event.target.value})}/>
            
            <label>Edad:</label>
            <input type="number" value={maestroPokemon.edad} onChange={(event) => setMaestropokemon({...maestroPokemon, edad: event.target.value})}/>
            
            <label>Pokemon Favorito:</label>
            <input type="text" value={maestroPokemon.pokemon} onChange={(event) => setMaestropokemon({...maestroPokemon, pokemon: event.target.value})}/>
            
            <button style={{marginTop:'10px'}}>Registrarse</button>

         </form>

         <div style={{backgroundColor: 'gray', color: 'blue'}}>
            {show && <Envio nombre={maestroPokemon.nombre} edad={maestroPokemon.edad} pokemon={maestroPokemon.pokemon}/>}
            {error && <h5 style={{color:'red'}}>Verifique bien los datos antes de enviar</h5>}
         </div>
        


    </div>
    
  )
 
}

export default Formulario