import db from "./create_db.js";

async function addToDB(table: string, data: {}) {
	switch (table) {
		case "produtor": {
			return await db.Produtor.create(data);
		}
		case "veiculo": {
			return await db.Veiculo.create(data);
		}
		case "entrega": {
			return await db.Entrega.create(data);
		}
		case "produto": {
			return await db.Produto.create(data);
		}
		case "relatorio": {
			return await db.Relatorio.create(data);
		}
		case "programa": {
			return await db.Programa.create(data);
		}
		case "funcionario": {
			return await db.Funcionario.create(data);
		}
		case "beneficiado": {
			return await db.Beneficiado.create(data);
		}
		case "financeiro_produtor": {
			return await db.FinanceiroProdutor.create(data);
		}
		case "financeiro_programa": {
			return await db.FinanceiroPrograma.create(data);
		}
		case "financeiro_funcionario": {
			return await db.FinanceiroFuncionario.create(data);
		}
		default:
			break;
	}
}

export default {
	addToDB,
};
