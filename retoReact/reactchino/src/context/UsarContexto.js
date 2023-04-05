import Contexto from "./Contexto";
import React from 'react'
import axios from 'axios'
import { useReducer } from "react";
import Reducer from "./Reducer";



export default function UsarContexto(props) {
    const {children} = props
    const estadoInicial = {
    productos: [],
    carrito: [],
    }
    const [state, dispatch] = useReducer(Reducer, estadoInicial)

    const listameProductos = async ()=>{ //es una funcion asincronica porque va a tener que ir a buscar los produtos al internet gracias a axios
        const res = await axios.get("https://devrockstore-default-rtdb.firebaseio.com/productos.json") //buscamos la bd en internet y la guardamos en la variable res
        dispatch({ type:"LISTAME_PRODUCTOS", payload: res.data })
        console.log(res.data, 'desde useContext')
    }
    const agregarCarrito = (item)=>{ // no hace falta que sea async porque trabaja con data local
        console.log('agregamos a carrito', item)
        dispatch({ type: "AGREGAR_CARRITO", payload: item });
        
    }
    const eliminarCarrito = (item)=>{ // no es async porque trabaja con data local
        console.log('eliminamos a carrito', item)
        dispatch({ type:"ELIMINAR_CARRITO", payload: item })
    }
    return (
    <Contexto.Provider value={{ // El componente Provider acepta una prop value que se pasará a los componentes consumidores que son descendientes de este Provider. Un Provider puede estar conectado a muchos consumidores. Los Providers pueden estar anidados para sobreescribir los valores más profundos dentro del árbol.
        productos: state.productos,
        carrito: state.carrito,
        listameProductos, //le proveemos las acciones
        agregarCarrito,
        eliminarCarrito
    }}>
        {children}
    </Contexto.Provider>
    )
}
