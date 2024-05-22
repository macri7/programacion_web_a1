import React, { useState, useEffect } from 'react';
//import './MasDetalle.css';
import '../../../public/Productos.json'
import TopBar from '../componentsTopBar/TopBar';
import Footer from '../componentsFooter/Footer'


const MasDetalle = () => {
    const [productosMasDetalle, setProductosMasDetalle] = useState([]);

    useEffect(() => {
        fetch('../../../public/Productos.json')
            .then(response => response.json())
            .then(data => setProductosMasDetalle(data))
            .catch(error => console.error('Error fetching productos:', error));
    }, []);

    return (
        
        <div className="mas-detalle">
            <TopBar/>
            <h2>Mas Detalles</h2>
            <div className="productos-container">
                {productosMasDetalle.map((producto) => (
                    <div key={producto.id} className="producto">
                        <img src={producto.imagen} alt={producto.nombre} />
                        <h3>{producto.nombre}</h3>
                        <p>{producto.descripcion}</p>
                        <span>${producto.precio}</span>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
};

export default MasDetalle;
