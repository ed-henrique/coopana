import db from "./create_db.js";

async function updateRow(table: string, id: number, data: {}) {
	switch (table) {
		case "cooperado": {
			return await db.Cooperado.update(data, {
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
		case "financeiro": {
			return await db.Financeiro.update(data, {
				where: { id: id },
			});
		}
		default:
			return [];
	}
}

export default {
	updateRow,
};
