const Note = require('../services/Note');
const Joi = require('joi');

const saveNote = async (req, res, next) => {
	const { title, content, userId } = req.body;
	const { error } = Joi.object({
		userId: Joi.number().required(),
		content: Joi.required(),
	})
		.validate({ userId: Number(userId), content });
	
	if (error) return next(error);

	const note = await Note.saveNote(title, content, userId);

	if (note.error) return next(note.error);

	return res.status(201).json(note);
};

const getAllNotesByUserId = async (req, res, next) => {
	const { user } = req;

	const notes = await Note.getAllNotesByUserId(user.user_id);
	if (notes.error) return next(notes.error);

	return res.status(200).json(notes);
};

const getById = async (req, res, next) => {
	const { id } = req.params;

	const { error } = Joi.object({
		id: Joi.number().not().empty().required(),
	})
		.validate({ id });

	if (error) return next(error);

	const note = await Note.getById(id);
	
	if (note.error) return next(note.error);

	return res.status(200).json(note);
};

const updateNote = async (req, res, next) => {
	const { noteId, content } = req.body;

	const { error } = Joi.object({
		noteId: Joi.number().not().empty().required(),
		content: Joi.string().required(),
	})
		.validate({ noteId: Number(noteId), content });
	
	if (error) next(error);

	const note = await Note.updateNote(noteId, content);

	if (note.error) return next(note.error);
	
	return res.status(200).json({ message: 'Nota atualizada com sucesso' });
};

module.exports = {
	getAllNotesByUserId,
	getById,
	saveNote,
	updateNote,
};
