import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import React from 'react'

import './register.css';

import logo from '../assets/logo.png';
import user from '../assets/user.png';
import senha from '../assets/senha.png';
import volta from '../assets/voltar.png';

import video from './clipe.mp4';

const Register = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.username.trim() === '' ||
            password.trim() === '' ||
            confirmPassword.trim() === '') {

            alert('Preencha todos os campos!');
            return;

        }


        if (password !== confirmPassword) {
            alert("As senhas não coincidem");
            return;
        }

        navigate('/login');

    }

    const [btnHovered, setBtnHovered] = useState(false);

    const handleBtnMouseEnter = () => {
        setBtnHovered(true);
    };

    const handleBtnMouseLeave = () => {
        setBtnHovered(false);
    };

    const handleBack = () => {
        window.location.href = "/login";
    }

    const [imgHovered, setImgHovered] = useState(false);

    const handleImgMouseEnter = () => {
        setImgHovered(true);
    }

    const handleImgMouseLeave = () => {
        setImgHovered(false);
    }


    return (
        <>
            <video autoPlay loop muted id="video">
                <source src={video} type="video/mp4" />
            </video>

            <div className="register-container">

                <img id="voltar" src={volta} alt="Voltar"
                    onClick={handleBack}
                    className={imgHovered ? 'voltar-hover' : ''}
                    onMouseEnter={handleImgMouseEnter}
                    onMouseLeave={handleImgMouseLeave}
                />"

                <img id="logo" src={logo} alt="Logo" />


                <form onSubmit={handleSubmit}>

                    <label>
                        <img id="user" src={user} alt="User" />
                        <input
                            type="text"
                            name="username"
                            placeholder="Usuário"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        <img id="senha" src={senha} alt="Senha" />
                        <input
                            type="password"
                            name="password"
                            placeholder='Senha'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>

                    <label>
                        <img id="senha2" src={senha} alt="Confirmar Senha" />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder='Confirme a Senha'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </label>

                    <button className={btnHovered ? 'btn-grow' : ''}
                        onMouseEnter={handleBtnMouseEnter}
                        onMouseLeave={handleBtnMouseLeave}
                        type="submit"
                        onClick={handleSubmit}
                    >Cadastrar</button>

                </form>
            </div>
        </>
    );
}


export default Register;