import React from 'react';
import './Dashuser.css';

const DashUser = () => {
  return (
    <div className="dash-user-container">
      <div className="navbar">
        <h2>Mi Cuenta</h2>
        <ul>
          <li><a href="/ordenes-recientes">Órdenes Recientes</a></li>
          <li><a href="/datos-de-registro">Datos de Registro</a></li>
          <li><a href="/cambiar-password">Cambiar Contraseña</a></li>
        </ul>
      </div>
      <div className="info-container">
        <div className="info-header">
          <h3>Información</h3>
        </div>
        <div className="product-container">
            <div className="order">
              <div className="order-details">
                <h4>Título del Pedido</h4>
                <p>Fecha: 10 de mayo de 2024</p>
                <p>Dirección: Calle Principal #123</p>
              </div>
              <div className="order-number">
                <p>Número de Pedido: 123456</p>
              </div>
              <div className="order-detail">
                <a href="/detalle-pedido">Ver Detalle</a>
              </div>
            </div>
            <div className="order">
              <div className="order-details">
                <h4>Título del Pedido</h4>
                <p>Fecha: 10 de mayo de 2024</p>
                <p>Dirección: Calle Principal #123</p>
              </div>
              <div className="order-number">
                <p>Número de Pedido: 123456</p>
              </div>
              <div className="order-detail">
                <a href="/detalle-pedido">Ver Detalle</a>
              </div>
            </div>
            <div className="order">
              <div className="order-details">
                <h4>Título del Pedido</h4>
                <p>Fecha: 10 de mayo de 2024</p>
                <p>Dirección: Calle Principal #123</p>
              </div>
              <div className="order-number">
                <p>Número de Pedido: 123456</p>
              </div>
              <div className="order-detail">
                <a href="/detalle-pedido">Ver Detalle</a>
              </div>
            </div>
            <div className="order">
              <div className="order-details">
                <h4>Título del Pedido</h4>
                <p>Fecha: 10 de mayo de 2024</p>
                <p>Dirección: Calle Principal #123</p>
              </div>
              <div className="order-number">
                <p>Número de Pedido: 123456</p>
              </div>
              <div className="order-detail">
                <a href="/detalle-pedido">Ver Detalle</a>
              </div>
            </div>
        </div>
        <div className="slider">
          {/* Aquí iría el código del slider */}
        </div>
      </div>
    </div>
  );
}

export default DashUser;
