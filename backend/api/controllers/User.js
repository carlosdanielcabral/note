const User = require('../services/User');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const multer = require('multer');
const upload = multer({ dest: './public/images/' });
require('dotenv').config;

const secret = 'umasenhaqualquer';

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

	return res.status(201).json(newUser);
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
	const { userName } = req.body;
	const { path } = req.file;
	// const { user: { user_id: id } } = req.user;
	// const { error } = Joi.object({
	// 	image: Joi.string().required(),
	// })
	// 	.validate({ image });

	// if (error) return next(error);
	
	// const response = await User.updateUser(image, id);
	return res.status(200).json({ image: `http://localhost:3001/${path}` });
};

module.exports = {
	register,
	login,
	getUser,
	updateUser,
};
