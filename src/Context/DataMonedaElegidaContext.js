import React, { createContext, useState } from "react";

export const DataMonedaElegidaContext = createContext();

export const DataMonedaElegidaProvider = ({ children }) => {
  const [dataMonedaElegida, setDataMonedaElegida] = useState();

  return (
    <DataMonedaElegidaContext.Provider
      value={{ dataMonedaElegida, setDataMonedaElegida }}
    >
      {children}
    </DataMonedaElegidaContext.Provider>
  );
};

export default DataMonedaElegidaContext;

