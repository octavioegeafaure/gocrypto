import "./Banner.css"
import React from 'react'
import useFetch from "../../../Hooks/useFetch"





const Banner = () => {

    const urlBitcoin = "https://api.coingecko.com/api/v3/coins/bitcoin";
    const { data } = useFetch(urlBitcoin)
  return (
    <div className="banner">
      <div className="banner-fondo">
        <div className="banner-fondo-figura">
          <h1 className="banner-titulo-h1">
            Tu búsqueda en<br></br> Criptos<br></br>
          </h1>

          <h2 className="banner-titulo-h2">Empieza acá.</h2>

          <h3 className="banner-titulo-h3">
            Disfrutá en un simple click de los valores de las criptomonedas más
            populares
          </h3>
          {/* {console.log(data)} */}
        </div>
        <div className="imagen"></div>
      </div>
      <img src="/images/bjD8-hPmE.png" />
    </div>
  );
}

export default Banner