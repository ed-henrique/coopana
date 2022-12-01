import add from "../db/add_db.js";
import del from "../db/delete_db.js";
import search from "../db/search_db.js";
import update from "../db/update_db.js";
import express from "express";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// GET route to search through DB and/or specific tables

router.get("/", async (req, res) => {
	const show_all = req.query.show_all?.toString();
	const table = req.query.table?.toString().toLowerCase();

	if (show_all) {
		res.send(await search.showDB());
	} else {
		res.send(await search.searchRow(table ?? "", req.body));
	}
});

// POST route to add data to DB

router.post("/", async (req, res) => {
	const table = req.query.table?.toString().toLowerCase();

	await add.addToDB(table ?? "", req.body);
	res.json("success");
});

// PUT route to update data in DB

router.put("/", async (req, res) => {
	const id = req.query.id?.toString() ?? "";
	const table = req.query.table?.toString().toLowerCase();

	if (id === "") {
		res.send("no valid operation passed!");
	} else {
		await update.updateRow(table ?? "", parseInt(id), req.body);
		res.json("success");
	}
});

// DELETE route to delete data from DB

router.delete("/", async (req, res) => {
	const id = req.query.id?.toString() ?? "";
	const table = req.query.table?.toString().toLowerCase();

	if (id === "") {
		res.send("no valid operation passed!");
	} else {
		await del.dropRow(table ?? "", parseInt(id));
		res.json("success");
	}
});

export default router;
