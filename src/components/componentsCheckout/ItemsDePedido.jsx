import React from 'react'
import products from '../../../public/dataEnCarrito';
const ItemsDePedido = () => {
  const cantidad = 1;
  return (
    <div id="itemsPedido">
      <h4>Items en pedido:</h4>
        {
            products.map(product => (
                <div class="elemento">
                    <h5>{cantidad}x {product.name}</h5>
                    <h5>Precio unitario: S/{product.price}</h5>
                </div>
            ))
        }
    </div>
  )
}
export default ItemsDePedido