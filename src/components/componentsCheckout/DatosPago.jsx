import React from 'react'

const DatosPago = () => {
  return (
    <div id='pago'>
        <h4>Pago</h4>
        <input type="radio" name="paymentMethod" id="qrPayment" />
        <label htmlFor="qrPayment">Pago con QR</label>
        <br />
        <input type="radio" name="paymentMethod" id="creditCardPayment" />
        <label htmlFor="creditCardPayment">Pago con tarjeta de crédito</label>
        <br />
        <input type="text" placeholder='Numero de tarjeta'/>
        <br />
        <input type="text" placeholder='Nombre en tarjeta'/>
        <br />
        <input type="month" placeholder='Fecha Vencimiento'/>
        <br />
        <div id='datosTarjeta'>
          <input type="text" placeholder='Numero de tarjeta'/>
          <br />
          <input type="text" placeholder='CVV'/>
        </div>
    </div>
  )
}

export default DatosPago
