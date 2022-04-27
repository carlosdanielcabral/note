const Note = require('../services/Note');
const Joi = require('joi');

const saveNote = async (req, res, next) => {
	const { title, content, userId } = req.body;
	const { error } = Joi.object({
		userId: Joi.string().required(),
	})
		.validate({ userId });
	
	if (error) return next(error);

	const note = await Note.saveNote(title, content, userId);

	if (note.error) return next(note.error);

	return res.status(201).json(note);
};

const getAllNotesByUserId = async (req, res, next) => {
	const { user } = req;

	const notes = await Note.getAllNotesByUserId(user.user_id);
	if (notes.error) return next(notes.error);

	return res.status(201).json(notes);
};

const getById = async (req, res, next) => {
	const { id } = req.params;

	if(!id || Number.isNaN(Number(id))) return next({ error: 'Id da nota inválido' });

	const note = Note.getById(id);

	if (!note) return next({ error: 'Nota não encontrada' });
	return res.status(201).json(note);
};

module.exports = {
	getAllNotesByUserId,
	getById,
	saveNote,
};
