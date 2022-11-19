import { DataTypes } from "sequelize";
import sequelize from "./connect_db.js";

const Cooperado = sequelize.define("Cooperado", {
	nome: DataTypes.STRING,
	endereco: DataTypes.STRING,
	cpf: DataTypes.INTEGER,
	situacao: DataTypes.STRING,
});

const Veiculo = sequelize.define("Veiculo", {
	placa: DataTypes.STRING,
	funcionario: DataTypes.STRING,
	entrega: DataTypes.STRING,
	status: DataTypes.STRING,
});

const Entrega = sequelize.define("Entrega", {
	destino: DataTypes.STRING,
	destinatario: DataTypes.STRING,
	conteudo: DataTypes.STRING,
});

const Programa = sequelize.define("Programa", {
	nome: DataTypes.STRING,
	produtos: DataTypes.STRING,
	cooperados: DataTypes.STRING,
	cota: DataTypes.STRING,
});

const Funcionario = sequelize.define("Funcionario", {
	nome: DataTypes.STRING,
	funcao: DataTypes.STRING,
	contato: DataTypes.STRING,
	cpf: DataTypes.INTEGER,
	salario: DataTypes.INTEGER,
	rg: DataTypes.INTEGER,
	endereco: DataTypes.STRING,
});

const Beneficiado = sequelize.define("Beneficiado", {
	nome: DataTypes.STRING,
	contato: DataTypes.STRING,
	programa: DataTypes.STRING,
	endereco: DataTypes.STRING,
});

const Financeiro = sequelize.define("Financeiro", {
	cooperados: DataTypes.STRING,
	programas: DataTypes.STRING,
	funcionarios: DataTypes.STRING,
});

await sequelize.sync({ force: true, match: /_test$/ });

console.log("DB created successfully.");

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
