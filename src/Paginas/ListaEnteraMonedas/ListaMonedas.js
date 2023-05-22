import React, { useEffect } from 'react'
import Chart from '../Home/Chart/Chart'
import "./ListaMonedas.css"

export const ListaMonedas = () => {

    useEffect(() => {
       window.scrollTo(0, 0);
    }, []);
    return (
        <div className='listaMonedas'>
            <p>Monedas</p>
        <Chart cantidadAElegir ="50" />
        </div>
  )
}
