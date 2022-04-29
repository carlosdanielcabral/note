import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import parser from "html-react-parser";
import Quill from "quill";
import api from '../../services/axiosAPI';
import { QUILL_OPTIONS } from "../../constants";

const QuillEditorEdit = ({ note, edit }) => {
  const [success, setSuccess] = useState(false);
  const { push } = useHistory();

  useEffect(() => {
    const QUILL = new Quill('#editor', { theme: QUILL_OPTIONS.theme, readOnly: edit });
  }, []);

  const editNote = async () => {
    const content = document.getElementById('editor').firstChild.innerHTML;
    const token = localStorage.getItem('token');

    try {
      const response = await api.put('/note', {
        content,
        noteId: note.note_id,
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
  }

  return (
    <>
      {
        // success && (
        //   <div className="success-card-container">
        //     <div className="success-card">
        //       Nota atualizada!
        //     </div>
        //   </div>
        // )
      }
              <div id="editor">
                { parser(note.content) }
              </div>

              <button
                className="save-button"
                onClick={ editNote }
              >
                Editar
              </button>

    </>
  );
};

QuillEditorEdit.propTypes = {
  note: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])).isRequired,
  edit: PropTypes.bool,
}

QuillEditorEdit.defaultProps = {
  edit: true,
}

export default QuillEditorEdit;
