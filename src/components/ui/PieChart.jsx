// Importar librerías
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Pie } from "react-chartjs-2";
import axios from "axios";

// Estilos
const ChartContainer = styled.div`
  width: 25%;
  margin: 20px auto;
`;

function PieChart() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchProbability = async () => {
    try {
      const response = await axios.get("http://52.201.95.241:8080/api/spoiled-bread/probability");
      setData(response.data);
    } catch (err) {
      setError("Error al cargar los datos.");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProbability();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!data) {
    return <p>Cargando datos...</p>;
  }

  // Verificar si la propiedad de probabilidad de descomposición está bien
  console.log(data);

  // Configuración de los datos para la gráfica
  const chartData = {
    labels: ["Probabilidad de descomposición (%)", "Resto (%)"],
    datasets: [
      {
        data: [
          data.probabilityOfDecomposition * 100,
          100 - data.probabilityOfDecomposition * 100,
        ],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  return (
    <ChartContainer>
      <Pie data={chartData} />
      {/* Mostrar porcentaje de descomposición */}
      <p>Probabilidad de descomposición: {(data.probabilityOfDecomposition * 100).toFixed(2)}%</p>
      <p>Temperatura promedio: {data.averageTemperature.toFixed(2)}°C</p>
      <p>Humedad promedio: {data.averageHumidity.toFixed(2)}%</p>
    </ChartContainer>
  );
}

export default PieChart;
