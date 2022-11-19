import add from "../db/add_db.js";
import del from "../db/delete_db.js";
import search from "../db/search_db.js";
import express from "express";
import cookieParser from "cookie-parser";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(cookieParser("Secret cookie"));

const routes = [
	"cooperado",
	"veiculo",
	"entrega",
	"programa",
	"funcionario",
	"beneficiado",
	"financeiro",
];

// Main Page

router.get("/", (req, res) => {
	res.send("Pagina inicial");
});

// GETs

routes.forEach((route) => {
	router.get(`/${route}`, (_req, res) => {
		res.send(route);
	});
});

// POSTs

routes.forEach((route) => {
	router.post(`/${route}`, (req, res) => {
		const add_param = !!req.query.add;
		const del_param = !!req.query.del;
		const search_param = !!req.query.search;

		if (add_param) {
			add.addToDB(route.toLowerCase(), req.body);
		} else if (del_param) {
		} else if (search_param) {
			search.showDB();
		} else {
			res.send("No operation passed!");
		}
	});
});

export default router;
