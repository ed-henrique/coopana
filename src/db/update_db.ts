import db from "./create_db.js";

async function updateRow(table: string, id: number, data: {}) {
	switch (table) {
		case "produtor": {
			return await db.Produtor.update(data, {
				where: { id: id },
			});
		}
		case "veiculo": {
			return await db.Veiculo.update(data, {
				where: { id: id },
			});
		}
		case "entrega": {
			return await db.Entrega.update(data, {
				where: { id: id },
			});
		}
		case "produto": {
			return await db.Produto.update(data, {
				where: { id: id },
			});
		}
		case "relatorio": {
			return await db.Relatorio.update(data, {
				where: { id: id },
			});
		}
		case "produto_por_produtor": {
			return await db.ProdutoPorProdutor.update(data, {
				where: { id: id },
			});
		}
		case "programa": {
			return await db.Programa.update(data, {
				where: { id: id },
			});
		}
		case "funcionario": {
			return await db.Funcionario.update(data, {
				where: { id: id },
			});
		}
		case "beneficiado": {
			return await db.Beneficiado.update(data, {
				where: { id: id },
			});
		}
		case "financeiro_produtor": {
			return await db.FinanceiroProdutor.update(data, {
				where: { id: id },
			});
		}
		case "financeiro_programa": {
			return await db.FinanceiroPrograma.update(data, {
				where: { id: id },
			});
		}
		case "financeiro_funcionario": {
			return await db.FinanceiroFuncionario.update(data, {
				where: { id: id },
			});
		}
		default:
			break;
	}
}

export default {
	updateRow,
};
