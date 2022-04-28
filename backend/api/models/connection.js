require('dotenv/config');
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: process.env.MYSQL_HOST,
	user: 'root',
	password: process.env.MYSQL_ROOT_PASSWORD,
	database: process.env.MYSQL_DB_NAME,
});

module.exports = connection;
