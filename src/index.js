import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routers/App';
import reportWebVitals from './reportWebVitals';

// Importar chart.js y registrar componentes
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
