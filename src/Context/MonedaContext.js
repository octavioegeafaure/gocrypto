import React, { createContext, useState } from "react";

export const MonedaContext = createContext();

export const MonedaProvider = ({ children }) => {
  const [monedaAElegir, setMonedaAElegir] = useState();

  return (
    <MonedaContext.Provider value={{ monedaAElegir, setMonedaAElegir }}>
      {children}
    </MonedaContext.Provider>
  );
};

export default MonedaContext;

