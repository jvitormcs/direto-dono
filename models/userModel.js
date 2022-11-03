const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = db.define('Users',{

    id_user:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome_user: {
        type: DataTypes.STRING(220),
        allowNull: false,
        require: true,
    },
    sobrenome_user: {
        type: DataTypes.STRING(220),
        allowNull: false,
        require: true,
    },
    email_user: {
        type: DataTypes.STRING(50),
        allowNull: false,
        require: true,
    },
    senha_user: {
        type: DataTypes.STRING(220),
        allowNull: false,
        require: true,
    },
    datacreate_user: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }

}, {timestamps: false, freezeTableName: true})


module.exports = User