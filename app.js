const express = require('express');
const cors = require('./middlewares/cors')
const path = require('path');
const bodyParser = require('body-parser')
const { gamesRouter, mainRouter } = require('./routes')

const PORT = 3000;
const app = express();


app.use(
	cors,
	bodyParser.json(),
	express.static(path.join(__dirname, 'public')),
	mainRouter,
	gamesRouter
)

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`)
});

module.exports = { PORT }