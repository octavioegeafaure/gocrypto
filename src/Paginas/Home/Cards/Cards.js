import React from 'react'
import CardIndividual from './CardIndividual';

const Cards = () => {
    
  return (
    <div className="titulo-cards">
      <h4>Tendencias</h4>
      <div className="conjunto-cards">
        <CardIndividual moneda="bitcoin" />
        <CardIndividual moneda="ethereum" />
        <CardIndividual moneda="tether" />
        <CardIndividual moneda="binancecoin" />
      </div>
    </div>
  );
}

export default Cards