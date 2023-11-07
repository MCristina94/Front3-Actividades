import { useState } from 'react'
import './App.css'
import PizzaOrder from './Componentes/PizzaOrder'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Haz tu pedido!</h1>
     <PizzaOrder/>
    </>
  )
}

export default App
