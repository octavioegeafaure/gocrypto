import React, { useContext, useState } from 'react'
import useFetch from '../../../Hooks/useFetch';
import Select from "react-select";
import "./SearchBar.css";
import MonedaContext from '../../../Context/MonedaContext';
import DataMonedaElegidaContext from '../../../Context/DataMonedaElegidaContext';
import DataParaChartContext from '../../../Context/DataParaChart';
import { useNavigate } from 'react-router';


export const SearchBar = () => {
    // DATAPARACHART TENGO LO DEL CUADRO Y EN DATAMONEDAELEGIDA TENGO LA OTRA INFO
    const [ moneda , setMoneda ] = useState() 
    const urlMonedas = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";
    const { data } = useFetch( urlMonedas )
    const { dataMonedaElegida, setDataMonedaElegida } = useContext(DataMonedaElegidaContext);
    const urlCoin = "https://api.coingecko.com/api/v3/coins/" + dataMonedaElegida;
    const { data: dataParaMoneda } = useFetch(urlCoin);
    const navigate = useNavigate();

    const manejadorSelect = (event) => {
        // setMoneda(event.value);
        setDataMonedaElegida(dataParaMoneda)
        // console.log(moneda);
        // navigate(`/coin/${event.value}`);
      };
    return (
      <div className="searchBar">
        {console.log(dataMonedaElegida)}
        <Select

          className="searchBar-individual"
          defaultValue={""}
          options={
            data &&
            data.map((moneda) => ({
              label: moneda.name,
              value: moneda.id,
            }))
          }
          //   onChange={manejadorSelect}
          placeholder={<div className="placeholder">Buscá tu moneda</div>}
          onChange={manejadorSelect}
          styles={{
            control: (base, state) => ({
              ...base,
              backgroundColor: "#080808",
              border: "color: #EBEBEB",
              borderRadius: "1rem",
              minHeight: "3px",
              height: "32px",
            }),
            input: (base) => ({
              ...base,
              color: "#EBEBEB",
              marginBottom: "5px",
            }),
            option: (base) => ({
              ...base,
              backgroundColor: "#080808",
              color: "#EBEBEB",
            }),
            dropdownIndicator: (base) => ({
              ...base,
              display: "none",
            }),
          }}
        />
      </div>
    );
}
