const errors = {
	invalidEmail: {
		code: 'invalidEmail',
		message: 'Email já cadastrado ou inválido',
	},
	invalidPassword: {
		code: 'badRequest',
		message: 'Senha inválida',
	},
	invalidName: {
		code: 'badRequest',
		message: 'Nome inválido',
	},
	invalidEmailOrPassword: {
		code: 'badRequest',
		message: 'Email ou senha inválidos'
	},
	invalidUserId: {
		code: 'badRequest',
		message: 'Usuário não fornecido',
	},
	invalidNoteId: {
		code: 'badRequest',
		message: 'Id da nota inválido',
	}
};

module.exports = errors;
