import db from "./create_db.js";

async function showDB() {
	return {
		produtor: await db.Produtor.findAll(),
		veiculo: await db.Veiculo.findAll(),
		entrega: await db.Entrega.findAll(),
		produto: await db.Produto.findAll(),
		relatorio: await db.Relatorio.findAll(),
		produto_por_produtor: await db.ProdutoPorProdutor.findAll(),
		programa: await db.Programa.findAll(),
		funcionario: await db.Funcionario.findAll(),
		beneficiado: await db.Beneficiado.findAll(),
		financeiro_produtor: await db.FinanceiroProdutor.findAll(),
		financeiro_programa: await db.FinanceiroPrograma.findAll(),
		financeiro_funcionario: await db.FinanceiroFuncionario.findAll(),
	};
}

async function showTable(table: string) {
	switch (table) {
		case "produtor": {
			return await db.Produtor.findAll();
		}
		case "veiculo": {
			return await db.Veiculo.findAll();
		}
		case "entrega": {
			return await db.Entrega.findAll();
		}
		case "produto": {
			return await db.Produto.findAll();
		}
		case "relatorio": {
			return await db.Relatorio.findAll();
		}
		case "produto_por_produtor": {
			return await db.ProdutoPorProdutor.findAll();
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
		case "financeiro_produtor": {
			return await db.FinanceiroProdutor.findAll();
		}
		case "financeiro_programa": {
			return await db.FinanceiroPrograma.findAll();
		}
		case "financeiro_funcionario": {
			return await db.FinanceiroFuncionario.findAll();
		}
		default:
			break;
	}
}

async function searchRow(table: string, search_param: string) {
	switch (table) {
		case "produtor": {
			return await db.Produtor.findAll({
				where: { nome: search_param },
			});
		}
		case "veiculo": {
			return await db.Veiculo.findAll({
				where: { placa: search_param },
			});
		}
		case "entrega": {
			return await db.Entrega.findAll({
				where: { nome_produtor: search_param },
			});
		}
		case "produto": {
			return await db.Produto.findAll({
				where: { nome: search_param },
			});
		}
		case "relatorio": {
			return await db.Relatorio.findAll({
				where: { nome_produtor: search_param },
			});
		}
		case "produto_por_produtor": {
			return await db.ProdutoPorProdutor.findAll({
				where: { nome_produtor: search_param },
			});
		}
		case "programa": {
			return await db.Programa.findAll({
				where: { nome: search_param },
			});
		}
		case "funcionario": {
			return await db.Funcionario.findAll({
				where: { nome: search_param },
			});
		}
		case "beneficiado": {
			return await db.Beneficiado.findAll({
				where: { nome: search_param },
			});
		}
		case "financeiro_produtor": {
			return await db.FinanceiroProdutor.findAll({
				where: { nome_produtor: search_param },
			});
		}
		case "financeiro_programa": {
			return await db.FinanceiroPrograma.findAll({
				where: { nome_programa: search_param },
			});
		}
		case "financeiro_funcionario": {
			return await db.FinanceiroFuncionario.findAll({
				where: { nome_funcionario: search_param },
			});
		}
		default:
			return [];
	}
}

async function searchById(table: string, id: number) {
	switch (table) {
		case "produtor": {
			return await db.Produtor.findOne({
				where: { id: id },
			});
		}
		case "veiculo": {
			return await db.Veiculo.findOne({
				where: { id: id },
			});
		}
		case "entrega": {
			return await db.Entrega.findOne({
				where: { id: id },
			});
		}
		case "produto": {
			return await db.Produto.findOne({
				where: { id: id },
			});
		}
		case "relatorio": {
			return await db.Relatorio.findOne({
				where: { id: id },
			});
		}
		case "produto_por_produtor": {
			return await db.ProdutoPorProdutor.findOne({
				where: { id: id },
			});
		}
		case "programa": {
			return await db.Programa.findOne({
				where: { id: id },
			});
		}
		case "funcionario": {
			return await db.Funcionario.findOne({
				where: { id: id },
			});
		}
		case "beneficiado": {
			return await db.Beneficiado.findOne({
				where: { id: id },
			});
		}
		case "financeiro_produtor": {
			return await db.FinanceiroProdutor.findOne({
				where: { id: id },
			});
		}
		case "financeiro_programa": {
			return await db.FinanceiroPrograma.findOne({
				where: { id: id },
			});
		}
		case "financeiro_funcionario": {
			return await db.FinanceiroFuncionario.findOne({
				where: { id: id },
			});
		}
		default:
			break;
	}
}

export default {
	showDB,
	showTable,
	searchRow,
	searchById,
};
