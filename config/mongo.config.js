const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();

module.exports = async () => {
	try {
		const host = process.env.MONGO_HOST;
		const db_port = process.env.MONGO_PORT;
		const password = process.env.MONGO_INITDB_ROOT_PASSWORD;
		const username = process.env.MONGO_INITDB_ROOT_USERNAME;
		const database = process.env.MONGO_INITDB_DATABASE;
		await mongoose.connect(
			`mongodb://${username}:${password}@${host}:${db_port}/${database}?authSource=admin`
		);
	} catch (error) {
		console.log(error);
	}
};
