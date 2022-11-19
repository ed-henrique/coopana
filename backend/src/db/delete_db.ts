import db from "./create_db.js";

async function dropAllTablesDB() {
	await db.sequelize.drop();
	console.log("All tables dropped!");
}

async function dropTableDB(table: string) {
	switch (table) {
		case "cooperado": {
			await db.Cooperado.drop();
			break;
		}
		case "veiculo": {
			await db.Veiculo.drop();
			break;
		}
		case "entrega": {
			await db.Entrega.drop();
			break;
		}
		case "programa": {
			await db.Programa.drop();
			break;
		}
		case "funcionario": {
			await db.Funcionario.drop();
			break;
		}
		case "beneficiado": {
			await db.Beneficiado.drop();
			break;
		}
		case "financeiro": {
			await db.Financeiro.drop();
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
