# Try Futebol Clube

## Este projeto foi desenvolvido com o objetivo de integrar o front-end de uma aplicação já desenvolvida com o back-end, através de um banco de dados mysql. Também foi utilizado o ORM Sequelize para a modelagem do banco de dados.

---

### O desafio foi dockerizar aplicações front-end, e fazer a aplicação back-end completa. Desde o docker, até a montagem do banco de dados, e testes. 

## Stack utilizadas: 

- ### Node
- ### MySql
- ### Docker
- ### Express
- ### Sequelize
- ### Chai
- ### Mocha
- ### Sinon

---

# como acessar localmente: 

## Você vai precisar ter instalado:

- ### Node
- ### Git

### Primeiramente, clone o repositório da aplicação:

<pre>
   <code>
git clone https://github.com/Gammarkin/Try-Futebol-Clube
   </code>
</pre>

### entre no diretório que você acabou de clonar:

<pre>
   <code>
cd try-futebol-clube
   </code>
</pre>

### instale as dependências

<pre>
   <code>
npm i 
   </code>
</pre>

### execute o comando para subir os containers

<pre>
   <code>
npm run compose:up 
   </code>
</pre>

### Acesse seu navegador no link
<code>https://localhost/3000/leaderboard</code>
-

### Caso queira acessar apenas o back-end, a porta padrão é 3001.