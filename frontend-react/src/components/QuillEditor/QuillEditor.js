import { useContext, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import AppContext from "../../context/AppContext";
import Quill from "quill";
import api from '../../services/axiosAPI';
import { QUILL_OPTIONS } from "../../constants";

const QuillEditor = () => {
  const { user } = useContext(AppContext);
  const [success, setSuccess] = useState(false);
  const { push } = useHistory();
  useEffect(() => {
    const QUILL = new Quill('#editor', QUILL_OPTIONS);
  }, []);

  const saveNote = async () => {
    const content = document.getElementById('editor').firstChild.innerHTML;
    const token = localStorage.getItem('token');
    console.log(user);
    try {
      const response = await api.post('/note/save', {
        content,
        userId: String(user.user_id),
      }, {
        headers: {
          authorization: token,
        }
      });
      setSuccess(true);
      setTimeout(() => push('/home'), 3000);
    } catch(error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <>
      {
        success && (
          <div className="success-card">
            Nota salva!
          </div>
        )
      }
              <div id="editor">
                {/* {
                    type === 'new'
                      ? 'Escreva aqui'
                      : null
                  } */}
              </div>
              <button
                className="save-note"
                onClick={ saveNote }
              >
                Salvar
              </button>

    </>
  );
};

export default QuillEditor;
