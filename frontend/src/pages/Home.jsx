import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/axiosAPI';
import Header from '../components/Header';
import '../styles/Home.css';
import NoteCard from '../components/NoteCard/NoteCard';

function Principal() {
  const [notes, setNotes] = useState([]);

  const { push } = useHistory();

  useEffect(() => {
    const getNotes = async () => {
      const token = localStorage.getItem('token');
      try {
        const notesResponse = await api.get('/note', {
          headers: {
            authorization: token,
          },
        });
        setNotes(notesResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNotes();
  }, [setNotes]);

  const deleteNote = async (id) => {
    const token = localStorage.getItem('token');
    try {
      api.delete(`/note/${id}`, {
        headers: { authorization: token },
      });
      const newNotes = notes.filter((note) => note.note_id !== id);
      setNotes(newNotes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="principal-page">
      <Header />
      <main>
        <h2>
          Minhas Notas
        </h2>

        <section className="notes">
          {
            notes.length > 0
              ? (
                notes.map((note) => (
                  <NoteCard note={note} key={note.note_id} deleteNote={deleteNote} />))
              )
              : ''
          }
        </section>

        {/* <section className="dailyPhrase">
          <h2>Frase do dia</h2>
          <q>Mais vale um passáro na mão do que dois voando</q>
        </section> */}
      </main>

      <button
        type="button"
        className="note-options"
        onClick={() => push('/note/new')}
      >
        +
      </button>
    </div>
  );
}

export default Principal;
