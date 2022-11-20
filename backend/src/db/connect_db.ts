import db from "./create_db.js";

const sequelize = await db.sequelize.authenticate();

export default sequelize;
