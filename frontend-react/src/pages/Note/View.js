import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from "../../services/axiosAPI";
import Header from "../../components/Header";
import QuillEditorEdit from '../../components/QuillEditorEdit';
import "../../styles/Note.css";

const View = () => {
  const [note, setNote] = useState({});
  const [hasNote, setHasNote] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const getNote = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await api.get(`/note/${id}`, { headers: { authorization: token } });
        setNote(response.data[0]);
        setHasNote(true);
      } catch(error) {
        setHasNote(false);
        console.log(error);
      }
    }
    getNote();
  }, [id, setNote]);

  return (
    <div className="note-page">
      <Header />
      <div className="editor-container">
        {
          hasNote && <QuillEditorEdit note={ note } edit={false}/>
        }
      </div>
    </div>
  )
};

export default View;
