import React from 'react';
import Header from '../../components/Header';
import QuillEditor from '../../components/QuillEditor';
import '../../styles/Note.css';

function New() {
  return (
    <div className="note-page">
      <Header />
      <div className="editor-container">
        <QuillEditor />
      </div>
    </div>
  );
}

export default New;
