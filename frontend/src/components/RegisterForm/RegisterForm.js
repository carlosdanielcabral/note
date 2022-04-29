import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import api from '../../services/axiosAPI';
import validateData from '../../utils/validateData';
import styles from './RegisterForm.module.css';

const RegisterForm = () => {
  const { setAuthorized, setUser } = useContext(AppContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisable, setIsButtonDisable] = useState(true);
  const [error, setError] = useState("");

  const { push } = useHistory();

  const registerUser = async (e) => {
    const ONE_SECOND = 1000;
    e.preventDefault();
    try {
      const response = await api.post('/user/register', {
        name, email, password
      });
      setAuthorized(true);
      setUser(response.data.newUser);
      localStorage.setItem('token', response.data.token)
      setTimeout(() => push('/home'), ONE_SECOND);
    } catch({ response: { data } }) {
      setAuthorized(false);
      if (data.error.message) {
        setError(data.error.message);
      }
    }
  }

  const setData = (type, { target: { value } }) => {
    switch(type) {
      case 'name':
        setName(value);
        if (validateData(value, email, password)) setIsButtonDisable(false);
        else setIsButtonDisable(true);
        break;
      case 'email':
        if (validateData(name, value, password)) setIsButtonDisable(false);
        else setIsButtonDisable(true);
        setEmail(value);
        break;
      default:
        setPassword(value);
        if (validateData(name, email, value)) setIsButtonDisable(false);
        else setIsButtonDisable(true);
        break;
    }
  }

  return (
    <form>
      <fieldset>
        <legend>Cadastro</legend>
        <input
          onChange={(e) => setData("name", e)}
          placeholder="Digite seu nome"
          type="text"
          value={name}
        />

        <input
          onChange={(e) => setData("email", e)}
          placeholder="Digite seu email"
          type="email"
          value={email}
        />

        <input
          onChange={(e) => setData("password", e)}
          placeholder="Digite sua senha"
          type="password"
          value={password}
        />

        <Link to="/login">
          Já possui login?
        </Link>

        <button
          type="submit"
          className={styles.register}
          onClick={registerUser}
          disabled={ isButtonDisable }
        >
          Cadastrar
        </button>
        {
          error && <span className="error">{error}</span>
        }
      </fieldset>
    </form>
  );
};

export default RegisterForm;
