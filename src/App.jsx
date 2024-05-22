import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Dashboard from './Componentes/Dashboard';
import Productos from './Componentes/Productos';
import Sidebar from './Componentes/Sidebar';
import AddProd from './Componentes/AddProd';
import VerProducto from './Componentes/VerProducto';

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const storedProductos = JSON.parse(localStorage.getItem('productos')) || [];
    setProductos(storedProductos);
  }, []);

  const handleAgregarProducto = (nuevoProducto) => {
    let nuevosProductos;
    if (productos.find(producto => producto.id === nuevoProducto.id)) {
      nuevosProductos = productos.map(producto => producto.id === nuevoProducto.id ? nuevoProducto : producto);
    } else {
      nuevosProductos = [nuevoProducto, ...productos];
    }
    setProductos(nuevosProductos);
    localStorage.setItem('productos', JSON.stringify(nuevosProductos));
  };

  const handleDesactivarProducto = (id) => {
    const nuevosProductos = productos.filter(producto => producto.id !== id);
    setProductos(nuevosProductos);
    localStorage.setItem('productos', JSON.stringify(nuevosProductos));
  };

  return (
    <div className="App">
      <Header />
      <div className="princi">
        <Sidebar />
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="productos" element={<Productos productos={productos} onDesactivarProducto={handleDesactivarProducto} onProductAdded={handleAgregarProducto} />} />
          <Route path="agregar-producto" element={<AddProd onProductAdded={handleAgregarProducto} />} />
          <Route path="ver-producto/:id" element={<VerProducto productos={productos} />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
