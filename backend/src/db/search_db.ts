import db from "./create_db.js";

async function showDB(table: string) {
	switch (table) {
		case "cooperado": {
			return await db.Cooperado.findAll();
		}
		case "veiculo": {
			return await db.Veiculo.findAll();
		}
		case "entrega": {
			return await db.Entrega.findAll();
		}
		case "programa": {
			return await db.Programa.findAll();
		}
		case "funcionario": {
			return await db.Funcionario.findAll();
		}
		case "beneficiado": {
			return await db.Beneficiado.findAll();
		}
		case "financeiro": {
			return await db.Financeiro.findAll();
		}
		default:
			break;
	}
}

export default {
	showDB,
};
