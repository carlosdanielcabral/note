const express = require('express');
const User = require('./models/User');

const app = express();

app.use(express.json());
// app.get('/users', async (_req, res) => {
// 	const users = await User.getAll();
// 	res.status(200).json(users);
// });

app.post('/users', async (req, res) => {
	const { name, email, password } = req.body;
	try {
		const user = await User.registerUser(name, email, password);
		res.status(200).json({ message: 'Usuário registrado com sucesso!', user });
	} catch(error) {
		console.log(error.message);
	}
});

const PORT = 3001;

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}.`));
