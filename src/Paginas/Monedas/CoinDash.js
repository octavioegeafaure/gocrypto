import "./Coin.css";
import Cards from "../Home/Cards/Cards";
import { useEffect } from "react";
import { DashboardChart } from "./Dashboard/DashboardChart";

export const CoinDash = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Cards />
      <DashboardChart />
    </div>
  );
};
