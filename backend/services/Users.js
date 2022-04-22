const Author = require('../models/Author');

const validateEmail = (email) => {
  const usersData = Author.getAll();

  // verifica se já existe um email cadastrado. Se sim, retorna false (o email fornecido é inválido)
  const hasEmail = usersData.some((user) => user.email === email);
  if (hasEmail) return false;

  // verifica se o formato do email é válido. Caso não, retorna false, caso sim retorna true
  const emailRegex = /W+@W+.W+/;
  const isValidEmailFormat = emailRegex.test(email);
  if (!isValidEmailFormat) return false;
  return true;
};

