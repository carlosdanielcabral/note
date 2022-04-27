const express = require('express');
const rescue = require('express-rescue');
const cors = require('cors');
const User = require('./controllers/User');
const Note = require('./controllers//Note');
const errorMiddleware = require('./controllers/ErrorController');
const validateJWT = require('./auth/validateJWT');
require('dotenv').config;

const app = express();

app.use(express.json());
app.use(cors());
app
	.get('/user', validateJWT, rescue(User.getUser))
	.post('/user/register', rescue(User.register))
	.post('/user/login', rescue(User.login))
	.get('/note', validateJWT, rescue(Note.getAllNotesByUserId))
	.post('/note/save', validateJWT, rescue(Note.saveNote));

app.use(errorMiddleware);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}.`));
