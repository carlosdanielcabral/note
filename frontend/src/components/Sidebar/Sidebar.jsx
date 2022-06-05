import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineMenu, AiFillEdit } from 'react-icons/ai';
import AppContext from '../../context/AppContext';
import './Sidebar.css';

function Sidebar() {
  const { user } = useContext(AppContext);
  const { push } = useHistory();
  const [visible, setVisible] = useState(false);

  const defaultImage = '/../../assets/img/profile-picture-default.png';

  return (
    <section className="sidebar-container">
      <button type="button" className="menu" onClick={() => setVisible(true)}>
        <AiOutlineMenu />
      </button>

      <div className={`sidebar ${visible && 'visible'}`}>
        <button type="button" className="close" onClick={() => setVisible(false)}>
          X
        </button>
        <section className="user">
          <div className="user-image">
            <img src={user.image ? user.image : defaultImage} alt="User" />
          </div>
          <h2>{ user.name }</h2>
          <button type="button" onClick={() => push('/user')}>
            <span>
              <AiFillEdit />
            </span>
            Editar
          </button>
        </section>
      </div>
    </section>
  );
}

export default Sidebar;
