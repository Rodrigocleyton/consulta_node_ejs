const Sequelize = require('sequelize')

const connection = new Sequelize('consulta_node_ejs', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection