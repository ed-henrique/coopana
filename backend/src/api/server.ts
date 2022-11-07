import router from "./routes.js";
import express from "express";

const app = express();

app.use(router);

app.listen(3000);
