import React from 'react'
import '../assets/css/Home.css'
import Item from '../components/Item'
import { useContext, useEffect } from 'react'
import Contexto from '../context/Contexto'

export default function Home() {
    const {listameProductos, productos} = useContext(Contexto)
    useEffect(()=>{
        listameProductos()
    },[])
    return (
        <>
        <div className="container">
            <div className="wraper">
                <div className='home'>
                {productos.map((item)=>(
                    <Item {...item} key ={item.id}></Item>
                ))}
                </div>
            </div>
        </div>
        </>
    )
}
