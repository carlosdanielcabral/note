import React from 'react';
import { Link } from 'react-router-dom';
import parser from 'html-react-parser';
import styles from './NoteCard.module.css';

const NoteCard = ({ note }) => {
  console.log(note);
  return (
    <Link to={ `/note/view/${note.note_id}` }>
      <div className={ styles.noteCard }>
        <section>
          { parser(note.content) }
          { note.create_date.substring(0, 10).split('-').reverse().join('/') }
        </section>
      </div>
    </Link>
  )
};

export default NoteCard;
