import React from 'react';
import './Header.css';  // Si quieres aplicar estilos adicionales

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img 
        src='/logocineco.jpg'
          alt="Cine Logo" 
          className="logo-img"
        />
        <h1>Cartelera de Cine</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#peliculas">Películas</a></li>
          <li><a href="#estrenos">Estrenos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
