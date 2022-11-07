import express from "express";
import connection from "../db/connect_db";

const router = express.Router();

router.get("/", (req, res) => {
	res.send("WORKING!");
});

export default router;
