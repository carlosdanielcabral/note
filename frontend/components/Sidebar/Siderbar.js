import React from 'react';
import Image from 'next/image';
import styles from './Siderbar.module.css';

const Sidebar = () => (
  <section className={ styles.sidebarContainer }>
    <button type="button" className={ styles.menu }>
      <Image src="../../assets/img/menu_white.svg" alt="Menu icon" layout="fill" />
    </button>

    <div className={ styles.sidebar }>
      <section className={ styles.user }>
        <div className={ styles.userImage }>
          <Image src="../../assets/img/profile-picture-default.png" alt="User" layout="fill" />
        </div>
        <h2>Usuário</h2>
        <h3>
          <span className="material-icons">drive_file_rename_outline</span>
          Editar
        </h3>
      </section>
    </div>
  </section>
);

export default Sidebar;
