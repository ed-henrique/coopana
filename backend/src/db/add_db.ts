import db from "./create_db.js";

async function addToDB(table: string, data: {}) {
	switch (table) {
		case "cooperado": {
			await db.Cooperado.create(data);
			break;
		}
		case "veiculo": {
			await db.Veiculo.create(data);
			break;
		}
		case "entrega": {
			await db.Entrega.create(data);
			break;
		}
		case "programa": {
			await db.Programa.create(data);
			break;
		}
		case "funcionario": {
			await db.Funcionario.create(data);
			break;
		}
		case "beneficiado": {
			await db.Beneficiado.create(data);
			break;
		}
		case "financeiro": {
			await db.Financeiro.create(data);
			break;
		}
		default:
			break;
	}
}

export default {
	addToDB,
};
