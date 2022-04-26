const Note = require('../models/Note');
const errors = require('../errors');

const saveNote = async (title = '', content = '', userId) => {
	if (!userId) return { error: errors.invalidUserId };

	return Note.saveNote(title, content, userId);
};

const getAll = async () => Note.getAll();

const getById = async (noteId) => {
	if (!noteId) return { error: errors.invalidNoteId };
	return Note.getById(noteId);
};

module.exports = {
	getAll,
	getById,
	saveNote,
};
