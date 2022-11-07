import * as dotenv from "dotenv";
import connection from "./connect_db.js";

connection.query(`DROP DATABASE ${process.env.DB_NAME}`, (err, result) => {
	if (err) {
		throw err;
	}

	console.log(`DELETED ${process.env.DB_NAME} DB!`);

	connection.end();
});
