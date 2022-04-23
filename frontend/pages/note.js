import Header from '../components/Header';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import styles from '../styles/Note.module.css';

const DynamicQuillImport = dynamic(() => import('../components/QuillEditor'), { ssr: false }) ;

const Note = () => {
  // const { type } = useParams();

  return (
    <div className={ styles.notePage }>
      <Head>
        <link rel="stylesheet" href="//cdn.quilljs.com/1.3.6/quill.snow.css" />
      </Head>
      <Header />
      <div className={ styles.editorContainer }>
        <DynamicQuillImport />
      </div>
    </div>
  );
}

export default Note;
