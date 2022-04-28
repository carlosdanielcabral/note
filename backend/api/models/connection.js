const mysql = require('mysql2/promise');
require('dotenv').config;

const connection = mysql.createPool({
	host: process.env.MYSQL_HOST,
	user: 'root',
	password: 'root',
	database: 'noteDB',
});

module.exports = connection;
