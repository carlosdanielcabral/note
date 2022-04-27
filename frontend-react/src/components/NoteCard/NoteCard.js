import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import parser from 'html-react-parser';
import api from '../../services/axiosAPI';
import styles from './NoteCard.module.css';

const NoteCard = ({ note }) => {
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);

  const deleteNote = async () => {
    const token = localStorage.getItem('token');
    try {
      api.delete(`/note/${note.note_id}`, {
        headers: { authorization: token }
      });
    } catch (error) {
      console.log(error);
    }
  }

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
                <button onClick={ deleteNote } type="button">
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
