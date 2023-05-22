import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { DataMonedaElegidaContext } from '../../../Context/DataMonedaElegidaContext';
import DataParaChartContext from '../../../Context/DataParaChart';
import { MonedaContext } from '../../../Context/MonedaContext';
import useFetch from '../../../Hooks/useFetch';
import './CardIndividual.css';


const CardIndividual = (props) => {
  const urlCoin = "https://api.coingecko.com/api/v3/coins/" + props.moneda;
  const { data } = useFetch(urlCoin);
  const urlChart = `https://api.coingecko.com/api/v3/coins/${props.moneda}/market_chart?vs_currency=usd&days=7`;
  const { data: dataChart } = useFetch(urlChart);
  const { monedaAElegir, setMonedaAElegir } = useContext(MonedaContext)
  const { dataMonedaElegida, setDataMonedaElegida } = useContext(DataMonedaElegidaContext)
  const {dataParaChart, setDataParaChart} = useContext(DataParaChartContext)
  const marketCap = data && data.market_data.market_cap_change_percentage_24h;

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    
  return (
    <div className="card">
      <Link
        onClick={() => {
          setMonedaAElegir(data&&data.id);
          setDataMonedaElegida(data);
          setDataParaChart(dataChart)
        }}
        to={`/coin/${data && data.id}`}

      >
        <div className="card-info">
          <div className="izquierda">
            {marketCap && marketCap > 0 ? (
              <div className="card-nombres-colorMarket-verde"></div>
            ) : (
              <div className="card-nombres-colorMarket-rojo"></div>
            )}

            <p className="card-info-data">{data && data.name}</p>
          </div>
          <div className="derecha">
            {marketCap && marketCap > 0 ? (
              <p className="card-info-marketCap-verde">
                +{marketCap && marketCap.toFixed(2)}%
              </p>
            ) : (
              <p className="card-info-marketCap-rojo">
                {marketCap && marketCap.toFixed(2)}%
              </p>
            )}
          </div>
        </div>
        <div className="card-info-data-precio">
          <p className="card-info-symbol">{data && data.symbol}</p>
          <p className="card-info-data-precio-p">
            US$ {data && data.market_data.current_price.usd.toFixed(2)}
          </p>
          <p className="card-info-data-precio-p2">
            AR$ {data && data.market_data.current_price.ars.toFixed(2)}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default CardIndividual