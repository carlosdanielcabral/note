import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import parser from 'html-react-parser';
import styles from './NoteCard.module.css';
import { FaTrashAlt } from "react-icons/fa";

const NoteCard = ({ note, deleteNote }) => {
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);

  return (
    <div className={ styles.noteCard }>
      <Link to={ `/note/${note.note_id}` }>
        <section className={ styles.noteData }>
          <section className={ styles.noteContent }>
            { parser(note.content) }
          </section>

          <section className={ styles.noteDate }>
            { note.create_date.substring(0, 10).split('-').reverse().join('/') }
          </section>
        </section>
      </Link>
          <button onClick={ () => setIsDeleteVisible(true) }  className={ styles.delete }>
            <FaTrashAlt />
          </button>
          {
            isDeleteVisible && (
              <div className={ styles.deleteOptions }>
                <h3>Tem certeza que deseja excluir esta nota?</h3>
                <section>
                  <button onClick={ () => deleteNote(note.note_id) } type="button">
                    Sim
                  </button>
                  <button onClick={ () => setIsDeleteVisible(false) }>
                    Não
                  </button>
                </section>
              </div>
            )
          }
      </div>
  )
};

export default NoteCard;
