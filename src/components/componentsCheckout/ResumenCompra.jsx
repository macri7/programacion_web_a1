import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../componentsCarroCompras/context';

const ResumenCompra = () => {
    const { subtotal } = useContext(CartContext);
    const impuestosValue = 18;
    const envioValue = 8;

    return (
        <div id="resumenOrden">
            <h4>Resumen de orden</h4>
            <p>Subtotal: S/{subtotal}</p>
            <p>Envio: S/{envioValue}</p>
            <p>Impuestos: S/{impuestosValue}</p>
            <p>Total: S/{(parseFloat(subtotal) + impuestosValue + envioValue).toFixed(2)}</p>
            <Link to="/pedidoCompleto"><button>Completar Orden</button></Link>
        </div>
    );
}

export default ResumenCompra;
