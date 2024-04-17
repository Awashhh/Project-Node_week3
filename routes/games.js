const gamesRouter =  require('express').Router();
const { sendAllGames, deleteGames, addGameController } = require('../controllers/games')
const { getAllGames } = require('../middlewares/games')

gamesRouter.get('/games', getAllGames,  sendAllGames)
gamesRouter.post('/games', getAllGames, addGameController)
gamesRouter.delete("/games/:id", getAllGames, deleteGames)

module.exports = { gamesRouter }