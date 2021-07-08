const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render("index", { page: 'login-page' }))
route.get('/create-room', (req, res) => res.render("index", { page: 'create-room' }))

route.get('/room/:room', RoomController.open)
route.post('/create-room', RoomController.create)
route.post('/login-page', RoomController.enter)


route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/question/create/:room', QuestionController.create)

module.exports = route;