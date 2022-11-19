import db from "./create_db.js";

async function showDB() {
	await db.sequelize.getQueryInterface().showAllSchemas();
}

export default {
	showDB,
};
