import sequelize from "./create_db.js";

async function addToDB(table: string, data: {}) {
	switch (table) {
		case "Cooperado": {
			sequelize.Cooperado.create(data);
			break;
		}
		case "Veiculo": {
			sequelize.Veiculo.create(data);
			break;
		}
		case "Entrega": {
			sequelize.Entrega.create(data);
			break;
		}
		case "Programa": {
			sequelize.Programa.create(data);
			break;
		}
		case "Funcionario": {
			sequelize.Funcionario.create(data);
			break;
		}
		case "Beneficiado": {
			sequelize.Beneficiado.create(data);
			break;
		}
		case "Financeiro": {
			sequelize.Financeiro.create(data);
			break;
		}
		default:
			break;
	}
}
