import React from 'react';
import DatosEnvio from './DatosEnvio';
import DatosPago from './DatosPago';
import TipoEnvio from './TipoEnvio';
import ItemsDePedido from './ItemsDePedido';
import ResumenCompra from './ResumenCompra';
import TopBar from '../componentsTopBar/TopBar';
import Footer from '../componentsFooter/Footer';
import './checkoutStyle.css'
const Checkout = () => {
    return (
        <section className='checkout'>
            <TopBar/>
            <h2>¡Casi listo! Tu orden no estará completa hasta que revises y presiones el botón "completar orden" al final de la página.</h2>
            <h3>Datos de compra</h3>
            <div id='inputDatos'>
                <DatosEnvio/>
                <DatosPago/>
            </div>
            <h3>Metodo de envio</h3>
            <TipoEnvio/>
            <div id='datosCompra'>
                <ItemsDePedido/>
                <ResumenCompra/>
            </div>
            <Footer/>
        </section>
    );
};

export default Checkout;