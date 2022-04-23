const User = require('../models/User');
const errors = require('../errors.js');

const validateName = (name) => name && name.length > 3 && name.length < 50;

const hasEmailRegistered = async (email) => {
	const existingUser = await User.findByEmail(email);
	return existingUser;
};

const validateEmailFormat = async (email) => {
	if (!email || email.length > 50) return false;

	const emailRegex = /W+@W+.W+/;
	const isValidEmailFormat = emailRegex.test(email);
	if (!isValidEmailFormat) return false;

	return true;
};

const validatePassword = (password) => password && password.length > 5 && password.length < 30;

const register = async (name, email, password) => {
	const isValidName = validateName(name);
	const isValidEmailFormat = validateEmailFormat(email);
	const hasEmail = await hasEmailRegistered(email);
	const isValidPassword = validatePassword(password);

	if (!isValidName) return { error: errors.invalidName };
	if (hasEmail || !isValidEmailFormat) return { error: errors.invalidEmail };
	if (!isValidPassword) return { error: errors.invalidPassword };

	return User.register(name, email, password);
};

const login = async (email, password) => {
	const isValidEmailFormat = validateEmailFormat(email);
	const isValidPassword = validatePassword(password);
	const user = await hasEmailRegistered(email);

	if (!isValidEmailFormat || !isValidPassword || !user) {
		return { error: errors.invalidEmailOrPassword };
	}

	if (String(user.password) !== String(password)) return { error: errors.invalidEmailOrPassword };
	
	return user;
};

module.exports = {
	register,
	login,
};
