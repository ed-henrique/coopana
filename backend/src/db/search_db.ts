import db from "./create_db.js";

async function showDB() {
	return {
		cooperado: await db.Cooperado.findAll(),
		veiculo: await db.Veiculo.findAll(),
		entrega: await db.Entrega.findAll(),
		programa: await db.Programa.findAll(),
		funcionario: await db.Funcionario.findAll(),
		beneficiado: await db.Beneficiado.findAll(),
		financeiro: await db.Financeiro.findAll(),
	};
}

async function showTable(table: string) {
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

async function searchRow(table: string, search_param: string) {
	switch (table) {
		case "cooperado": {
			return await db.Cooperado.findAll({
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
				where: { conteudo: search_param },
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
		case "financeiro": {
			return await db.Financeiro.findAll({
				where: { cooperados: search_param },
			});
		}
		default:
			return [];
	}
}

async function searchById(table: string, id: number) {
	switch (table) {
		case "cooperado": {
			return await db.Cooperado.findOne({
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
		case "financeiro": {
			return await db.Financeiro.findOne({
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
