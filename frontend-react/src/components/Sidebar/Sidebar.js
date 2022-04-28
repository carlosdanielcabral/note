import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import { AiOutlineMenu, AiFillEdit } from "react-icons/ai";
import styles from './Sidebar.module.css';

const Sidebar = () => {

  const { user } = useContext(AppContext);
  const { push } = useHistory();

  const defaultImage = "/../../assets/img/profile-picture-default.png"

  return (
    <section className={ styles.sidebarContainer }>
      <button type="button" className={ styles.menu }>
        <AiOutlineMenu />
      </button>

      <div className={ styles.sidebar }>
        <section className={ styles.user }>
          <div className={ styles.userImage }>
            <img src={ user.image ? user.image : defaultImage } alt="User" />
          </div>
          <h2>{ user.name }</h2>
          <button type="button" onClick={ () => push('/user') }>
            <span>
              <AiFillEdit />
            </span>
            Editar
          </button>
        </section>
      </div>
    </section>
  )
};

export default Sidebar;
