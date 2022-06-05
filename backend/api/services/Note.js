const Note = require('../models/Note');
const errors = require('../errors');

const saveNote = async (content = '', userId = 0) => {
    if (!userId) return { error: errors.invalidUserId };

    return Note.saveNote(content, userId);
};

const getAllNotesByUserId = async (userId) => {
    if (!userId) return { error: errors.invalidUserId };
    return Note.getAllByUserId(userId);
};

const getById = async (noteId) => {
    if (!noteId) return { error: errors.invalidNoteId };
    const note = await Note.getById(noteId);
    if (!note || note.length === 0) return { error: errors.noteNotFound };
    return note;
};

const updateNote = async (noteId, content) => {
    if (!noteId) return { error: errors.invalidNoteId };
    if (!content) return { error: errors.invalidNoteContent };
    const note = await Note.getById(noteId);

    if (!note || note.length === 0) return { error: errors.invalidNoteId };

    return Note.updateNote(noteId, content);
};

const deleteNote = async (noteId) => {
    if (!noteId) return { error: errors.invalidNoteId };

    const note = await Note.getById(noteId);

    if (!note || note.length === 0) return { error: errors.invalidNoteId };

    return Note.deleteNote(noteId);
};

module.exports = {
    getAllNotesByUserId,
    getById,
    saveNote,
    updateNote,
    deleteNote,
};
