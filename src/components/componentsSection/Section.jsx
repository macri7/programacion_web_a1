import React, { useState, useEffect } from 'react';
import './Section.css';
import '../../../public/Productos.json'
import MasDetalle from '../../components/componentsMasDetalle/MasDetalle';
import { Link } from 'react-router-dom';
import TopBar from '../componentsTopBar/TopBar';
import Footer from '../componentsFooter/Footer';

const Section = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetch('../../../public/Productos.json')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);
    const handleDetailsClick = (productId) => {
        setSelectedProduct(productId);
    };

    return (
        <section className="product-list">
            <TopBar/>
            <h2>Productos</h2>
            <div className="products">
                {products.map(product => (
                    <div key={product.id} className="product">
                        <img src={product.imagen} alt={product.description} className="product-image" />
                        <p>{product.description}</p>
                        <p className="price">{product.price}</p>
                        <a className="details-link" onClick={() => handleDetailsClick(product.id)}><Link to='/moreDetails'>Más detalles</Link></a>
                    </div>
                ))}

            </div>
            {selectedProduct && <MasDetalle productId={selectedProduct} />}
            <Footer/>
        </section>
    );
};

export default Section;
