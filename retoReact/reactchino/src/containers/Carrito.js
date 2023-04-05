import React, { useContext } from 'react'
import '../assets/css/Carrito.css'
import ItemCarro from '../components/ItemCarrito'
import Contexto from '../context/Contexto'
export default function Carrito() {
  const { carrito , eliminarCarrito } = useContext(Contexto) // esto quiere decir -> que voy a utilizar del context
  console.log(carrito, 'desdecarrito')
  return (
    <>
    <div className="carrito">
        <div className="carrito-listadito">
            {carrito.map((item, i)=>( // iteramos el array de carrito que trajimos con el UseContext
              <ItemCarro {...item} key={i} eliminarCarrito={eliminarCarrito}></ItemCarro>
            ))}
        </div>
        <div className="carrito-precio">
            Total a pagar <br /><strong>U$D 3400</strong>
        </div>
        </div>
    </>
  )
}
