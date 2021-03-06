const express = require('express');
const cors = require('cors');
// require('dotenv').config();
require('./db/mongoose');
const orderRouter = require('./routes/order');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.send({
		message: 'Server Works',
		configs: process.env
	});
});

app.use(orderRouter);
app.use(userRouter);
app.use(productRouter);

app.listen(port, () => {
	console.log('App Listening on Port ' + port);
});
