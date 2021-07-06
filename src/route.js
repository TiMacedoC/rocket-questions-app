const express = require('express')

const route = express.Router()

route.get('/', (req, res) => res.render("index"))
route.get('/room', (req, res) => res.render("room"))
route.get('/create-room', (req, res) => res.render("create-room"))

//FORMATO QUE O FORMULÁRIO DE DENTRO DA MODAL TEM QUE PASSAR A INFORMAÇÃO
// route.get('/room/:room/:question/:action', (req, res) => res.render("exemplo", { req }))

module.exports = route;