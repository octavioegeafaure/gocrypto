import React, { useContext } from 'react'
import "./Header.css"  
import { Link } from "react-router-dom";
import useFetch from '../../../Hooks/useFetch';
import { DataMonedaElegidaContext } from '../../../Context/DataMonedaElegidaContext';
import DataParaChartContext from '../../../Context/DataParaChart';
import { SearchBar } from './SearchBar';

export const Header = () => {
    const urlChart = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7`;
    const { data } = useFetch(urlChart);
    const urlMoneda = "https://api.coingecko.com/api/v3/coins/bitcoin";
    const { data: dataMoneda } = useFetch(urlMoneda);
    const { dataParaChart, setDataParaChart } =
      useContext(DataParaChartContext);
    const { dataMonedaElegida, setDataMonedaElegida } =
      useContext(DataMonedaElegidaContext);
  return (
    <div className="header">
      <Link to={`/`}>
        <div className="header-logo">
          <p>GoCrypto</p>
        </div>
      </Link>
      {/* <SearchBar /> */}
      <Link
        onClick={() => {
          setDataParaChart(data);
          setDataMonedaElegida(dataMoneda)
        }}
        to={`/coin/bitcoin`}
      >
        <div className="header-dashboard">
          <p>Dashboard</p>
        </div>
      </Link>
      <Link to={`/monedas`}>
        <div className="header-lista">
          <p>Monedas</p>
        </div>
      </Link>
    </div>
  );
}
