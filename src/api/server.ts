import * as dotenv from "dotenv";
import router from "./routes.js";
import express from "express";
import db from "../db/create_db.js";

dotenv.config();
await db.sequelize.authenticate();

const app = express();

app.use(router);

try {
	app.listen(process.env.API_PORT ?? 3000, () => {
		console.log(`Listening on port ${process.env.API_PORT}...`);
	});

	process.on("exit", async () => {
		await db.sequelize.close();
	});
} catch (err) {
	throw err;
}
