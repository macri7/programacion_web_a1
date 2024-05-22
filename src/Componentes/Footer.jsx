// src/Componentes/Footer.jsx
import React from 'react';
import './Styles/Footer.css';
import Facebook from '../assets/imagenes/facebook.png';
import Instagram from '../assets/imagenes/instagram.png';
import Twitter from '../assets/imagenes/twitter.png';
import Youtube from '../assets/imagenes/youtube.png';

function Footer() {
  return (
    <footer>
      <ul className='primerfooter'>
        <li id="LaTienditaDelAbuelo"><strong>LA TIENDITA DEL ABUELO</strong></li>
        <li>© 2010 - 2020</li>
        <li>Privacy - Terms</li>
      </ul>
      <ul className='segundofooter'>
        <li id="Segundotitle"><strong>Cuenta</strong></li>
        <li>Login</li>
        <li>Registro</li>
        <li>Carrito</li>
      </ul>
      <ul className='tercerofooter'>
        <li id="tercerotitle"><strong>Productos</strong></li>
        <li>Mas vendidos</li>
        <li>Nuevos</li>
        <li>Ofertas</li>
      </ul>
      <ul className='cuartofooter'>
        <li id="cuartotitle"><strong>Ayuda</strong></li>
        <li> Acerca de Nosotros</li>
        <li> Politica de Envio</li>
        <li> FAQ </li>
      </ul>
      <ul className='quintofooter'>
        <li><img src={Facebook} className="logos" alt="facebook"/></li> 
        <li><img src={Instagram} className="logos" alt="instagram"/></li> 
        <li><img src={Twitter} className="logos" alt="twitter"/></li> 
        <li><img src={Youtube} className="logos" alt="youtube"/></li> 
      </ul>
    </footer>
  );
}

export default Footer;


