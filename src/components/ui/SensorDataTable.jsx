import React, { useState, useEffect } from 'react';

const SensorDataTable = () => {
  // Estado para almacenar los datos de la respuesta
  const [sensorData, setSensorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para hacer la solicitud GET cuando el componente se monta
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://52.201.95.241:8080/api/sensor-data/recent');
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setSensorData(data); // Almacena los datos en el estado
        setLoading(false); // Cambia el estado de carga
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Se ejecuta solo una vez cuando el componente se monta

  if (loading) {
    return <div>Cargando datos...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Datos de Sensores Recientes</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Temperatura</th>
            <th>Humedad</th>
            <th>Fecha y Hora</th>
          </tr>
        </thead>
        <tbody>
          {sensorData.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.temperature}°C</td>
              <td>{data.humidity}%</td>
              <td>{new Date(data.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SensorDataTable;
