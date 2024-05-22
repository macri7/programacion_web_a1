import React from 'react'
import products from '../../../public/dataEnCarrito'
import Item from '../../components/componentsPedidoCompleto/Item'
import './pedidoCompletoStyle.css'
import TopBar from '../componentsTopBar/TopBar'
import Footer from '../componentsFooter/Footer'
import { Link } from 'react-router-dom'
const PedidoCompleto = () => {
  return (
    <div id='pedidoCompledoID'>
      <TopBar/>
        <h2>¡Muchas Gracias por su pedido!</h2>
        <h4>Puedes ver el detalle y estado de tu pedido ingresando a <Link to='/dashboard-usuario'><a>tu cuenta</a></Link></h4>
        <h3>Tambien te podria interesar...</h3>
        <div id='itemDisplay'>
        {
            products.map(
                (product,index) => <Item key={index} product={product}/>
            )
        }
        </div>
        <Footer/>
    </div>
  )
}

export default PedidoCompleto
