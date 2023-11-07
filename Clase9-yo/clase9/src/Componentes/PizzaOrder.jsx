import React, { useEffect, useState } from 'react'

const PizzaOrder = () => {
    
    const[order, setOrder] = useState(false);
    const[cancel, setCancel] = useState(false);

    useEffect(() => {
      const time =  setTimeout (() =>{
            setOrder(true);
        }, 2000);

        return () =>{
            console.log("Se actualiza");
            clearTimeout(time);
        };
    }, []);

    const cancelar = () =>{
        setCancel(true);
    }
    
    return (
    <div>
        {
            order ? (
                <div>
                <h2>Su pedido esta listo</h2>
                <button onClick={cancelar}>Cancelar pedido</button>
                </div>
            ): (
                <h2>Listo para iniciar a ordenar</h2>
            )
        }
        {cancel && <h2 style={{color: 'red'}}>Pedido Cancelado</h2>}
       
    </div>
  )
}

export default PizzaOrder