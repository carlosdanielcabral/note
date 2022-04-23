import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const Principal = () => {
  const { push } = useHistory();
  return (
    <div className={ styles.principalPage }>
      <Header />
      <main>
        <select>
          <option>Anotações recentes</option>
          <option>Mês passado</option>
          <option>Ano passado</option>
        </select>

        <section className={ styles.notes }>

        </section>

        <section className={ styles.dailyPhrase }>
          <h2>Frase do dia</h2>
          <q>Mais vale um passáro na mão do que dois voando</q>
        </section>
      </main>

      <button
        type="button"
        className={ styles.noteOptions }
        onClick={ () => push('/note') }
      >
        +
      </button>
    </div>
  );
}

export default Principal;
