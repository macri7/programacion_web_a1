//src/Componentes/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Sidebar.css';

function Sidebar() {
  return (
    <aside className="App-sidebar">
      <h2>Admin</h2>
      <nav>
        <ul>
          <li><Link to="/admin-app/dashboard">Dashboard</Link></li>
          <li>Usuarios registrados</li>
          <li><Link to="/admin-app/productos">Productos</Link></li>
          <li>Órdenes</li>
          <li>Productos más vendidos</li>
          <li>Series</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
