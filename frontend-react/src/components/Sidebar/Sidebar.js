import React from 'react';
import { AiOutlineMenu, AiFillEdit } from "react-icons/ai";
import styles from './Sidebar.module.css';

const Sidebar = () => (
  <section className={ styles.sidebarContainer }>
    <button type="button" className={ styles.menu }>
      <AiOutlineMenu />
    </button>

    <div className={ styles.sidebar }>
      <section className={ styles.user }>
        <div className={ styles.userImage }>
          <img src="/../../assets/img/profile-picture-default.png" alt="User" />
        </div>
        <h2>Usuário</h2>
        <h3>
          <span>
            <AiFillEdit />
          </span>
          Editar
        </h3>
      </section>
    </div>
  </section>
);

export default Sidebar;