const mongoose = require('mongoose');
const validator = require('validator');

// const userSchema = new mongoose.Schema();

const User = mongoose.model('User', {
	name: {
		type: String,
		required: true,
		trim: true
	},
	email: {
		type: String,
		required: true,
		lowercase: true,
		validate(value) {
			const isValidEmail = validator.isEmail(value);
			if (!isValidEmail) {
				throw new Error('Please enter a valid email');
			}
		}
	},
	password: {
		type: String,
		required: true,
		minlength: 6,
		trim: true,
		validate(value) {
			// const hasPasswordInString = value
			// 	.toLowerCase()
			// 	.includes('password');
			// if (hasPasswordInString) {
			// 	throw new Error(
			// 		'Password must not contain the "password" text'
			// 	);
			// }
		}
	},
	address: {
		type: String
	},
	avatar: {
		type: String,
		default: 'https://i.pravatar.cc/50'
	},
	phone: {
		type: String
	}
});

module.exports = User;
