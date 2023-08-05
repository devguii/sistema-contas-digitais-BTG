<div align="center" style="display: inline_block"><br>
<img align="center" style="border-radius:10px" alt="ts" height="100%" width="100%" src="https://ci5.googleusercontent.com/proxy/z_PaoqtFZyPka3s3v3IP1e18uwMYIqNN5yKRFAp9fKAQ_RNTFHr1rWfE0cqJWNLeMRltVsCy6G12KeTbIFfqXnPfWH-uK6SuAIzrFQ=s0-d-e1-ft#https://static.btgpactual.com/media/header-greenhouse.png">
</div><br>

# 🖥️ Desafio Técnico - Sistema de Contas Digitais Banco BTG-Pactual

## Descrição

<div align="justify">
Projeto desenvolvido utilizando uma API REST contendo os conceitos de
injeção de depêndencia, criação de rotas e definição de uma regra de negócio junto á modelagem do banco de dados. Foi utilizada a stack com NestJS, Node.js, Typescript, PrismaORM e MySQL para o Banco de Dados. Aplicado o padrão de "Conventional Commits" para a Gestão de Configuração.
A API pode ser testada utilizando o Postman ou Insomnia, basta importar a collection presente no arquivo "sistema-contas-digitais.postman_collection".<br>Se preferir, também poderá testá-la com o Front contido no repositório.
</div>

## Sobre a regra de negócio

<div align="justify">
Toda a regra de négocio do sistema está descrita no documento "Modelo Entidade Relacionameto.pdf", abaixo se encontra o DER do sistema:
</div>
<img align="center" style="border-radius:10px" alt="ts" height="100%" width="100%" src="https://i.ibb.co/89Skw0k/DER.png">

## 📦 Tecnologias Utilizadas

<div align="justify">
O projeto foi desenvolvido utilizando as seguintes tecnologias e ferramentas:

- NestJS
- Node.js
- TypeScript
- PrismaORM
- MySQL
</div>

## 🛠️ Construido com

  <div style="display: inline_block" ><br>
  <img align="center" alt="NestJS" height="5%" width="7%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/NestJS.svg/621px-NestJS.svg.png?20221211225055">
  <img align="center" alt="Node.js" height="5%" width="40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png?20170401104355">
  <img align="center" alt="ts" height="5%" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">
  <img align="center" alt="PrismaORM" height="5%" width="35" src="https://seeklogo.com/images/P/prisma-logo-3805665B69-seeklogo.com.png">
  <img align="center" alt="MySQL" height="10%" width="14%" src="https://www.mysql.com/common/logos/includes-mysql-167x86.png">
  </div>
</div><br>

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter os seguintes itens instalados em sua máquina:

- Node.js
- NPM ou Yarn
- MySQL

## Instalação API

Siga as etapas abaixo para instalar a API:

1. Clone este repositório: `https://github.com/devguii/sistema-contas-digitais-BTG.git`
2. Acesse o diretório do projeto: `cd sistema-contas-digitais-BTG.git`
3. Acesse o diretório da API: `cd API`
4. Instale as dependências pelo terminal: `npm install` ou `yarn install`

## Instalação Front

Siga as etapas abaixo para instalar o front:

1. Clone este repositório: `https://github.com/devguii/sistema-contas-digitais-BTG.git`
2. Acesse o diretório do projeto: `cd sistema-contas-digitais-BTG.git`
3. Acesse o diretório do front: `cd Front`
4. Instale as dependências pelo terminal: `npm install` ou `yarn install`

## Executando a API

Após concluir a instalação, você deverá iniciar um banco de dados dentro do MySQL.

1. Agora entre no arquivo `".env"` (no caso de não existir, crie o mesmo na raíz do diretório da API).
2. Altere o valor da variável `"DATABASE_URL"` para `mysql://root:[*SENHA_DO_MYSQL*]@localhost:[*PORTA_DO_DB*]/[*NOME_DO_BD*]?schema=public` alterando os campos contendo [* *] pelos respectivos valores. (crie a variável caso não exista)
3. Inicie a API pelo terminal utilizando o comando: `npm start:dev` ou `yarn start:dev`

pode executar a API com o seguinte comando:

      npm start:dev

ou

       yarn start:dev

Isso iniciará o servidor da API e você já poderá testa-lá no Postman, Insomnia ou pelo Front.

## Executando o Front

Após concluir a instalação do front e executar a API, você pode executar o front com o seguinte comando:

      npm dev

ou

       yarn dev

Isso iniciará o servidor do front, agora é só acessar o link gerado no terminal : )

## Testando a API com Postman ou Insomnia

Após concluir a instalação e execução da API, você pode testá-la utilizando as requests já pré-construídas contidas no arquivo "sistema-contas-digitais.postman_collection".

1. Abra o Postman (ou Insomnia).
2. Importe a collection "sistema-contas-digitais.postman_collection" no repositório.

Agora é só testar : )

## ✒️ Autor

[<img src="https://avatars.githubusercontent.com/u/86272439?v=4" width=100><br><sub>Guilherme Antunes</sub>](https://github.com/devguii)

Obrigado por demonstrar interesse em minhas qualidades técnicas! Espero que elas sejam condizentes com o desafio proposto e que goste do projeto.
