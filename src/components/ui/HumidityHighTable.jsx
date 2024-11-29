import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

// Estilos
const TableContainer = styled.div`
  width: 80%;
  margin: 20px auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

function HumidityHighTable() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  // Función para obtener datos del endpoint
  const fetchHumidityHighData = async () => {
    try {
      const response = await axios.get("http://52.201.95.241:8080/api/humidity-high/recent");
      setData(response.data);
    } catch (err) {
      setError("Error al cargar los datos.");
      console.error(err);
    }
  };

  // Llamada al fetch en el montaje del componente
  useEffect(() => {
    fetchHumidityHighData();
  }, []);

  // Mostrar mensaje de error si ocurre un problema
  if (error) {
    return <p>{error}</p>;
  }

  // Mostrar mensaje mientras se cargan los datos
  if (data.length === 0) {
    return <p>Cargando datos...</p>;
  }

  return (
    <TableContainer>
      <h2>Datos de Humedad Alta</h2>
      <Table>
        <thead>
          <tr>
            <TableHeader>ID Sensor</TableHeader>
            <TableHeader>Humedad</TableHeader>
            <TableHeader>Fecha</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.sensorDataId}</TableCell>
              <TableCell>{item.sensor_datum.humidity}%</TableCell> {/* Corregido para acceder a la propiedad 'humidity' dentro de 'sensor_datum' */}
              <TableCell>{new Date(item.sensor_datum.timestamp).toLocaleString()}</TableCell> {/* Corregido para acceder al 'timestamp' dentro de 'sensor_datum' */}
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}

export default HumidityHighTable;
