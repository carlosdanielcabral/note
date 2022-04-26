import { useEffect } from "react";
import Quill from "quill";
import api from '../../services/axiosAPI';
import { QUILL_OPTIONS } from "../../constants";

const QuillEditor = () => {

  useEffect(() => {
    const QUILL = new Quill('#editor', QUILL_OPTIONS);
  }, []);

  const saveNote = async () => {
    const content = document.getElementById('editor').firstChild.innerHTML;
    // api.post('/note/save', {
    //   content,

    // });
  };

  return (
    <>
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
