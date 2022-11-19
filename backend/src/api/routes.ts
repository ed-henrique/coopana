import express from "express";
import cookieParser from "cookie-parser";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(cookieParser("Secret cookie"));

router.get("/", (req, res) => {
	res.send("Pagina inicial");
});

router.get("/cooperado", (req, res) => {
	res.send("Cooperado");
});


router.get("/veiculo", (req, res) => {
	res.send("Veiculo");
});


router.get("/entrega", (req, res) => {
	res.send("Entrega");
});


router.get("/programa", (req, res) => {
	res.send("Programa");
});


router.get("/funcionario", (req, res) => {
	res.send("Funcionario");
});


router.get("/beneficiado", (req, res) => {
	res.send("Beneficiado");
});


router.get("/financeiro", (req, res) => {
	res.send("Financeiro");
});

export default router;
