// src/Componentes/AddProd.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Styles/AddProd.css';

function AddProd({ onProductAdded }) {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [caracteristicas, setCaracteristicas] = useState('');
  const [marca, setMarca] = useState('');
  const [serie, setSerie] = useState('');
  const [precio, setPrecio] = useState('');
  const [tipo, setTipo] = useState('');
  const [stock, setStock] = useState('');
  const [imagen, setImagen] = useState(null);
  const [id, setId] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.product) {
      const { product } = location.state;
      setId(product.id);
      setNombre(product.nombre);
      setDescripcion(product.descripcion);
      setCaracteristicas(product.caracteristicas);
      setMarca(product.marca);
      setSerie(product.serie);
      setPrecio(product.precio);
      setTipo(product.tipo);
      setStock(product.stock);
      setImagen(product.imagen);
    }
  }, [location]);

  const generateUniqueId = () => Math.floor(Date.now() * Math.random());

  const handleGuardar = () => {
    const nuevoProducto = {
      id: id || generateUniqueId(),
      nombre,
      descripcion,
      caracteristicas,
      marca,
      serie,
      precio,
      tipo,
      stock,
      imagen,
      fechaRegistro: new Date().toLocaleDateString(),
    };

    onProductAdded(nuevoProducto);

    // Restablecer los campos del formulario
    setNombre('');
    setDescripcion('');
    setCaracteristicas('');
    setMarca('');
    setSerie('');
    setPrecio('');
    setTipo('');
    setStock('');
    setImagen(null);

    navigate('/admin-app/productos'); // Redirigir a la página de productos
  };

  const handleImagenChange = (e) => {
    const file = e.target.files[0];
    setImagen(URL.createObjectURL(file));
  };

  return (
    <div className="Agregacion">
      <div className="Cabezon">{id ? 'Actualizar Producto' : 'Agregar Producto'}</div>
      <div className="Formulario">
        <div className="ImagenContainer">
          <div className='ImageLoad'>
            {imagen && <img src={imagen} alt="Imagen seleccionada" />}
          </div>
          <div className='peque'> 
            <input type="file" accept="image/*" onChange={handleImagenChange} />
          </div>
        </div>
        <div className="Forms">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          <label htmlFor="descripcion">Descripcion:</label>
          <textarea placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
          <label htmlFor="caracteristicas">Carateriscas:</label>
          <input type="text" placeholder="Características" value={caracteristicas} onChange={(e) => setCaracteristicas(e.target.value)} />
          <label htmlFor="marca">Marca:</label>
          <input type="text" placeholder="Marca" value={marca} onChange={(e) => setMarca(e.target.value)} />
          <label htmlFor="serie">Serie:</label>
          <input type="text" placeholder="Serie" value={serie} onChange={(e) => setSerie(e.target.value)} />
          <label htmlFor="precio">Precio:</label>
          <input type="text" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
          <label htmlFor="tipo">Tipo:</label>
          <input type="text" placeholder="Tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} />
          <label htmlFor="stock">Stock:</label>
          <input type="text" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} />
          <button onClick={handleGuardar}>{id ? 'Actualizar' : 'Guardar'}</button>
        </div>
      </div>
    </div>
  );
}

export default AddProd;

