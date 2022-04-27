import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import parser from 'html-react-parser';
import styles from './NoteCard.module.css';

const NoteCard = ({ note, deleteNote }) => {
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);

  return (
    <div className={ styles.noteCard }>
        <Link to={ `/note/${note.note_id}` }>
        <section>
          { parser(note.content) }
          { note.create_date.substring(0, 10).split('-').reverse().join('/') }
        </section>
    </Link>
          <button onClick={ () => setIsDeleteVisible(true) }>
            Excluir
          </button>
          {
            isDeleteVisible && (
              <div className="delete-options">
                <p>Tem certeza que deseja excluir esta nota?</p>
                <button onClick={ () => deleteNote(note.note_id) } type="button">
                  Sim
                </button>
                <button onClick={ () => setIsDeleteVisible(false) }>
                  Não
                </button>
              </div>
            )
          }
      </div>
  )
};

export default NoteCard;
