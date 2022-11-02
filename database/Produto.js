const Sequelizer = require('sequelize')
const connection = require('./database')

//definição do model, produtos é o nome da tabela
const Produto = connection.define('produtos', {
    nome:{
        type:Sequelizer.STRING,
        allowNull: false
    },
    preco:{
        type:Sequelizer.TEXT,
        allowNull: false
    }
})

Produto.sync({force:false}).then(()=>{
    console.log("Tabela criada com sucesso")
}).catch((err)=>{
    console.log("Erro ao criar a tabela", err)
})

module.exports= Produto