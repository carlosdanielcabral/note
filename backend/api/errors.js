const errors = {
  invalidEmail: {
    code: 'badRequest',
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
    message: 'Email ou senha inválidos',
  },
  invalidUserId: {
    code: 'badRequest',
    message: 'Usuário não fornecido',
  },
  invalidNoteId: {
    code: 'badRequest',
    message: 'Id da nota inválido',
  },
  invalidNoteContent: {
    code: 'badRequest',
    message: 'Conteúdo da nota inválido',
  },
  noteNotFound: {
    code: 'notFound',
    message: 'Nota não encontrada',
  },
};

module.exports = errors;
