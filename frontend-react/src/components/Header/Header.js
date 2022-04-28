import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import Sidebar from '../Sidebar';
import styles from './Header.module.css';

const Header = () => {
  const { user } = useContext(AppContext);

  return (
    <header className={ styles.header }>
      <div className={ styles.left }>
        <Sidebar />
        <section className={ styles.logo }>
          <Link to="/home">
              <h1>Note</h1>
          </Link>
        </section>
      </div>

      <div className={ styles.right }>
        <section className={ styles.userName }>
          { user.name }
        </section>
      </div>
    </header>
  );
}

export default Header;
