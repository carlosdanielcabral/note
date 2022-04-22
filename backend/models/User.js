const connection = require('./connection');

const serialize = (user) => ({
	userId: user.id,
	name: user.name,
	email: user.email,
});

const getAll = async () => {
	const query = 'SELECT * FROM noteDB.users';
	const [users] = await connection.execute(query);
	return users.map(serialize);
};

const registerUser = async (name, email, password) => {
	const query = 'INSERT INTO noteDB.users (name, email, password) VALUES (?, ?, ?)';
	const [user] = await connection.execute(query, [name, email, password]);
	return user;
};


module.exports = {
	getAll,
	registerUser,
};
