import React from 'react';

const ButtonWithRequest = () => {

  const sendRequests = async () => {
    try {
      // Realizamos todas las solicitudes POST en paralelo con Promise.all
      const responses = await Promise.all([
        fetch('/api/humidity-high/associate', { method: 'POST' }),
        fetch('/api/humidity-low/associate', { method: 'POST' }),
        fetch('/api/temperature-high/associate', { method: 'POST' }),
        fetch('/api/temperature-low/associate', { method: 'POST' })
      ]);

      // Comprobamos si todas las respuestas fueron exitosas
      const allSuccess = responses.every(res => res.ok);

      if (allSuccess) {
        alert('Tablas asociadas');
      } else {
        alert('Hubo un error en una o más solicitudes');
      }
    } catch (error) {
      console.error('Error al realizar las solicitudes:', error);
      alert('Ocurrió un error al realizar las solicitudes');
    }
  };

  return (
    <div>
      <button onClick={sendRequests}>
        Enviar Solicitudes
      </button>
    </div>
  );
};

export default ButtonWithRequest;
