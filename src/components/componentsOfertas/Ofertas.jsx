import React, { useState, useEffect } from 'react';
import './Ofertas.css';
import '../../../public/ProductosOfertas.json'
import TopBar from '../componentsTopBar/TopBar';
import Footer from '../componentsFooter/Footer'
import { Link } from 'react-router-dom';
const Ofertas = () => {
    const [productosOfertas, setProductosOfertas] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetch('../../public/ProductosOfertas.json')
            .then(response => response.json())
            .then(data => setProductosOfertas(data))
            .catch(error => console.error('Error fetching productos:', error));
    }, []);
    const handleDetailsClick = (productId) => {
        setSelectedProduct(productId);
      };

    return (
        
        <div className="mas-vendidos">
            <TopBar/>
            <h2>Productos con ofertas</h2>
            <div className="productos-container">
                {productosOfertas.map((producto) => (
                    <div key={producto.id} className="producto">
                        <img src={producto.imagen} alt={producto.nombre} />
                        <h3>{producto.nombre}</h3>
                        <p>{producto.descripcion}</p>
                        <span>${producto.precio}</span>
                        <br />
                        <a className="details-link" onClick={() => handleDetailsClick(product.id)}><Link to='/moreDetails'>Más detalles</Link></a>
                    </div>
                ))}
            </div>
            {selectedProduct && <MasDetalle productId={selectedProduct} />}
            <Footer/>
        </div>
    );
};

export default Ofertas;