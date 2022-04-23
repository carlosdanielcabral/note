import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={ styles.header }>
      <div className={ styles.left }>
        <Sidebar />
        <section className={ styles.logo }>
          <Link to="/principal">
              <h1>Note</h1>
          </Link>
        </section>
      </div>

      <div className={ styles.right }>
        <section className={ styles.userName }>
          Usuário
        </section>
      </div>
    </header>
  );
}

export default Header;
