const errorMiddleware = (err, _req, res, _next) => {
	if (err.isJoi) return res.status(400).json({ error: { message: err.details[0].message } });
	const statusByErrorCode = {
		badRequest: 400,
		unauthorized: 401,
		alreadyExists: 409,
		notFound: 404,
	};
	const status = statusByErrorCode[err.code];
	if (!status) return res.status(500).json({ error: { message: "Internal Server Error" } });
	return res.status(status).json({ error: { message: err.message } });
};

module.exports = errorMiddleware;
