const errorMiddleware = (err, _req, res, _next) => {
	if (err.isJoi) return res.status(400).json({ error: { message: err.details[0].message } });
	const statusByErrorCode = {
		invalidName: 400,
		invalidEmail: 400,
		invalidPassword: 400,
		alreadyExists: 409,
		invalidEmailOrPassword: 404,
	};
	const status = statusByErrorCode[err.code];
	if (!status) return res.status(500).json({ error: { message: "Internal Server Error" } });
	return res.status(status).json({ error: { message: err.message } });
};

module.exports = errorMiddleware;
