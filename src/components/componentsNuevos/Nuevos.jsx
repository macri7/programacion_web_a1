import React, { useState, useEffect } from 'react';
import './Nuevos.css';
import '../../../public/ProductosNuevos.json'
import TopBar from '../componentsTopBar/TopBar';
import Footer from '../componentsFooter/Footer';
import { Link } from 'react-router-dom';

const Nuevos = () => {
    const [productosNuevos, setProductosNuevos] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);


    useEffect(() => {
        fetch('../../public/ProductosNuevos.json')
            .then(response => response.json())
            .then(data => setProductosNuevos(data))
            .catch(error => console.error('Error fetching productos:', error));
    }, []);
    const handleDetailsClick = (productId) => {
        setSelectedProduct(productId);
      };

    return (
        <div className="productos-nuevos">
            <TopBar/>
            <h2>Productos en Novedad</h2>
            <div className="productos-container">
                {productosNuevos.map((producto) => (
                    <div key={producto.id} className="producto">
                        <img src={producto.imagen} alt={producto.nombre} />
                    
                        <h3>{producto.description}</h3>
                        <span>${producto.precio}</span><br />
                        <a className="details-link" onClick={() => handleDetailsClick(product.id)}><Link to='/moreDetails'>Más detalles</Link></a>
                    </div>
                ))}
            </div>
            {selectedProduct && <MasDetalle productId={selectedProduct} />}
            <Footer/>
        </div>
    );
};
export default Nuevos;