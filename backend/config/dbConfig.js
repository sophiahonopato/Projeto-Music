const sequelize = require('sequelize')
const conexao = new sequelize ('musicpich', 'root' , '' , {
    host:'localhost',
    dialect: 'mysql'
})

async function testarConexao(){
    try {
        await conexao.authenticate()
        console.log('conectado')    
    } catch (err) {
        console.log("erro")
    }
}

testarConexao()

module.exports = conexao