const Joi = require('joi');
const Note = require('../services/Note');

const saveNote = async (req, res, next) => {
    const { content } = req.body;
    const { user_id: userId } = req.user;
    const { error } = Joi.object({
        content: Joi.required(),
    })
        .validate({ content });

    if (error) return next(error);

    // const note = await Note.saveNote(content, user_id);

    return Note.saveNote(content, userId)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    // if (note.error) return next(note.error);

    // return res.status(201).json(note);
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

const deleteNote = async (req, res, next) => {
    const { id } = req.params;

    const { error } = Joi.object({
        id: Joi.number().required(),
    })
        .validate({ id: Number(id) });

    if (error) return next(error);

    const note = await Note.deleteNote(id);

    if (note.error) return next(note.error);

    return res.status(200).json({ message: 'Nota deletada com sucesso.' });
};

module.exports = {
    getAllNotesByUserId,
    getById,
    saveNote,
    updateNote,
    deleteNote,
};
