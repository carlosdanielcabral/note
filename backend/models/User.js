const connection = require('./connection');

// const serialize = (user) => ({
// 	userId: user.id,
// 	name: user.name,
// 	email: user.email,
// });

const register = async (name, email, password) => {
	const query = 'INSERT INTO noteDB.users (name, email, password) VALUES (?, ?, ?)';
	const [user] = await connection.execute(query, [name, email, password]);
	return user;
};

const findByEmail = async (email) => {
	const query = 'SELECT name, email, image, password FROM noteDB.users WHERE email = ?';
	const [user] = await connection.execute(query, [email]);
	if (user.length === 0) return null;
	return user[0];
};


module.exports = {
	findByEmail,
	register,
};
