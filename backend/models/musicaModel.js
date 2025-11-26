const { DataTypes }= require('sequelize')
const conexao = require('../config/dbConfig')
const { link } = require('../routes/router')

const Musicas = conexao.define('musicas',{
id:{
        type : DataTypes.INTEGER,//identifica o tipo
        primaryKey: true,// chave primaria, só pode 1
        autoIncrement: true// incrementar de forma automatica
},

nome:{
    type : DataTypes.STRING
} ,

cantor:{
    type : DataTypes.STRING
} ,

link:{
    type: DataTypes.STRING
}
,

capa:{
    type: DataTypes.STRING
}

})

Musicas.sync()
module.exports = Musicas