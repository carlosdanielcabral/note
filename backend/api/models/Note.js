const connection = require('./connection');

const saveNote = async (content, userId) => {
    const query = 'INSERT INTO noteDB.notes (content, user_id) values (?, ?)';
    const [note] = await connection.execute(query, [content, userId]);
    return note;
};

const getAllByUserId = async (userId) => {
    const query = 'SELECT * FROM noteDB.notes WHERE user_id = ?';
    const [notes] = await connection.execute(query, [userId]);
    return notes;
};

const getById = async (noteId) => {
    const query = 'SELECT * FROM noteDB.notes WHERE note_id = ?';
    const [note] = await connection.execute(query, [noteId]);
    return note;
};

const updateNote = async (noteId, content) => {
    const query = 'UPDATE noteDB.notes SET content = ?, update_date = CURRENT_TIMESTAMP() WHERE note_id = ?';
    const [note] = await connection.execute(query, [content, noteId]);
    return note;
};

const deleteNote = async (noteId) => {
    const query = 'DELETE FROM noteDB.notes WHERE note_id = ?';
    const [note] = await connection.execute(query, [noteId]);
    return note;
};

module.exports = {
    deleteNote,
    getAllByUserId,
    getById,
    saveNote,
    updateNote,
};
