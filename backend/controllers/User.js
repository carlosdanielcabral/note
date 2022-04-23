const User = require('../services/User');
const Joi = require('joi');

const register = async (req, res, next) => {
	const { name, email, password } = req.body;
	const { error } = Joi.object({
		name: Joi.string().not().empty().required(),
		email: Joi.string().not().empty().required(),
		password: Joi.string().not().empty().required(),
	})
		.validate({ name, email, password });

	if (error) next(error);

	const newUser = await User.register(name, email, password);
	if (newUser.error) {
		next(newUser.error);
	}

	return res.status(201).json(newUser);
};

const login = async (req, res, next) => {
	const { email, password } = req.body;
	const { error } = Joi.object({
		email: Joi.string().not().empty(),
		password: Joi.string().not().empty(),
	})
		.validate({ email, password });

	if (error) next(error);

	const loggedUser = await User.login(email, password);
	if (loggedUser.error) {
		next(loggedUser.error);
	}

	return res.status(200).json(loggedUser);
};


module.exports = {
	register,
	login,
};
