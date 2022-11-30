import fs from "fs";
import * as dotenv from "dotenv";
import { Sequelize, DataTypes } from "sequelize";

dotenv.config();

/*
- Add foreign keys
*/

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "./storage/db.sqlite",
	define: {
		freezeTableName: true,
	},
});

const Cooperado = sequelize.define("Cooperado", {
	nome: { type: DataTypes.STRING, allowNull: false },
	endereco: { type: DataTypes.STRING, allowNull: false },
	cpf: { type: DataTypes.INTEGER, allowNull: false },
	situacao: { type: DataTypes.STRING, allowNull: false },
});

const Veiculo = sequelize.define("Veiculo", {
	placa: { type: DataTypes.STRING, allowNull: false },
	funcionario: { type: DataTypes.STRING, allowNull: false },
	entrega: { type: DataTypes.STRING, allowNull: false },
	status: { type: DataTypes.STRING, allowNull: false },
});

const Entrega = sequelize.define("Entrega", {
	destino: { type: DataTypes.STRING, allowNull: false },
	destinatario: { type: DataTypes.STRING, allowNull: false },
	conteudo: { type: DataTypes.STRING, allowNull: false },
});

const Programa = sequelize.define("Programa", {
	nome: { type: DataTypes.STRING, allowNull: false },
	produtos: { type: DataTypes.STRING, allowNull: false },
	cooperados: { type: DataTypes.STRING, allowNull: false },
	cota: { type: DataTypes.STRING, allowNull: false },
});

const Funcionario = sequelize.define("Funcionario", {
	nome: { type: DataTypes.STRING, allowNull: false },
	funcao: { type: DataTypes.STRING, allowNull: false },
	contato: { type: DataTypes.STRING, allowNull: false },
	cpf: { type: DataTypes.INTEGER, allowNull: false },
	salario: { type: DataTypes.INTEGER, allowNull: false },
	rg: { type: DataTypes.INTEGER, allowNull: false },
	endereco: { type: DataTypes.STRING, allowNull: false },
});

const Beneficiado = sequelize.define("Beneficiado", {
	nome: { type: DataTypes.STRING, allowNull: false },
	contato: { type: DataTypes.STRING, allowNull: false },
	programa: { type: DataTypes.STRING, allowNull: false },
	endereco: { type: DataTypes.STRING, allowNull: false },
});

const Financeiro = sequelize.define("Financeiro", {
	cooperados: { type: DataTypes.STRING, allowNull: false },
	programas: { type: DataTypes.STRING, allowNull: false },
	funcionarios: { type: DataTypes.STRING, allowNull: false },
});

fs.readFile("./storage/db.sqlite", async (_err, data) => {
	if (data.length === 0) {
		await sequelize.sync({ force: true });
	}
});

export default {
	sequelize,
	Cooperado,
	Veiculo,
	Entrega,
	Programa,
	Funcionario,
	Beneficiado,
	Financeiro,
};
