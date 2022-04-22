import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import Quill from 'quill';
// import { QUILL_OPTIONS } from '../constants';
import Header from '../components/Header';
import styles from '../styles/Note.module.css';

const Note = () => {
  // const { type } = useParams();

  useEffect(() => {
    // const QUILL = new Quill(document.getElementById('editor'), QUILL_OPTIONS);
  }, []);

  return (
    <div className={ styles.notePage }>
      <Header />

      <div className={ styles.editorContainer }>
        <div id="toolbar"></div>
        <div id="editor">
          {/* {
            type === 'new'
              ? 'Escreva aqui'
              : null
          } */}
        </div>
      </div>
    </div>
  );
}

export default Note;
