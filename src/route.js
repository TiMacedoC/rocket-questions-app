const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render("index", { page: 'login-page' }))
route.get('/create-room', (req, res) => res.render("index", { page: 'create-room' }))
route.get('/room/:room', (req, res) => res.render("room"))

//FORMATO QUE O FORMULÁRIO DE DENTRO DA MODAL TEM QUE PASSAR A INFORMAÇÃO
route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/create-room', RoomController.create)

module.exports = route;