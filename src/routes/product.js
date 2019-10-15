const express = require('express');
const Product = require('../models/product');
const router = new express.Router();

router.get('/products', async (req, res) => {
	try {
		const products = await Product.find({});
		res.send(products);
	} catch (e) {
		res.status(500).send(e);
	}
});

router.post('/products', async (req, res) => {
	const product = new Product(req.body);
	try {
		await product.save();
		res.status(201).send({
			status: true,
			product
		});
	} catch (err) {
		res.status(500).send(err);
	}
});

router.get('/products/:id', async (req, res) => {
	const productId = req.params.id;

	try {
		const product = await Product.findById(productId);
		if (!product) {
			return res.status(404).send('Product Not found');
		}
		res.send(product);
	} catch (e) {
		res.status(500).send(e);
	}
});

router.delete('/products/:id', async (req, res) => {
	const productId = req.params.id;

	try {
		const product = await Product.findByIdAndDelete(productId);
		if (!product) {
			return res.status(404).send('Cannot Delete Product');
		}

		res.send(product);
	} catch (e) {
		res.status(500).send(e);
	}
});
module.exports = router;
