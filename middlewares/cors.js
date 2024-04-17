const { PORT } = require('../app')
const allowedCors = [
	'https://practicum.yandex.ru',
	'https://students-projects.ru',
	`localhost:${PORT}`,
];

const cors = (req, res, next) => {
	const { origin } = req.headers
  if (allowedCors.includes(origin)) {
	  res.header('Access-Control-Allow-Origin', origin)
  }
	next();
};

module.exports = cors
