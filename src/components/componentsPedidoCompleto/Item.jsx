import React from 'react'
const Item = ({product}) => {
  return (
    <div id='item'>
        <img src={product.image} alt="imagenProducto" />
        <h5>{product.name}</h5>
        <a href="">Click para mas info</a>
    </div>
  )
}

export default Item
