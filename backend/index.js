const express = require('express');
const rescue = require('express-rescue');
const cors = require('cors');
const User = require('./controllers/User');
const errorMiddleware = require('./controllers/ErrorController');
require('dotenv').config;

const app = express();

app.use(express.json());
app.use(cors());
app
	.post('/user/register', rescue(User.register))
	.post('/user/login', rescue(User.login));

app.use(errorMiddleware);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}.`));
