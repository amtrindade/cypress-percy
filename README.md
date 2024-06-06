# cypress-percy

Repositório de um projeto de testes de regressão visual com Cypress e Percy.

## Pré-requisitos

Para instalar as depedências do projeto e executar os testes automatizados, é necessário que o [Node.js](https://nodejs.org/en) e [NPM](https://npmjs.com) estejam instalados em seu computador.

> As seguintes versões de ambos os sistemas foram utilizadas durante o desenvolvimento deste projeto (`node v20.11.1` e `npm 10.2.4`).

> Ao instalar o Node.js, o NPM é automaticamente instalado.

## Instalação

Após clonar o projeto acesse o diretório raiz e execute o seguinte comando para instalar as dependências de desenvolvimento:
`npm install`

## Exportando o token do projeto criado no Percy.io

Exporte como uma variável de ambiente o token do seu projeto (disponível no dashboard do Percy). Veja o exemplo abaixo para o sistema _Unix_

```
# Unix
$ export PERCY_TOKEN=<seu token>
```

> Fonte: https://www.browserstack.com/docs/percy/get-started/create-project

## Executando os testes

Execute o comando `npm test` para execução dos testes em mode _headless_



