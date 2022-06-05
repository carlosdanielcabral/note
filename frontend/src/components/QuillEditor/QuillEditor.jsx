import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Quill from 'quill';
import AppContext from '../../context/AppContext';
import api from '../../services/axiosAPI';
import { QUILL_OPTIONS } from '../../constants';

function QuillEditor() {
  const { user } = useContext(AppContext);
  const { push } = useHistory();

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const QUILL = new Quill('#editor', { theme: QUILL_OPTIONS.theme, readOnly: false });
  }, []);

  const saveNote = async () => {
    const content = String(document.getElementById('editor').firstChild.innerHTML);
    const token = localStorage.getItem('token');

    try {
      await api.post('/note/save', {
        content,
        userId: String(user.user_id),
      }, {
        headers: {
          authorization: token,
        },
      });
      setTimeout(() => push('/home'), 3000);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <>
      {
        // success && (
        //   // <div className="success-card-container">
        //   //   <div className="success-card">
        //   //     Nota atualizada!
        //   //   </div>
        //   // </div>
        // )
      }
      <div id="editor">
        Digite aqui...
      </div>

      <button
        className="save-button"
        onClick={saveNote}
        type="button"
      >
        Salvar
      </button>

    </>
  );
}

export default QuillEditor;
