import React from 'react';
import { Link } from 'react-router-dom';

const UsuarioLogueado = ({ username, onClick }) => {
  return (
    <>
      <h3>{`Hola, ${username}.`}</h3>
      <button onClick={onClick}>Cerrar Sesión</button>
      {username === 'admin' ? (
        <Link to='/admin-app/dashboard'>Dashboard</Link>
      ) : (
        <Link to='/dashboard-usuario'>Dashboard</Link>
      )}
    </>
  );
};

export default UsuarioLogueado;
