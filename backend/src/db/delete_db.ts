import * as dotenv from "dotenv";
import connection from "./connect_db.js";

dotenv.config();

connection.query(`DROP DATABASE ${process.env.DB_NAME}`, (err, result) => {
	if (err) {
		throw err;
	}
});

connection.end();
