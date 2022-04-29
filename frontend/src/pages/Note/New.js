import Header from "../../components/Header";
import QuillEditor from '../../components/QuillEditor';
import "../../styles/Note.css";

const New = () => (
  <div className="note-page">
    <Header />
    <div className="editor-container">
      <QuillEditor />
    </div>
  </div>
);

export default New;
