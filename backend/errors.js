const errors = {
	invalidEmail: {
		code: 'invalidEmail',
		message: 'Email já cadastrado ou inválido',
	},
	invalidPassword: {
		code: 'invalidPassword',
		message: 'Senha inválida',
	},
	invalidName: {
		code: 'invalidName',
		message: 'Nome inválido',
	},
	invalidEmailOrPassword: {
		code: 'invalidEmailOrPassword',
		message: 'Email ou senha inválidos'
	},
};

module.exports = errors;
