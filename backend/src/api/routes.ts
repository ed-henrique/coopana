import add from "../db/add_db.js";
import del from "../db/delete_db.js";
import search from "../db/search_db.js";
import update from "../db/update_db.js";
import express from "express";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// GET

router.get("/", async (req, res) => {
	res.send(await search.showDB());
});

// POST

router.post("/", async (req, res) => {
	const add_param = !!req.query.add;
	const del_param = !!req.query.del;
	const search_param = req.query.search?.toString();
	const update_param = req.query.update?.toString();
	const id = req.query.id?.toString() ?? "";
	const table = req.query.table?.toString().toLowerCase();

	// Priority Order
	// ADD -> DEL -> SEARCH

	if (add_param) {
		await add.addToDB(table ?? "", req.body);
		res.json("success");
	} else if (del_param) {
		await del.dropRow(table ?? "", parseInt(id));
		res.json("success");
	} else if (search_param) {
		res.send(await search.searchRow(table ?? "", req.body));
	} else if (update_param) {
		await update.updateRow(table ?? "", parseInt(id), req.body);
		res.json("success");
	} else {
		res.send("no valid operation passed!");
	}
});

export default router;
