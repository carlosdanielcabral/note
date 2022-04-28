import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import Header from "../components/Header"
import api from "../services/axiosAPI";
import '../styles/User.css';

const User = () => {
  const { user, setUser } = useContext(AppContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [readOnly, setReadOnly] = useState(false);
  const [image, setImage] = useState('');

  const submitImage = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('image', image);
    formData.append('userName', name);
    formData.append('email', email);
    formData.append('password', password);
    try {
      const response = await api.put('/user', formData, {
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          authorization: token,
        }
      });
      setName(response.data.name);
      setPassword(response.data.password);
      setUser(response.data);
    } catch(error) {
      console.log(error);
    }
  }
  const defaultImage = "/../../assets/img/profile-picture-default.png"
  return (
    <>
      <Header />
      <div className="user-container">
        <h2>Meu perfil</h2>
        <button className="edit" onClick={ () => setReadOnly(!readOnly) }>
          Editar
        </button>
        <form encType="multipart/form-data" onSubmit={submitImage}>
          <section className="personal-data">
            <section className="profile-image-section">
              <div className="profile-image">
                <img src={ user.image ? user.image : defaultImage} alt="User" />
              </div>
              <input type="file" name="profile_image" onChange={ (e) => setImage(e.target.files[0]) } />
            </section>

            <section className="data">
              <h3>
                Nome
              </h3>
              <input
                type="text"
                value={ name }
                onChange={ (e) => setName(e.target.value) }
                readOnly={ readOnly }
                name="user_name"
              />

              <h3>
                Sobrenome
              </h3>
              <input
                type="text"
                value={ name }
                onChange={ (e) => setName(e.target.value) }
                readOnly={ readOnly }
                name="user_name"
              />
            </section>
          </section>

          <section className="login-data">
            <h3>Dados de acesso</h3>
            <section className="data">
              <h3>
                Email
              </h3>
              <input
                type="email"
                value={ email }
                onChange={ (e) => setEmail(e.target.value) }
                readOnly={ readOnly }
                name="user_name"
              />

              <h3>
                Password
              </h3>
              <input
                type="password"
                value={ password }
                onChange={ (e) => setPassword(e.target.value) }
                readOnly={ readOnly }
                name="user_name"
              />
            </section>
          </section>

          <button type="submit" disabled={ readOnly }>
            Enviar
          </button>
        </form>
      </div>
    </>
  )
}

export default User;
