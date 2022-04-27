import React from 'react';
import parser from 'html-react-parser';
import styles from './NoteCard.module.css';

const NoteCard = ({ note }) => {
  console.log(note);
  return (
    <div className={ styles.noteCard }>
      <section>
        { parser(note.content) }
        { note.create_date.substring(0, 10).split('-').reverse().join('/') }
      </section>
    </div>
  )
};

export default NoteCard;
