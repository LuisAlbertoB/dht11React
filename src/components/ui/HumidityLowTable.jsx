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

function HumidityLowTable() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchHumidityLowData = async () => {
    try {
      const response = await axios.get("http://52.201.95.241:8080/api/humidity-low");
      setData(response.data);
    } catch (err) {
      setError("Error al cargar los datos.");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchHumidityLowData();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (data.length === 0) {
    return <p>Cargando datos...</p>;
  }

  return (
    <TableContainer>
      <h2>Datos de Humedad Baja</h2>
      <Table>
        <thead>
          <tr>
            <TableHeader>ID Sensor</TableHeader>
            <TableHeader>Humedad</TableHeader>
            <TableHeader>Temperatura</TableHeader>
            <TableHeader>Fecha</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.sensor_datum.id}</TableCell>
              <TableCell>{item.sensor_datum.humidity} %</TableCell>
              <TableCell>{item.sensor_datum.temperature} °C</TableCell>
              <TableCell>{new Date(item.sensor_datum.timestamp).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}

export default HumidityLowTable;
