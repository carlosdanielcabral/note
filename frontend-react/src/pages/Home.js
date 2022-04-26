import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/Home.css';

const Principal = () => {
  const { push } = useHistory();
  return (
    <div className="principalPage">
      <Header />
      <main>
        <select>
          <option>Anotações recentes</option>
          <option>Mês passado</option>
          <option>Ano passado</option>
        </select>

        <section className="notes">

        </section>

        <section className="dailyPhrase">
          <h2>Frase do dia</h2>
          <q>Mais vale um passáro na mão do que dois voando</q>
        </section>
      </main>

      <button
        type="button"
        className="noteOptions"
        onClick={ () => push('/note') }
      >
        +
      </button>
    </div>
  );
}

export default Principal;
