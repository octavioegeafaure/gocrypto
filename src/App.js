import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from './Paginas/Home/Header/Header';
import { Home } from './Paginas/Home/Home';
import {Coin} from './Paginas/Monedas/Coin';
import { MonedaProvider } from './Context/MonedaContext';
import { DataMonedaElegidaProvider } from './Context/DataMonedaElegidaContext';
import { ListaMonedas } from './Paginas/ListaEnteraMonedas/ListaMonedas';
import DataParaChartContext, { DataParaChartProvider } from './Context/DataParaChart';
import { CoinDash } from './Paginas/Monedas/CoinDash';




function App() {
   
  return (
    <div className="App">
      <DataParaChartProvider>
        <DataMonedaElegidaProvider>
          <MonedaProvider>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coin/:id" element={<Coin />} />
                <Route path="/:id" element={<CoinDash />} />
                <Route path="/monedas" element={<ListaMonedas />} />
              </Routes>
            </BrowserRouter>
          </MonedaProvider>
        </DataMonedaElegidaProvider>
      </DataParaChartProvider>
    </div>
  );
}

export default App;
