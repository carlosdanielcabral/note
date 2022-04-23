import { useEffect } from "react";
import Quill from "quill";
import { QUILL_OPTIONS } from "../../constants";

const QuillEditor = () => {

  useEffect(() => {
    const QUILL = new Quill(document.getElementById('editor'), QUILL_OPTIONS);
  }, []);

  return (
      <div id="editor">
        {/* {
            type === 'new'
              ? 'Escreva aqui'
              : null
          } */}
      </div>
  );
};

export default QuillEditor;
