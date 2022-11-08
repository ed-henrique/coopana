import * as dotenv from 'dotenv';
import router from "./routes.js";
import express from "express";
import sequelize from '../db/connect_db.js';

dotenv.config();

const app = express();

app.use(router);

try {
    app.listen(process.env.API_PORT, () => {
        console.log(`Listening on port ${process.env.API_PORT}...`);
    });
    
    process.on('exit', async () => {
        await sequelize.close();
    });
} catch (err) {
    throw err;
}
