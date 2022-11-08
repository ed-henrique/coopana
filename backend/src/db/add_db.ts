import sequelize from "./create_db.js";

const test = await sequelize;

sequelize.close();
