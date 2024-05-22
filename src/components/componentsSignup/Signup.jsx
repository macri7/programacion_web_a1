import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/User.jsx';
import './Signup.css';
import TopBar from '../componentsTopBar/TopBar.jsx';
import Footer from '../componentsFooter/Footer.jsx';
const Signup = () => {
    const navigate = useNavigate();
    const user = useUser();
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleClick = () => {
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden.');
            return;
        }

        alert('Usuario registrado exitosamente.');
        const newUser = { usuario: nombre, password }; 
        user.setUser(newUser); 
        localStorage.setItem('user', JSON.stringify(newUser));
        navigate('/');
    };

    return (
        <>
            <TopBar/>
            <div className="signup">
                <main id="mainSignup" className="mainSignup">
                    <h1>Registra una nueva cuenta</h1>
                    <input
                        type="text"
                        id="nombre"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(event) => setNombre(event.target.value)}
                    />
                    <br />
                    <input
                        type="text"
                        id="apellido"
                        placeholder="Apellido"
                        value={apellido}
                        onChange={(event) => setApellido(event.target.value)}
                    />
                    <br />
                    <input
                        type="text"
                        id="correo"
                        placeholder="Correo"
                        value={correo}
                        onChange={(event) => setCorreo(event.target.value)}
                    />
                    <br />
                    <input
                        type="password"
                        id="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <br />
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirmar Contraseña"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                    />
                    <br />
                    <span className="errorMessage">{error}</span>
                    <br />
                    <button onClick={handleClick}>Crear nueva cuenta</button>
                </main>
            </div>
            <Footer/>
        </>
    );
};

export default Signup;
