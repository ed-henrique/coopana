# COOPANA <!-- omit in toc -->

## Índice <!-- omit in toc -->

- [Como Usar a API](#como-usar-a-api)
  - [Exemplos de Uso](#exemplos-de-uso)
    - [Adicionar Dados](#adicionar-dados)
    - [Remover Dados](#remover-dados)
    - [Atualizar Dados](#atualizar-dados)
    - [Buscar Dados](#buscar-dados)
      - [Todo o Banco de Dados](#todo-o-banco-de-dados)
      - [Tabela Específica](#tabela-específica)

## Como Usar a API

Todas os métodos são utilizados na rota raiz (`/`).

| Método HTTP | Função          | Parâmetros                                                                        |
| :---------: | :-------------: | :-------------------------------------------------------------------------------- |
| `POST`      | Adicionar dados |                                                                                   |
| `GET`       | Buscar dados    | `show_all`: mostrar todo o banco de dados<br />`table`: mostrar tabela específica |
| `PUT`       | Atualizar dados | `table`: especificar tabela<br />`id`: especificar id                             |
| `DELETE`    | Remover dados   | `table`: especificar tabela<br />`id`: especificar id                             |

### Exemplos de Uso

#### Adicionar Dados

```ts
fetch("localhost:8080?table=cooperado", {
    method: 'POST',
    body: {
        nome: "joao",
        endereco: "rua tal",
        cpf: 12345678900,
        situacao: "ok"
    },
});
```

#### Remover Dados

```ts
fetch("localhost:8080?table=cooperado&id=3", {
    method: 'DELETE',
});
```

#### Atualizar Dados

```ts
fetch("localhost:8080?table=cooperado&id=3", {
    method: 'PUT',
    body: {
        nome: "jose",
        endereco: "rua tal de tal",
        cpf: 12246678800,
        situacao: "ok"
    },
});
```

#### Buscar Dados

##### Todo o Banco de Dados

```ts
fetch("localhost:8080?show_all=true", {
    method: 'GET',
});
```

##### Tabela Específica

```ts
fetch("localhost:8080?table=cooperado", {
    method: 'GET',
});
```
