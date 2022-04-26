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
	invalidUserId: {
		code: 'invalidUserId',
		message: 'Usuário não fornecido',
	},
	invalidNoteId: {
		code: 'invalidNoteId',
		message: 'Id da nota inválido',
	}
};

module.exports = errors;
