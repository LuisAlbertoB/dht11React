// Importar librerías
import React from "react";
import styled from "styled-components";
import PieChart from "../components/ui/PieChart";

import HumidityHighTable from "../components/ui/HumidityHighTable";
import HumidityLowTable from "../components/ui/HumidityLowTable";
import TemperatureHighTable from "../components/ui/TemperatureHighTable";
import TemperatureLowTable from "../components/ui/TemperatureLowTable";
import SensorDataTable from "../components/ui/SensorDataTable";

// Estilos
const MainContainer = styled.div`
  width: 98%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function Home() {
  return (
    <MainContainer>
      <h1>Probabilidad de que el pan este descompuesto</h1>
      <PieChart />
      <h1>Ultimos registros de humedad alta</h1>
      <HumidityHighTable />
      <h1>Ultimos registros de humedad baja</h1>
      <HumidityLowTable />
      <h1>Ultimos registros de temperatura alta</h1>
      <TemperatureHighTable />
      <h1>Ultimos registros de temperatura baja</h1>
      <TemperatureLowTable />
      <h1>Sensor data</h1>
      <SensorDataTable />
    </MainContainer>
  );
}

export default Home;
