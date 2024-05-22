// src/Componentes/Dashboard.jsx
import './Styles/Dashboard.css';
import React, { useState } from 'react';

function Dashboard() {
  const [selectedDate, setSelectedDate] = useState('');
  const [showDateInput, setShowDateInput] = useState(false);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleToggleDateInput = () => {
    setShowDateInput(!showDateInput);
  };

  return (
    <div className="Dashboard">
      <div className="Cabecita">
        <div>Dashboard</div>
        <div className="ChangeDate">
          <button onClick={handleToggleDateInput}>Cambiar Fecha o Periodo:</button>
          {showDateInput && (
            <input 
              type="date" 
              value={selectedDate} 
              onChange={handleDateChange} 
              onBlur={() => setShowDateInput(false)}
            />
          )}
        </div>
      </div>
      <div className="Statistics">
        <div className="StatItem">68 <br /> Órdenes del día de hoy</div>
        <div className="StatItem">12 <br /> Usuarios nuevos</div>
        <div className="StatItem">S/ 13,500.00 <br />Ingresos de hoy</div>
      </div>
    </div>
  );
}

export default Dashboard;


