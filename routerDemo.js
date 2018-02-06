const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const jsonParser = bodyParser.json();
const {User} = require('./demoModel');

router.use(jsonParser);

router.get('/', (req, res) => {
	User.find()
		.then(users => {
			res.json(users)
		})
		.catch (err => {
			console.error(err);
			res.status(500).json({ message: "Internal server error"})
		});
});

router.post('/', (req, res) => {
	User.create({
		email: req.body.email,
		password: req.body.password,
		firstName: req.body.firstName,
		lastname: req.body.lastname
	})
	// not sure what to put here
	.then( banana => {
		console.log('something happening');
		res.json(banana);
	})
})

router.delete('/:id', (req, res) => {
	User.findByIdAndRemove(req.params.id)
	.then(user => {
		res.json(user);
	})
	.catch(err => {
		res.json(err);
	})
})

router.put('/:id', (req, res) => {
	User.update(
    { _id: req.params.id }, 
    { email: req.body.email},
    (updatedData) => res.json(updatedData)
	);
})

module.exports = {router};