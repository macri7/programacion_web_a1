import React from 'react'

const TipoEnvio = () => {
  return (
    <div id='tipoPedido'>
        <input type="radio" name="sendMethod" id="envioDomicilio" />
        <label htmlFor="envioDomicilio">Envío a domicilio S/8</label>
        <input className='moverIzquierda' type="radio" name="sendMethod" id="recojoEnTienda" />
        <label htmlFor="recojoEnTienda">Recojo en tienda S/0</label>
    </div>
  )
}

export default TipoEnvio
