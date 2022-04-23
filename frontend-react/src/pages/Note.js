import Header from "../components/Header";
import QuillEditor from '../components/QuillEditor';
import "../styles/Note.module.css";

const Note = () => (
  <div className="note-page">
    <Header />
    <div className="editor-container">
      <QuillEditor />
    </div>
  </div>
);

export default Note;
