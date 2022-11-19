import db from "./create_db.js";

async function dropAllTablesDB() {
	await db.sequelize.drop();
	console.log("All tables dropped!");
}

async function dropTableDB(table: string) {
	switch (table) {
		case "Cooperado": {
			db.Cooperado.drop();
			break;
		}
		case "Veiculo": {
			db.Veiculo.drop();
			break;
		}
		case "Entrega": {
			db.Entrega.drop();
			break;
		}
		case "Programa": {
			db.Programa.drop();
			break;
		}
		case "Funcionario": {
			db.Funcionario.drop();
			break;
		}
		case "Beneficiado": {
			db.Beneficiado.drop();
			break;
		}
		case "Financeiro": {
			db.Financeiro.drop();
			break;
		}
		default:
			break;
	}
}

export default {
	dropTableDB,
	dropAllTablesDB,
};
