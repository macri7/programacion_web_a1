import React, { useState } from 'react';
import './layersStyle.css';
function Layers({ product,subtotal,setSubtotal }) {
    const [precio, setPrecio] = useState(product.price);
    const [cantidad, setCantidad] = useState(1);

    const suma = () => {
        setCantidad(cantidad + 1);
        setPrecio((parseFloat(precio) + parseFloat(product.price)).toFixed(2));
        setSubtotal((parseFloat(subtotal) + parseFloat(product.price)).toFixed(2));
    };

    const resta = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
            setPrecio((parseFloat(precio) - parseFloat(product.price)).toFixed(2));
            setSubtotal((parseFloat(subtotal) - parseFloat(product.price)).toFixed(2));
        }
    };
    return (
        <div id="divInicialLayers">
        <img src={product.image} alt="" />
        <div id="mainInfo">
            <h4>{product.name}</h4>
            <div id="opcionesRecurrentes">
                <button>Eliminar |</button>
                <button>Guardar para despues</button>
            </div>
        </div>
            <div id="datosCompra">
                <button onClick={resta}>-</button>
                <p>Cantidad: {cantidad}</p>
                <button onClick={suma}>+</button>
                <div>
                    <p>Precio</p>
                    <p>S/ {product.price}</p>
                </div>
                <div>
                    <p>Subtotal</p>
                    <p>S/ {precio}</p>
                </div>
            </div>
        </div>
    );
}

export default Layers;