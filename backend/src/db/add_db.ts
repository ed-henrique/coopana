import db from "./create_db.js";

async function addToDB(table: string, data: {}) {
	switch (table) {
		case "Cooperado": {
			db.Cooperado.create(data);
			break;
		}
		case "Veiculo": {
			db.Veiculo.create(data);
			break;
		}
		case "Entrega": {
			db.Entrega.create(data);
			break;
		}
		case "Programa": {
			db.Programa.create(data);
			break;
		}
		case "Funcionario": {
			db.Funcionario.create(data);
			break;
		}
		case "Beneficiado": {
			db.Beneficiado.create(data);
			break;
		}
		case "Financeiro": {
			db.Financeiro.create(data);
			break;
		}
		default:
			break;
	}
}
