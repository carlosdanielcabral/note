import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import Header from "../components/Header"
import api from "../services/axiosAPI";
import { Tokenizer } from "htmlparser2";

const User = () => {
  const { user } = useContext(AppContext);
  const [name, setName] = useState(user.name);
  const [readOnly, setReadOnly] = useState(false);
  const [image, setImage] = useState('');

  const submitImage = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('image', image);
    formData.append('userName', name);
    console.log(formData);
    api.put('/user', formData, {
      headers: {
        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
        authorization: token,
      }
    })
  }
  const defaultImage = "/../../assets/img/profile-picture-default.png"
  return (
    <>
      <Header />
      <div className="containeer">
        <h2>Meu perfil</h2>
        <form encType="multipart/form-data" onSubmit={submitImage}>
          <section>
            <section>
              <div className="profile-image">
                <img src={ user.image ? user.image : defaultImage} alt="User" />
              </div>
              <input type="file" name="profile_image" onChange={ (e) => setImage(e.target.files[0]) } />
            </section>

            <section>
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
            </section>
          </section>

          <button type="submit">
            Enviar
          </button>
        </form>
      </div>
    </>
  )
}

export default User;
