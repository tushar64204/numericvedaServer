const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const dbUrl=process.env.DB;
module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(dbUrl, connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
		
	}
};