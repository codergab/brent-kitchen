const mongoose = require('mongoose');
const DB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/food-fire';
mongoose.connect(DB_URI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true
});
