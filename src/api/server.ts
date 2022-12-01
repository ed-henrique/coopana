import router from "./routes.js";
import express from "express";
import db from "../db/create_db.js";

await db.sequelize.authenticate();

const PORT = 8080;
const app = express();

app.use(router);

try {
	app.listen(PORT, () => {
		console.log(`Listening on port ${PORT}...`);
	});

	process.on("exit", async () => {
		await db.sequelize.close();
	});
} catch (err) {
	throw err;
}
