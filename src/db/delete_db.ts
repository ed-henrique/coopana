import db from "./create_db.js";
import search from "./search_db.js";

async function dropAllTablesDB() {
	await db.sequelize.drop();
	console.log("All tables dropped!");
}

async function dropTableDB(table: string) {
	switch (table) {
		case "produtor": {
			await db.Produtor.drop();
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
		case "produto": {
			await db.Produto.drop();
			break;
		}
		case "relatorio": {
			await db.Relatorio.drop();
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
		case "financeiro_produtor": {
			await db.FinanceiroProdutor.drop();
			break;
		}
		case "financeiro_programa": {
			await db.FinanceiroPrograma.drop();
			break;
		}
		case "financeiro_funcionario": {
			await db.FinanceiroFuncionario.drop();
			break;
		}
		default:
			break;
	}
}

async function dropRow(table: string, id: number) {
	const rowToDestroy = await search.searchById(table, id);
	rowToDestroy?.destroy();
}

export default {
	dropTableDB,
	dropAllTablesDB,
	dropRow,
};
