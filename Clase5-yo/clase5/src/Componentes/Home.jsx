import {useState} from 'react'
import Productos from './Productos';

const Home = () => {
    const [pedidos, setPedidos] = useState([]);
    let accesorios = [
        {id: 1, tipo: 'Anillo'},
        {id: 2, tipo:'Collar'},
        {id: 3, tipo: 'pulcera'}
    ];

    console.log(pedidos);
  return (
    <div>
        <h1>Bienvenido a la Joyeria</h1>
        <h2>Carrito de compras</h2>
        <ul>
          {pedidos.map(pedido => <li key={pedido.id}>{pedido.tipo}</li>)}
        </ul>
        <h2>Productos</h2>
        {accesorios.map((accesorio) => <Productos setPedidos={setPedidos} joya={accesorio} key={accesorio.id}/>)}
    </div>

  );
}

export default Home

//useState: Puedes usarlo para mantener y actualizar variables de estado en tu componente. 