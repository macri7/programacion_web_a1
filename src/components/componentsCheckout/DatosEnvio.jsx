import React from 'react'

const DatosEnvio = () => {
    const listaInputs = () => [
        'Linea 1', 'Linea 2', 'Distrito', 'Ciudad', 'Pais'
    ];
    return (
        <div id='direccionEnvio'>
            <h4>Dirección de envío</h4>
                {listaInputs().map((input, index) => (
                <React.Fragment key={index}>
                    <input type="text" placeholder={input} />
                    <br />
                </React.Fragment>
                ))}
        </div>
    )
}
export default DatosEnvio
