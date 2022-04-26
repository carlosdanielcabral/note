import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/axiosAPI';
import AppContext from '../../context/AppContext';
import validateData from '../../utils/validateData';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const { setAuthorized } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisable, setIsButtonDisable] = useState(true);
  const [error, setError] = useState("");
  const { push } = useHistory();

  const login = async (e) => {
    e.preventDefault();
    
    try {
      const data = await api.post('/user/login', {
        email: email,
        password: password,
      })
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('user', JSON.stringify(data.data.user));
      setAuthorized(true);
      push('/home');
    } catch(error) {
      setAuthorized(false);
      if (error.response.data.error.message) {
        setError(error.response.data.error.message);
      }
    }
  }

  const setData = (type, { target: { value } }) => {
    switch(type) {
      case 'email':
        setEmail(value);
        if (validateData("vazio", value, password)) setIsButtonDisable(false);
        else setIsButtonDisable(true);
        break;
      default:
        setPassword(value);
        if (validateData("vazio", email, value)) setIsButtonDisable(false);
        else setIsButtonDisable(true);
        break;
    }
  }

  return (
    <form>
    <fieldset>
      <legend>Login</legend>
      <input
        onChange={ (e) => setData('email', e) }
        placeholder="Digite seu email"
        type="email"
        value={ email }
        />

      <input
        onChange={ (e) => setData('password', e) }
        placeholder="Digite sua senha"
        type="password"
        value={ password }
      />

      <span className={ styles.registerOption }>
        <Link to="/register">
          Não está cadastrado?
        </Link>
      </span>

      <button
        type="submit"
        className={ styles.login }
        onClick={ login }
        disabled={ isButtonDisable }
        >
        Entrar
      </button>
      {
        error && <span className="error">{error}</span>
      }
    </fieldset>
  </form>
  );
};

export default LoginForm;
