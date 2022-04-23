import { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import api from '../services/axiosAPI';
import styles from '../styles/Authentication.module.css';

const Authentication = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerStatus, setRegisterStatus] = useState('');

  const router = useRouter();

  const registerUser = async (e) => {
    const ONE_SECOND = 1000;
    e.preventDefault();
    api.post('/user/register', {
      name,
      email: registerEmail,
      password: registerPassword,
    })
    .then(() => {
      setRegisterStatus('success');
      setTimeout(() => {
        router.push('/home');
      }, ONE_SECOND);
    })
    .catch((err) => {
      console.log(err.response.data);  
    })  
  }

  const login = async (e) => {
    e.preventDefault();
    
    try {
      const data = await api.post('/user/login', {
        email: email,
        password: password,
      })
      router.push('/home');
    } catch(error) {
      console.log(error.message);
    }
  }

  const setData = (data, { target: { value } }) => {
    switch(data) {
      case 'password':
        setPassword(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'registerEmail':
        setRegisterEmail(value);
        break;
      default:
        setRegisterPassword(value);     
    }
  }

  const validateData = (name = null, email, password) => {
    let isValidName = true;
    if (name) {
      isValidName = name.length > 3 && name.length < 50;
    }
    const emailRegex = /W+@W+.W+/
    const isValidEmail = emailRegex.test(email);
    const isValidPassword = password.length > 5 && password.length < 50;

    return isValidName && isValidEmail && isValidPassword;
  }
  return (
    <div className={ styles.authenticationPage }>
      <section className={ styles.formsContainer }>
        <section className={ styles.left }>
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
                <a href="#register-section">Não está cadastrado?</a>
              </span>

              <button
                type="submit"
                className={ styles.login }
                onClick={ login }
                disabled={ !validateData(null, email, password) }
                >
                Entrar
              </button>
            </fieldset>
          </form>
        </section>

        <section className={ styles.right } id="register-section">
        <form>
            <fieldset>
              <legend>Cadastro</legend>
              <input
                onChange={ (e) => setData('name', e) }
                placeholder="Digite seu nome"
                type="text"
                value={ name }
                />

              <input
                onChange={ (e) => setData('registerEmail', e) }
                placeholder="Digite seu email"
                type="email"
                value={ registerEmail }
                />

              <input
                onChange={ (e) => setData('registerPassword', e) }
                placeholder="Digite sua senha"
                type="password"
                value={ registerPassword }
                />

              <button
                type="submit"
                className={ styles.register }
                onClick={ registerUser }
                disabled={ !validateData(name, email, password) }
                >
                Cadastrar
              </button>
            </fieldset>
          </form>
        </section>
      </section>
    </div>
  );
}

export default Authentication;
