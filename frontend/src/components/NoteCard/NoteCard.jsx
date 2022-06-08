import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import parser from 'html-react-parser';
import { FaTrashAlt } from 'react-icons/fa';
import './NoteCard.css';

function NoteCard({ note, deleteNote }) {
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);

  return (
    <div className="note-card">
      <Link to={`/note/${note.note_id}`}>
        <section className="note-data">
          <section className="note-content">
            { parser(note.content) }
          </section>

          <section className="note-date">
            { note.create_date.substring(0, 10).split('-').reverse().join('/') }
          </section>
        </section>
      </Link>
      <button onClick={() => setIsDeleteVisible(true)} className="delete" type="button">
        <FaTrashAlt />
      </button>
      {
            isDeleteVisible && (
              <div className="delete-options">
                <h3>Tem certeza que deseja excluir esta nota?</h3>
                <section>
                  <button onClick={() => deleteNote(note.note_id)} type="button">
                    Sim
                  </button>
                  <button onClick={() => setIsDeleteVisible(false)} type="button">
                    Não
                  </button>
                </section>
              </div>
            )
          }
    </div>
  );
}

NoteCard.propTypes = {
  note: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])),
  deleteNote: PropTypes.func,
}.isRequired;

export default NoteCard;
