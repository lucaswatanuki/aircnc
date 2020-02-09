const express = require('express');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();


routes.post('/users', SessionController.store);

routes.get('', (req, res) => {

});

module.exports = routes;