const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config;

const secret = 'umasenhaqualquer';

const validateJWT = async (req, res, next) => {
	const token = req.headers['authorization'];
	if (!token) return res.status(401).json({ message: 'Token não encontrado' });

	try {
		const decoded = jwt.verify(token, secret);
		const user = await User.findByEmail(decoded.data.email);
		if (!user) res.status(401).json({ message: 'Erro ao procurar usuário do token' });
		next();
	} catch(error) {
		next(error);
	}
};

module.exports = validateJWT;
