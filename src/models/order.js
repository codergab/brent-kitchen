const mongoose = require('mongoose');
const validator = require('validator');

const orderSchema = {
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		validate(value) {
			const isValidEmail = validator.isEmail(value);

			if (!isValidEmail) {
				throw new Error('Invalid Email Provided');
			}
		}
	},
	items: {
		type: Array,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	amount: {
		type: Object,
		required: true
	},
	status: {
		type: String,
		default: 'Pending'
	},
	createdAt: {
		type: Date,
		default: new Date()
	},
	reference: {
		type: String
	}
};

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
