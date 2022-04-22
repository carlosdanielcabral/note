import { Link } from 'react-router-dom';
import './index.css';

const Header = () => {
  return (
    <header>
      <div className="left">
        <section className="sidebar-container">
          <button
            type="button"
            className="menu"
          >
            <img src="../../assets/img/menu_white.svg" alt="Menu icon"/>
          </button>

          <div className="sidebar">
            <section className="user">
              <div className="user-image">
                <img src="../../assets/img/profile-picture-default.png" alt="User" />
              </div>
              <h2>Usuário</h2>
              <h3>
                <span className="material-icons">
                  drive_file_rename_outline
                </span>
                Editar
              </h3>
            </section>
          </div>
        </section>

        <section className="logo">
          <Link to="/principal"><h1>Note</h1></Link>
        </section>
      </div>

      <div className="right">
        <section className="user-name">
          Usuário
        </section>
      </div>
    </header>
  );
}

export default Header;
