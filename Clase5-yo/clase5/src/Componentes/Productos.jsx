import React from 'react'

const Productos = ({joya, setPedidos}) => {
  return (
    <div>
        <button onClick={() => setPedidos((prevState) =>{
          return [...prevState, joya]})}>{joya.tipo}</button>
       
    </div>

  )
}

export default Productos

// Las props son datos que se pasan a un componente desde su componente padre o desde el entorno en el que se utiliza el componente(joya y setPedidos)
//const Productos = ({joya, setPedidos}) -->esta desestructurado, puede tambien hacerse asi: const Productos = (props)

//otra forma de desestructurar es asi:
//const Productos = ({joya, setPedidos}) => {
//  const {id, tipo, precio} = joya
//} ---> asi evito llamar las posiciones como joya.tipo, sino directamente tipo