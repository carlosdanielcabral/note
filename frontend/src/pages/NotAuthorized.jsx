import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotAuthorized.css';

function NotAuthorized() {
  return (
    <div className="not-authorized">
      <div className="background" />
      <h1>Você não está autorizado a acessar esta rota.</h1>
      <img src="../assets/img/lock.png" alt="cadeado" />
      <section className="options">
        <Link to="/login">
          Login
        </Link>
        <Link to="/">
          Página Inicial
        </Link>
        <Link to="/register">
          Cadastro
        </Link>
      </section>
    </div>
  );
}
export default NotAuthorized;
