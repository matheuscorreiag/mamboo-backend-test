## Como rodar o projeto?

Baixe o ZIP da aplicação e ou clone o repositório, no terminal, com o comando:

```sh
git clone https://github.com/matheuscorreiag/mamboo-backend-test.git
```

Rode os seguintes comandos na pasta instalada:

```sh
cd mamboo-backend-test
yarn install
```

**Renomeie o arquivo .example.env para .env**

Para rodar a ORM do PRISMA, faça:

```sh
yarn prisma generate
```

Ou:

```sh
npx prisma generate
```

Inicie a aplicação com o comando:

```sh
yarn dev
```
