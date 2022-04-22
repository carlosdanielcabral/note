import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={ styles.left }>
        <section className={ styles.logo }>
          <Link href="/principal" passHref>
            <a>
              <h1>Note</h1>
            </a>
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
