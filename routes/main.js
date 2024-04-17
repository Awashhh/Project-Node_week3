const mainRouter = require('express').Router();

mainRouter.get('/', (req,res) => {
  res.send('<h1>Скоро тут будет наш интерфейс</h1>').status(200);

})

module.exports = { mainRouter };