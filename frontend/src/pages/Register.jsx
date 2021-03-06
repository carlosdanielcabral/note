import React from 'react';
import RegisterForm from '../components/RegisterForm';
import '../styles/Authentication.css';

function Register() {
  return (
    <div className="authentication-page">
      <section className="right" id="register-section">
        <RegisterForm />
      </section>
    </div>
  );
}

export default Register;
