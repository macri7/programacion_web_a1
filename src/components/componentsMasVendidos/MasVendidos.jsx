import React, { useState, useEffect } from 'react';
import './MasVendidos.css';
import '../../../public/ProductosMasVendidos.json'
import TopBar from '../componentsTopBar/TopBar'
import Footer from '../componentsFooter/Footer'
import { Link } from 'react-router-dom';

const MasVendidos = () => {
    const [productosMasVendidos, setProductosMasVendidos] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    useEffect(() => {
        fetch('../../../public/ProductosMasVendidos.json')
            .then(response => response.json())
            .then(data => setProductosMasVendidos(data))
            .catch(error => console.error('Error fetching productos:', error));
    }, []);
    const handleDetailsClick = (productId) => {
        setSelectedProduct(productId);
      };

    return (
        
        <div className="mas-vendidos">
            <TopBar/>
            <h2>Productos Más Vendidos</h2>
            <div className="productos-container">
                {productosMasVendidos.map((producto) => (
                    <div key={producto.id} className="producto">
                        <img src={producto.imagen}  />
                        
                        <h3>{producto.descripcion}</h3>
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

export default MasVendidos;
