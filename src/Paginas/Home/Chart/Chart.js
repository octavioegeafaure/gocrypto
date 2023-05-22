import "./Chart.css"
import React, { useContext, useState } from "react";
import useFetch from "../../../Hooks/useFetch";
import { Link } from "react-router-dom";
import DataParaChartContext from "../../../Context/DataParaChart";

const Chart = (props) => {
  const urlMonedas = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${props.cantidadAElegir}&page=1&sparkline=false&price_change_percentage=24h&locale=en`;
  const { data } = useFetch(urlMonedas);
  const [moneda, setMoneda] = useState()
  // const urlChart = `https://api.coingecko.com/api/v3/coins/${moneda}/market_chart?vs_currency=usd&days=7`;
  // const { data: dataChart } = useFetch(urlChart);
  const {dataParaChart, setDataParaChart} = useContext(DataParaChartContext)
  

  return (
    <div className="chart">
      <div className="chart-2">
        <div className="chart-titulos">
          <p className="chart-individual-nombre">Moneda</p>
          <p className="chart-individual-precio">Precio</p>
          <p className="chart-individual-porcentaje">Cambio 24H</p>
        </div>
        {data &&
          data.map((cat) => (
            <Link

              to={`/${cat && cat.id}`}
            >
              <div
                key={cat.id}
                className="chart-individual"
                onClick={() => {
                  // setMoneda(cat.id)
                  setDataParaChart(cat.id)
                  console.log(cat.id);
                }}
              >
                <div className="chart-individual-nombres">
                  <p className="chart-individual-nombre">{cat.name}</p>
                  <p className="chart-individual-symbol">{cat.symbol}</p>
                </div>

                <p className="chart-individual-precio">
                  US$ {cat.current_price.toFixed(2)}
                </p>
                {cat.market_cap_change_percentage_24h &&
                cat.market_cap_change_percentage_24h > 0 ? (
                  <p className="chart-individual-porcentaje-verde">
                    +{cat.market_cap_change_percentage_24h.toFixed(2)}%
                  </p>
                ) : (
                  <p className="chart-individual-porcentaje-rojo">
                    {cat.market_cap_change_percentage_24h.toFixed(2)}%
                  </p>
                )}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Chart
