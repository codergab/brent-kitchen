const express = require('express');
const Order = require('../models/order');
const router = new express.Router();

router.get('/orders', async (req, res) => {
	try {
		const orders = await Order.find({});
		res.status(200).send(orders);
	} catch (e) {
		res.status(500).send(e);
	}
});

router.post('/orders', async (req, res) => {
	const order = new Order(req.body);
	try {
		await order.save();
		res.status(201).send(order);
	} catch (e) {
		res.status(500).send({
			e,
			msg: 'Cannot Save new Order'
		});
	}
});

router.get('/orders/:id', async (req, res) => {
	try {
		const order = await Order.findById(req.params.id);
		if (!order) {
			return res.status(404).send('Order Not found');
		}
		res.status(200).send(order);
	} catch (e) {
		res.status(500).send(e);
	}
});

router.get('/orders/user/:user', async (req, res) => {
	try {
		const orders = await Order.find({ email: req.params.user });
		res.status(200).send(orders);
	} catch (e) {
		res.status(500).send(e);
	}
});
router.patch('/orders/:id/status', async (req, res) => {
	const id = req.params.id;
	try {
		const updateOrder = await Order.findByIdAndUpdate(
			id,
			{ status: req.body.status },
			{
				new: true
			}
		);
		if (!updateOrder) {
			return res.status(404).send({ error: 'Order Not Found' });
		}

		res.send(updateOrder);
	} catch (e) {
		res.status(500).send(e);
	}
});

module.exports = router;
