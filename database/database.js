const Sequelize = require('sequelize')

const connection = new Sequelize('consulta_node_ejs', 'root', 'suasenhado BD', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection