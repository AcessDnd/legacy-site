import React, { useState } from 'react';
import './login.css';
import logo from '../assets/logo.png';
import user from '../assets/user.png';
import senha from '../assets/senha.png';
import video from './clipe.mp4';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(formData.username.trim() === '' || 
     formData.password.trim() === '') {

    alert('Preencha todos os campos!');
    return;
  }
  };

  const [hovered, setHovered] = useState(false); 

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
    <video id="video" autoPlay muted loop>
      <source src={video} type="video/mp4" />
    </video>

    <div className="login-container">
      <img id="logo" src={logo} alt="Logo" />

      <form onSubmit={handleSubmit}>
        <label>
          <img id="user" src={user} alt="User" />
          <input
            type="text"
            name="username"
            placeholder='Usuário'
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
            value={formData.password}
            onChange={handleChange}
          />
        </label>

        <button 
              className={hovered ? 'btn-grow' : ''}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave} 
              type="submit">Login</button>

        <p>Novo? <a href="/register">Registre-se</a></p>
      </form>
    </div>
    </>
  );
};

export default Login;
