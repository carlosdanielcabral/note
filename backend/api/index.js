require('dotenv').config();
const express = require('express');
const rescue = require('express-rescue');
const cors = require('cors');
const multer = require('multer');
const User = require('./controllers/User');
const Note = require('./controllers/Note');
const errorMiddleware = require('./controllers/ErrorController');
const validateJWT = require('./auth/validateJWT');

const app = express();

// Função retirada da documentação: http://expressjs.com/en/resources/middleware/multer.html
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'public/images/');
    },
    filename(req, file, cb) {
        const extension = file.originalname.split('.')[1];
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
        cb(null, `${file.fieldname}-${uniqueSuffix}.${extension}`);
    },
});

const upload = multer({ storage });
app.use(express.json());
app.use(cors());
app
    .get('/user', validateJWT, rescue(User.getUser))
    .put('/user', validateJWT, upload.single('image'), rescue(User.updateUser))
    .post('/user/register', rescue(User.register))
    .post('/user/login', rescue(User.login))
    .post('/note/save', validateJWT, rescue(Note.saveNote))
    .get('/note/:id', validateJWT, rescue(Note.getById))
    .delete('/note/:id', validateJWT, rescue(Note.deleteNote))
    .put('/note/', validateJWT, rescue(Note.updateNote))
    .get('/note', validateJWT, rescue(Note.getAllNotesByUserId));

app.use(errorMiddleware);

app.use('/public', express.static('public'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}.`));
