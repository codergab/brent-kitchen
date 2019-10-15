const express = require('express');
const User = require('../models/user');
const router = new express.Router();

router.get('/users', async (req, res) => {
	try {
		const users = await User.find({});
		res.send(users);
	} catch (err) {
		res.status(500).send(err);
	}
});

router.post('/users', async (req, res) => {
	const user = new User(req.body);
	try {
		await user.save();
		res.status(201).send(user);
	} catch (error) {
		res.status(500).send(error);
	}
});

router.post('/users/login', async (req, res) => {
	const params = req.body;

	try {
		const user = await User.findOne({ email: params.email });
		// return res.send(user);
		if (user.password !== params.password) {
			return res.status(200).send({
				error: 'Invalid Credentials',
				status: false
			});
		} else {
			res.status(200).send({
				status: true,
				user
			});
		}
	} catch (e) {}
});

module.exports = router;
