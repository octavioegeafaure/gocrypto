import React, { createContext, useState } from "react";

export const DataParaChartContext = createContext();

export const DataParaChartProvider = ({ children }) => {
  const [dataParaChart, setDataParaChart] = useState();

  return (
    <DataParaChartContext.Provider value={{ dataParaChart, setDataParaChart }}>
      {children}
    </DataParaChartContext.Provider>
  );
};

export default DataParaChartContext;
