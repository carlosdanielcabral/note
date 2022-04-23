const validateData = (name = "vazio", email, password) => {
  let isValidName = true;
  if (name !== "vazio") {
    isValidName = name.length > 3 && name.length < 50;
  }

  const emailRegex = /\w+@\w+.\w+/;
  const isValidEmail = emailRegex.test(email); 
  const isValidPassword = password.length > 5 && password.length < 30;
  const isValidData = isValidName && isValidEmail && isValidPassword;
  return isValidData;
}

export default validateData;
