import { useState } from 'react';
import PropTypes from 'prop-types';
import api from '../services/axiosAPI';
import styles from '../styles/Authentication.module.css';

const Authentication = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerStatus, setRegisterStatus] = useState('');

  const registerUser = async (e) => {
    const ONE_SECOND = 1000;
    e.preventDefault();
    api.post('/register', {
      name,
      email: registerEmail,
      password: registerPassword,
    })
    .then(() => {
      setRegisterStatus('success');
      setTimeout(() => {
        history.push('/principal');
      }, ONE_SECOND);
    })
    .catch((err) => {
      console.log(err.response.data);  
    })  
  }

  const login = async (e) => {
    e.preventDefault();
    api.post('/login', {
      email: registerEmail,
      password: registerPassword,
    })
    .then((data) => {
      console.log(data);
      history.push('/principal');
    })
    .catch((err) => {
      console.log(err.response.data);
    });
  }

  return (
    <div className={ styles.authenticationPage }>
      <section className={ styles.formsContainer }>
        <section className={ styles.left }>
          <form>
            <fieldset>
              <legend>Login</legend>
              <input
                onChange={ (e) => setEmail(e.target.value) }
                placeholder="Digite seu email"
                type="email"
                value={ email }
                />

              <input
                onChange={ (e) => setPassword(e.target.value) }
                placeholder="Digite sua senha"
                type="password"
                value={ password }
              />

              <span className={ styles.registerOption }>
                <a href="#register-section">Não está cadastrado?</a>
              </span>

              <button
                type="submit"
                className="login"
                onClick={ login }
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
                onChange={ (e) => setName(e.target.value) }
                placeholder="Digite seu nome"
                type="text"
                value={ name }
                />

              <input
                onChange={ (e) => setRegisterEmail(e.target.value) }
                placeholder="Digite seu email"
                type="email"
                value={ registerEmail }
                />

              <input
                onChange={ (e) => setRegisterPassword(e.target.value) }
                placeholder="Digite sua senha"
                type="password"
                value={ registerPassword }
                />

              <button
                type="submit"
                className={ styles.register }
                onClick={ registerUser }
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

Authentication.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Authentication;
