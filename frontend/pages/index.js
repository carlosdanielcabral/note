import PropTypes from 'prop-types';
import styles from '../styles/Index.module.css';

const Home = ({ history }) => {

  function changeRoute(){
    const ONE_SECOND = 1000;

    const fadeOut = document.querySelectorAll('.fade-out');
    fadeOut.forEach((element) => {
      element.style.animationName = "fade-out";
      element.style.animationDuration = "1.5s";
    })
    setTimeout(() => {
      history.push('/authentication');
    }, ONE_SECOND);
  }
    

  return(
    <div className="home-page">
      <section>
        <h1 className="fade-out">Note</h1>
        <h2 className="fade-out">O amigo de sua memória</h2>
      </section>

      <section>
        <button
          className="fade-out"
          type="button"
          onClick={ changeRoute }
        >
          Acessar
        </button>
      </section>
    </div>
  )
};

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
}

export default Home;
