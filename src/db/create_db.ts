import fs from "fs";
import { Sequelize, DataTypes } from "sequelize";

/*
 * Normalization
 * 1NF
 *
 * [X] Unique ID for each column
 * [X] No special order
 * [X] Be explicit
 * [X] Single data type for each column
 * [X] No repeating groups
 *
 * 2NF
 *
 * [] Each non-key attribute depends on the entire primary key
 *
 * 3NF
 *
 * [] Every attribute in a table depends on the key
 *
 * ---------------------------------------
 * - Add foreign keys
 * - Remodel DB
 */

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "./storage/db.sqlite",
	define: {
		freezeTableName: true,
	},
});

const Produtor = sequelize.define("Produtor", {
	nome: { type: DataTypes.STRING, allowNull: false },
	cpf: { type: DataTypes.STRING, allowNull: false, unique: true },
	dinheiro_disponivel: { type: DataTypes.FLOAT, allowNull: false },
	dinheiro_entregue: { type: DataTypes.FLOAT, allowNull: false },
	situacao: { type: DataTypes.STRING, allowNull: false },
	endereco: { type: DataTypes.STRING, allowNull: false },
});

const Relatorio = sequelize.define("Relatorio", {
	cpf_produtor: { type: DataTypes.STRING, allowNull: false },
	valor_total: { type: DataTypes.FLOAT, allowNull: false },
});

const Veiculo = sequelize.define("Veiculo", {
	placa: { type: DataTypes.STRING, allowNull: false, unique: true },
	funcionario: { type: DataTypes.STRING, allowNull: false },
	status: { type: DataTypes.STRING, allowNull: false },
});

const Entrega = sequelize.define("Entrega", {
	cpf_produtor: { type: DataTypes.STRING, allowNull: false },
	produto: { type: DataTypes.STRING, allowNull: false },
	endereco: { type: DataTypes.STRING, allowNull: false },
	valor_total: { type: DataTypes.FLOAT, allowNull: false },
});

const Programa = sequelize.define("Programa", {
	nome: { type: DataTypes.STRING, allowNull: false },
	cota_atual: { type: DataTypes.FLOAT, allowNull: false },
	cota_total: { type: DataTypes.FLOAT, allowNull: false },
});

const Produto = sequelize.define("Produto", {
	nome: { type: DataTypes.STRING, allowNull: false },
	valor_unitario: { type: DataTypes.FLOAT, allowNull: false },
});

const Funcionario = sequelize.define("Funcionario", {
	nome: { type: DataTypes.STRING, allowNull: false },
	funcao: { type: DataTypes.STRING, allowNull: false },
	contato: { type: DataTypes.STRING, allowNull: false },
	cpf: { type: DataTypes.STRING, allowNull: false, unique: true },
	salario: { type: DataTypes.FLOAT, allowNull: false },
	rg: { type: DataTypes.STRING, allowNull: false, unique: true },
	endereco: { type: DataTypes.STRING, allowNull: false },
});

const Beneficiado = sequelize.define("Beneficiado", {
	nome: { type: DataTypes.STRING, allowNull: false },
	contato: { type: DataTypes.STRING, allowNull: false },
	programa: { type: DataTypes.STRING, allowNull: false },
	endereco: { type: DataTypes.STRING, allowNull: false },
});

const FinanceiroProdutor = sequelize.define("FinanceiroProdutor", {
	nome_produtor: { type: DataTypes.STRING, allowNull: false },
	valor_total: { type: DataTypes.FLOAT, allowNull: false },
});

const FinanceiroPrograma = sequelize.define("FinanceiroPrograma", {
	nome_programa: { type: DataTypes.STRING, allowNull: false },
	valor_total: { type: DataTypes.FLOAT, allowNull: false },
});

const FinanceiroFuncionario = sequelize.define("FinanceiroFuncionario", {
	nome_funcionario: { type: DataTypes.STRING, allowNull: false },
	salario: { type: DataTypes.FLOAT, allowNull: false },
});

fs.readFile("./storage/db.sqlite", async (_err, data) => {
	if (data?.length === 0) {
		await sequelize.sync({ force: true });
	}
});

export default {
	sequelize,
	Produtor,
	Veiculo,
	Entrega,
	Produto,
	Relatorio,
	Programa,
	Funcionario,
	Beneficiado,
	FinanceiroProdutor,
	FinanceiroPrograma,
	FinanceiroFuncionario,
};
