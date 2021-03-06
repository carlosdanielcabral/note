import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Index.css';

function Home() {
  const { push } = useHistory();

  function changeRoute() {
    const ONE_SECOND = 1000;

    // const fadeOut = document.querySelectorAll('.fade-out');
    // fadeOut.forEach((element, index) => {
    //   console.log(fadeOut);
    //   fadeOut[index].style.animationName = 'fade-out';
    //   fadeOut[index].style.animationDuration = '1.5s';
    // });
    setTimeout(() => push('/register'), ONE_SECOND);
  }

  return (
    <div className="index-page">
      <section>
        <h1 className="fade-out">Note</h1>
        <h2 className="fade-out">O amigo de sua memória</h2>
      </section>

      <section>
        <button
          className="fade-out"
          type="button"
          onClick={changeRoute}
        >
          Acessar
        </button>
      </section>
    </div>
  );
}

export default Home;
