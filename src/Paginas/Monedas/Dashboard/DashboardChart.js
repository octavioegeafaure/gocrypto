import React, { useContext } from "react";
import { MonedaContext } from "../../../Context/MonedaContext";
import useFetch from "../../../Hooks/useFetch";
import "./Dashboard.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Chart, Line } from "react-chartjs-2";
import moment from "moment";
import { DataMonedaElegidaContext } from "../../../Context/DataMonedaElegidaContext";
import DataParaChartContext from "../../../Context/DataParaChart";
import { useParams } from "react-router";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const DashboardChart = () => {
  const { id } = useParams();
  const { dataParaChart, setDataParaChart } = useContext(DataParaChartContext);
  const { dataMonedaElegida, setDataMonedaElegida } = useContext(
    DataMonedaElegidaContext
  );
  const urlCoin = "https://api.coingecko.com/api/v3/coins/" + dataParaChart;
  const { data } = useFetch(urlCoin);
  const urlChart = `https://api.coingecko.com/api/v3/coins/${dataParaChart}/market_chart?vs_currency=usd&days=7`;
  const { data: dataChart } = useFetch(urlChart);

  const coinChartData =
    dataChart &&
    dataChart.prices.map((value) => ({
      x: value[0],
      y: value[1].toFixed(2),
    }));

  const chart = {
    labels:
      coinChartData &&
      coinChartData.map((value) => moment(value.x).format("DD MMM")),
    datasets: [
      {
        fill: true,
        label: id,
        data: coinChartData && coinChartData.map((val) => val.y),
        backgroundColor: "#0152FF",
        borderColor: "#0152FF",
        // color: "#EBEBEB",
        pointRadius: 0,
        tension: 1,
      },
    ],
    options: {
      scales: {
        y: {
          grid: {
            display: false,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      responsive: true,

      maintainAspectRatio: false,
    },
  };

  return (
    <div className="dashboard">
      <h3>Dashboard</h3>
      <div className="dashboard-cuadro">
        <div className="dashboard-cuadro-info">
          <div className="dashboard-cuadro-info-nombres">
            <p className="dashboard-cuadro-info-nombres-nombre">
              {data && data.name}
            </p>
            <p className="dashboard-cuadro-info-nombres-symbol">
              {data && data.symbol}
            </p>
          </div>
          <div>
            <p className="dashboard-cuadro-info-nombres-precio">
              US$ {data && data.market_data.current_price.usd.toFixed(2)}
            </p>
            {dataMonedaElegida.market_data.price_change_percentage_7d &&
            dataMonedaElegida.market_data.price_change_percentage_7d > 0 ? (
              <p className="dashboard-cuadro-info-nombres-porcentaje-verde">
                +
                {dataMonedaElegida.market_data.price_change_percentage_7d.toFixed(
                  2
                )}
                %
              </p>
            ) : (
              <p className="dashboard-cuadro-info-nombres-porcentaje-rojo">
                {dataMonedaElegida.market_data.price_change_percentage_7d.toFixed(
                  2
                )}
                %
              </p>
            )}
          </div>
          {/* {console.log(dataParaChart)} */}
        </div>
        <div className="dashboard-cuadro-chart">
          <Line redraw={true} options={chart.options} data={chart} />
        </div>
      </div>
    </div>
  );
};
