const { DataTypes } = require('sequelize')

const db = require('../db/conn')
const User = require('./userModel')

const Imovel = db.define('Imoveis',{

    id_imovel:{
        type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
    },
    nome_imovel: {
        type: DataTypes.STRING(220),
        allowNull: false,
        require: true,
    },
    endereco_imovel: {
        type: DataTypes.STRING(220),
        allowNull: false,
        require: true,
    },
    valor_imovel:{
        type: DataTypes.STRING(30),
        allowNull: false,
        require: true
    },
    id_user:{
        type: DataTypes.INTEGER,
        allowNull: false,
        require: false
    },
    descricao_imovel: {
        type: DataTypes.STRING(255),
        allowNull: false,
        require: true
    },
    datacreate_imovel: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }

}, {timestamps: false, freezeTableName: true})

Imovel.belongsTo(User, {
    foreignKey: 'id_user',
    constraints: true,
    foreignKeyConstraint: 'id_user'
})

User.hasMany(Imovel, {
    foreignKey: 'id_user',
    constraints: true,
    foreignKeyConstraint: 'id_user'
})


module.exports = Imovel