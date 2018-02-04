const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const jsonParser = bodyParser.json();
const {} = require('./Model');

router.use(jsonParser);

router.get('/demo', (req, res) => {

})

router.post('/demo', (req, res) => {
	
})

router.delete('/demo', (req, res) => {
	
})

router.put('/demo', (req, res) => {
	
})

module.exports = {router};