## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Nextjs](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/pt-BR/)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [React Redux](https://react-redux.js.org)

## 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/ThiagoMalveira/meli-frontend-challenge.git
$ cd meli-frontend-challenge/app
```

Para iniciá-lo, siga os passos abaixo:

```bash
# Instalar as dependências
$ yarn ou npm install

# Iniciar o projeto
$ yarn dev ou npm run dev
```

O projeto está coberto por testes unitários:

```bash
# Para rodar os testes
$ npm run test
```

O app estará disponível no seu browser pelo endereço http://localhost:3000.

## 🔖 Problemas encontrados

- A API não retorna valor para cidade/estado do produto ou até do vendedor;
- Ao realizar uma requisição com sort asc (vem que da API como available sorts) ele retorna os valores de forma desc e não asc, o mesmo vale pro desc que retorna valores da forma asc
