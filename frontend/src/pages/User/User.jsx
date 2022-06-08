import React, { useContext, useState } from 'react';
import { AiFillCamera, AiFillEdit } from 'react-icons/ai';
import AppContext from '../../context/AppContext';
import Header from '../../components/Header';
import api from '../../services/axiosAPI';
import '../../styles/User.css';

function User() {
  const { user, setUser } = useContext(AppContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [readOnly, setReadOnly] = useState(true);
  const [image, setImage] = useState('');
  const defaultPath = user.image ? user.image : '/../../assets/img/profile-picture-default.png';
  const [defaultImage, setDefaultImage] = useState(defaultPath);

  const submitImage = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('image', image);
    formData.append('userName', name);
    formData.append('email', email);
    formData.append('password', password);
    const response = await api.put('/user', formData, {
      headers: {
        // eslint-disable-next-line no-underscore-dangle
        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
        authorization: token,
      },
    });
    setName(response.data.name);
    setPassword(response.data.password);
    setUser(response.data);
    setReadOnly(true);
  };

  const selectImage = (e) => {
    setImage(e.target.files[0]);
    if (e.target.files[0]) setDefaultImage(URL.createObjectURL(e.target.files[0]));
    else setDefaultImage('/../../assets/img/profile-picture-default.png');
  };
  return (
    <>
      <Header />
      <div className="user-container">
        <div className="edit-option">
          <h2>Meu perfil</h2>

          <button className="edit" onClick={() => setReadOnly(!readOnly)} type="button">
            <AiFillEdit />
          </button>
        </div>
        <form encType="multipart/form-data" onSubmit={submitImage}>
          <button type="submit" hidden={readOnly} className="save-button">
            Salvar alterações
          </button>
          <section className="personal-data">
            <section className="profile-image-section">
              <div className="profile-image">
                <img src={defaultImage} alt="User" />
              </div>
              <label htmlFor="file">
                <AiFillCamera className={`camera-icon ${readOnly && 'hidden'} `} />
                <input
                  type="file"
                  id="file"
                  name="profile_image"
                  onChange={(e) => selectImage(e)}
                />
              </label>
            </section>

            <section className="data">
              <label htmlFor="name">
                Nome
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  readOnly={readOnly}
                  name="user_name"
                />
              </label>
            </section>
          </section>

          <section className="login-data">
            <h3>Dados de acesso</h3>
            <section className="data">
              <label htmlFor="email">
                Email
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  readOnly
                  name="email"
                />
              </label>

              <label htmlFor="password">
                Password
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  readOnly={readOnly}
                  name="password"
                />
              </label>
            </section>
          </section>
        </form>
      </div>
    </>
  );
}

export default User;
