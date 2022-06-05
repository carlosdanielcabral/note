require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const secret = process.env.SECRET_KEY;

const validateJWT = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Token não encontrado' });

    try {
        const decoded = jwt.verify(token, secret);
        const user = await User.findByEmail(decoded.data.email);
        if (!user) res.status(401).json({ message: 'Erro ao procurar usuário do token' });
        req.user = user;
        return next();
    } catch (error) {
        return next({ code: 'unauthorized', message: error.message });
    }
};

module.exports = validateJWT;
