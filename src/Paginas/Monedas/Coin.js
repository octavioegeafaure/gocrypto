
import "./Coin.css"
import { Dashboard } from './Dashboard/Dashboard'
import Cards from "../Home/Cards/Cards"
import { useEffect } from "react";

export const Coin = () => {
  
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <div>
      <Cards />
      <Dashboard />
    </div>
  )
}
