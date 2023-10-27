import React from 'react'

const Envio = ({nombre, edad, pokemon}) => {
  return (
    <div>
        <h1 style={{fontSize:'20px'}}>Hola!!! {nombre}, Ahora tu eres un Maestro Pokémon con tal solo {edad} años de edad! WOW!!!</h1>
        <h3>Tu Pokémon asignado es: {pokemon}, entrenalo bien, confiamos en ti</h3>
    </div>
  )
}

export default Envio