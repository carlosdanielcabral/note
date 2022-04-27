const Note = require('../models/Note');
const errors = require('../errors');

const saveNote = async (title = '', content = '', userId) => {
	if (!userId) return { error: errors.invalidUserId };

	return Note.saveNote(title, content, userId);
};

const getAllNotesByUserId = async (userId) => {
	if (!userId) return { error: errors.invalidUserId }; 
	return Note.getAllByUserId(userId);
};

const getById = async (noteId) => {
	if (!noteId) return { error: errors.invalidNoteId };
	return Note.getById(noteId);
};

module.exports = {
	getAllNotesByUserId,
	getById,
	saveNote,
};
