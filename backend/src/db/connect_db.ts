import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "./storage/db.sqlite",
	define: {
		freezeTableName: true,
	},
});

try {
	await sequelize.authenticate();
	console.log("Connection has been stablished successfully.");
} catch (err) {
	console.error("Unable to connect to the database:", err);
}

export default sequelize;
