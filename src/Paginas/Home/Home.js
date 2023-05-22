import React from 'react'
import Banner from './Banner/Banner';
import Cards from './Cards/Cards';
import Chart from './Chart/Chart';
import Nosotros from './Nosotros/Nosotros';

export const Home = () => {
  return (
    <div>
      <Banner />
      <Cards />
      <Nosotros />
      <Chart cantidadAElegir="10" />
    </div>
  );
}
