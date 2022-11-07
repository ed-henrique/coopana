import mysql from "mysql";
import * as dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
});

connection.connect((err: any) => {
	if (err) {
		throw err;
	}

	console.log("CONNECTED!");
});

export default connection;
