// src/context/CartContext.js
import React, { createContext, useState } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Crear el proveedor del contexto
export const CartProvider = ({ children }) => {
    const [subtotal, setSubtotal] = useState(0);

    return (
        <CartContext.Provider value={{ subtotal, setSubtotal }}>
            {children}
        </CartContext.Provider>
    );
};
