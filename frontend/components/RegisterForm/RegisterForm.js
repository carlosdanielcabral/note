import React, { useState } from 'react';
import { useRouter } from "next/router";
import api from '../../services/axiosAPI';
import validateData from '../../utils/validateData';
import styles from './RegisterForm.module.css';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisable, setIsButtonDisable] = useState(true);
  const [error, setError] = useState("");

  const router = useRouter();

  const registerUser = async (e) => {
    const ONE_SECOND = 1000;
    e.preventDefault();
    try {
      const response = await api.post('/user/register', {
        name, email, password
      });
      setTimeout(() => router.push('/home'), ONE_SECOND);
    } catch({ response: { data } }) {
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
