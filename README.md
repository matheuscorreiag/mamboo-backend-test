## Como rodar o projeto?

Baixe o ZIP da aplicação ou clone o repositório, no terminal, com o comando:

```sh
git clone https://github.com/matheuscorreiag/mamboo-backend-test.git
```

Ou, baixe o zip da aplicação e o extraia.

Vá no diretório instalado localmente e dê os seguintes comandos para instalar:

```sh
cd mamboo-backend-test
yarn install
```

Para rodar a ORM do PRISMA, faça:

```sh
yarn prisma generate
```

Ou:

```sh
npx prisma generate
```

Renomeie o arquivo .example.env para .env, use a URL já existente (ou uma de sua preferência)
e faça o seguinte comando para rodar a aplicação:

```sh
yarn dev
```
