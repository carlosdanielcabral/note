require('dotenv/config');
const User = require('../services/User');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const secret = process.env.SECRET_KEY;

const jwtConfig = {
	expiresIn: '8h',
	algorithm: 'HS256',
};

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

	const token = jwt.sign({ data: newUser }, secret, jwtConfig);

	return res.status(201).json({ token, newUser });
};

const getUser = async (req, res) => {
	const { user } = req;
	res.status(200).json(user);
};

const login = async (req, res, next) => {
	const { email, password } = req.body;

	const { error } = Joi.object({
		email: Joi.string().not().empty().required(),
		password: Joi.string().not().empty().required(),
	})
		.validate({ email, password });

	if (error) return next(error);

	const loggedUser = await User.login(email, password);

	if (loggedUser.error) {
		return next(loggedUser.error);
	}

	const token = jwt.sign({ data: loggedUser }, secret, jwtConfig);

	res.status(200).json({ token, user: loggedUser });
};

const updateUser = async (req, res, next) => {
	const { userName, password } = req.body;

	const { user_id: id, email } = req.user;

	const { error } = Joi.object({
		userName: Joi.string(),
		password: Joi.string(),
	})
		.validate({ userName, password });

	if (error) return next(error);

	const image = req.file ? `http://localhost:3001/${req.file.path}` : '';
	
	const response = await User.updateUser(image, userName, email, password, id);
	if (response.error) return next(response.error);
	return res.status(200).json(response);
};

module.exports = {
	register,
	login,
	getUser,
	updateUser,
};
