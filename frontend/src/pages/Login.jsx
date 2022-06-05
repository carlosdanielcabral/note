import React from 'react';
import LoginForm from '../components/LoginForm';
import '../styles/Authentication.css';

function Login() {
  return (
    <div className="authenticationPage">
      <section className="left">
        <LoginForm />
      </section>
    </div>
  );
}

export default Login;
